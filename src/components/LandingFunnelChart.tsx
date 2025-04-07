
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Simulação de dados para o funil
const funnelData = [
  { name: "Visitas", valor: 1000 },
  { name: "Leads", valor: 750 },
  { name: "Qualificados", valor: 500 },
  { name: "Negociações", valor: 300 },
  { name: "Vendas", valor: 150 },
];

export function FunnelChart() {
  return (
    <div className="w-full bg-white dark:bg-[#273149] rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-center dark:text-white">Funil de Conversão</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={funnelData}
            margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0E65F5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0E65F5" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280' }}
              width={40}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(39, 49, 73, 0.9)', border: 'none', color: 'white' }} />
            <Area
              type="monotone"
              dataKey="valor"
              stroke="#0E65F5"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2 text-center">
        {funnelData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">{item.name}</span>
            <span className="text-sm font-bold dark:text-white">{item.valor}</span>
            {index < funnelData.length - 1 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {Math.round((funnelData[index + 1].valor / item.valor) * 100)}%
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
