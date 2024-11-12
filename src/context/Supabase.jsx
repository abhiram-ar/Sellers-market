import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

// Create a single supabase client for interacting with your database


export const supabase = createClient(supabaseUrl, supabaseKey);


export default function SupabaseContext() {
    <div></div>
}
