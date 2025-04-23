
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const posts = [
  {
    id: 1,
    title: "Tendencias en Desarrollo Web 2024",
    date: "2024-01-15",
    tags: ["Desarrollo", "Web", "Tendencias"],
    summary: "Descubre las últimas tendencias en desarrollo web que dominarán el año",
    image: "web-trends",
  },
  {
    id: 2,
    title: "Guía de UI/UX Design",
    date: "2024-01-10",
    tags: ["Diseño", "UI/UX", "Guía"],
    summary: "Todo lo que necesitas saber sobre diseño de interfaces y experiencia de usuario",
    image: "uiux-guide",
  },
  {
    id: 3,
    title: "Seguridad en Aplicaciones Web",
    date: "2024-01-05",
    tags: ["Seguridad", "Web", "Desarrollo"],
    summary: "Mejores prácticas para mantener tus aplicaciones web seguras",
    image: "security-web",
  },
];



export function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const allTags = [...new Set(posts.flatMap(post => post.tags))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Blog
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            placeholder="Buscar artículos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:w-64"
          />
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedTag === "" ? "default" : "outline"}
              onClick={() => setSelectedTag("")}
            >
              Todos
            </Button>
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    className="w-full h-full object-cover"
                    alt={post.title}
                   src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.summary}</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button>Leer más</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
