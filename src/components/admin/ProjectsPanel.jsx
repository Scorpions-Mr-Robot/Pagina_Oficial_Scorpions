
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Edit, Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const initialProjects = [
  {
    id: 1,
    name: "E-commerce Platform",
    client: "TechStore Inc.",
    progress: 75,
    deadline: "2024-05-15",
    budget: "$15,000",
    status: "En progreso",
  },
  {
    id: 2,
    name: "Mobile App Development",
    client: "HealthCare Plus",
    progress: 30,
    deadline: "2024-06-20",
    budget: "$25,000",
    status: "Iniciando",
  },
];

export function ProjectsPanel() {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSave = (project) => {
    if (selectedProject) {
      setProjects(projects.map(p => p.id === project.id ? project : p));
    } else {
      setProjects([...projects, { ...project, id: Date.now() }]);
    }
    setIsDialogOpen(false);
    toast({
      title: selectedProject ? "Proyecto actualizado" : "Proyecto creado",
      description: "Los cambios han sido guardados exitosamente",
    });
  };

  const handleDelete = (id) => {
    setProjects(projects.filter(p => p.id !== id));
    toast({
      title: "Proyecto eliminado",
      description: "El proyecto ha sido eliminado exitosamente",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Proyectos Activos</h2>
        <Button onClick={() => {
          setSelectedProject(null);
          setIsDialogOpen(true);
        }}>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Proyecto
        </Button>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-semibold">{project.name}</h3>
                <p className="text-sm text-muted-foreground">Cliente: {project.client}</p>
                <div className="mt-2">
                  <div className="text-sm">Progreso: {project.progress}%</div>
                  <div className="w-full h-2 bg-secondary rounded-full mt-1">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex gap-4 text-sm">
                  <span>Fecha límite: {project.deadline}</span>
                  <span>Presupuesto: {project.budget}</span>
                  <span>Estado: {project.status}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setSelectedProject(project);
                    setIsDialogOpen(true);
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(project.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ProjectDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
}

function ProjectDialog({ project, isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState(
    project || {
      name: "",
      client: "",
      progress: 0,
      deadline: "",
      budget: "",
      status: "Iniciando",
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
            {project ? "Editar Proyecto" : "Nuevo Proyecto"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Nombre del Proyecto</Label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            <Label>Progreso (%)</Label>
            <Input
              type="number"
              min="0"
              max="100"
              value={formData.progress}
              onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) })}
              required
            />
          </div>
          <div>
            <Label>Fecha límite</Label>
            <Input
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Presupuesto</Label>
            <Input
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
          <Button type="submit" className="w-full">
            {project ? "Guardar cambios" : "Crear proyecto"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
