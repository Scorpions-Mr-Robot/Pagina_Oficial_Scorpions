import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Cloud, Shield } from "lucide-react";
import { ServicesFilter } from "@/components/ServicesFilter";

const services = [
  {
    category: "Desarrollo",
    icon: <Code className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo Web",
        description: "Creamos sitios web modernos y responsivos que destacan tu marca en línea. Utilizamos las últimas tecnologías y mejores prácticas de desarrollo para garantizar un rendimiento óptimo.",
        price: "Desde $2,000",
        time: "4-8 semanas",
        features: [
          "Diseño personalizado",
          "Optimización SEO",
          "Responsive Design",
          "Panel de administración",
          "Integración con redes sociales",
          "Análisis de tráfico",
        ],
      },
      {
        title: "Aplicaciones Web",
        description: "Desarrollamos aplicaciones web empresariales robustas y escalables. Nuestras soluciones están diseñadas para optimizar procesos y mejorar la eficiencia operativa.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Arquitectura escalable",
          "Integración con APIs",
          "Seguridad avanzada",
          "Soporte multiusuario",
          "Dashboard personalizado",
          "Reportes en tiempo real",
        ],
      },
      {
        title: "Desarrollo Frontend Avanzado",
        description: "Implementación de interfaces de usuario modernas y dinámicas con las últimas tecnologías frontend.",
        price: "Desde $4,000",
        time: "6-10 semanas",
        features: [
          "React/Vue/Angular",
          "Arquitectura escalable",
          "Estado global",
          "Optimización de rendimiento",
          "Testing E2E",
          "SSR/SSG",
        ],
      },
      {
        title: "Desarrollo Backend Enterprise",
        description: "Soluciones backend robustas para aplicaciones empresariales de alta demanda.",
        price: "Desde $6,000",
        time: "8-12 semanas",
        features: [
          "Microservicios",
          "Bases de datos distribuidas",
          "Caché distribuido",
          "Message queues",
          "Logging centralizado",
          "Monitoreo avanzado",
        ],
      },
    ],
  },
  {
    category: "Aplicaciones Móviles",
    icon: <Smartphone className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Apps",
        description: "Creamos aplicaciones móviles nativas y multiplataforma que ofrecen una experiencia de usuario excepcional. Nos especializamos en iOS y Android.",
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
        title: "Apps Multiplataforma Pro",
        description: "Desarrollo de aplicaciones móviles profesionales con Flutter/React Native.",
        price: "Desde $7,000",
        time: "10-14 semanas",
        features: [
          "UI/UX personalizado",
          "Offline-first",
          "Push notifications",
          "Analytics avanzado",
          "Integración con servicios nativos",
          "Testing automatizado",
        ],
      },
      {
        title: "Apps Enterprise",
        description: "Soluciones móviles empresariales con características avanzadas de seguridad y escalabilidad.",
        price: "Desde $12,000",
        time: "14-18 semanas",
        features: [
          "MDM integration",
          "Cifrado de datos",
          "Autenticación biométrica",
          "Sincronización offline",
          "Reportes empresariales",
          "Soporte premium",
        ],
      },
    ],
  },
  {
    category: "Marketing Digital",
    icon: <Cloud className="h-6 w-6" />,
    items: [
      {
        title: "Estrategias de Marketing",
        description: "Implementamos estrategias de marketing digital efectivas que aumentan tu visibilidad en línea y generan leads cualificados para tu negocio.",
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
        title: "Marketing Digital 360°",
        description: "Estrategia completa de marketing digital para maximizar tu presencia online.",
        price: "Desde $2,500/mes",
        time: "Servicio continuo",
        features: [
          "SEO técnico avanzado",
          "PPC optimizado",
          "Marketing de contenidos",
          "Social Media Pro",
          "Email marketing automation",
          "Análisis de competencia",
        ],
      },
      {
        title: "Growth Hacking",
        description: "Estrategias de crecimiento rápido y optimización de conversión.",
        price: "Desde $3,000/mes",
        time: "Servicio continuo",
        features: [
          "Tests A/B",
          "Optimización de funnel",
          "Automatización de marketing",
          "Análisis de datos avanzado",
          "Estrategias de retención",
          "Experimentación continua",
        ],
      },
    ],
  },
  {
    category: "Inteligencia Artificial",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "IA & Machine Learning",
        description: "Implementamos soluciones de IA y Machine Learning que automatizan procesos y proporcionan insights valiosos para la toma de decisiones.",
        price: "Desde $10,000",
        time: "12-16 semanas",
        features: [
          "Análisis predictivo",
          "Procesamiento de datos",
          "Automatización",
          "Modelos personalizados",
        ],
      },
      {
        title: "IA Empresarial",
        description: "Soluciones de IA personalizadas para procesos empresariales específicos.",
        price: "Desde $15,000",
        time: "16-20 semanas",
        features: [
          "Machine Learning avanzado",
          "Procesamiento de lenguaje natural",
          "Computer Vision",
          "Deep Learning",
          "Modelos predictivos",
          "Integración con sistemas existentes",
        ],
      },
      {
        title: "Automatización con IA",
        description: "Automatización inteligente de procesos empresariales mediante IA.",
        price: "Desde $8,000",
        time: "10-14 semanas",
        features: [
          "RPA con IA",
          "Procesamiento de documentos",
          "Análisis de datos",
          "Workflows inteligentes",
          "Integración con APIs",
          "Reportes automatizados",
        ],
      },
    ],
  },
  {
    category: "Diseño UI/UX",
    icon: <Code className="h-6 w-6" />,
    items: [
      {
        title: "Diseño de Interfaces",
        description: "Creamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario. Nuestro enfoque centrado en el usuario garantiza que cada diseño sea funcional y estéticamente agradable.",
        price: "Desde $1,000",
        time: "2-4 semanas",
        features: [
          "Investigación de usuarios",
          "Prototipos interactivos",
          "Pruebas de usabilidad",
          "Diseño responsivo",
        ],
      },
    ],
  },
  {
    category: "Consultoría",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Consultoría IT",
        description: "Ofrecemos consultoría especializada en tecnología de la información para ayudar a las empresas a optimizar sus procesos y adoptar nuevas tecnologías.",
        price: "Desde $150/hora",
        time: "Servicio continuo",
        features: [
          "Análisis de sistemas",
          "Recomendaciones tecnológicas",
          "Planificación estratégica",
          "Auditoría de seguridad",
        ],
      },
    ],
  },
  {
    category: "Soporte Técnico",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Soporte Técnico",
        description: "Brindamos soporte técnico especializado para resolver problemas y garantizar el funcionamiento óptimo de tus sistemas y aplicaciones.",
        price: "Desde $100/mes",
        time: "Servicio continuo",
        features: [
          "Asistencia remota",
          "Mantenimiento preventivo",
          "Actualizaciones de software",
          "Gestión de incidencias",
        ],
      },
    ],
  },
  {
    category: "Seguridad Informática",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Ciberseguridad",
        description: "Implementamos soluciones de ciberseguridad para proteger tus datos y sistemas contra amenazas y ataques informáticos.",
        price: "Desde $2,500",
        time: "Servicio continuo",
        features: [
          "Auditoría de seguridad",
          "Monitoreo 24/7",
          "Gestión de vulnerabilidades",
          "Planes de respuesta a incidentes",
        ],
      },
    ],
  },
  {
    category: "E-commerce",
    icon: <Code className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Tiendas Online",
        description: "Creamos tiendas online personalizadas y optimizadas para SEO que facilitan la venta de tus productos y servicios en línea.",
        price: "Desde $3,000",
        time: "6-10 semanas",
        features: [
          "Integración con pasarelas de pago",
          "Gestión de inventario",
          "Diseño responsivo",
          "Optimización SEO",
        ],
      },
    ],
  },
  {
    category: "Cloud Computing",
    icon: <Cloud className="h-6 w-6" />,
    items: [
      {
        title: "Soluciones en la Nube",
        description: "Implementamos soluciones de cloud computing que permiten a las empresas escalar sus operaciones y optimizar costos.",
        price: "Desde $1,500/mes",
        time: "Servicio continuo",
        features: [
          "Migración a la nube",
          "Gestión de infraestructura",
          "Seguridad en la nube",
          "Optimización de costos",
        ],
      },
    ],
  },
  {
    category: "Big Data",
    icon: <Cloud className="h-6 w-6" />,
    items: [
      {
        title: "Análisis de Big Data",
        description: "Ofrecemos soluciones de análisis de big data que permiten a las empresas extraer insights valiosos de grandes volúmenes de datos.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Procesamiento de datos masivos",
          "Visualización de datos",
          "Modelos predictivos",
          "Integración con herramientas BI",
        ],
      },
    ],
  },
  {
    category: "Blockchain",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Soluciones Blockchain",
        description: "Creamos soluciones basadas en blockchain que mejoran la transparencia y seguridad de las transacciones. Nos especializamos en contratos inteligentes y aplicaciones descentralizadas.",
        price: "Desde $10,000",
        time: "12-16 semanas",
        features: [
          "Desarrollo de contratos inteligentes",
          "Integración con plataformas blockchain",
          "Auditoría de seguridad",
          "Consultoría en blockchain",
        ],
      },
    ],
  },
  {
    category: "Realidad Aumentada",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Aplicaciones de Realidad Aumentada",
        description: "Creamos aplicaciones de realidad aumentada que mejoran la experiencia del usuario y ofrecen interacciones innovadoras.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Desarrollo de AR nativa",
          "Integración con dispositivos móviles",
          "Experiencias interactivas",
          "Consultoría en AR/VR",
        ],
      },
    ],
  },
  {
    category: "Internet de las Cosas (IoT)",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Soluciones IoT",
        description: "Implementamos soluciones de IoT que permiten a las empresas monitorear y controlar dispositivos de forma remota, mejorando la eficiencia operativa.",
        price: "Desde $10,000",
        time: "12-16 semanas",
        features: [
          "Desarrollo de hardware y software",
          "Integración con plataformas IoT",
          "Análisis de datos en tiempo real",
          "Seguridad en IoT",
        ],
      },
    ],
  },
  {
    category: "Automatización de Procesos",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Automatización de Flujos de Trabajo",
        description: "Creamos soluciones de automatización que optimizan los procesos empresariales, reduciendo costos y mejorando la eficiencia.",
        price: "Desde $2,500",
        time: "4-8 semanas",
        features: [
          "Integración con herramientas existentes",
          "Desarrollo de scripts personalizados",
          "Monitoreo y análisis de procesos",
          "Consultoría en automatización",
        ],
      },
    ],
  },
  {
    category: "Formación y Capacitación",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Capacitación en Tecnología",
        description: "Ofrecemos programas de capacitación en diversas tecnologías y herramientas para ayudar a tu equipo a mantenerse actualizado y mejorar sus habilidades.",
        price: "Desde $500/curso",
        time: "Curso de 1-2 días",
        features: [
          "Cursos personalizados",
          "Material didáctico incluido",
          "Certificación al finalizar",
          "Asesoría post-curso",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Videojuegos",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Videojuegos",
        description: "Creamos videojuegos personalizados para diversas plataformas, desde móviles hasta consolas. Nuestro equipo de diseñadores y desarrolladores trabaja en conjunto para ofrecer experiencias únicas.",
        price: "Desde $10,000",
        time: "12-16 semanas",
        features: [
          "Diseño de personajes y escenarios",
          "Programación de mecánicas de juego",
          "Integración con redes sociales",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de APIs",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de APIs",
        description: "Creamos APIs personalizadas que permiten la integración de diferentes sistemas y aplicaciones, facilitando la comunicación y el intercambio de datos.",
        price: "Desde $1,500",
        time: "4-8 semanas",
        features: [
          "Documentación completa",
          "Seguridad y autenticación",
          "Integración con bases de datos",
          "Soporte continuo",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Chatbots",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Chatbots",
        description: "Creamos chatbots personalizados para mejorar la atención al cliente y optimizar procesos. Nuestros chatbots pueden integrarse con diversas plataformas y ofrecer respuestas automáticas.",
        price: "Desde $2,000",
        time: "4-8 semanas",
        features: [
          "Integración con redes sociales",
          "Respuestas automáticas",
          "Análisis de conversaciones",
          "Soporte continuo",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Software a Medida",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Software a Medida",
        description: "Creamos soluciones de software personalizadas que se adaptan a las necesidades específicas de tu negocio. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Plugins y Extensiones",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Plugins y Extensiones",
        description: "Creamos plugins y extensiones personalizadas para diversas plataformas, mejorando la funcionalidad y la experiencia del usuario.",
        price: "Desde $1,000",
        time: "4-8 semanas",
        features: [
          "Integración con plataformas existentes",
          "Documentación completa",
          "Soporte continuo",
          "Actualizaciones periódicas",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Juegos de Mesa",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Juegos de Mesa",
        description: "Creamos juegos de mesa personalizados que ofrecen experiencias únicas y entretenidas. Nuestro equipo de diseñadores y desarrolladores trabaja en conjunto para ofrecer productos de alta calidad.",
        price: "Desde $2,500",
        time: "8-12 semanas",
        features: [
          "Diseño de personajes y escenarios",
          "Prototipos físicos y digitales",
          "Pruebas de juego",
          "Producción y distribución",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Realidad Virtual",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Realidad Virtual",
        description: "Creamos experiencias de realidad virtual personalizadas que ofrecen inmersión total y entretenimiento. Nuestro equipo de diseñadores y desarrolladores trabaja en conjunto para ofrecer productos de alta calidad.",
        price: "Desde $10,000",
        time: "12-16 semanas",
        features: [
          "Diseño de entornos 3D",
          "Interacción en tiempo real",
          "Integración con dispositivos VR",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Realidad Mixta",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Realidad Mixta",
        description: "Creamos experiencias de realidad mixta personalizadas que combinan elementos del mundo real y virtual. Nuestro equipo de diseñadores y desarrolladores trabaja en conjunto para ofrecer productos de alta calidad.",
        price: "Desde $10,000",
        time: "12-16 semanas",
        features: [
          "Diseño de entornos 3D",
          "Interacción en tiempo real",
          "Integración con dispositivos MR",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Gestión",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Gestión",
        description: "Creamos sistemas de gestión personalizados que optimizan los procesos empresariales y mejoran la eficiencia operativa. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Información",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Información",
        description: "Creamos sistemas de información personalizados que permiten a las empresas gestionar y analizar datos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Control",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Control",
        description: "Creamos sistemas de control personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Monitoreo",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Monitoreo",
        description: "Creamos sistemas de monitoreo personalizados que permiten a las empresas supervisar y analizar datos en tiempo real. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Almacenamiento",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Almacenamiento",
        description: "Creamos sistemas de almacenamiento personalizados que permiten a las empresas gestionar y almacenar datos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Seguridad",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Seguridad",
        description: "Creamos sistemas de seguridad personalizados que permiten a las empresas proteger sus datos y sistemas contra amenazas y ataques informáticos. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Comunicación",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Comunicación",
        description: "Creamos sistemas de comunicación personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Control de Acceso",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Control de Acceso",
        description: "Creamos sistemas de control de acceso personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Gestión de Proyectos",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Gestión de Proyectos",
        description: "Creamos sistemas de gestión de proyectos personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Gestión de Recursos",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Gestión de Recursos",
        description: "Creamos sistemas de gestión de recursos personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Gestión de Inventario",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Gestión de Inventario",
        description: "Creamos sistemas de gestión de inventario personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Gestión de Clientes",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Gestión de Clientes",
        description: "Creamos sistemas de gestión de clientes personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo DevOps",
    icon: <Cloud className="h-6 w-6" />,
    items: [
      {
        title: "DevOps as a Service",
        description: "Implementación completa de prácticas y herramientas DevOps en tu organización.",
        price: "Desde $4,000/mes",
        time: "Servicio continuo",
        features: [
          "CI/CD pipelines",
          "Infrastructure as Code",
          "Containerización",
          "Monitoreo 24/7",
          "Gestión de logs",
          "Automatización de despliegues",
        ],
      },
      {
        title: "Cloud Native Development",
        description: "Desarrollo de aplicaciones nativas para la nube con arquitecturas modernas.",
        price: "Desde $10,000",
        time: "12-16 semanas",
        features: [
          "Microservicios",
          "Serverless",
          "Service Mesh",
          "Kubernetes",
          "Observabilidad",
          "Auto-scaling",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Gestión de Contenidos",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Gestión de Contenidos",
        description: "Creamos sistemas de gestión de contenidos personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Gestión de Relaciones con Clientes",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Gestión de Relaciones con Clientes",
        description: "Creamos sistemas de gestión de relaciones con clientes personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Gestión de Proyectos",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Gestión de Proyectos",
        description: "Creamos sistemas de gestión de proyectos personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Gestión de Recursos Humanos",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Gestión de Recursos Humanos",
        description: "Creamos sistemas de gestión de recursos humanos personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Gestión de Ventas",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Gestión de Ventas",
        description: "Creamos sistemas de gestión de ventas personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Gestión de Compras",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Gestión de Compras",
        description: "Creamos sistemas de gestión de compras personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
  {
    category: "Desarrollo de Sistemas de Gestión de Inventarios",
    icon: <Shield className="h-6 w-6" />,
    items: [
      {
        title: "Desarrollo de Sistemas de Gestión de Inventarios",
        description: "Creamos sistemas de gestión de inventarios personalizados que permiten a las empresas gestionar y supervisar procesos de manera eficiente. Nuestro enfoque ágil garantiza resultados rápidos y eficientes.",
        price: "Desde $5,000",
        time: "8-12 semanas",
        features: [
          "Análisis de requisitos",
          "Desarrollo ágil",
          "Pruebas y validación",
          "Soporte post-lanzamiento",
        ],
      },
    ],
  },
];

export function Services() {
  const [filteredServices, setFilteredServices] = useState(services);

  const handleWhatsAppInquiry = (service) => {
    const message = encodeURIComponent(
      `Hola, me interesa obtener más información sobre el servicio de ${service.title}. 
      \nPrecio: ${service.price}
      \nTiempo estimado: ${service.time}`
    );
    window.open(`https://wa.me/+51969609140?text=${message}`, "_blank");
  };

  const handleFilterChange = ({ search, category }) => {
    let filtered = [...services];

    // Filtrar por búsqueda
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter((service) =>
        service.category.toLowerCase().includes(searchLower) ||
        service.items.some((item) =>
          item.title.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower)
        )
      );
    }

    // Filtrar por categoría
    if (category !== "Todos") {
      filtered = filtered.filter((service) =>
        service.category.includes(category)
      );
    }

    setFilteredServices(filtered);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Nuestros Servicios
        </motion.h1>

        <ServicesFilter onFilterChange={handleFilterChange} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {category.icon}
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem key={itemIndex} value={`item-${itemIndex}`}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <p className="text-base">{item.description}</p>
                            <div className="bg-primary/5 p-4 rounded-lg">
                              <h4 className="font-semibold mb-2">Características:</h4>
                              <ul className="list-disc list-inside space-y-1">
                                {item.features.map((feature, featureIndex) => (
                                  <li key={featureIndex}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                              <p className="text-primary font-semibold">{item.price}</p>
                              <p className="text-muted-foreground">
                                Tiempo estimado: {item.time}
                              </p>
                              <Button
                                variant="default"
                                onClick={() => handleWhatsAppInquiry(item)}
                                className="mt-2"
                              >
                                Consultar por WhatsApp
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
