
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { productSalesData } from '@/data/dashboardData';

const ProductSalesChart = () => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Vendas por Produto</span>
          <span className="text-xs text-gray-400">(clique para filtrar)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {productSalesData.map((product, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-marketing-blue"></span>
                <span className="text-sm">{product.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">{product.sales}</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-marketing-blue h-2 rounded-full" 
                    style={{ width: product.percentage }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">{product.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductSalesChart;
