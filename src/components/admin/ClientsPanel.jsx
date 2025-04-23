
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Edit, Trash, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const initialClients = [
  {
    id: 1,
    name: "John Smith",
    company: "TechCorp Inc.",
    email: "john@techcorp.com",
    phone: "+1 234 567 890",
    projects: ["Website Redesign", "Mobile App"],
    totalSpent: "$25,000",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Design Studio",
    email: "sarah@designstudio.com",
    phone: "+1 234 567 891",
    projects: ["Brand Identity", "E-commerce Platform"],
    totalSpent: "$18,000",
  },
];

export function ClientsPanel() {
  const [clients, setClients] = useState(initialClients);
  const [selectedClient, setSelectedClient] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSave = (client) => {
    if (selectedClient) {
      setClients(clients.map(c => c.id === client.id ? client : c));
    } else {
      setClients([...clients, { ...client, id: Date.now() }]);
    }
    setIsDialogOpen(false);
    toast({
      title: selectedClient ? "Cliente actualizado" : "Cliente creado",
      description: "Los cambios han sido guardados exitosamente",
    });
  };

  const handleDelete = (id) => {
    setClients(clients.filter(c => c.id !== id));
    toast({
      title: "Cliente eliminado",
      description: "El cliente ha sido eliminado exitosamente",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Clientes</h2>
        <Button onClick={() => {
          setSelectedClient(null);
          setIsDialogOpen(true);
        }}>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Cliente
        </Button>
      </div>

      <div className="grid gap-4">
        {clients.map((client) => (
          <Card key={client.id}>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-semibold">{client.name}</h3>
                <p className="text-sm text-muted-foreground">{client.company}</p>
                <div className="mt-2 flex gap-4">
                  <span className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-1" />
                    {client.email}
                  </span>
                  <span className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-1" />
                    {client.phone}
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Proyectos: {client.projects.join(", ")}</p>
                  <p className="text-sm">Total facturado: {client.totalSpent}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setSelectedClient(client);
                    setIsDialogOpen(true);
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(client.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ClientDialog
        client={selectedClient}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
}

function ClientDialog({ client, isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState(
    client || {
      name: "",
      company: "",
      email: "",
      phone: "",
      projects: [],
      totalSpent: "$0",
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
            {client ? "Editar Cliente" : "Nuevo Cliente"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Nombre</Label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Empresa</Label>
            <Input
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Teléfono</Label>
            <Input
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Proyectos (separados por coma)</Label>
            <Input
              value={formData.projects.join(", ")}
              onChange={(e) => setFormData({ ...formData, projects: e.target.value.split(", ") })}
              required
            />
          </div>
          <div>
            <Label>Total facturado</Label>
            <Input
              value={formData.totalSpent}
              onChange={(e) => setFormData({ ...formData, totalSpent: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            {client ? "Guardar cambios" : "Crear cliente"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
