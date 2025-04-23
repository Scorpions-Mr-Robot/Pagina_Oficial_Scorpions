
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ServiceDetailsDialog({ service, isOpen, onClose }) {
  if (!service) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola, me interesa obtener más información sobre el servicio de ${service.title}`
    );
    window.open(`https://wa.me/+51969609140?text=${message}`, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{service.title}</DialogTitle>
          <DialogDescription className="text-lg">{service.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
            <img 
              className="w-full h-full object-cover"
              alt={`Imagen de ${service.title}`}
              src="https://images.unsplash.com/photo-1581943870582-f37dbd95fe06" />
          </div>
          <div className="space-y-4">
            <p className="text-primary font-semibold">{service.price}</p>
            <p>Tiempo estimado: {service.time}</p>
            <Button onClick={handleWhatsAppClick} className="w-full">
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
