-- Create a table for profiles
create table profiles (
  github_username text not null primary key,
  id uuid references auth.users on delete cascade,
  net_id text unique,
  student_id text unique,
  first_name text,
  last_name text,
  admit_term text,
  gender text,
  avatar_url text,
  ethnicity text,
  student_email text unique,
  citizenship text
);

-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check ((select auth.uid()) = id);

create policy "Users can update own profile." on profiles
  for update using ((select auth.uid()) = id);

-- Custom auth handler function. Since we pre-populate the profiles table with
-- student data, we need to update the profiles table with the correct auth UID.
create or replace function public.handle_new_user_auth()
returns trigger as $$
declare
    github_username text;
    matching_profile_exists boolean;
begin
    -- Extract GitHub username from raw_user_meta_data
    github_username := (new.raw_user_meta_data->>'user_name')::text;
    
    -- Check if a profile with this GitHub username exists
    -- and hasn't been linked to an auth user yet
    select exists(
        select 1 
        from public.profiles 
        where profiles.github_username = github_username
        and id is null
    ) into matching_profile_exists;
    
    -- If no matching profile exists, raise an exception
    if not matching_profile_exists then
        raise exception 'No pre-existing profile found for GitHub username: %', github_username;
    end if;
    
    -- Update the matching profile with the new auth.users id
    update public.profiles
    set id = new.id
    where profiles.github_username = github_username
    and id is null;
    
    return new;
exception
    when others then
        raise log 'Error in handle_new_user_auth: %', SQLERRM;
        return null;
end;
$$ language plpgsql security definer;

-- Set up the trigger
create or replace trigger on_auth_user_created
    after insert on auth.users
    for each row execute procedure public.handle_new_user_auth();
