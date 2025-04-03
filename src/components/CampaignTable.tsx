
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { campaignData } from '@/data/dashboardData';

const CampaignTable = () => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-gray-500">Campanhas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="pb-2 text-left font-medium">Campanha</th>
                <th className="pb-2 text-left font-medium">Status</th>
                <th className="pb-2 text-right font-medium">Gasto</th>
                <th className="pb-2 text-right font-medium">Cliques</th>
                <th className="pb-2 text-right font-medium">Conversões</th>
                <th className="pb-2 text-right font-medium">CPA</th>
              </tr>
            </thead>
            <tbody>
              {campaignData.map((campaign, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-3">{campaign.name}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      campaign.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {campaign.status === 'active' ? 'Ativo' : 'Pausado'}
                    </span>
                  </td>
                  <td className="py-3 text-right">{campaign.spend}</td>
                  <td className="py-3 text-right">{campaign.clicks}</td>
                  <td className="py-3 text-right">{campaign.conversions}</td>
                  <td className="py-3 text-right">{campaign.cpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignTable;
