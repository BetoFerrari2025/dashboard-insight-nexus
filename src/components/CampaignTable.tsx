
import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Info } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

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
  totalSales?: string;
};

export const CampaignTable = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: '1',
      name: 'LOVE/ CBO - SEMELHANTE 1% 30D [01/05/25]',
      status: 'active',
      budget: 'R$ 7,00 Diário',
      expenses: 'R$ 0,71',
      sales: 0,
      roi: '0,00',
      cpa: 'N/A',
      revenue: 'R$ 0,00',
      profit: 'R$ -0,71',
      roas: '0,00',
      margin: 'N/A'
    },
    {
      id: '2',
      name: 'LOVE/ CBO 35a55 - [01/05/25] VÍDEO 02 — Cópia',
      status: 'active',
      budget: 'R$ 18,50 Diário',
      expenses: 'R$ 0,29',
      sales: 0,
      roi: '0,00',
      cpa: 'N/A',
      revenue: 'R$ 0,00',
      profit: 'R$ -0,29',
      roas: '0,00',
      margin: 'N/A'
    },
    {
      id: '3',
      name: 'LOVE/ CBO 35a55 - [01/05/25] VÍDEO 02',
      status: 'active',
      budget: 'R$ 18,00 Diário',
      expenses: 'R$ 0,14',
      sales: 0,
      roi: '0,00',
      cpa: 'N/A',
      revenue: 'R$ 0,00',
      profit: 'R$ -0,14',
      roas: '0,00',
      margin: 'N/A'
    },
    {
      id: '4',
      name: 'SECRETLOVE/ CBO VIDEO-03 ATIVO [27/04/25]',
      status: 'active',
      budget: 'R$ 55,24 Diário',
      expenses: 'R$ 0,19',
      sales: 0,
      roi: '0,00',
      cpa: 'N/A',
      revenue: 'R$ 0,00',
      profit: 'R$ -0,19',
      roas: '0,00',
      margin: 'N/A'
    },
  ]);

  // Total row calculation
  const totalRow = {
    budget: 'R$ 98,00',
    expenses: 'R$ 1,33',
    sales: 0,
    roi: '0,00',
    cpa: 'N/A',
    revenue: 'R$ 0,00',
    profit: 'R$ -1,33',
    roas: '0,00',
    margin: 'N/A'
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
          <div className="overflow-x-auto" style={{ maxHeight: 'calc(100vh - 350px)' }}>
            <ResizablePanelGroup direction="horizontal">
              <Table className="table-fixed">
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-10 sticky left-0 bg-gray-50 z-20 border-r border-gray-300">
                      <Checkbox />
                    </TableHead>
                    <ResizablePanel defaultSize={10} minSize={5}>
                      <TableHead className="font-medium text-xs text-gray-600 sticky left-[41px] bg-gray-50 z-20 border-r border-gray-300">STATUS</TableHead>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={25} minSize={15}>
                      <TableHead className="font-medium text-xs text-gray-600 sticky left-[125px] bg-gray-50 z-20 min-w-[250px] border-r border-gray-300">CAMPANHA</TableHead>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={10} minSize={8}>
                      <TableHead className="font-medium text-xs text-gray-600 border-r border-gray-300">ORÇAMENTO</TableHead>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={8} minSize={5}>
                      <TableHead className="font-medium text-xs text-gray-600 border-r border-gray-300">GASTOS</TableHead>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={8} minSize={5}>
                      <TableHead className="font-medium text-xs text-gray-600 text-center border-r border-gray-300">VENDAS</TableHead>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={8} minSize={5}>
                      <TableHead className="font-medium text-xs text-gray-600 border-r border-gray-300">
                        <div className="flex items-center">
                          ROI <Info className="h-4 w-4 ml-1 text-gray-400" />
                        </div>
                      </TableHead>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={8} minSize={5}>
                      <TableHead className="font-medium text-xs text-gray-600 border-r border-gray-300">
                        <div className="flex items-center">
                          CPA <Info className="h-4 w-4 ml-1 text-gray-400" />
                        </div>
                      </TableHead>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={10} minSize={8}>
                      <TableHead className="font-medium text-xs text-gray-600 border-r border-gray-300">
                        <div className="flex items-center">
                          FATURAMENTO <Info className="h-4 w-4 ml-1 text-gray-400" />
                        </div>
                      </TableHead>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={8} minSize={5}>
                      <TableHead className="font-medium text-xs text-gray-600 border-r border-gray-300">
                        <div className="flex items-center">
                          LUCRO <Info className="h-4 w-4 ml-1 text-gray-400" />
                        </div>
                      </TableHead>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={8} minSize={5}>
                      <TableHead className="font-medium text-xs text-gray-600 border-r border-gray-300">
                        <div className="flex items-center">
                          ROAS <Info className="h-4 w-4 ml-1 text-gray-400" />
                        </div>
                      </TableHead>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={8} minSize={5}>
                      <TableHead className="font-medium text-xs text-gray-600 border-r border-gray-300">
                        <div className="flex items-center">
                          MARGEM <Info className="h-4 w-4 ml-1 text-gray-400" />
                        </div>
                      </TableHead>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={8} minSize={5}>
                      <TableHead className="font-medium text-xs text-gray-600">VENDAS TOTAIS</TableHead>
                    </ResizablePanel>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.id} className="border-b">
                      <TableCell className="sticky left-0 bg-white z-10 border-r border-gray-200">
                        <Checkbox />
                      </TableCell>
                      <TableCell className="sticky left-[41px] bg-white z-10 border-r border-gray-200">
                        <div className="flex justify-center">
                          <Switch 
                            checked={campaign.status === 'active'} 
                            onCheckedChange={() => toggleCampaignStatus(campaign.id)}
                            className="data-[state=checked]:bg-blue-600"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="sticky left-[125px] bg-white z-10 border-r border-gray-200">
                        <div className="font-medium text-xs">
                          {campaign.name.replace(/\[([^\]]+)\]/, (_, match) => (
                            `[${match}]`
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-xs border-r border-gray-200">{campaign.budget}</TableCell>
                      <TableCell className="text-xs border-r border-gray-200">{campaign.expenses}</TableCell>
                      <TableCell className="text-center text-xs border-r border-gray-200">{campaign.sales}</TableCell>
                      <TableCell className="text-xs text-red-500 border-r border-gray-200">{campaign.roi}</TableCell>
                      <TableCell className="text-xs border-r border-gray-200">{campaign.cpa}</TableCell>
                      <TableCell className="text-xs border-r border-gray-200">{campaign.revenue}</TableCell>
                      <TableCell className="text-xs text-red-500 border-r border-gray-200">{campaign.profit}</TableCell>
                      <TableCell className="text-xs text-red-500 border-r border-gray-200">{campaign.roas}</TableCell>
                      <TableCell className="text-xs border-r border-gray-200">{campaign.margin}</TableCell>
                      <TableCell className="text-xs">{campaign.totalSales || ''}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
      
      {/* Fixed footer with totals and horizontal scroll */}
      <div className="border-t bg-gray-50">
        <div className="overflow-x-auto" style={{ overflowY: 'hidden', display: 'block', width: '100%', position: 'relative' }}>
          <Table>
            <TableBody>
              <TableRow className="bg-gray-50 font-medium">
                <TableCell className="sticky left-0 bg-gray-50 z-10 border-r border-gray-300"></TableCell>
                <TableCell className="text-gray-600 sticky left-[41px] bg-gray-50 z-10 border-r border-gray-300">N/A</TableCell>
                <TableCell className="text-gray-600 sticky left-[125px] bg-gray-50 z-10 text-xs border-r border-gray-300">6 CAMPANHAS</TableCell>
                <TableCell className="text-xs border-r border-gray-300">{totalRow.budget}</TableCell>
                <TableCell className="text-xs border-r border-gray-300">{totalRow.expenses}</TableCell>
                <TableCell className="text-center text-xs border-r border-gray-300">{totalRow.sales}</TableCell>
                <TableCell className="text-red-500 text-xs border-r border-gray-300">{totalRow.roi}</TableCell>
                <TableCell className="text-xs border-r border-gray-300">{totalRow.cpa}</TableCell>
                <TableCell className="text-xs border-r border-gray-300">{totalRow.revenue}</TableCell>
                <TableCell className="text-red-500 text-xs border-r border-gray-300">{totalRow.profit}</TableCell>
                <TableCell className="text-red-500 text-xs border-r border-gray-300">{totalRow.roas}</TableCell>
                <TableCell className="text-xs border-r border-gray-300">{totalRow.margin}</TableCell>
                <TableCell className="text-xs"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        {/* Add explicit scrollbar area with minimum width */}
        <div className="w-full overflow-x-auto" style={{ minWidth: '100%', height: '8px' }}></div>
      </div>
    </div>
  );
};
