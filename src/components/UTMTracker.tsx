
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface UTMData {
  utms?: {
    utm_campaign?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_content?: string;
    utm_term?: string;
  };
  page: string;
  timestamp: string;
}

const UTMTracker: React.FC = () => {
  const [utmData, setUtmData] = useState<UTMData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUTMData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Replace with your actual API endpoint
        const response = await fetch('https://seu-backend.cartzap.com.br/api/utm-tracks');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setUtmData(data);
      } catch (err) {
        setError('Erro ao carregar dados. Verifique a conexão com a API.');
        console.error('Error fetching UTM data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUTMData();
  }, []);

  return (
    <Card className="bg-white dark:bg-[#273149] shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-500 dark:text-gray-300">Parâmetros UTM Capturados</CardTitle>
        <CardDescription className="text-gray-400 dark:text-gray-400">
          Veja aqui os parâmetros que chegaram ao sistema pelos seus links de divulgação.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && <div className="text-gray-500 dark:text-gray-300">🔄 Buscando dados...</div>}
        
        {error && <div className="text-red-500">{error}</div>}
        
        {!isLoading && !error && utmData.length === 0 && (
          <div className="text-gray-500 dark:text-gray-300">Nenhum dado de UTM foi recebido ainda.</div>
        )}
        
        {!isLoading && !error && utmData.length > 0 && (
          <div className="space-y-3">
            {utmData.map((item, index) => (
              <div key={index} className="mb-4 p-3 bg-gray-900 rounded text-sm text-white">
                <strong>#{index + 1}</strong><br />
                <strong>Campanha:</strong> {item.utms?.utm_campaign || '-'}<br />
                <strong>Fonte:</strong> {item.utms?.utm_source || '-'}<br />
                <strong>Mídia:</strong> {item.utms?.utm_medium || '-'}<br />
                <strong>Conteúdo:</strong> {item.utms?.utm_content || '-'}<br />
                <strong>Termo:</strong> {item.utms?.utm_term || '-'}<br />
                <strong>Página:</strong> <a href={item.page} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{item.page}</a><br />
                <strong>Data:</strong> {new Date(item.timestamp).toLocaleString()}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UTMTracker;
