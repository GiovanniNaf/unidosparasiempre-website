import React from 'react';

const tiposDeIngreso = [
  {
    tipo: "Voluntario",
    descripcion: "Cuando el usuario solicita recibir atención de manera voluntaria. Esto implica que la persona decide buscar ayuda por iniciativa propia.",
  },
  {
    tipo: "Situación de Urgencia",
    descripcion: "En casos donde un usuario necesita atención inmediata debido a una amenaza grave y directa para su seguridad o la de otras personas. Esto incluye situaciones críticas que requieren una intervención rápida.",
  },
  {
    tipo: "Obligatorio",
    descripcion: "Cuando una autoridad legal competente (como un juez o médico) solicita que se brinde atención a un usuario, en situaciones donde la ley lo requiere.",
  },
];

const TiposDeIngreso = () => {
  return (
    <section className="py-20 bg-blue-800 mh-[90vh]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-4xl font-bold text-center mb-6">
          <span className="text-white">Tipos de</span> <span className="text-green-500">Ingreso</span>
        </h2>

        {/* Grid de tipos de ingreso */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {tiposDeIngreso.map((ingreso, index) => (
            <div
              key={index}
              className="bg-blue-800 p-6 " // Se eliminó shadow-md
            >
              <h3 className="text-xl text-center font-bold text-green-500 mb-2">{ingreso.tipo}</h3>
              <p className="text-white text-center text-base">{ingreso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TiposDeIngreso;
