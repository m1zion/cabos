import { createClient } from '@supabase/supabase-js';

/*const supabaseUrl = "https://qzjipxehwcrgqmjzeqbv.supabase.co"; 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6amlweGVod2NyZ3FtanplcWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4ODE5ODcsImV4cCI6MjA2ODQ1Nzk4N30.Ay5OCwOOFS_9tpouzMhipHCz40Fz0tZb5EKyV0NvGbU";*/
const supabaseUrl = "https://khccnmxbusgkgonydqyd.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoY2NubXhidXNna2dvbnlkcXlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5ODI2NDgsImV4cCI6MjA3NTU1ODY0OH0.xHEIvn7iJ8SkEU21HhkXKl6YmrTy4lLN84tfUL_Wr7o";

export const supabase = createClient(supabaseUrl, supabaseKey);

