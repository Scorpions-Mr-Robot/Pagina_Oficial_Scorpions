
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Megaphone, Brain, ChevronRight } from "lucide-react";
import { ServiceDetailsDialog } from "@/components/ServiceDetailsDialog";

export function Home() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = React.useState(null);

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Diseño Web",
      description: "Sitios web modernos y responsivos",
      fullDescription: "Creamos sitios web modernos, responsivos y optimizados para SEO que ayudan a tu negocio a destacar en línea. Utilizamos las últimas tecnologías y mejores prácticas de desarrollo.",
      price: "Desde $2,000",
      time: "4-8 semanas",
      features: [
        "Diseño personalizado",
        "Optimización SEO",
        "Responsive Design",
        "Panel de administración",
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Apps Móviles",
      description: "Aplicaciones nativas y multiplataforma",
      fullDescription: "Desarrollamos aplicaciones móviles nativas y multiplataforma que ofrecen una experiencia de usuario excepcional. Nos especializamos en iOS y Android.",
      price: "Desde $5,000",
      time: "8-12 semanas",
      features: [
        "Desarrollo nativo",
        "UI/UX personalizado",
        "Integración con APIs",
        "Soporte continuo",
      ],
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Marketing Digital",
      description: "Estrategias de crecimiento digital",
      fullDescription: "Implementamos estrategias de marketing digital efectivas que aumentan tu visibilidad en línea y generan leads cualificados para tu negocio.",
      price: "Desde $1,500/mes",
      time: "Servicio continuo",
      features: [
        "SEO/SEM",
        "Social Media",
        "Email Marketing",
        "Análisis de datos",
      ],
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "IA & Machine Learning",
      description: "Soluciones inteligentes para tu negocio",
      fullDescription: "Implementamos soluciones de IA y Machine Learning que automatizan procesos y proporcionan insights valiosos para la toma de decisiones.",
      price: "Desde $10,000",
      time: "12-16 semanas",
      features: [
        "Análisis predictivo",
        "Procesamiento de datos",
        "Automatización",
        "Modelos personalizados",
      ],
    },
  ];

  return (
    <main className="relative bg-[url('/img/img_prueba/6.jpg')] bg-cover bg-center bg-no-repeat min-h-screen text-foreground">
      {/* Capa de overlay para oscurecer un poco el fondo y mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Contenido principal con z-10 para que quede por encima del overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-16">
          <div className="hero-particles" id="particles-js"></div>
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00FFEE] to-[#FF00FF]"
            >
              Scorpions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Empresa emergente en ciberseguridad y optimización IT de vanguardia.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate("/servicios")}
              >
                Explora nuestros servicios
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Servicios Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="service-card"
                >
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => setSelectedService(service)}
                  >
                    Ver detalles
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

{/* Portfolio Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Nuestro Portafolio
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="portfolio-item aspect-video"
        >
          <img 
            className="w-full h-full object-cover"
            alt={`Proyecto ${item}`}
            src={`/img/${item}.jpg`} 
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* Stats Section */}
        <section className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "100%", label: "Clientes Satisfechos" },
                { number: "3", label: "Proyectos Completados" },
                { number: "1", label: "Año de Experiencia" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details Dialog */}
        <ServiceDetailsDialog
          service={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      </div>
    </main>
  ); 
}
