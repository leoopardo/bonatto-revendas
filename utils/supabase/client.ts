import { createBrowserClient } from '@supabase/ssr';

// Define o nome do cookie que o Supabase usa.
// Este nome deve ser o mesmo usado pelo createMiddlewareClient e createServerClient.
const COOKIE_NAME = 'sb-auth-token'; 

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
   {
      cookieOptions: {
        // Usa o nome padrão do cookie
        name: COOKIE_NAME, 
        // Adiciona path e secure (padrão)
        path: '/',
        secure: true,
        // Adicione o domain se necessário, especialmente em subdomínios,
        // mas o padrão (undefined) funciona na maioria dos casos em dev/prod.
        // domain: process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost',
        maxAge: 31536000,

sameSite: "lax"        // O @supabase/ssr lida com a leitura/escrita JSON automaticamente.
      }
    }
  );
}