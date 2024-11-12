import React from 'react';

const RevenueStreams = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Fuentes de Ingresos</h2>
      <div className="space-y-6">
        <div className="bg-teal-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Por qué valor están realmente dispuestos a pagar nuestros clientes?</h3>
          <p className="text-gray-600">Web tipo blog 15€/mes. Web 2 subdominios 30€/mes. Web personalizada con actualizaciones 130€/mes (150 antes).</p>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribución de Ingresos</h3>
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e5e7eb" strokeWidth="20"/>
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="0"/>
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#14b8a6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="143.184"/>
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#06b6d4" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="191.912"/>
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0ea5e9" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="216.032"/>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500">Total</div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Venta de Productos (43%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Servicios (24%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Suscripciones (19%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-sky-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Consultoría (14%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueStreams;