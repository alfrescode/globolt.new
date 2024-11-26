import React from 'react'

function Presupuesto() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Categoría</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Descripción</th>
            <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Costes Estimados (€)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900" colSpan="3">1. Costes Fijos</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-700">Alquiler/Espacio</td>
            <td className="px-6 py-4 text-sm text-gray-600">Oficina compartida (coworking)</td>
            <td className="px-6 py-4 text-sm text-gray-700 text-right">300</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-700">Equipos y Software</td>
            <td className="px-6 py-4 text-sm text-gray-600">Hardware y herramientas de desarrollo</td>
            <td className="px-6 py-4 text-sm text-gray-700 text-right">8.000</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-700">Personal</td>
            <td className="px-6 py-4 text-sm text-gray-600">4 desarrolladores (salario mensual)</td>
            <td className="px-6 py-4 text-sm text-gray-700 text-right">8.000</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-700">Servicios Básicos</td>
            <td className="px-6 py-4 text-sm text-gray-600">Internet, servicios cloud, hosting</td>
            <td className="px-6 py-4 text-sm text-gray-700 text-right">500</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900" colSpan="3">2. Costes Variables</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-700">Marketing Digital</td>
            <td className="px-6 py-4 text-sm text-gray-600">SEO, SEM y redes sociales</td>
            <td className="px-6 py-4 text-sm text-gray-700 text-right">1.500</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-700">Mantenimiento</td>
            <td className="px-6 py-4 text-sm text-gray-600">Actualizaciones y soporte técnico</td> 
            <td className="px-6 py-4 text-sm text-gray-700 text-right">500</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-700">Gastos Administrativos</td>
            <td className="px-6 py-4 text-sm text-gray-600">Gestión y trámites legales</td>
            <td className="px-6 py-4 text-sm text-gray-700 text-right">100</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900" colSpan="3">3. Ingresos Estimados</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-700">Suscripciones Premium</td>
            <td className="px-6 py-4 text-sm text-gray-600">Negocios destacados (mensual)</td>
            <td className="px-6 py-4 text-sm text-gray-700 text-right">3.000</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-700">Crowdfounding</td>
            <td className="px-6 py-4 text-sm text-gray-600">Inversión en proyectos innovadores</td>
            <td className="px-6 py-4 text-sm text-gray-700 text-right">5.000</td>
          </tr>
          <tr>
            <td className='px-6 py-4 text-sm text-gray-700'>Subvenciones del Gobierno</td>
            <td className='px-6 py-4 text-sm text-gray-600'>Inversion del estado en proyectos tecnológicos</td>
            <td className='px-6 py-4 text-sm text-gray-700 text-right'>4.000</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-700">Servicios Adicionales</td>
            <td className="px-6 py-4 text-sm text-gray-600">Grandes proyectos a peticion de grandes clientes</td>
            <td className="px-6 py-4 text-sm text-gray-700 text-right">5.000</td>
          </tr>
          <tr className="bg-gray-100 font-semibold">
            <td className="px-6 py-4 text-sm text-gray-900">Total Costes Mensuales</td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4 text-sm text-gray-900 text-right">6.500</td>
          </tr>
          <tr className="bg-gray-100 font-semibold">
            <td className="px-6 py-4 text-sm text-gray-900">Total Ingresos Estimados</td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4 text-sm text-gray-900 text-right">8.500</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Presupuesto