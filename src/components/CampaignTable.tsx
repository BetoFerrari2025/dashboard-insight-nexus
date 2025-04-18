
import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell, TableFooter } from '@/components/ui/table';
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
      name: 'ILUSTRAR/ CBO - [01/04/25] img-08 – Cópia',
      status: 'active',
      budget: 'R$ 50,00 Diário',
      expenses: 'R$ 41,45',
      sales: 3,
      roi: '2,04',
      cpa: 'R$ 13,82',
      revenue: 'R$ 84,70',
      profit: 'R$ 43,25',
      roas: '2,04',
      margin: '51,06%'
    },
    {
      id: '2',
      name: 'CATEQUESE/ CBO [01/04/25] – Cópia',
      status: 'active',
      budget: 'R$ 20,00 Diário',
      expenses: 'R$ 14,78',
      sales: 2,
      roi: '4,19',
      cpa: 'R$ 7,39',
      revenue: 'R$ 61,90',
      profit: 'R$ 47,12',
      roas: '4,19',
      margin: '76,12%'
    },
    {
      id: '3',
      name: 'LIMPEZA/ CBO [01/03/25] IMG-01Mpago',
      status: 'active',
      budget: 'R$ 14,00 Diário',
      expenses: 'R$ 8,88',
      sales: 1,
      roi: '2,90',
      cpa: 'R$ 8,88',
      revenue: 'R$ 25,78',
      profit: 'R$ 16,90',
      roas: '2,90',
      margin: '65,55%',
      isTracking: true
    },
    {
      id: '4',
      name: 'ILUSTRA/ ABO TESTE [25/03/25]',
      status: 'active',
      budget: 'N/A',
      expenses: 'R$ 28,37',
      sales: 1,
      roi: '1,44',
      cpa: 'R$ 28,37',
      revenue: 'R$ 40,80',
      profit: 'R$ 12,43',
      roas: '1,44',
      margin: '30,47%'
    },
    // Add more campaign data for demonstrating scrolling
    {
      id: '5',
      name: 'ARTE SACRA/ CBO [15/03/25]',
      status: 'paused',
      budget: 'R$ 30,00 Diário',
      expenses: 'R$ 27,50',
      sales: 2,
      roi: '2,30',
      cpa: 'R$ 13,75',
      revenue: 'R$ 63,25',
      profit: 'R$ 35,75',
      roas: '2,30',
      margin: '56,52%'
    },
    {
      id: '6',
      name: 'LIMPEZA VERDE/ CBO [10/03/25]',
      status: 'active',
      budget: 'R$ 25,00 Diário',
      expenses: 'R$ 22,80',
      sales: 2,
      roi: '2,76',
      cpa: 'R$ 11,40',
      revenue: 'R$ 62,90',
      profit: 'R$ 40,10',
      roas: '2,76',
      margin: '63,75%',
      isTracking: true
    },
    {
      id: '7',
      name: 'CRISTO REI/ CBO [05/03/25]',
      status: 'active',
      budget: 'R$ 22,00 Diário',
      expenses: 'R$ 19,70',
      sales: 1,
      roi: '1,85',
      cpa: 'R$ 19,70',
      revenue: 'R$ 36,45',
      profit: 'R$ 16,75',
      roas: '1,85',
      margin: '45,95%'
    },
  ]);

  // Total row calculation
  const totalRow = {
    budget: 'R$ 316,00',
    expenses: 'R$ 197,06',
    sales: campaigns.reduce((acc, campaign) => acc + campaign.sales, 0),
    roi: '1,23',
    cpa: 'R$ 21,90',
    revenue: 'R$ 242,98',
    profit: 'R$ 45,92',
    roas: '1,23',
    margin: '18,90%'
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
      {/* Main scrollable area for the table rows */}
      <ScrollArea className="h-[480px]">
        <div className="min-w-[1200px]"> {/* Enforce minimum width to enable horizontal scrolling */}
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableCell className="w-10 sticky top-0 bg-gray-50 z-10">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium text-xs text-gray-600 sticky top-0 bg-gray-50 z-10">STATUS</TableCell>
                <TableCell className="font-medium text-xs text-gray-600 sticky top-0 bg-gray-50 z-10 min-w-[250px]">CAMPANHA</TableCell>
                <TableCell className="font-medium text-xs text-gray-600 sticky top-0 bg-gray-50 z-10">ORÇAMENTO</TableCell>
                <TableCell className="font-medium text-xs text-gray-600 sticky top-0 bg-gray-50 z-10">GASTOS</TableCell>
                <TableCell className="font-medium text-xs text-gray-600 sticky top-0 bg-gray-50 z-10 text-center">VENDAS</TableCell>
                <TableCell className="font-medium text-xs text-gray-600 flex items-center sticky top-0 bg-gray-50 z-10 border-l border-gray-200">
                  ROI <Info className="h-4 w-4 ml-1 text-gray-400" />
                </TableCell>
                <TableCell className="font-medium text-xs text-gray-600 flex items-center sticky top-0 bg-gray-50 z-10 border-l border-gray-200">
                  CPA <Info className="h-4 w-4 ml-1 text-gray-400" />
                </TableCell>
                <TableCell className="font-medium text-xs text-gray-600 flex items-center sticky top-0 bg-gray-50 z-10 border-l border-gray-200">
                  FATURAMENTO <Info className="h-4 w-4 ml-1 text-gray-400" />
                </TableCell>
                <TableCell className="font-medium text-xs text-gray-600 flex items-center sticky top-0 bg-gray-50 z-10 border-l border-gray-200">
                  LUCRO <Info className="h-4 w-4 ml-1 text-gray-400" />
                </TableCell>
                <TableCell className="font-medium text-xs text-gray-600 flex items-center sticky top-0 bg-gray-50 z-10 border-l border-gray-200">
                  ROAS <Info className="h-4 w-4 ml-1 text-gray-400" />
                </TableCell>
                <TableCell className="font-medium text-xs text-gray-600 flex items-center sticky top-0 bg-gray-50 z-10 border-l border-gray-200">
                  MARGEM <Info className="h-4 w-4 ml-1 text-gray-400" />
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id} className="border-b">
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <Switch 
                        checked={campaign.status === 'active'} 
                        onCheckedChange={() => toggleCampaignStatus(campaign.id)}
                        className="data-[state=checked]:bg-blue-500"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">{campaign.name}</span>
                      {campaign.isTracking && (
                        <span className="inline-flex text-xs text-green-600 items-center mt-1">
                          <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
                          LIMPEZA
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{campaign.budget}</TableCell>
                  <TableCell>{campaign.expenses}</TableCell>
                  <TableCell className="text-center">{campaign.sales}</TableCell>
                  <TableCell className={`${campaign.roi >= '2.0' ? 'text-green-500' : ''} border-l border-gray-200`}>{campaign.roi}</TableCell>
                  <TableCell className="border-l border-gray-200">{campaign.cpa}</TableCell>
                  <TableCell className="border-l border-gray-200">{campaign.revenue}</TableCell>
                  <TableCell className={`${parseFloat(campaign.profit.replace('R$ ', '').replace(',', '.')) > 0 ? 'text-green-500' : ''} border-l border-gray-200`}>
                    {campaign.profit}
                  </TableCell>
                  <TableCell className={`${campaign.roas >= '2.0' ? 'text-green-500' : ''} border-l border-gray-200`}>{campaign.roas}</TableCell>
                  <TableCell className="text-green-500 border-l border-gray-200">{campaign.margin}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ScrollArea>
      
      {/* Fixed footer with totals and horizontal scroll */}
      <div className="border-t overflow-x-auto">
        <div className="min-w-[1200px]"> {/* Match the width with the table above */}
          <Table>
            <TableBody>
              <TableRow className="bg-gray-50 font-medium">
                <TableCell></TableCell>
                <TableCell className="text-gray-600">N/A</TableCell>
                <TableCell className="text-gray-600">38 CAMPANHAS</TableCell>
                <TableCell>{totalRow.budget}</TableCell>
                <TableCell>{totalRow.expenses}</TableCell>
                <TableCell className="text-center">{totalRow.sales}</TableCell>
                <TableCell className={`text-green-500 border-l border-gray-200`}>{totalRow.roi}</TableCell>
                <TableCell className="border-l border-gray-200">{totalRow.cpa}</TableCell>
                <TableCell className="border-l border-gray-200">{totalRow.revenue}</TableCell>
                <TableCell className={`text-green-500 border-l border-gray-200`}>{totalRow.profit}</TableCell>
                <TableCell className={`text-green-500 border-l border-gray-200`}>{totalRow.roas}</TableCell>
                <TableCell className={`text-green-500 border-l border-gray-200`}>{totalRow.margin}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
