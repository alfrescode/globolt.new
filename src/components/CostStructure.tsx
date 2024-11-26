import React from 'react';

const CostStructure = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Estructura de Costes</h2>
      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Cuáles son los costes más importantes inherentes a nuestro modelo de negocio?</h3>
          <section id="estructura-costes">
            <h2>Estructura de Costes</h2>
            <p>
              La estructura de costes es un componente fundamental de nuestro modelo de negocio, ya que nos permite gestionar de manera eficiente los recursos necesarios para ofrecer nuestros servicios a las pequeñas y medianas empresas locales. A continuación, detallamos los principales costes asociados con nuestra operación:
            </p>
            <p>
              <strong>1. Costes de Desarrollo y Mantenimiento de Plataforma:</strong> Incluyen los gastos asociados con el desarrollo, actualización y mantenimiento de nuestra plataforma digital. Esto cubre el pago a los desarrolladores, la infraestructura tecnológica, la seguridad de datos y las mejoras continuas de la plataforma.
            </p>
            <p>
              <strong>2. Costes de Marketing y Publicidad:</strong> Gastos destinados a campañas publicitarias en redes sociales, Google Ads y otras plataformas digitales. Estos costes incluyen la creación de anuncios, gestión de campañas, análisis de rendimiento y optimización de estrategias para aumentar la visibilidad de nuestros clientes.
            </p>
            <p>
              <strong>3. Costes de Personal:</strong> Incluye salarios y beneficios del equipo humano, como desarrolladores web, diseñadores gráficos, especialistas en marketing digital y personal de atención al cliente. Este coste es esencial para mantener la calidad del servicio y la satisfacción del cliente.
            </p>
            <p>
              <strong>4. Costes de Infraestructura y Herramientas Tecnológicas:</strong> Costes relacionados con el uso de servidores, software de gestión, herramientas de análisis de datos y otros recursos tecnológicos necesarios para ofrecer nuestros servicios de manera eficiente y a gran escala.
            </p>
            <p>
              <strong>5. Costes Operativos Generales:</strong> Incluye los gastos generales asociados con la administración del negocio, como alquiler de oficinas, suministros de oficina, servicios de telecomunicaciones y otros gastos operativos cotidianos.
            </p>
            <p>
              <strong>6. Costes de Formación y Capacitación:</strong> Gastos dedicados a la formación continua del equipo y a la capacitación de nuestros clientes en el uso de las herramientas digitales que ofrecemos. Esto incluye programas de capacitación interna, talleres y seminarios para mantenernos a la vanguardia de las últimas tendencias y tecnologías.
            </p>
          </section>

        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Desglose de Costes</h3>
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e5e7eb" strokeWidth="20" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ef4444" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f97316" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="150.72" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#eab308" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="201" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#22c55e" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="226.08" />
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
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Desarrollo (40%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Marketing (24%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Operaciones (20%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Soporte (16%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostStructure;