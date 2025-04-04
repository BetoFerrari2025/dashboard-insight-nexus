
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { CampaignTable } from '@/components/CampaignTable';
import { Search, RefreshCw, Settings, ChevronUp, FileText } from 'lucide-react';
import { campaignData } from '@/data/campaignData';

const Campaigns = () => {
  const [searchValue, setSearchValue] = useState('');
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-marketing-dark">Campanhas</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Atualizado há 30 segundos</span>
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="flex items-center mb-6 gap-2">
        <div className="bg-green-500 text-white text-xs rounded-full px-3 py-1">
          Todas as vendas trackeadas
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronUp className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <FileText className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome da Campanha
          </label>
          <div className="relative">
            <Input
              placeholder="Filtrar por nome"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status da Campanha
          </label>
          <Select defaultValue="any">
            <SelectTrigger>
              <SelectValue placeholder="Qualquer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Qualquer</SelectItem>
              <SelectItem value="active">Ativa</SelectItem>
              <SelectItem value="paused">Pausada</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Período de Visualização
          </label>
          <Select defaultValue="today">
            <SelectTrigger>
              <SelectValue placeholder="Hoje" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Hoje</SelectItem>
              <SelectItem value="yesterday">Ontem</SelectItem>
              <SelectItem value="7days">7 dias</SelectItem>
              <SelectItem value="14days">14 dias</SelectItem>
              <SelectItem value="1month">1 mês</SelectItem>
              <SelectItem value="maximum">Máximo</SelectItem>
              <SelectItem value="custom">Personalizado</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Conta de Anúncio
          </label>
          <Select defaultValue="any">
            <SelectTrigger>
              <SelectValue placeholder="Qualquer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Qualquer</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="google">Google</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Produto
          </label>
          <Select defaultValue="any">
            <SelectTrigger>
              <SelectValue placeholder="Qualquer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Qualquer</SelectItem>
              <SelectItem value="product1">Bíblia para colorir</SelectItem>
              <SelectItem value="product2">FABRICA LIMPEZA LUCRATIVA</SelectItem>
              <SelectItem value="product3">Outros produtos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Campaign Table */}
      <div className="mt-6">
        <CampaignTable />
      </div>
    </>
  );
};

const CampaignsPage = () => {
  return (
    <DashboardLayout>
      <Campaigns />
    </DashboardLayout>
  );
};

export default CampaignsPage;
