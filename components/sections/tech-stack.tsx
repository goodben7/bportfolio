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
  GitBranch
} from "lucide-react";

const techCategories = [
  {
    title: "Backend & Frameworks",
    icon: Code2,
    color: "text-primary",
    skills: ["Symfony", "ASP.NET Core", "PHP", "C#", "Node.js", "Laravel"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-accent",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server"]
  },
  {
    title: "Architecture & Messaging",
    icon: Workflow,
    color: "text-primary",
    skills: ["RabbitMQ", "Microservices", "Event-Driven", "CQRS", "REST API", "SOAP"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "text-accent",
    skills: ["Docker", "Kubernetes", "CI/CD", "Git", "Linux", "Azure"]
  },
  {
    title: "Security & Auth",
    icon: Lock,
    color: "text-primary",
    skills: ["OAuth2", "JWT", "API Security", "Encryption", "HTTPS/TLS"]
  },
  {
    title: "Core Banking",
    icon: Server,
    color: "text-accent",
    skills: ["CBS Systems", "Payment Processing", "KYC/AML", "Transaction Management"]
  }
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stack Technique
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour construire des systèmes robustes et scalables
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-primary/10 ${category.color}`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary/80 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block border-border/50 bg-card/50 backdrop-blur-sm p-6">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <Container className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Containerization</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Version Control</span>
              </div>
              <div className="h-4 w-px bg-border" />
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
