import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fjtkusmdiakdwxdqaptc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqdGt1c21kaWFrZHd4ZHFhcHRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NjgwODksImV4cCI6MjA4NTU0NDA4OX0.Z8iwiNyHZaVpqq_TIbNJeepqX5Gp8SdQjB-BFBtdYWU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface WaitlistSignup {
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  created_at: string;
}
