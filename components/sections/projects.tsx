"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Landmark,
  Shield,
  Trophy,
  Zap,
  Database,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Briefcase,
  ClipboardList
} from "lucide-react";

const projects = [
  {
    title: "BANKY",
    subtitle: "Core Banking System (CBS)",
    description: "Système bancaire complet pour la gestion des opérations bancaires critiques, incluant comptes, transactions, prêts et services bancaires. Architecture microservices distribuée avec messaging asynchrone garantissant cohérence des données et scalabilité horizontale.",
    icon: Landmark,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/40",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    accentColor: "text-primary",
    featured: true,
    impact: {
      performance: "+65% amélioration des temps de réponse",
      scalability: "Architecture scalable",
      availability: "99.9% de disponibilité garantie"
    },
    highlights: [
      {
        text: "Architecture microservices distribuée améliorant la scalabilité de 40%",
        metric: "+40%"
      },
      {
        text: "Gestion transactionnelle avec ACID compliance et rollback automatique",
        metric: "100%"
      },
      {
        text: "Intégration RabbitMQ pour messaging asynchrone haute performance",
        metric: "0 perte"
      },
      {
        text: "API RESTful sécurisées avec OAuth2 et rate limiting",
        metric: "Sécurisé"
      },
      {
        text: "Traitement des paiements en temps réel avec validation multi-niveaux",
        metric: "<200ms"
      }
    ],
    technologies: [
      { name: "Symfony", highlight: true, category: "Backend" },
      { name: "RabbitMQ", highlight: true, category: "Messaging" },
      { name: "PostgreSQL", highlight: true, category: "Database" },
      { name: "Docker", highlight: false, category: "DevOps" },
      { name: "Redis", highlight: false, category: "Cache" },
      { name: "OAuth2", highlight: true, category: "Security" }
    ],
    stats: [
      { label: "Disponibilité", value: "99.9%", icon: CheckCircle2, color: "text-accent" },
      { label: "APIs", value: "50+", icon: Database, color: "text-primary" }
    ]
  },
  {
    title: "AGP-PACT",
    subtitle: "Gestion des plaintes pour projets d'infrastructure",
    description: "Plateforme développée pour rationaliser la gestion des plaintes dans les projets d’infrastructure. Elle garantit une traçabilité complète et une résolution efficace via un workflow métier complexe et auditable.",
    icon: ClipboardList,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/40",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    accentColor: "text-primary",
    featured: true,
    impact: {
      process: "Automatisation de 90% du processus de gestion",
      speed: "Réduction de 50% du temps de résolution",
      audit: "Traçabilité et auditabilité totales (100%)"
    },
    highlights: [
      {
        text: "Workflow complet : de l’enregistrement à la clôture avec gestion des mérites",
        metric: "Workflow"
      },
      {
        text: "Classification et assignation automatisées pour une prise en charge rapide",
        metric: "Auto-assign"
      },
      {
        text: "Vérification de la recevabilité et examen des mérites pour une résolution équitable",
        metric: "Compliance"
      },
      {
        text: "Suivi de satisfaction et processus d'escalade intégré",
        metric: "Feedback"
      },
      {
        text: "Historisation complète des actions pour une transparence totale",
        metric: "Audit Trail"
      }
    ],
    technologies: [
      { name: "Symfony", highlight: true, category: "Backend" },
      { name: "Doctrine ORM", highlight: true, category: "Database" },
      { name: "PostgreSQL", highlight: false, category: "Database" },
      { name: "Docker Compose", highlight: false, category: "DevOps" }
    ],
    stats: [
      { label: "Obj. Automatisation", value: "90%", icon: Zap, color: "text-primary" },
      { label: "Gain Résolution", value: "50%", icon: TrendingUp, color: "text-accent" }
    ]
  },
  {
    title: "SISAG",
    subtitle: "Système d'Information pour le Suivi de l'Action Gouvernementale",
    description: "Projet lauréat du 1er Prix au Hackathon 'Code & Win' 2025. Cette plateforme numérique, actuellement en phase de développement avancée, est destinée à améliorer la transparence administrative et le suivi en temps réel des actions publiques à l'échelle nationale.",
    icon: Trophy,
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/40",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    accentColor: "text-accent",
    featured: true,
    award: "🏆 1er Prix Hackathon Code & Win 2025",
    impact: {
      innovation: "Solution innovante primée au niveau national",
      status: "En cours de développement",
      objective: "Objectif : Réduction drastique du temps de reporting"
    },
    highlights: [
      {
        text: "Architecture multi-tenant SaaS conçue pour la gouvernance publique (en cours de développement)",
        metric: "SaaS"
      },
      {
        text: "Tableau de bord analytique en temps réel avec visualisations avancées (en cours d'implémentation)",
        metric: "Analytics"
      },
      {
        text: "API RESTful documentée (OpenAPI) pour intégrations ministérielles (en développement)",
        metric: "API"
      },
      {
        text: "Système de reporting automatisé visant un gain de temps de 80% (en phase de test)",
        metric: "-80% Temps"
      },
      {
        text: "Gestion des permissions granulaires par rôles et départements (RBAC en développement)",
        metric: "RBAC"
      }
    ],
    technologies: [
      { name: "Symfony", highlight: true, category: "Backend" },
      { name: "REST API", highlight: true, category: "API" },
      { name: "PostgreSQL", highlight: false, category: "Database" },
      { name: "Docker", highlight: false, category: "DevOps" },
      { name: "Chart.js", highlight: false, category: "Frontend" },
      { name: "JWT", highlight: true, category: "Security" }
    ],
    stats: [
      { label: "Objectif Gain", value: "80%", icon: TrendingUp, color: "text-primary" },
      { label: "Cible Utilisateurs", value: "500+", icon: Database, color: "text-accent" }
    ]
  },
  {
    title: "KYC-MANAGER",
    subtitle: "Know Your Customer Management",
    description: "Plateforme de gestion KYC/AML pour la vérification d'identité et la conformité réglementaire bancaire. Automatisation complète des processus avec intégration de services de vérification tiers et workflow configurable selon les normes FATF.",
    icon: Shield,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/40",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    accentColor: "text-primary",
    featured: false,
    impact: {
      compliance: "100% conformité aux normes AML/CFT",
      automation: "95% d'automatisation du processus KYC",
      speed: "Temps de vérification réduit de 70%"
    },
    highlights: [
      {
        text: "Vérification d'identité automatisée avec détection de fraude IA",
        metric: "95% auto"
      },
      {
        text: "Conformité AML/CFT intégrée selon normes internationales FATF",
        metric: "100%"
      },
      {
        text: "Workflow de validation configurable avec approbation multi-niveaux",
        metric: "Flexible"
      },
      {
        text: "Intégration APIs tierces (vérification ID, sanctions, PEP)",
        metric: "Multi-API"
      },
      {
        text: "Stockage sécurisé S3 avec encryption et audit trail complet",
        metric: "Sécurisé"
      }
    ],
    technologies: [
      { name: "Symfony", highlight: true, category: "Backend" },
      { name: "RabbitMQ", highlight: false, category: "Messaging" },
      { name: "PostgreSQL", highlight: true, category: "Database" },
      { name: "Docker", highlight: false, category: "DevOps" },
      { name: "AWS S3", highlight: true, category: "Storage" },
      { name: "Encryption", highlight: false, category: "Security" }
    ],
    stats: [
      { label: "Vérifications/mois", value: "5K+", icon: TrendingUp, color: "text-primary" },
      { label: "Taux de réussite", value: "95%", icon: CheckCircle2, color: "text-accent" },
      { label: "Temps moyen", value: "<2min", icon: Zap, color: "text-primary" }
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />

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
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Portfolio Projets</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Projets Majeurs
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed mb-4">
            Solutions bancaires, fintech et gouvernementales développées avec des architectures microservices haute performance
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Trophy className="h-4 w-4 text-accent" />
            <span>Expertise en Core Banking • KYC/AML • Architectures Distribuées</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project: any, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Card className={`group relative overflow-hidden border-2 ${project.borderColor} bg-card/80 backdrop-blur-md hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500`}>
                {/* Award Badge */}
                {project.award && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground border-0 px-3 py-1 text-xs font-bold shadow-lg">
                      {project.award}
                    </Badge>
                  </div>
                )}

                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="relative p-8 md:p-10">
                  {/* Project Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`p-4 rounded-2xl ${project.iconBg} ${project.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                      <project.icon className="h-10 w-10" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className={`text-lg md:text-xl font-semibold ${project.accentColor} mb-3`}>
                        {project.subtitle}
                      </p>
                      <div className="mt-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                          <Briefcase className="h-3 w-3" />
                          Contexte
                        </h4>
                        <p className="text-base text-muted-foreground leading-relaxed text-left">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Impact Summary */}
                  <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-secondary/30 to-secondary/10 border border-border/50">
                    <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Impact & Résultats
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(project.impact).map(([key, value]: [string, any]) => (
                        <div key={key} className="text-sm">
                          <span className={`font-bold ${project.accentColor}`}>✓ </span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Features - 2 columns */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Highlights */}
                      <div>
                        <h4 className="text-base font-bold mb-4 flex items-center gap-2">
                          <Zap className="h-5 w-5 text-primary" />
                          Fonctionnalités clés
                        </h4>
                        <ul className="space-y-3">
                          {project.highlights.map((highlight: any, i: number) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3 group/item"
                            >
                              <Badge
                                variant="outline"
                                className={`mt-0.5 ${project.accentColor} border-current px-2 py-0.5 text-xs font-bold min-w-fit`}
                              >
                                {highlight.metric}
                              </Badge>
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {highlight.text}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Next Steps */}
                      {project.nextSteps && (
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                            <Sparkles className="h-3 w-3" />
                            Prochaines étapes
                          </h4>
                          <p className="text-sm text-muted-foreground italic leading-relaxed">
                            {project.nextSteps}
                          </p>
                        </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h4 className="text-base font-bold mb-4 flex items-center gap-2">
                          <Database className="h-5 w-5 text-accent" />
                          Stack Technique
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: any) => (
                            <motion.div
                              key={tech.name}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="group/badge relative"
                            >
                              <Badge
                                variant={tech.highlight ? "default" : "secondary"}
                                className={
                                  tech.highlight
                                    ? `${project.iconBg} ${project.iconColor} border ${project.borderColor} hover:opacity-80 font-semibold shadow-sm`
                                    : "bg-secondary/50 hover:bg-secondary/80 transition-colors"
                                }
                              >
                                {tech.name}
                              </Badge>

                              {/* Tooltip */}
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-popover border border-border rounded-lg shadow-lg opacity-0 group-hover/badge:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
                                <span className="text-xs font-medium">{tech.category}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Stats  - 1 column */}
                    <div className="space-y-4">
                      <h4 className="text-base font-bold mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Objectifs & Métriques
                      </h4>
                      {project.stats.map((stat: any, i: number) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="relative p-5 rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-primary/40 transition-all duration-300 cursor-default group/stat"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <stat.icon className={`h-5 w-5 ${stat.color} group-hover/stat:scale-110 transition-transform`} />
                            <div className={`text-3xl font-black ${stat.color}`}>
                              {stat.value}
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
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

