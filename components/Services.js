import React from 'react';

const ServiceCard = ({ title, description, icon }) => (
  <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100">
    <div className="flex flex-col items-center space-y-4">
      {/* Círculo del ícono con efecto hover */}
      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
        {icon}
      </div>
      
      {/* Título con línea decorativa */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
      </div>
      
      {/* Descripción */}
      <p className="text-gray-600 text-center leading-relaxed">
        {description}
      </p>
      
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Clínica de Adicciones",
      description: "Ofrecemos un espacio seguro y profesional para abordar problemas de adicción y comenzar el camino hacia la recuperación.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V5a2 2 0 00-2-2H6a2 2 0 00-2 2v8M9 21h6m-3-4v4" />
        </svg>
      )
    },
    {
      title: "Atención Psicológica",
      description: "Sesiones personalizadas con especialistas para tratar los desafíos emocionales y mentales asociados a la recuperación.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M12 4h9m-4.5 0v16" />
        </svg>
      )
    },
    {
      title: "Prevención",
      description: "Educación y talleres enfocados en evitar la aparición de adicciones y fomentar un estilo de vida saludable.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6a3 3 0 013-3 3 3 0 013 3v13m6-13h-3M9 6H6" />
        </svg>
      )
    },
    {
      title: "Tratamiento",
      description: "Planes de tratamiento adaptados a las necesidades individuales de cada paciente, con un enfoque integral.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.586 4.586a2 2 0 01-.293 2.707l-3 3a2 2 0 01-2.707-.293L10 15m5-5l-4.586-4.586a2 2 0 00-2.707.293l-3 3a2 2 0 00.293 2.707L9 15" />
        </svg>
      )
    },
    {
      title: "Terapias Familiares",
      description: "Fortalecemos los vínculos familiares para crear un entorno de apoyo positivo durante el proceso de recuperación.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12h2M3 12h2m9-7v2m0 14v2M6.343 17.657l-1.414-1.414M17.657 6.343l-1.414-1.414" />
        </svg>
      )
    },
    {
      title: "Terapias Grupales",
      description: "Espacios de encuentro para compartir experiencias y motivarse mutuamente en un ambiente de comunidad.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10a4 4 0 10-8 0 4 4 0 008 0zm0 6H3m10-6a4 4 0 10-8 0 4 4 0 008 0zm0 6h-4m10-6a4 4 0 10-8 0 4 4 0 008 0zm0 6h-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className='text-white'>Nuestros</span> <span className='text-green-600'>Servicios</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Ofrecemos un enfoque integral para tu recuperación, combinando terapias individuales, familiares y grupales con apoyo constante.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
