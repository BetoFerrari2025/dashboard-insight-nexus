
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SummaryFilters = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="w-full">
        <Select defaultValue="today">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Hoje</SelectItem>
            <SelectItem value="yesterday">Ontem</SelectItem>
            <SelectItem value="7days">Últimos 7 dias</SelectItem>
            <SelectItem value="14days">Últimos 14 dias</SelectItem>
            <SelectItem value="1month">Último mês</SelectItem>
            <SelectItem value="max">Período máximo</SelectItem>
            <SelectItem value="custom">Personalizado</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="w-full">
        <Select defaultValue="all">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Fonte de Tráfego" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Qualquer</SelectItem>
            <SelectItem value="facebook">Facebook</SelectItem>
            <SelectItem value="google">Google</SelectItem>
            <SelectItem value="direct">Direto</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="w-full">
        <Select defaultValue="all">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Plataforma" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Qualquer</SelectItem>
            <SelectItem value="web">Web</SelectItem>
            <SelectItem value="mobile">Mobile</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="w-full">
        <Select defaultValue="all">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Produto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Qualquer</SelectItem>
            <SelectItem value="bible">Bíblia para colorir</SelectItem>
            <SelectItem value="bibleCombo">Bíblia para colorir Combo 2 em 1</SelectItem>
            <SelectItem value="cleaning">FABRICA LIMPEZA LUCRATIVA</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SummaryFilters;
