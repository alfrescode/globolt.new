import React from 'react';

const CustomerSegments = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Segmentos de Cliente</h2>
      <div className="space-y-6">
        <div className="bg-yellow-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Para quién estamos creando valor?</h3>
          <section id="segmento-clientes">
            <h2>Segmento de Clientes</h2>
            <p>
              Nos dirigimos principalmente a pequeñas y medianas empresas locales que buscan mejorar su visibilidad y adaptarse a la era digital. Nuestro enfoque está en aquellos comercios que carecen de una fuerte presencia online y enfrentan dificultades para atraer nuevos clientes debido a la alta competencia de grandes cadenas y plataformas de e-commerce.
            </p>
            <p>
              Nuestros clientes incluyen una variedad de sectores, como gastronomía, comercio minorista, salud y bienestar, servicios profesionales, educación, y productos artesanales. Nos enfocamos especialmente en negocios que están en riesgo de quiebra o que requieren un impulso adicional para mantenerse a flote, ofreciendo soluciones que les permitan aumentar sus ingresos y fortalecer su relación con la comunidad local.
            </p>
            <p>
              También trabajamos con emprendedores y nuevos negocios que desean una entrada exitosa al mercado, brindándoles las herramientas y el apoyo necesarios para posicionarse desde el inicio. Nuestro segmento de clientes comparte la necesidad de soluciones accesibles y efectivas que les permitan competir con empresas más grandes y aprovechar el crecimiento del comercio digital.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

export default CustomerSegments;