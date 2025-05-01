
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import ProductsTable from '@/components/ProductsTable';

const Products = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-8 text-white">Relatórios - Produtos</h1>
        <ProductsTable />
      </div>
    </DashboardLayout>
  );
};

export default Products;
