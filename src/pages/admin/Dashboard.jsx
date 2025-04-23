
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Users,
  BarChart,
  Activity,
  Calendar,
  DollarSign,
  HelpCircle,
  Plus,
  Edit,
  Trash,
} from "lucide-react";
import { StatsDialog } from "@/components/admin/StatsDialog";
import { ProjectsPanel } from "@/components/admin/ProjectsPanel";
import { ClientsPanel } from "@/components/admin/ClientsPanel";
import { TicketsPanel } from "@/components/admin/TicketsPanel";
import { useToast } from "@/components/ui/use-toast";

const initialStats = [
  {
    id: 1,
    title: "Ingresos Mensuales",
    value: "$45,231.89",
    icon: <DollarSign className="h-4 w-4" />,
    change: "+20.1% desde el mes anterior",
  },
  {
    id: 2,
    title: "Proyectos Activos",
    value: "12",
    icon: <Activity className="h-4 w-4" />,
    change: "4 proyectos nuevos este mes",
  },
  {
    id: 3,
    title: "Clientes Nuevos",
    value: "2,350",
    icon: <Users className="h-4 w-4" />,
    change: "+180.1% desde el mes anterior",
  },
  {
    id: 4,
    title: "Tickets Pendientes",
    value: "8",
    icon: <HelpCircle className="h-4 w-4" />,
    change: "-4.5% desde la semana anterior",
  },
];

export function Dashboard() {
  const [stats, setStats] = useState(initialStats);
  const [selectedStat, setSelectedStat] = useState(null);
  const { toast } = useToast();

  const handleStatUpdate = (updatedStat) => {
    setStats(stats.map(stat => 
      stat.id === updatedStat.id ? updatedStat : stat
    ));
    toast({
      title: "Estadística actualizada",
      description: "Los cambios han sido guardados exitosamente",
    });
  };

  return (
    <div className="p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Dashboard
      </motion.h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedStat(stat)}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Tabs defaultValue="projects" className="mt-8">
        <TabsList>
          <TabsTrigger value="projects">Proyectos Activos</TabsTrigger>
          <TabsTrigger value="clients">Clientes Nuevos</TabsTrigger>
          <TabsTrigger value="tickets">Tickets Pendientes</TabsTrigger>
        </TabsList>
        <TabsContent value="projects" className="mt-4">
          <ProjectsPanel />
        </TabsContent>
        <TabsContent value="clients" className="mt-4">
          <ClientsPanel />
        </TabsContent>
        <TabsContent value="tickets" className="mt-4">
          <TicketsPanel />
        </TabsContent>
      </Tabs>

      {selectedStat && (
        <StatsDialog
          stat={selectedStat}
          isOpen={!!selectedStat}
          onClose={() => setSelectedStat(null)}
          onUpdate={handleStatUpdate}
        />
      )}
    </div>
  );
}
