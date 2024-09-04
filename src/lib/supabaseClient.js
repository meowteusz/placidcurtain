import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_PLACID_PROJ_URL;
const supabaseAnonKey = import.meta.env.VITE_PLACID_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
