
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categories = ["Todos", "Web", "Móvil", "Diseño", "Marketing"];

const projects = [
  {
    id: 1,
    title: "E-commerce Premium",
    category: "Web",
    description: "Plataforma de comercio electrónico con diseño premium",
    image: "ecommerce-project",
  },
  {
    id: 2,
    title: "App Delivery",
    category: "Móvil",
    description: "Aplicación móvil para servicio de entrega",
    image: "delivery-app",
  },
  {
    id: 3,
    title: "Branding Corporativo",
    category: "Diseño",
    description: "Diseño de marca para empresa tecnológica",
    image: "branding-project",
  },
  {
    id: 4,
    title: "Campaña Digital",
    category: "Marketing",
    description: "Estrategia de marketing digital integral",
    image: "marketing-campaign",
  },
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "Todos" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Nuestro Portafolio
        </motion.h1>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    className="w-full h-full object-cover"
                    alt={project.title}
                   src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button>Ver proyecto</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
