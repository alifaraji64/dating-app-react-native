import { SUPABASE_KEY } from "@/env";
import { createClient } from "@supabase/supabase-js";
// import { Database } from "../types/supabase.types";
import AsyncStorage from '@react-native-async-storage/async-storage';
const supabaseUrl = "https://hxubeznuohkqwtswmwbu.supabase.co"
import { Database } from './database.types';




export const supabase = createClient(supabaseUrl, SUPABASE_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});