
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import UTMTracker from '@/components/UTMTracker';

const Integrations = () => {
  const [metaName, setMetaName] = useState('');
  const [googleName, setGoogleName] = useState('');
  const [metaAccounts, setMetaAccounts] = useState([
    { id: 1, name: 'Beto Ferrari', active: true }
  ]);
  
  // Função para adicionar conta Meta
  const addMetaAccount = () => {
    if (metaName.trim()) {
      // Normalmente aqui você iria redirecionar para autenticação do Facebook
      // Mas para fins de demonstração, vamos adicionar direto
      alert('Normalmente, você seria redirecionado para o login do Facebook.');
      setMetaAccounts([...metaAccounts, { id: Date.now(), name: metaName, active: true }]);
      setMetaName('');
    }
  };

  // Função para adicionar conta Google
  const addGoogleAccount = () => {
    if (googleName.trim()) {
      // Simulação, sem implementação real
      alert('Normalmente, você seria redirecionado para o login do Google.');
      setGoogleName('');
    }
  };

  // Função para alternar ativação da conta
  const toggleAccountStatus = (id: number) => {
    setMetaAccounts(metaAccounts.map(account => 
      account.id === id ? { ...account, active: !account.active } : account
    ));
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-8">Dashboard - Integrações</h1>
        
        <Tabs defaultValue="anuncios" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="anuncios" className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              Anúncios
            </TabsTrigger>
            <TabsTrigger value="webhooks" className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Webhooks
            </TabsTrigger>
            <TabsTrigger value="utms" className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              UTMs
            </TabsTrigger>
            <TabsTrigger value="pixel" className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              Pixel
            </TabsTrigger>
            <TabsTrigger value="whatsapp" className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Whatsapp
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="anuncios" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Meta Ads Block */}
              <Card className="bg-white dark:bg-[#273149] border-[#3d4a6a] shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2 text-white">
                    <img src="https://cdn.cdnlogo.com/logos/m/35/meta.svg" alt="Meta Logo" className="w-8 h-8 rounded-full" />
                    Meta Ads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-3">Conecte seus perfis por aqui:</p>
                  <div className="flex gap-2 mb-4">
                    <Input 
                      className="bg-[#1a2236] border-[#3d4a6a] text-white placeholder:text-gray-400"
                      placeholder="Nome do perfil" 
                      value={metaName}
                      onChange={(e) => setMetaName(e.target.value)}
                    />
                  </div>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={addMetaAccount}
                  >
                    Adicionar perfil
                  </Button>
                </CardContent>
              </Card>
              
              {/* Google Ads Block */}
              <Card className="bg-white dark:bg-[#273149] border-[#3d4a6a] shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2 text-white">
                    <img src="https://www.gstatic.com/images/branding/product/2x/ads_48dp.png" alt="Google Ads Logo" className="w-8 h-8" />
                    Google Ads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-3">Conecte seus perfis por aqui:</p>
                  <div className="flex gap-2 mb-4">
                    <Input 
                      className="bg-[#1a2236] border-[#3d4a6a] text-white placeholder:text-gray-400"
                      placeholder="Nome do perfil" 
                      value={googleName}
                      onChange={(e) => setGoogleName(e.target.value)}
                    />
                  </div>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={addGoogleAccount}
                  >
                    Adicionar perfil
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Meta Accounts List */}
              <Card className="bg-white dark:bg-[#273149] border-[#3d4a6a] shadow-lg">
                <CardHeader className="pb-2 border-b border-[#3d4a6a]">
                  <CardTitle className="text-lg text-white">Contas de Anúncio (Meta)</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  {metaAccounts.map(account => (
                    <div key={account.id} className="flex justify-between items-center p-3 bg-[#1a2236] rounded-md mb-2">
                      <span className="text-white">{account.name}</span>
                      <div className="flex items-center gap-2">
                        <Switch 
                          id={`meta-account-${account.id}`}
                          checked={account.active}
                          onCheckedChange={() => toggleAccountStatus(account.id)}
                        />
                        <Label htmlFor={`meta-account-${account.id}`} className="text-white">
                          {account.active ? "Ativar" : "Desativar"}
                        </Label>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              {/* Google Accounts List */}
              <Card className="bg-white dark:bg-[#273149] border-[#3d4a6a] shadow-lg">
                <CardHeader className="pb-2 border-b border-[#3d4a6a]">
                  <CardTitle className="text-lg text-white">Contas de Anúncio (Google)</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 flex justify-center items-center">
                  <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
                    Desativar todas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="webhooks">
            <Card className="bg-white dark:bg-[#273149] border-[#3d4a6a] shadow-lg">
              <CardContent className="pt-6">
                <p className="text-gray-300">Configurações de Webhooks estarão disponíveis em breve.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="utms">
            <UTMTracker />
          </TabsContent>
          
          <TabsContent value="pixel">
            <Card className="bg-white dark:bg-[#273149] border-[#3d4a6a] shadow-lg">
              <CardContent className="pt-6">
                <p className="text-gray-300">Configurações de Pixel estarão disponíveis em breve.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="whatsapp">
            <Card className="bg-white dark:bg-[#273149] border-[#3d4a6a] shadow-lg">
              <CardContent className="pt-6">
                <p className="text-gray-300">Configurações de Whatsapp estarão disponíveis em breve.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Integrations;
