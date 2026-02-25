import { createClient } from "@supabase/supabase-js";

// define alamat url & anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// export
export const supabase = createClient(supabaseUrl, supabaseAnonKey)