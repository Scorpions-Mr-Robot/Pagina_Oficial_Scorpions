
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function Footer() {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "¡Gracias por tu interés!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <footer className="bg-background/90 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <Link to="/"><Button variant="link">Inicio</Button></Link>
              <Link to="/servicios"><Button variant="link">Servicios</Button></Link>
              <Link to="/portafolio"><Button variant="link">Portafolio</Button></Link>
              <Link to="/contacto"><Button variant="link">Contacto</Button></Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" onClick={handleContactClick}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Code className="h-5 w-5" />
                </motion.div>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 rounded-md bg-background border border-border"
              />
              <Button onClick={handleContactClick}>Suscribir</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
