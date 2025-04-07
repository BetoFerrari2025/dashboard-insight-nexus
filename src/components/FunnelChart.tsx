
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { funnelData } from '@/data/dashboardData';

const FunnelChart = () => {
  const data = [
    { name: 'Cliques', value: funnelData.clicks },
    { name: 'Vis. Página', value: funnelData.visits },
    { name: 'ICs', value: funnelData.leads },
    { name: 'Vendas Pend.', value: funnelData.pendingSales },
    { name: 'Vendas Apr.', value: funnelData.approvedSales },
  ];
  
  return (
    <Card className="bg-white dark:bg-[#273149] shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-gray-500 dark:text-gray-300">Funil de Conversão (Meta Ads)</CardTitle>
      </CardHeader>
      <CardContent className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" axisLine={false} tickLine={false} className="dark:text-gray-300" />
            <Tooltip formatter={(value) => value.toString()} contentStyle={{ backgroundColor: 'rgba(39, 49, 73, 0.9)', border: 'none', color: 'white' }} />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#0E65F5" 
              fill="#0E65F5" 
              fillOpacity={0.8}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default FunnelChart;
