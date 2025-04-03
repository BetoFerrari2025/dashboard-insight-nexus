
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { approvalRate } from '@/data/dashboardData';

const ApprovalRateCard = () => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-gray-500">Taxa de Aprovação</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Cartão</span>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full border border-gray-300 mr-2"></div>
              <span className="text-sm font-medium">{approvalRate.cardRatio}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApprovalRateCard;
