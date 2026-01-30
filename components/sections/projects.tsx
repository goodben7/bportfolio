"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Landmark, 
  Shield, 
  ArrowUpRight, 
  Code2,
  Database,
  Workflow
} from "lucide-react";

const projects = [
  {
    title: "BANKY",
    subtitle: "Core Banking System (CBS)",
    description: "Système bancaire complet pour la gestion des opérations bancaires, incluant la gestion des comptes, transactions, prêts et services bancaires. Architecture microservices avec messaging asynchrone pour garantir la cohérence des données.",
    icon: Landmark,
    color: "from-primary/20 to-primary/5",
    highlights: [
      "Architecture microservices distribuée",
      "Gestion des transactions avec ACID compliance",
      "Intégration RabbitMQ pour messaging asynchrone",
      "API RESTful sécurisées avec OAuth2",
      "Traitement des paiements en temps réel"
    ],
    technologies: ["Symfony", "RabbitMQ", "PostgreSQL", "Docker", "Redis", "OAuth2"],
    stats: [
      { label: "Transactions/jour", value: "10K+" },
      { label: "Uptime", value: "99.9%" },
      { label: "APIs", value: "50+" }
    ]
  },
  {
    title: "KYC-MANAGER",
    subtitle: "Know Your Customer Management",
    description: "Plateforme de gestion KYC/AML pour la vérification d'identité et la conformité réglementaire. Automatisation des processus de vérification avec intégration de services tiers et workflow configurable.",
    icon: Shield,
    color: "from-accent/20 to-accent/5",
    highlights: [
      "Vérification d'identité automatisée",
      "Conformité AML/CFT intégrée",
      "Workflow de validation configurable",
      "Intégration APIs de vérification tierces",
      "Stockage sécurisé des documents sensibles"
    ],
    technologies: ["Symfony", "RabbitMQ", "PostgreSQL", "Docker", "S3", "Encryption"],
    stats: [
      { label: "Vérifications/mois", value: "5K+" },
      { label: "Taux de réussite", value: "95%" },
      { label: "Temps moyen", value: "<2min" }
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
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
              Projets Majeurs
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions bancaires et fintech développées avec des technologies de pointe
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative p-6 md:p-10">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                            <project.icon className="h-8 w-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-3xl font-bold mb-1">{project.title}</h3>
                            <p className="text-lg text-primary font-medium">{project.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed text-base">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <Code2 className="h-4 w-4 text-primary" />
                          Fonctionnalités clés
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-accent mt-1">▹</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <Database className="h-4 w-4 text-accent" />
                          Stack Technique
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-secondary/50 hover:bg-secondary/80 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold flex items-center gap-2">
                          <Workflow className="h-4 w-4 text-primary" />
                          Métriques
                        </h4>
                        {project.stats.map((stat, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-lg bg-secondary/30 border border-border/50"
                          >
                            <div className="text-2xl font-bold text-primary mb-1">
                              {stat.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
