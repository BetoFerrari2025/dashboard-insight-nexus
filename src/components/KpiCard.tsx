
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string;
  isPositive?: boolean;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, isPositive = false }) => {
  return (
    <Card className="bg-white dark:bg-[#273149] shadow-sm">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 pt-4">
        <CardTitle className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-1">
          {title}
          <Info className="h-4 w-4 text-gray-400 dark:text-gray-400" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-2xl font-bold ${isPositive ? 'text-marketing-green' : ''}`}>{value}</p>
      </CardContent>
    </Card>
  );
};

export default KpiCard;
