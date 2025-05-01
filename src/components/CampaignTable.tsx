
import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Info } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '@/components/ui/scroll-area';

type Campaign = {
  id: string;
  name: string;
  status: 'active' | 'paused';
  budget: string;
  expenses: string;
  sales: number;
  roi: string;
  cpa: string;
  revenue: string;
  profit: string;
  roas: string;
  margin: string;
  date?: string;
  isTracking?: boolean;
};

export const CampaignTable = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: '1',
      name: 'SECRETLOVE/ CBO VIDEO-03 ATIVO [27/04/25]',
      status: 'active',
      budget: 'R$ 55,24 Diário',
      expenses: 'R$ 20,31',
      sales: 6,
      roi: '2,50',
      cpa: 'R$ 3,39',
      revenue: 'R$ 50,84',
      profit: 'R$ 30,53',
      roas: '2,50',
      margin: '60,05%'
    },
    {
      id: '2',
      name: 'SECRETLOVE/ CBO',
      status: 'active',
      budget: 'R$ 31,07 Diário',
      expenses: 'R$ 18,30',
      sales: 5,
      roi: '1,20',
      cpa: 'R$ 3,66',
      revenue: 'R$ 21,95',
      profit: 'R$ 3,65',
      roas: '1,20',
      margin: '16,63%'
    },
    {
      id: '3',
      name: 'SECRETLOVE/ CBO VIDEO-03 [28/05/25] – Cópia',
      status: 'active',
      budget: 'R$ 18,50 Diário',
      expenses: 'R$ 13,74',
      sales: 3,
      roi: '0,87',
      cpa: 'R$ 4,58',
      revenue: 'R$ 11,97',
      profit: 'R$ -1,77',
      roas: '0,87',
      margin: '-14,79%'
    },
    {
      id: '4',
      name: 'SECRETLOVE/ CBO VIDEO-02 ATIVO [27/04/25]',
      status: 'active',
      budget: 'R$ 18,50 Diário',
      expenses: 'R$ 10,16',
      sales: 1,
      roi: '0,39',
      cpa: 'R$ 10,16',
      revenue: 'R$ 3,99',
      profit: 'R$ -6,17',
      roas: '0,39',
      margin: '-154,64%'
    },
    {
      id: '5',
      name: 'LOVE/ CBO - SEMEFANTE',
      status: 'active',
      budget: 'R$ 7,00',
      expenses: 'R$ 5,12',
      sales: 1,
      roi: '2,13',
      cpa: 'R$ 5,12',
      revenue: 'R$ 10,90',
      profit: 'R$ 5,78',
      roas: '2,13',
      margin: '53,03%'
    },
  ]);

  // Total row calculation
  const totalRow = {
    budget: 'R$ 193,71',
    expenses: 'R$ 67,16',
    sales: campaigns.reduce((acc, campaign) => acc + campaign.sales, 0),
    roi: '1,32',
    cpa: 'R$ 4,48',
    revenue: 'R$ 88,75',
    profit: 'R$ 21,59',
    roas: '1,32',
    margin: '24,33%'
  };

  // Toggle campaign status
  const toggleCampaignStatus = (id: string) => {
    setCampaigns(
      campaigns.map(campaign => 
        campaign.id === id 
          ? {...campaign, status: campaign.status === 'active' ? 'paused' : 'active'} 
          : campaign
      )
    );
  };

  return (
    <div className="border rounded-md">
      <div className="overflow-hidden">
        <div className="w-full">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-10 sticky left-0 bg-gray-50 z-20">
                    <Checkbox />
                  </TableHead>
                  <TableHead className="font-medium text-xs text-gray-600 sticky left-[41px] bg-gray-50 z-20">STATUS</TableHead>
                  <TableHead className="font-medium text-xs text-gray-600 sticky left-[125px] bg-gray-50 z-20 min-w-[250px]">CAMPANHA</TableHead>
                  <TableHead className="font-medium text-xs text-gray-600">ORÇAMENTO</TableHead>
                  <TableHead className="font-medium text-xs text-gray-600">GASTOS</TableHead>
                  <TableHead className="font-medium text-xs text-gray-600 text-center">VENDAS</TableHead>
                  <TableHead className="font-medium text-xs text-gray-600">
                    <div className="flex items-center">
                      ROI <Info className="h-4 w-4 ml-1 text-gray-400" />
                    </div>
                  </TableHead>
                  <TableHead className="font-medium text-xs text-gray-600">
                    <div className="flex items-center">
                      CPA <Info className="h-4 w-4 ml-1 text-gray-400" />
                    </div>
                  </TableHead>
                  <TableHead className="font-medium text-xs text-gray-600">
                    <div className="flex items-center">
                      FATURAMENTO <Info className="h-4 w-4 ml-1 text-gray-400" />
                    </div>
                  </TableHead>
                  <TableHead className="font-medium text-xs text-gray-600">
                    <div className="flex items-center">
                      LUCRO <Info className="h-4 w-4 ml-1 text-gray-400" />
                    </div>
                  </TableHead>
                  <TableHead className="font-medium text-xs text-gray-600">
                    <div className="flex items-center">
                      ROAS <Info className="h-4 w-4 ml-1 text-gray-400" />
                    </div>
                  </TableHead>
                  <TableHead className="font-medium text-xs text-gray-600">
                    <div className="flex items-center">
                      MARGEM <Info className="h-4 w-4 ml-1 text-gray-400" />
                    </div>
                  </TableHead>
                  <TableHead className="font-medium text-xs text-gray-600">VENDAS TOTAIS</TableHead>
                  <TableHead className="font-medium text-xs text-gray-600">CPT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign) => (
                  <TableRow key={campaign.id} className="border-b">
                    <TableCell className="sticky left-0 bg-white z-10">
                      <Checkbox />
                    </TableCell>
                    <TableCell className="sticky left-[41px] bg-white z-10">
                      <div className="flex justify-center">
                        <Switch 
                          checked={campaign.status === 'active'} 
                          onCheckedChange={() => toggleCampaignStatus(campaign.id)}
                          className="data-[state=checked]:bg-blue-600"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="sticky left-[125px] bg-white z-10">
                      <div className="flex flex-col">
                        <span className="font-medium text-xs">{campaign.name}</span>
                        {campaign.isTracking && (
                          <span className="inline-flex text-xs text-green-600 items-center mt-1">
                            <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
                            LIMPEZA
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-xs">{campaign.budget}</TableCell>
                    <TableCell className="text-xs">{campaign.expenses}</TableCell>
                    <TableCell className="text-center text-xs">{campaign.sales}</TableCell>
                    <TableCell className={`text-xs ${parseFloat(campaign.roi.replace(',', '.')) >= 1.0 ? 'text-green-500' : 'text-red-500'}`}>
                      {campaign.roi}
                    </TableCell>
                    <TableCell className="text-xs">{campaign.cpa}</TableCell>
                    <TableCell className="text-xs">{campaign.revenue}</TableCell>
                    <TableCell className={`text-xs ${
                      campaign.profit.startsWith('R$ -') ? 'text-red-500' : 'text-green-500'
                    }`}>
                      {campaign.profit}
                    </TableCell>
                    <TableCell className={`text-xs ${parseFloat(campaign.roas.replace(',', '.')) >= 1.0 ? 'text-green-500' : 'text-red-500'}`}>
                      {campaign.roas}
                    </TableCell>
                    <TableCell className={`text-xs ${campaign.margin.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                      {campaign.margin}
                    </TableCell>
                    <TableCell className="text-center text-xs">
                      {Math.round(campaign.sales * 1.5)}
                    </TableCell>
                    <TableCell className="text-xs">
                      R$ {(parseFloat(campaign.expenses.replace('R$ ', '').replace(',', '.')) / campaign.sales).toFixed(2).replace('.', ',')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      
      {/* Fixed footer with totals and horizontal scroll */}
      <div className="border-t overflow-x-auto bg-gray-50">
        <div className="min-w-max">
          <Table>
            <TableBody>
              <TableRow className="bg-gray-50 font-medium">
                <TableCell className="sticky left-0 bg-gray-50 z-10"></TableCell>
                <TableCell className="text-gray-600 sticky left-[41px] bg-gray-50 z-10">N/A</TableCell>
                <TableCell className="text-gray-600 sticky left-[125px] bg-gray-50 z-10 text-xs">9 CAMPANHAS</TableCell>
                <TableCell className="text-xs">{totalRow.budget}</TableCell>
                <TableCell className="text-xs">{totalRow.expenses}</TableCell>
                <TableCell className="text-center text-xs">{totalRow.sales}</TableCell>
                <TableCell className="text-green-500 text-xs">{totalRow.roi}</TableCell>
                <TableCell className="text-xs">{totalRow.cpa}</TableCell>
                <TableCell className="text-xs">{totalRow.revenue}</TableCell>
                <TableCell className="text-green-500 text-xs">{totalRow.profit}</TableCell>
                <TableCell className="text-green-500 text-xs">{totalRow.roas}</TableCell>
                <TableCell className="text-green-500 text-xs">{totalRow.margin}</TableCell>
                <TableCell className="text-center text-xs">27</TableCell>
                <TableCell className="text-xs">-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
