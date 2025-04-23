
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Edit, Trash, Clock, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const initialTickets = [
  {
    id: 1,
    title: "Error en la página de inicio",
    description: "Los usuarios reportan un error al cargar la página principal",
    priority: "Alta",
    status: "Pendiente",
    client: "TechCorp Inc.",
    createdAt: "2024-04-15",
    assignedTo: "David Martinez",
  },
  {
    id: 2,
    title: "Actualización de contenido",
    description: "Se requiere actualizar la información de productos",
    priority: "Media",
    status: "En proceso",
    client: "Design Studio",
    createdAt: "2024-04-16",
    assignedTo: "Ana García",
  },
];

export function TicketsPanel() {
  const [tickets, setTickets] = useState(initialTickets);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSave = (ticket) => {
    if (selectedTicket) {
      setTickets(tickets.map(t => t.id === ticket.id ? ticket : t));
    } else {
      setTickets([...tickets, { ...ticket, id: Date.now() }]);
    }
    setIsDialogOpen(false);
    toast({
      title: selectedTicket ? "Ticket actualizado" : "Ticket creado",
      description: "Los cambios han sido guardados exitosamente",
    });
  };

  const handleDelete = (id) => {
    setTickets(tickets.filter(t => t.id !== id));
    toast({
      title: "Ticket eliminado",
      description: "El ticket ha sido eliminado exitosamente",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Tickets</h2>
        <Button onClick={() => {
          setSelectedTicket(null);
          setIsDialogOpen(true);
        }}>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Ticket
        </Button>
      </div>

      <div className="grid gap-4">
        {tickets.map((ticket) => (
          <Card key={ticket.id}>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{ticket.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    ticket.priority === "Alta" ? "bg-red-100 text-red-800" :
                    ticket.priority === "Media" ? "bg-yellow-100 text-yellow-800" :
                    "bg-green-100 text-green-800"
                  }`}>
                    {ticket.priority}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{ticket.description}</p>
                <div className="mt-2 flex gap-4 text-sm">
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {ticket.client}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {ticket.createdAt}
                  </span>
                </div>
                <div className="mt-1 text-sm">
                  <span>Asignado a: {ticket.assignedTo}</span>
                  <span className="ml-4">Estado: {ticket.status}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setSelectedTicket(ticket);
                    setIsDialogOpen(true);
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(ticket.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <TicketDialog
        ticket={selectedTicket}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
}

function TicketDialog({ ticket, isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState(
    ticket || {
      title: "",
      description: "",
      priority: "Media",
      status: "Pendiente",
      client: "",
      createdAt: new Date().toISOString().split("T")[0],
      assignedTo: "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {ticket ? "Editar Ticket" : "Nuevo Ticket"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Título</Label>
            <Input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Descripción</Label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Prioridad</Label>
            <Input
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Estado</Label>
            <Input
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Cliente</Label>
            <Input
              value={formData.client}
              onChange={(e) => setFormData({ ...formData, client: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Asignado a</Label>
            <Input
              value={formData.assignedTo}
              onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            {ticket ? "Guardar cambios" : "Crear ticket"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
