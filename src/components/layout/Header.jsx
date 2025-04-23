
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <Link to="/" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-primary glitch" />
            <span className="text-xl font-bold">Scorpions</span>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center space-x-6"
        >
          <Link to="/"><Button variant="ghost">Inicio</Button></Link>
          <Link to="/servicios"><Button variant="ghost">Servicios</Button></Link>
          <Link to="/portafolio"><Button variant="ghost">Portafolio</Button></Link>
          <Link to="/blog"><Button variant="ghost">Blog</Button></Link>
          <Link to="/contacto"><Button variant="ghost">Contacto</Button></Link>
          <Link to="/login"><Button>Login</Button></Link>
        </motion.div>
      </nav>
    </header>
  );
}
