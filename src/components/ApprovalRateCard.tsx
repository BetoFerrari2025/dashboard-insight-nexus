
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { approvalRate } from '@/data/dashboardData';

const ApprovalRateCard = () => {
  return (
    <Card className="bg-white dark:bg-[#273149] shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-gray-500 dark:text-gray-300">Taxa de Aprovação</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-300">Cartão</span>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 mr-2"></div>
              <span className="text-sm font-medium dark:text-white">{approvalRate.cardRatio}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApprovalRateCard;
