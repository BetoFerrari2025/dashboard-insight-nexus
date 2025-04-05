
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { Shield, AlertTriangle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

type SystemPermission = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  created_at: string;
  updated_at: string;
};

const Admin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [permissions, setPermissions] = useState<SystemPermission[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        navigate('/login');
        return;
      }

      try {
        // Verificar se o usuário atual é um administrador
        const { data, error } = await supabase
          .rpc('is_admin', { user_id: user.id });

        if (error) throw error;

        setIsAdmin(data || false);

        if (!data) {
          toast({
            title: "Acesso restrito",
            description: "Você não tem permissão para acessar esta página.",
            variant: "destructive"
          });
          navigate('/');
        } else {
          // Carregar permissões do sistema
          fetchPermissions();
        }
      } catch (error) {
        console.error('Erro ao verificar status de administrador:', error);
        toast({
          title: "Erro",
          description: "Não foi possível verificar suas permissões de administrador.",
          variant: "destructive"
        });
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, [user, navigate, toast]);

  const fetchPermissions = async () => {
    try {
      const { data, error } = await supabase
        .from('system_permissions')
        .select('*')
        .order('name');

      if (error) throw error;
      setPermissions(data || []);
    } catch (error) {
      console.error('Erro ao buscar permissões:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar as permissões do sistema.",
        variant: "destructive"
      });
    }
  };

  const togglePermission = async (permission: SystemPermission) => {
    try {
      const { error } = await supabase
        .from('system_permissions')
        .update({ enabled: !permission.enabled })
        .eq('id', permission.id);

      if (error) throw error;

      setPermissions(permissions.map(p => 
        p.id === permission.id ? { ...p, enabled: !p.enabled } : p
      ));

      toast({
        title: "Permissão atualizada",
        description: `${permission.description} foi ${!permission.enabled ? 'ativada' : 'desativada'}.`,
      });
    } catch (error) {
      console.error('Erro ao atualizar permissão:', error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar a permissão.",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-marketing-blue"></div>
        </div>
      </DashboardLayout>
    );
  }

  if (!isAdmin) {
    return (
      <DashboardLayout>
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="h-5 w-5" />
              Acesso Restrito
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-amber-700">
              Esta página é restrita a administradores do sistema.
            </p>
          </CardContent>
        </Card>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-marketing-dark flex items-center gap-2">
          <Shield className="h-6 w-6" />
          Painel de Administração
        </h1>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Controle de Permissões</CardTitle>
          <CardDescription>
            Gerencie o que os usuários podem fazer no sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {permissions.map((permission) => (
              <div 
                key={permission.id} 
                className="flex items-center justify-between p-3 rounded-md hover:bg-slate-50"
              >
                <div>
                  <h3 className="font-medium">{permission.description}</h3>
                  <p className="text-sm text-gray-500">{permission.name}</p>
                </div>
                <Switch 
                  checked={permission.enabled} 
                  onCheckedChange={() => togglePermission(permission)}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Admin;
