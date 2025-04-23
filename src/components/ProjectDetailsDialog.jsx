
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Carousel } from "@/components/ui/carousel";

export function ProjectDetailsDialog({ project, isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Carousel>
            {project.gallery.map((image, index) => (
              <div key={index} className="aspect-video">
                <img 
                  className="w-full h-full object-cover rounded-lg"
                  alt={`${project.title} - Imagen ${index + 1}`}
                 src="https://images.unsplash.com/photo-1686061593213-98dad7c599b9" />
              </div>
            ))}
          </Carousel>
          <div className="mt-4 space-y-4">
            <p className="text-lg">{project.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Fecha de inicio</p>
                <p className="font-medium">{project.startDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fecha de finalización</p>
                <p className="font-medium">{project.endDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Presupuesto</p>
                <p className="font-medium text-primary">{project.budget}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Cliente</p>
                <p className="font-medium">{project.client}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
