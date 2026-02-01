"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Server,
  Cloud,
  Lock,
  Workflow,
  Container,
  GitBranch,
  Cpu
} from "lucide-react";

const techCategories = [
  {
    title: "Backend & Frameworks",
    description: "Frameworks et langages pour développement backend robuste",
    icon: Code2,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      { name: "Symfony", level: "Expert" },
      { name: "ASP.NET Core", level: "Intermédiaire" },
      { name: "PHP", level: "Expert" },
      { name: "C#", level: "Intermédiaire" },
      { name: "Node.js", level: "Intermédiaire" },
    ]
  },
  {
    title: "Databases",
    description: "Systèmes de gestion de bases de données relationnelles et NoSQL",
    icon: Database,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      { name: "PostgreSQL", level: "Expert" },
      { name: "MySQL", level: "Avancé" },
      { name: "MongoDB", level: "Intermédiaire" },
      { name: "Redis", level: "Intermédiaire" },
      { name: "SQL Server", level: "Avancé" }
    ]
  },
  {
    title: "Architecture & Messaging",
    description: "Patterns d'architecture et systèmes de messagerie",
    icon: Workflow,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      { name: "RabbitMQ", level: "Expert" },
      { name: "Microservices", level: "Expert" },
      { name: "Event-Driven", level: "Avancé" },
      { name: "CQRS", level: "Avancé" },
      { name: "REST API", level: "Expert" },
      { name: "GraphQL", level: "Intermédiaire" }
    ]
  },
  {
    title: "DevOps & Cloud",
    description: "Outils d'infrastructure, containerisation et cloud",
    icon: Cloud,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      { name: "Docker", level: "Expert" },
      { name: "Kubernetes", level: "Intermédiaire" },
      { name: "CI/CD", level: "Avancé" },
      { name: "Git", level: "Expert" },
      { name: "Linux", level: "Avancé" },
    ]
  },
  {
    title: "Security & Auth",
    description: "Sécurité applicative et systèmes d'authentification",
    icon: Lock,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      { name: "OAuth2", level: "Expert" },
      { name: "JWT", level: "Expert" },
      { name: "API Security", level: "Avancé" },
      { name: "Encryption", level: "Avancé" },
      { name: "HTTPS/TLS", level: "Avancé" }
    ]
  },
  {
    title: "Core Banking",
    description: "Systèmes bancaires et solutions fintech",
    icon: Server,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      { name: "CBS Systems", level: "Expert" },
      { name: "Payment Processing", level: "Avancé" },
      { name: "KYC/AML", level: "Avancé" },
      { name: "Transaction Mgmt", level: "Avancé" }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "border-primary/40 hover:border-primary/60 hover:bg-primary/10";
    case "Avancé":
      return "border-accent/40 hover:border-accent/60 hover:bg-accent/10";
    case "Intermédiaire":
      return "border-muted-foreground/30 hover:border-muted-foreground/50 hover:bg-muted/50";
    default:
      return "";
  }
};

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />

      <div className="container px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-6"
          >
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Technologies & Expertise</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Stack Technique
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">
            Technologies et outils que je maîtrise pour construire des systèmes robustes, scalables et sécurisés
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 h-full">
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle Border Glow on Hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-primary/20" />

                <div className="relative p-6 space-y-4 flex flex-col h-full">
                  {/* Category Header */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`p-3 rounded-xl ${category.bgColor} ${category.color} transition-transform duration-300 group-hover:scale-110`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{category.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 justify-center flex-1 items-start pt-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="group/badge relative"
                      >
                        <Badge
                          variant="outline"
                          className={`bg-secondary/30 backdrop-blur-sm transition-all duration-200 cursor-default ${getLevelColor(skill.level)}`}
                        >
                          {skill.name}
                        </Badge>

                        {/* Tooltip on Hover */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-popover border border-border rounded-lg shadow-lg opacity-0 group-hover/badge:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
                          <span className="text-xs font-medium">{skill.level}</span>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-border" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <Card className="inline-flex border-border/50 bg-card/50 backdrop-blur-sm p-6">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <Container className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Containerization</span>
              </div>
              <div className="h-6 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Version Control</span>
              </div>
              <div className="h-6 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <Workflow className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Distributed Systems</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
