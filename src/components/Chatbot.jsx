
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Smile, Paperclip as PaperclipIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput("");
    setIsTyping(true);

    // Simulated bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Respuestas más detalladas y contextuales
    if (input.includes("precio") || input.includes("costo")) {
      return "Nuestros precios varían según el servicio:\n" +
             "- Desarrollo Web: desde $2,000\n" +
             "- Apps Móviles: desde $5,000\n" +
             "- Marketing Digital: desde $1,500/mes\n" +
             "¿Te gustaría conocer más detalles sobre algún servicio específico?";
    } 
    else if (input.includes("tiempo") || input.includes("duración")) {
      return "Los tiempos de desarrollo típicos son:\n" +
             "- Sitios web: 4-8 semanas\n" +
             "- Aplicaciones: 8-12 semanas\n" +
             "- Campañas de marketing: Inicio inmediato\n" +
             "¿Te gustaría discutir un proyecto específico?";
    }
    else if (input.includes("contacto") || input.includes("comunicar")) {
      return "Puedes contactarnos de varias formas:\n" +
             "- Teléfono: +1 234 567 890\n" +
             "- Email: contacto@empresa.com\n" +
             "- Oficina: Calle Principal #123\n" +
             "¿Qué método prefieres?";
    }
    else if (input.includes("servicio")) {
      return "Ofrecemos varios servicios profesionales:\n" +
             "1. Desarrollo Web y Móvil\n" +
             "2. Marketing Digital\n" +
             "3. Diseño UI/UX\n" +
             "4. Consultoría IT\n" +
             "¿Sobre cuál te gustaría saber más?";
    }
    else if (input.includes("gracias") || input.includes("thank")) {
      return "¡Gracias a ti! Si necesitas algo más, no dudes en preguntarme. ¡Estoy aquí para ayudar! 😊";
    }
    else if (input.includes("hola") || input.includes("hi") || input.includes("hello")) {
      return "¡Hola! 👋 ¿Cómo puedo ayudarte hoy? Estoy aquí para responder tus preguntas sobre nuestros servicios, precios o cualquier otra consulta.";
    }
    else {
      return "Entiendo tu consulta. ¿Te gustaría que te proporcione información sobre:\n" +
             "- Nuestros servicios y soluciones\n" +
             "- Precios y planes\n" +
             "- Proceso de trabajo\n" +
             "- Contacto y soporte\n" +
             "¡Solo dime qué te interesa!";
    }
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 w-96 bg-background border rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-4 border-b bg-primary/5 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Asistente Virtual</h3>
                <p className="text-sm text-muted-foreground">Siempre disponible para ayudarte</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? "bg-primary/10 text-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <pre className="whitespace-pre-wrap font-sans text-sm">
                      {message.text}
                    </pre>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-primary/10 text-foreground px-4 py-2 rounded-lg">
                    <span className="typing-animation">...</span>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t bg-background">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1"
                />
                <Button onClick={handleSend} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Presiona Enter para enviar</span>
                <div className="flex gap-2">
                  <Smile className="h-4 w-4 cursor-pointer hover:text-primary" />
                  <PaperclipIcon className="h-4 w-4 cursor-pointer hover:text-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .typing-animation {
          display: inline-block;
          animation: typing 1.5s infinite;
        }
        @keyframes typing {
          0% { content: ""; }
          25% { content: "."; }
          50% { content: ".."; }
          75% { content: "..."; }
          100% { content: ""; }
        }
      `}</style>
    </>
  );
}
