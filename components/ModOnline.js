import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
    <div className="mb-4 text-green-400">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-blue-100">{description}</p>
  </div>
);

const ModalidadOnline = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Videollamadas HD",
      description: "Sesiones con calidad profesional y conexión estable"
    },
    {
      icon: (
        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Horario Flexible",
      description: "Agenda en el momento que mejor te convenga"
    },
    {
      icon: (
        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "100% Seguro",
      description: "Conexión encriptada y totalmente privada"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fondo con gradiente y efecto de blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Terapia <span className="text-green-400 inline-block hover:transform hover:scale-110 transition-transform duration-300">Online</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
            Accede a atención psicológica profesional desde la comodidad de tu hogar. 
            Sesiones seguras y confidenciales con la misma calidad que una consulta presencial.
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid text-center grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Botón de llamada a la acción */}
        <div className="text-center">
          <a 
            href="/Online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-400 to-green-500 text-white py-4 px-8 rounded-full text-xl font-semibold hover:from-green-500 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Agenda tu primera sesión
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ModalidadOnline;