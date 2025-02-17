import { useRouter } from 'next/router';
import Header from '@/components/Header'; // Importa el Header
import Link from 'next/link'; // Para navegación sin recargar la página

// Datos de ejemplo para los posts del blog
const blogPosts = [
  {
    id: 1,
    title: "¿Qué es la adicción a las drogas?",
    excerpt: "La adicción se define como un trastorno crónico recurrente que se caracteriza por la búsqueda compulsiva de drogas, el uso continuo a pesar de las consecuencias dañinas y cambios duraderos en el cerebro.",
    date: "Armando Pino Camacho, 06 de Julio, 2022, 2 Min. de Lectura",
    category: "Adicciones",
    imageUrl: "https://cdn.karar.com/news/1639658.jpg",
    content: `
      <h2 class="text-2xl font-bold text-gray-800 mb-4">¿Qué es la adicción?</h2>
      <p class="mb-4">La adicción se define como un trastorno crónico recurrente que se caracteriza por la búsqueda compulsiva de drogas, el uso continuo a pesar de las consecuencias dañinas y cambios duraderos en el cerebro. Se considera tanto un trastorno cerebral complejo como una enfermedad mental.</p>
      
    
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Clasificación de los trastornos por uso de sustancias</h2>
      <p class="mb-4">NIDA utiliza el término adicción para describir la búsqueda compulsiva de drogas a pesar de las consecuencias negativas. Sin embargo, la adicción no es un diagnóstico específico en la quinta edición del Manual diagnóstico y estadístico de los trastornos mentales (DSM-5).</p>
      
      <img src="https://images.pexels.com/photos/4597937/pexels-photo-4597937.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Trastornos" class="w-full md:w-1/2 mx-auto my-6 rounded-lg shadow-md" />
      
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Consecuencias de la adicción</h2>
      <p class="mb-4">La adicción puede tener graves consecuencias en la vida de una persona, afectando su salud física, mental, relaciones y calidad de vida en general.</p>
    `,
  },
  {
    id: 2,
    title: "¿Qué es la codependencia?",
    excerpt: "La codependencia propiamente dicha comienza y es evidente en el círculo familiar y / o de pertenencia de un adicto, del que podemos ser parte cualquiera de nosotros...",
    date: "10 de Enero, 2025",
    category: "Emocional",
    imageUrl: "https://images.delfi.ee/media-api-image-cropper/v1/1e975429-70d0-41df-972c-f080d37d354b.jpg?w=1200&h=800",
    content: `
      <h2 class="text-2xl font-bold text-gray-800 mb-4">¿Qué es la codependencia?</h2>
      <p class="mb-4">La codependencia es un patrón de comportamiento en el que una persona prioriza las necesidades de los demás por encima de las propias, a menudo en detrimento de su bienestar emocional y físico.</p>
      
      <img src="https://images.pexels.com/photos/4597937/pexels-photo-4597937.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Codependencia" class="w-full md:w-1/2 mx-auto my-6 rounded-lg shadow-md" />
      
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Manifestaciones de la codependencia</h2>
      <p class="mb-4">Este comportamiento es común en familias donde hay adicciones, y puede manifestarse como una necesidad excesiva de control, dificultad para establecer límites y una baja autoestima.</p>
    `,
  },
  // Agrega más posts según sea necesario
];

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query; // Obtén el ID de la URL

  // Busca el post correspondiente en el array de blogPosts
  const post = blogPosts.find((post) => post.id === parseInt(id));

  // Si no se encuentra el post, muestra un mensaje
  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Post no encontrado</h1>
        <Link href="/blog">
          <span className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
            Volver al blog
          </span>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header /> {/* Incluir el Header en la página */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Encabezado del Post con imagen de fondo y degradado */}
        <div
          className="relative h-96 flex items-center justify-center mb-12 rounded-b-3xl overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(59, 130, 246, 0.7)), url(${post.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Título y categoría */}
          <div className="text-center text-white">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Contenido del Post */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <p className="text-gray-500 text-sm mb-2">{post.date}</p>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="mt-6">
              <Link href="/blog">
                <span className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  ← Volver al blog
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;