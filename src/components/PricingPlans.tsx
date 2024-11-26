import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Plan Básico',
    price: '50€ - 200€',
    color: 'blue',
    features: [
      'Publicación ocasional en redes sociales',
      'Optimización básica de presencia en línea',
      'Visibilidad en directorios locales'
    ],
    description: 'Enfocado a sectores con márgenes ajustados como alimentación, tiendas de conveniencia, talleres de reparación, y papelerías.'
  },
  {
    name: 'Plan Medio',
    price: '100€ - 300€',
    color: 'purple',
    features: [
      'Publicidad básica en redes sociales y Google',
      'Creación de contenido mensual',
      'Marketing por email',
      'Mensajes promocionales'
    ],
    description: 'Ideal para tiendas de ropa, floristerías, tiendas de artículos de hogar, y peluquerías.'
  },
  {
    name: 'Plan Avanzado',
    price: '150€ - 400€',
    color: 'green',
    features: [
      'Publicidad regular en redes sociales y Google',
      'Análisis mensual de impacto',
      'Optimización SEO básica',
      'Página web propia personalizable'
    ],
    description: 'Enfocado a negocios que dependen de la visibilidad online, como restaurantes, gimnasios, y centros de fitness.'
  },
  {
    name: 'Plan Completo',
    price: '1200€ inicial + 300€/mes',
    color: 'orange',
    features: [
      'Creación y diseño web completo',
      'Tienda online con PrestaShop',
      'SEO avanzado',
      'Marketing en redes sociales',
      'Mantenimiento técnico continuo'
    ],
    description: 'Para sectores que buscan una presencia en línea robusta y continua, con márgenes adecuados para soportar un coste más alto.'
  }
];

const PricingPlans = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Planes y Tarifas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl shadow-md overflow-hidden border-t-4 ${
              plan.color === 'blue' ? 'border-blue-500' :
              plan.color === 'purple' ? 'border-purple-500' :
              plan.color === 'green' ? 'border-green-500' :
              'border-orange-500'
            }`}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <div className="text-2xl font-bold mb-4">
                {plan.price}
              </div>
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">{plan.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;