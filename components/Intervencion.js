import React from 'react';

const ProgramaIntervencion = () => {
  return (
    <section className="py-20 bg-blue-800 mh-[100vh]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Programa de <span className="text-green-500">Intervención en Crisis</span>
          </h2>
        </div>

        {/* Contenido del programa */}
        <div className="bg-blue-100 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué es?</h3>
          <p className="text-gray-700 mb-6">
            Es un modelo de intervención para acercarse al adicto ayudando a las familias a lograr que sus seres queridos puedan vencer sus resistencias y convencerlas de recibir tratamiento.
          </p>
          <p className="text-gray-700 mb-6">
            A través de un equipo multidisciplinario, familiares, amigos, miembros de la comunidad que sean significantes, acompañados por un profesional en las adicciones especialmente entrenado para tal caso.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Cómo contratarlo?</h3>
          <p className="text-gray-700 mb-6">
            Llame a nuestra línea de ayuda. Estamos disponibles las 24 horas del día, los 7 días de la semana, para atender cualquier emergencia. Podemos ir a cualquier parte de la república.
          </p>
          <p className="text-gray-700 mb-6">
            Los costos difieren de acuerdo a presupuesto y plan de intervención.
          </p>

          {/* Botón para contactar */}
          <div className="text-center">
            <a
              href="/contacto"
              className="bg-green-500 text-white py-3 px-8 rounded-lg text-base font-semibold hover:bg-green-600 transition duration-300"
            >
              Llame a nuestra línea de ayuda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramaIntervencion;
