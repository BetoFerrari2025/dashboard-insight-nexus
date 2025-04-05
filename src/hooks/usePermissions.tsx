
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Database } from '@/integrations/supabase/types';

// Definindo a interface para os dados da permissão do sistema
interface SystemPermission {
  id: string;
  name: string;
  description: string | null;
  enabled: boolean;
  created_at: string;
  updated_at: string;
}

export function usePermissions() {
  const { user } = useAuth();
  const [permissions, setPermissions] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchPermissions = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        // Verificar se o usuário é admin
        const { data: adminData, error: adminError } = await supabase
          .rpc('is_admin', { user_id: user.id });

        if (adminError) throw adminError;
        setIsAdmin(adminData || false);

        // Buscar todas as permissões do sistema
        const { data: permissionsData, error: permissionsError } = await supabase
          .from('system_permissions')
          .select('name, enabled');

        if (permissionsError) throw permissionsError;

        // Converter array de permissões para um objeto { nome: estado }
        const permissionsMap = (permissionsData || []).reduce((acc, curr) => {
          acc[curr.name] = curr.enabled;
          return acc;
        }, {} as Record<string, boolean>);

        setPermissions(permissionsMap);
      } catch (error) {
        console.error('Erro ao buscar permissões:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPermissions();
  }, [user]);

  // Função para verificar se uma permissão específica está habilitada
  const isAllowed = (permissionName: string): boolean => {
    // Administradores têm todas as permissões
    if (isAdmin) return true;
    
    // Se a permissão existir no mapa, retorna seu valor
    if (permissionName in permissions) {
      return permissions[permissionName];
    }
    
    // Por padrão, se a permissão não existir, não é permitida
    return false;
  };

  return {
    permissions,
    loading,
    isAdmin,
    isAllowed
  };
}
