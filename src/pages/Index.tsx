import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import DateSelector from '@/components/DateSelector';
import SummaryFilters from '@/components/SummaryFilters';
import PaymentChart from '@/components/PaymentChart';
import FunnelChart from '@/components/FunnelChart';
import ProductSalesChart from '@/components/ProductSalesChart';
import ApprovalRateCard from '@/components/ApprovalRateCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { kpiData } from '@/data/dashboardData';
import { ArrowDown, ArrowUp, Info, Shield } from 'lucide-react';
import { usePermissions } from '@/hooks/usePermissions';
const Dashboard = () => {
  const navigate = useNavigate();
  const {
    isAdmin
  } = usePermissions();
  return <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-semibold text-gray-900 ">Resumo</h1>
        <div className="flex items-center gap-2">
          <span className="text-zinc-300 text-sm">Atualizado há 1 minuto</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
            Atualizar
          </button>
        </div>
      </div>

      {/* Admin Quick Access Button */}
      {isAdmin && <div className="mb-6">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white" onClick={() => navigate('/admin')}>
            <Shield className="mr-2 h-4 w-4" />
            Acessar Painel de Administração
          </Button>
        </div>}

      {/* Summary Filters */}
      <SummaryFilters />
      
      {/* Main Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-white dark:bg-[#273149] shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 pt-4">
            <CardTitle className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
              Faturamento Líquido
              <Info className="h-4 w-4 text-gray-400 dark:text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold dark:text-white">{kpiData.netRevenue}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-[#273149] shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 pt-4">
            <CardTitle className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
              Gastos com anúncios
              <Info className="h-4 w-4 text-gray-400 dark:text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold dark:text-white">{kpiData.adSpend}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-[#273149] shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 pt-4">
            <CardTitle className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
              ROAS
              <Info className="h-4 w-4 text-gray-400 dark:text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-marketing-green">{kpiData.roas}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-[#273149] shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 pt-4">
            <CardTitle className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
              Lucro
              <Info className="h-4 w-4 text-gray-400 dark:text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-marketing-green">{kpiData.profit}</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Second row metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        <div className="lg:col-span-1">
          <PaymentChart />
        </div>
        
        <Card className="bg-white dark:bg-[#273149] shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 pt-4">
            <CardTitle className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
              Vendas Pendentes
              <Info className="h-4 w-4 text-gray-400 dark:text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold dark:text-white">{kpiData.pendingOrders}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-[#273149] shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 pt-4">
            <CardTitle className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
              Margem
              <Info className="h-4 w-4 text-gray-400 dark:text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-marketing-green">{kpiData.margin}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-[#273149] shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 pt-4">
            <CardTitle className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
              CPA
              <Info className="h-4 w-4 text-gray-400 dark:text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold dark:text-white">{kpiData.cpa}</p>
          </CardContent>
        </Card>
      </div>

      {/* Third row metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-white dark:bg-[#273149] shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 pt-4">
            <CardTitle className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
              Custos de Produto
              <Info className="h-4 w-4 text-gray-400 dark:text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold dark:text-white">{kpiData.productCosts}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-[#273149] shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 pt-4">
            <CardTitle className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
              ROI
              <Info className="h-4 w-4 text-gray-400 dark:text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-marketing-green">{kpiData.roi}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-[#273149] shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 pt-4">
            <CardTitle className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
              ARPU
              <Info className="h-4 w-4 text-gray-400 dark:text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold dark:text-white">{kpiData.arpu}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-[#273149] shadow-sm">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 pt-4">
            <CardTitle className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
              Taxas
              <Info className="h-4 w-4 text-gray-400 dark:text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold dark:text-white">{kpiData.taxes}</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Conversion Funnel and Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <FunnelChart />
        <ProductSalesChart />
      </div>
      
      {/* Approval Rate */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-6">
        <ApprovalRateCard />
      </div>
    </>;
};
const Index = () => {
  return <DashboardLayout>
      <Dashboard />
    </DashboardLayout>;
};
export default Index;