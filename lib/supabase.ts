import { SUPABASE_KEY } from "@/env";
import { createClient } from "@supabase/supabase-js";
// import { Database } from "../types/supabase.types";

const supabaseUrl = "https://hxubeznuohkqwtswmwbu.supabase.co"





export const supabase = createClient(supabaseUrl, SUPABASE_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});