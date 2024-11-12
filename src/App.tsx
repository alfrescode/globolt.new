import React, { useState } from 'react';
import { Menu, Home, Users, Activity, Target, Heart, Box, Phone, DollarSign, PieChart, Package } from 'lucide-react';
import Sidebar from './components/Sidebar';
import KeyPartners from './components/KeyPartners';
import KeyActivities from './components/KeyActivities';
import ValueProposition from './components/ValueProposition';
import CustomerRelationships from './components/CustomerRelationships';
import CustomerSegments from './components/CustomerSegments';
import KeyResources from './components/KeyResources';
import Channels from './components/Channels';
import CostStructure from './components/CostStructure';
import RevenueStreams from './components/RevenueStreams';
import PricingPlans from './components/PricingPlans';

function App() {
  const [activeSection, setActiveSection] = useState('keyPartners');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'keyPartners', label: 'Socios Clave', icon: Users },
    { id: 'keyActivities', label: 'Actividades Clave', icon: Activity },
    { id: 'valueProposition', label: 'Propuesta de Valor', icon: Target },
    { id: 'customerRelationships', label: 'Relaciones con Clientes', icon: Heart },
    { id: 'customerSegments', label: 'Segmentos de Cliente', icon: Box },
    { id: 'keyResources', label: 'Recursos Clave', icon: Box },
    { id: 'channels', label: 'Canales', icon: Phone },
    { id: 'costStructure', label: 'Estructura de Costes', icon: DollarSign },
    { id: 'revenueStreams', label: 'Fuentes de Ingresos', icon: PieChart },
    { id: 'pricingPlans', label: 'Planes y Tarifas', icon: Package },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'keyPartners':
        return <KeyPartners />;
      case 'keyActivities':
        return <KeyActivities />;
      case 'valueProposition':
        return <ValueProposition />;
      case 'customerRelationships':
        return <CustomerRelationships />;
      case 'customerSegments':
        return <CustomerSegments />;
      case 'keyResources':
        return <KeyResources />;
      case 'channels':
        return <Channels />;
      case 'costStructure':
        return <CostStructure />;
      case 'revenueStreams':
        return <RevenueStreams />;
      case 'pricingPlans':
        return <PricingPlans />;
      default:
        return <KeyPartners />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        menuItems={menuItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <header className="bg-white shadow-sm">
          <div className="flex items-center px-6 py-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="ml-4 text-xl font-semibold text-gray-800">
              Modelo de Negocio Canvas
            </h1>
          </div>
        </header>
        
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;