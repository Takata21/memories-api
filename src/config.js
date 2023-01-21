import 'https://deno.land/std@0.173.0/dotenv/load.ts'

export const MONGODB_URL = Deno.env.get('MONGODB_URL')
