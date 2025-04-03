
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
    <Card className="bg-white shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-gray-500">Funil de Conversão (Meta Ads)</CardTitle>
      </CardHeader>
      <CardContent className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Tooltip formatter={(value) => value.toString()} />
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
