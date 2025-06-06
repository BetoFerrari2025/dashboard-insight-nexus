
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ChartContainerProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  height?: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ 
  title, 
  subtitle,
  children,
  height = "h-72"
}) => {
  return (
    <Card className="bg-white dark:bg-[#273149] shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className={subtitle ? "flex justify-between items-center" : "text-sm text-gray-500 dark:text-gray-300"}>
          <span className="text-sm text-gray-500 dark:text-gray-300">{title}</span>
          {subtitle && <span className="text-xs text-gray-400 dark:text-gray-400">{subtitle}</span>}
        </CardTitle>
      </CardHeader>
      <CardContent className={height}>
        {children}
      </CardContent>
    </Card>
  );
};

export default ChartContainer;
