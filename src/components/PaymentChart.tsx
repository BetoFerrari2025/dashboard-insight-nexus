
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { paymentData } from '@/data/dashboardData';

const PaymentChart = () => {
  const COLORS = ['#0E65F5', '#17BECF', '#FFBB28', '#FF8042'];
  
  return (
    <Card className="bg-white dark:bg-[#273149] shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-gray-500 dark:text-gray-300">Vendas por Pagamento</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="w-full h-[200px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={paymentData.methods}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="percentage"
              >
                {paymentData.methods.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} contentStyle={{ backgroundColor: 'rgba(39, 49, 73, 0.9)', border: 'none', color: 'white' }} />
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="dark:fill-white">
                <tspan x="50%" textAnchor="middle" className="text-xl font-semibold" dy="-10">
                  Total
                </tspan>
                <tspan x="50%" textAnchor="middle" className="text-xl font-semibold" dy="30">
                  {paymentData.total}
                </tspan>
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap justify-center mt-4 gap-4">
          {paymentData.methods.map((method, index) => (
            <div key={index} className="flex items-center">
              <span 
                className="h-3 w-3 rounded-full mr-2" 
                style={{ backgroundColor: method.color || COLORS[index % COLORS.length] }}
              />
              <span className="text-sm dark:text-gray-300">{method.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentChart;
