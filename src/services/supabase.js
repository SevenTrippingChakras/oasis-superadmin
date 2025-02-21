import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://wrsiingzsoijgcerppyk.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indyc2lpbmd6c29pamdjZXJwcHlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5ODcxMTUsImV4cCI6MjA1NDU2MzExNX0.gfQtd4ylHq2IAwA7HecCmPfk3rJt4M5bF99uYioAZd0";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
