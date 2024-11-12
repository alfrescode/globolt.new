import React from 'react';

const CustomerSegments = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Segmentos de Cliente</h2>
      <div className="space-y-6">
        <div className="bg-yellow-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Para quién estamos creando valor?</h3>
          <p className="text-gray-600">Para las pequeñas PYMES que necesitan actualizarse con medios digitales, dándoles visibilidad.</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerSegments;