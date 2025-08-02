import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://qzjipxehwcrgqmjzeqbv.supabase.co"; 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6amlweGVod2NyZ3FtanplcWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4ODE5ODcsImV4cCI6MjA2ODQ1Nzk4N30.Ay5OCwOOFS_9tpouzMhipHCz40Fz0tZb5EKyV0NvGbU";

export const supabase = createClient(supabaseUrl, supabaseKey);

