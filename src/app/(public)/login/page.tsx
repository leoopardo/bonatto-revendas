'use client';

import { LockClosedIcon, PersonIcon } from '@radix-ui/react-icons';
import { Box, Button, Card, Flex, Text, TextField } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Aurora from '../../../../components/Aurora';
import { createClient } from '../../../../utils/supabase/client'; // Import correto

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const supabase = createClient(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSignIn = async () => {
    setIsLoading(true);
    setError(null); 

    const { data, error } = await supabase.auth.signInWithPassword(formData);

    if (error) {
      console.error('Erro de Login:', error.message);
      setError(error.message || 'Erro desconhecido ao tentar logar.');
      setIsLoading(false);
      return;
    }

    if (data.user) {
      console.log('Usuário logado:', data.user.email);
      router.refresh(); 
      router.push('/auth'); 

    } else {
        setError("Não foi possível obter os dados do usuário após o login.");
    }
    
    setIsLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleSignIn();
  }


  return (
    <div
      style={{
        width: '100dvw',
        height: '100dvh',
        backgroundColor: 'black',
        overflow: 'hidden',
      }}
    >
      <Aurora
        colorStops={['#3A29FF', '#FF94B4', '#FF3232']}
        blend={1}
        amplitude={1}
        speed={0.5}
      />
      <Box
        style={{
          position: 'fixed',
          left: '0',
          top: '0',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* Use um form para melhor acessibilidade (Enter key) */}
        <Card style={{ padding: 36, maxWidth: "500px", width: "90%", backgroundColor: "#ffffff0a" }} variant="ghost">
          <form onSubmit={handleSubmit}> 
            <Flex gap="7" direction="column">
              <Text as="div" size="8" weight="bold" style={{color: "#fff"}}>
                Login
              </Text>
              <Flex gap="4" direction="column" style={{width: "90%"}}>
                
                {/* Campos de Input */}
                <TextField.Root 
                    size="3" 
                    placeholder="seu@email.com.br" 
                    name='email' 
                    onChange={handleChange} 
                    value={formData.email}
                    type='email' // Boa prática
                    required
                >
                  <TextField.Slot>
                    <PersonIcon height="16" width="16" />
                  </TextField.Slot>
                </TextField.Root>
                
                <TextField.Root 
                    size="3" 
                    placeholder="*******" 
                    type='password' 
                    name='password' 
                    onChange={handleChange} 
                    value={formData.password}
                    required
                >
                  <TextField.Slot>
                    <LockClosedIcon height="16" width="16" />
                  </TextField.Slot>
                </TextField.Root>

                {/* Exibição de Erro */}
                {error && (
                    <Text color="red" size="2">
                        {error}
                    </Text>
                )}
                
                {/* Botão de Submissão */}
                <Button 
                    type="submit" // Agora submete o form
                    disabled={isLoading} 
                    style={{ cursor: isLoading ? 'not-allowed' : 'pointer' }}
                >
                  {isLoading ? 'Entrando...' : 'Entrar'}
                </Button>
              </Flex>

            </Flex>
          </form>
        </Card>
      </Box>
    </div>
  );
}