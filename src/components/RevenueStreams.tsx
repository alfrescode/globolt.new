import React from 'react';

const RevenueStreams = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Fuentes de Ingresos</h2>
      <div className="space-y-6">
        <div className="bg-teal-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Por qué valor están realmente dispuestos a pagar nuestros clientes?</h3>
          <section id="fuente-ingresos">
            <h2>Fuente de Ingresos</h2>
            <p>
              Nuestras fuentes de ingresos provienen de diversos servicios diseñados para ayudar a las pequeñas y medianas empresas locales a mejorar su presencia en línea, atraer nuevos clientes y aumentar sus ventas. A continuación, detallamos las principales fuentes de ingresos de nuestro modelo de negocio:
            </p>
            <p>
              <strong>1. Servicios de Desarrollo Web:</strong> Ofrecemos la creación y mantenimiento de sitios web personalizados para negocios locales. Estos servicios incluyen diseño de página web, integración de e-commerce, optimización para motores de búsqueda (SEO) y diseño responsivo. Este es uno de nuestros principales generadores de ingresos.
            </p>
            <p>
              <strong>2. Gestión de Redes Sociales:</strong> Brindamos servicios de gestión y optimización de redes sociales para empresas que necesitan aumentar su presencia en plataformas como Facebook, Instagram, LinkedIn, y Twitter. Esto incluye la creación de contenido, la programación de publicaciones, el manejo de comunidades y la gestión de campañas publicitarias.
            </p>
            <p>
              <strong>3. Consultoría y Estrategia Digital:</strong> Ofrecemos servicios de asesoría estratégica para ayudar a las empresas a definir su presencia online, mejorar su marketing digital y maximizar sus oportunidades de crecimiento. Este servicio incluye auditorías digitales, análisis de mercado y planes personalizados de marketing digital.
            </p>
            <p>
              <strong>4. Publicidad Online:</strong> Generamos ingresos mediante la gestión de campañas de publicidad digital para nuestros clientes, utilizando plataformas como Google Ads y Facebook Ads. Ayudamos a los negocios a llegar a su público objetivo de manera más efectiva a través de anuncios pagos por clic (PPC), lo que les permite obtener resultados medibles.
            </p>
            <p>
              <strong>5. Capacitación y Formación:</strong> Proporcionamos programas de formación para que los negocios puedan mejorar sus habilidades digitales. Estos incluyen talleres de marketing digital, manejo de redes sociales, SEO, y herramientas de análisis de datos. Los cursos son tanto presenciales como virtuales y pueden ser personalizados según las necesidades de cada cliente.
            </p>
            <p>
              <strong>6. Suscripciones y Planes de Mantenimiento:</strong> Ofrecemos planes de suscripción mensual o anual para mantenimiento continuo de sitios web, optimización SEO, actualización de contenido y gestión de campañas publicitarias. Estos planes aseguran que los negocios mantengan su presencia digital actualizada y en constante crecimiento.
            </p>
          </section>

        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribución de Ingresos</h3>
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e5e7eb" strokeWidth="20" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#14b8a6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="143.184" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#06b6d4" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="191.912" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0ea5e9" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="216.032" />
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