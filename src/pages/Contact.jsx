
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Contacto
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span className="text-primary">Email:</span>
                  <span>scorpionsmrrobot@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-primary">Teléfono:</span>
                  <span>+51 969 609 140</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-primary">Dirección:</span>
                  <span>Piura - Perú</span>
                </p>
              </div>
            </div>

            <div className="h-64 bg-muted rounded-lg">
              {/* OpenStreetMap will be integrated here */}
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img 
                  className="w-full h-full object-cover"
                  alt="Mapa de ubicación"
                 src="https://images.unsplash.com/photo-1660738096826-c007ae305007" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Servicio de interés</Label>
                <Select id="service" required>
                  <option value="">Selecciona un servicio</option>
                  <option value="web">Desarrollo Web</option>
                  <option value="mobile">Apps Móviles</option>
                  <option value="design">Diseño UI/UX</option>
                  <option value="marketing">Marketing Digital</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" required />
              </div>

              <Button type="submit" className="w-full">
                Enviar mensaje
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
