
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export function StatsDialog({ stat, isOpen, onClose }) {
  const { toast } = useToast();
  const [value, setValue] = useState(stat.value);
  const [change, setChange] = useState(stat.change);

  const handleSave = () => {
    // Here you would typically save to a backend
    toast({
      title: "Datos actualizados",
      description: "Los cambios han sido guardados exitosamente",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{stat.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label>Valor</Label>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ingrese el valor"
            />
          </div>
          <div>
            <Label>Cambio</Label>
            <Input
              value={change}
              onChange={(e) => setChange(e.target.value)}
              placeholder="Ingrese el cambio"
            />
          </div>
          <Button onClick={handleSave} className="w-full">
            Guardar cambios
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
