import React, { useState, useEffect } from 'react';

const HeaderBannerCarrousel = () => {
  const banners = [
    {
      title: "Urgencias las 24 horas los 365 dias del año",
      description: "Llama y nosotros con gusto te atenderemos",
    },
    {
      title: "Cuotas de Apoyo",
      description: "Si requieres un cuota de apoyo contactanos.",
    },
    {
      title: "Juntos hacia la Esperanza",
      description: "Acompañamos tu proceso de recuperación paso a paso.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para pasar al siguiente banner
  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Auto-cambio de banner cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner();
    }, 6000); // 3000ms = 3 segundos
    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <section className="relative w-full h-[75px] bg-green-600 overflow-hidden">
      {/* Contenedor del carrousel con deslizamiento */}
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Deslizar los banners
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full flex flex-col justify-center items-center text-center px-4 py-2"
          >
            <h2 className="text-2xl font-bold text-gray-800">{banner.title}</h2>
            <p className="text-sm text-white mt-2">{banner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeaderBannerCarrousel;
