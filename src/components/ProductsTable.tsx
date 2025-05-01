
import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface Product {
  id: string;
  nome: string;
  preco: number;
  custo: number | null;
}

const ProductsTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const { data, error } = await supabase
          .from('produtos')
          .select('*');
          
        if (error) {
          throw error;
        }
        
        setProducts(data || []);
      } catch (err: any) {
        setError(err.message || 'Erro ao carregar dados dos produtos.');
        console.error('Error fetching products:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => 
    product.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="bg-white dark:bg-[#273149] shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-500 dark:text-gray-300">Produtos</CardTitle>
        <CardDescription className="text-gray-400 dark:text-gray-400">
          Lista de produtos cadastrados no sistema
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={18} />
          <Input 
            placeholder="Buscar produtos..." 
            className="pl-10 bg-gray-100 dark:bg-[#1a2236] border-gray-300 dark:border-[#3d4a6a] text-gray-800 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {isLoading && <div className="text-gray-500 dark:text-gray-300">🔄 Carregando produtos...</div>}
        
        {error && <div className="text-red-500">{error}</div>}
        
        {!isLoading && !error && filteredProducts.length === 0 && (
          <div className="text-gray-500 dark:text-gray-300">
            {searchTerm ? 'Nenhum produto encontrado com este termo.' : 'Nenhum produto cadastrado ainda.'}
          </div>
        )}
        
        {!isLoading && !error && filteredProducts.length > 0 && (
          <div className="border rounded-md overflow-hidden dark:border-gray-700">
            <Table>
              <TableHeader className="bg-gray-50 dark:bg-[#1a2236]">
                <TableRow>
                  <TableHead className="text-gray-700 dark:text-gray-300">Nome</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Preço</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Custo</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Margem</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id} className="hover:bg-gray-50 dark:hover:bg-[#1e2a45]">
                    <TableCell className="font-medium dark:text-white">{product.nome}</TableCell>
                    <TableCell className="dark:text-gray-300">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.preco)}
                    </TableCell>
                    <TableCell className="dark:text-gray-300">
                      {product.custo !== null 
                        ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.custo)
                        : '-'}
                    </TableCell>
                    <TableCell>
                      {product.custo !== null && product.preco > 0
                        ? <span className="text-marketing-green">
                            {(((product.preco - product.custo) / product.preco) * 100).toFixed(2)}%
                          </span>
                        : '-'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductsTable;
