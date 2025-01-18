// components/Testimonials.js
// components/Testimonials.js
const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Historias de Éxito</h2>
        <div className="mt-8 space-y-4 sm:space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>"Gracias a Unidos Para Siempre, logré superar mis adicciones. Me siento renacido y con una nueva oportunidad de vida."</p>
            <span>- Juan Pérez</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>"El apoyo de la comunidad y el tratamiento fue fundamental para mi recuperación. ¡Recomiendo este centro al 100%!"</p>
            <span>- María López</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>"Aquí encontré el apoyo que necesitaba para empezar de nuevo. La terapia y el ambiente fueron claves para mi cambio."</p>
            <span>- Carlos Rodríguez</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
