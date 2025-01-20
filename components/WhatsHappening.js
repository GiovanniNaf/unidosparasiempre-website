// components/WhatsHappening.js
const WhatsHappening = () => {
    return (
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold"><span className="text-white">¿Qué está pasando en</span> <span className="text-green-600">Unidos Para Siempre?</span></h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Primera tarjeta con video */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-96 sm:max-w-full mx-auto">
              <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://drive.google.com/file/d/1-ioYPQ7Ch3oCUWw_0nRsOc2zls4aV6GB/preview"
                  title="Evento 1"
                  frameBorder="0"
                  allow="autoplay"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Celebración de Navidad 2025</h3>
              <p className="mt-2 text-gray-600">Descubre los momentos destacados de nuestra cena navideña.</p>
            </div>
  
            {/* Segunda tarjeta con video */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-96 sm:max-w-full mx-auto">
              <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://drive.google.com/file/d/1zkdj2i70BsuSQjUL7tHp6CSgYdZUxCIO/preview"
                  title="Evento 2"
                  frameBorder="0"
                  allow="autoplay"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Día de Muertos</h3>
              <p className="mt-2 text-gray-600">
                Momentos especiales compartidos entre nuestros miembros y sus seres queridos, honrando la memoria de los que ya no están.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhatsHappening;
  