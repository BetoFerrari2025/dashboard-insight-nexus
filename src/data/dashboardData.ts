
export const kpiData = {
  netRevenue: 'R$ 314,38',
  adSpend: 'R$ 271,24',
  roas: '1.16',
  profit: 'R$ 43,14',
  pendingOrders: 'R$ 44,70',
  margin: '13.7%',
  cpa: 'R$ 13,56',
  productCosts: 'R$ 0,40',
  roi: '1.16',
  arpu: 'R$ 15,72',
  taxes: 'R$ 0,00',
};

export const paymentData = {
  total: 20,
  methods: [
    { name: 'Pix', percentage: 85, color: '#0E65F5' },
    { name: 'Cartão', percentage: 10, color: '#17BECF' },
    { name: 'Boleto', percentage: 5, color: '#FFBB28' },
    { name: 'Outros', percentage: 0, color: '#FF8042' },
  ],
};

export const productSalesData = [
  { name: 'Bíblia para colorir Combo 2 em 1', sales: 11, percentage: '44.0%' },
  { name: 'Bíblia para colorir', sales: 4, percentage: '16.0%' },
  { name: 'FABRICA LIMPEZA LUCRATIVA - UP', sales: 2, percentage: '8.0%' },
];

export const funnelData = {
  clicks: 1000,
  visits: 500,
  leads: 200,
  pendingSales: 50,
  approvedSales: 20,
};

export const approvalRate = {
  cardRatio: 'N/A',
};

export const visitsChartData = [
  { date: '01/04', visits: 120 },
  { date: '02/04', visits: 145 },
  { date: '03/04', visits: 180 },
  { date: '04/04', visits: 130 },
  { date: '05/04', visits: 200 },
];

export const trafficSourcesData = [
  { source: 'Facebook', percentage: 60, color: '#1877F2' },
  { source: 'Google', percentage: 25, color: '#4285F4' },
  { source: 'Direct', percentage: 10, color: '#34A853' },
  { source: 'Other', percentage: 5, color: '#EA4335' },
];

export const campaignData = [
  { 
    name: 'Facebook Campaign 1', 
    status: 'active',
    spend: 'R$ 120,50',
    clicks: 350,
    conversions: 12,
    cpa: 'R$ 10,04'
  },
  { 
    name: 'Google Ads Search', 
    status: 'active',
    spend: 'R$ 85,40',
    clicks: 220,
    conversions: 8,
    cpa: 'R$ 10,67'
  },
  { 
    name: 'Instagram Stories', 
    status: 'paused',
    spend: 'R$ 65,34',
    clicks: 180,
    conversions: 5,
    cpa: 'R$ 13,06'
  }
];
