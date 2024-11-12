import React from 'react';

const Channels = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Canales</h2>
      <div className="space-y-6">
        <div className="bg-pink-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">¿A través de qué canales quieren los segmentos de clientes que lleguemos a ellos?</h3>
          <p className="text-gray-600">Medios telefónicos, correo y mensajería instantánea.</p>
        </div>
      </div>
    </div>
  );
}

export default Channels;