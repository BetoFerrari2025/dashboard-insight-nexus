
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FunnelChart } from "@/components/LandingFunnelChart";
import { ChevronRight, BarChart3, Target, TrendingUp, ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-40 h-10 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            Logo Trackify
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <Button variant="ghost">Recursos</Button>
          <Button variant="ghost">Preços</Button>
          <Button variant="ghost">Blog</Button>
          <Button variant="ghost">Contato</Button>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">Entrar</Button>
          <Button>Começar agora</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trackify - Rastreie suas vendas de forma precisa!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Rastreie suas vendas de forma precisa e escale 40% a mais, sem gastar mais dinheiro.
              Comece a escalar da forma correta em menos de 5 minutos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-marketing-blue hover:bg-blue-700">
                Começar gratuitamente
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Ver demonstração
              </Button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <FunnelChart />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Como o Trackify transforma seu marketing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma oferece todas as ferramentas necessárias para rastrear, analisar
            e otimizar suas campanhas de marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <Target className="h-6 w-6 text-marketing-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rastreamento Preciso</h3>
              <p className="text-gray-600">
                Saiba exatamente de onde vêm suas vendas com UTMs precisas e automáticas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-marketing-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Análise Detalhada</h3>
              <p className="text-gray-600">
                Visualize o desempenho das suas campanhas em painéis intuitivos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-marketing-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Otimização de ROI</h3>
              <p className="text-gray-600">
                Aumente seu retorno sobre investimento identificando os canais mais rentáveis.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-marketing-blue rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comece a otimizar suas campanhas hoje mesmo
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais de marketing que já transformaram
            seu desempenho com Trackify.
          </p>
          <Button size="lg" className="bg-white text-marketing-blue hover:bg-gray-100">
            Começar agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Recursos</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Preços</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Sobre nós</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Ajuda</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contato</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacidade</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Termos</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>© 2025 Trackify. Todos os direitos reservados.</p>
            {/* Área reservada para scripts de rastreamento */}
            <div id="tracking-scripts" className="hidden">
              {/* Scripts de rastreamento serão inseridos aqui */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
