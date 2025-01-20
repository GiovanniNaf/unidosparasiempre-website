import React from 'react';

const TeamMemberCard = ({ name, position, degree, image }) => (
  <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
    {/* Contenedor de la imagen con overlay en hover */}
    <div className="relative overflow-hidden">
      <img
        src={image || "/api/placeholder/300/300"}
        alt={name}
        className="w-full h-auto object-contain object-center transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </div>
    
    {/* Información del miembro del equipo */}
    <div className="p-6">
      {/* Línea decorativa que se expande en hover */}
      <div className="h-1 w-12 bg-blue-500 rounded-full mb-4 group-hover:w-16 transition-all duration-300" />
      
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-sm sm:text-base text-blue-600 font-medium mb-2">{position}</p>
      <p className="text-xs sm:text-sm text-gray-600">{degree}</p>
    </div>
  </div>
);

const ClinicalTeam = () => {
  const teamMembers = [
    {
      name: "Armando Pino Camacho",
      position: "Director",
      degree: "Diplomado en Neurofisiologia en Adicciones - CENPECH",
      image: "/images/APC.avif"
    },
    {
      name: "Dr. Martin Hernandez",
      position: "Responsable Clinico Areá de Hombres",
      degree: "Ced. Prof: 12145523",
      image: "/images/martin.avif"
    },
    {
      name: "Lic. Maria de Lourdes Gomez Morales",
      position: "Responsable Área de Psicologia",
      degree: "Ced. Prof: 9864799",
      image: "/images/Lourdes.avif"
    },
    {
      name: "Lic. Luis Enrique Hernandez de la Cruz",
      position: "Responsable Área de Psilogia",
      degree: "Ced. Prof: 11817177",
      image: "/images/Luis.avif"
    },
    {
      name: "Lic. Martin Toledo Lievano",
      position: "Coordinador General",
      degree: "Ced. Prof: 13413292",
      image: "/images/Martin2.avif"
    },
    {
      name: "Jorge Arturo Valle",
      position: "Coordinador Adjuto",
      degree: "Diplomado CENAD",
      image: "/images/Arturo.avif"
    },
    {
      name: "Dra. Veronica Peréz Aquino",
      position: "Responsable Clinica Área de Mujeres",
      degree: "Ced. Prof: 3579276",
      image: "/images/Veronica.avif"
    },
    {
      name: "Martina Gabriel Soriano",
      position: "Coordinadora de Área de Mujeres",
      degree: "Diplomado CENAD",
      image: "/images/Martina.avif"
    }
  ];

  return (
    <section className="py-20 bg-blue-800 bg-opacity-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nuestro Equipo Clínico
          </h2>
          <p className="text-sm sm:text-base text-white max-w-2xl mx-auto">
            Contamos con profesionales altamente calificados y comprometidos con tu bienestar. 
            Cada miembro de nuestro equipo aporta experiencia especializada para tu recuperación.
          </p>
        </div>

        {/* Grid de miembros del equipo */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              position={member.position}
              degree={member.degree}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalTeam;
