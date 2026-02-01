"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Calendar,
  MapPin,
  Briefcase,
  Zap,
  Wrench,
  ArrowUpRight,
  Award,
  BookOpen,
  Landmark
} from "lucide-react";

const experiences = [
  {
    company: "FENX",
    role: "Développeur Backend – FinTech",
    period: "Janvier 2024 - Présent",
    location: "Kinshasa, RDC",
    type: "Core Banking Specialist",
    description: "Développement backend au sein d’une FinTech innovante, spécialisée dans les solutions Core Banking et les services financiers hautement sécurisés et scalables.",
    achievements: [
      "Conception et déploiement d’APIs RESTful sécurisées avec Symfony, garantissant une haute disponibilité (99,9% uptime) et une conformité aux normes PCI-DSS.",
      "Intégration de systèmes distribués via RabbitMQ, optimisant le traitement des événements financiers critiques en temps réel.",
      "Participation active à l’architecture Core Banking, avec un focus majeur sur la sécurité applicative (OWASP), la performance et la scalabilité.",
      "Déploiement et orchestration d’applications avec Docker & Linux, automatisant les processus et réduisant les risques d'erreurs humaines.",
      "Mise en place de tests unitaires et de revues de code rigoureuses, améliorant la qualité globale et réduisant les incidents de 25%.",
      "Collaboration étroite avec les équipes de conformité et de sécurité pour résoudre des incidents complexes et garantir l'intégrité des données."
    ],
    technologies: [
      { name: "Symfony", highlight: true },
      { name: "RabbitMQ", highlight: true },
      { name: "Docker", highlight: true },
      { name: "OAuth2", highlight: true },
      { name: "Linux", highlight: false },
      { name: "REST API", highlight: false }
    ],
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/40",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    accentColor: "text-primary",
    icon: Landmark
  },
  {
    company: "TINDA",
    role: "Backend Architect & Developer",
    period: "Juin 2024 - Présent",
    location: "Kinshasa, RDC",
    type: "Backend & Core Banking Specialist",
    description: "Plateforme intelligente de gestion de colis et paiements, combinant logistique et solutions financières (Fintech) pour le marché africain. En charge de la vision technique globale et de la robustesse des flux financiers.",
    achievements: [
      "Conception et déploiement d’une architecture backend scalable traitant plusieurs milliers de transactions et colis par mois.",
      "Optimisation du système de tracking en temps réel, réduisant les latences de 30% et les retards de livraison de 15%.",
      "Sécurisation et automatisation des flux de paiements (Cash & Digital), garantissant une conformité aux standards de sécurité bancaire.",
      "Intégration de 12+ APIs de services tiers (Paiements, SMS, Mapping), étendant les capacités de la plateforme.",
      "Optimisation des coûts d'infrastructure de 25% via une gestion fine du cache Redis et du monitoring applicatif."
    ],
    technologies: [
      { name: "Symfony", highlight: true },
      { name: "RabbitMQ", highlight: true },
      { name: "PostgreSQL", highlight: false },
      { name: "Docker", highlight: true },
      { name: "Redis", highlight: false },
      { name: "OAuth2", highlight: true }
    ],
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/40",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    accentColor: "text-accent",
    icon: Landmark
  },
  {
    company: "Ongoza Africa",
    role: "Instructeur en Développement Web",
    period: "Juin 2023 - Août 2023",
    location: "Kinshasa, RDC",
    type: "Contrat de formation",
    description: "Élaboration et animation de modules pédagogiques en HTML/CSS pour débutants. Accompagnement personnalisé et mentorat technique pour favoriser l'insertion numérique des jeunes.",
    achievements: [
      "Animation de modules HTML/CSS permettant à 30+ étudiants de maîtriser les bases du Web",
      "Encadrement pratique sur la création de sites web statiques et responsives",
      "Élaboration de supports de cours et d'exercices pratiques interactifs",
      "Mentorat technique sur les bonnes pratiques de structuration de code"
    ],
    technologies: [
      { name: "HTML5", highlight: true },
      { name: "CSS3", highlight: true },
      { name: "Responsive Design", highlight: false },
      { name: "Pédagogie", highlight: false }
    ],
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/40",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    accentColor: "text-accent",
    icon: BookOpen
  },
  {
    company: "FirstBank DRC",
    role: "Stagiaire Développeur – IT & Banking",
    period: "Février 2022 –  Mai 2022",
    location: "Gombe - Kinshasa, RDC",
    type: "Stage professionnel",
    description: "Immersion au sein de la direction informatique d'une banque panafricaine pour comprendre les flux financiers et les contraintes techniques du secteur bancaire.",
    achievements: [
      "Immersion dans les processus de transfert international et conformité bancaire",
      "Participation aux phases d'analyse pour le développement d'applications internes",
      "Compréhension des environnements de production hautement sécurisés",
      "Acquisition de compétences sur les flux de données bancaires et la sécurité applicative"
    ],
    technologies: [
      { name: "Banking Processes", highlight: true },
      { name: "Compliance", highlight: false },
      { name: "IT Security", highlight: true },
      { name: "Software Dev", highlight: false }
    ],
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/40",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    accentColor: "text-primary",
    icon: Landmark
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />

      <div className="container px-4 md:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 mb-6"
          >
            <Briefcase className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Parcours Professionnel</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Expérience Professionnelle
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed mb-4">
            Architecte et Développeur spécialisé dans les systèmes financiers, la logistique intelligente et les infrastructures backend haute performance
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Award className="h-4 w-4 text-primary" />
            <span>Expertise Backend & Core Banking • Symfony & Fintech Solution</span>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative space-y-8">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-accent/20 to-primary/20 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background -translate-x-1/2 z-10 shadow-lg shadow-primary/50" />

              <Card className={`group relative overflow-hidden border-2 ${exp.borderColor} bg-card/80 backdrop-blur-md hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500`}>
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="relative p-8 md:p-10">
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                    <div className="flex-1 space-y-4">
                      {/* Company & Role */}
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${exp.iconBg} ${exp.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <exp.icon className="h-7 w-7" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold mb-1 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                            {exp.company}
                          </h3>
                          <p className={`text-xl font-semibold ${exp.accentColor} mb-2`}>
                            {exp.role}
                          </p>
                          <p className="text-sm text-muted-foreground font-medium">
                            {exp.type}
                          </p>
                        </div>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/30 border border-border/50">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/30 border border-border/50">
                          <MapPin className="h-4 w-4 text-accent" />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Context Section */}
                  <div className="mb-8 p-6 rounded-xl bg-secondary/20 border border-border/50">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                      <Briefcase className="h-3 w-3" />
                      Contexte
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed text-left">
                      {exp.description}
                    </p>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Achievements */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="text-base font-bold">Réalisations clés</h4>
                      </div>

                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 text-sm text-muted-foreground group/item"
                          >
                            <span className={`${exp.accentColor} mt-0.5 transition-transform group-hover/item:translate-x-1`}>
                              ▹
                            </span>
                            <span className="leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`p-2 rounded-lg ${exp.iconBg}`}>
                          <Wrench className={`h-5 w-5 ${exp.iconColor}`} />
                        </div>
                        <h4 className="text-base font-bold">Stack Technique</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <motion.div
                            key={tech.name}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge
                              variant={tech.highlight ? "default" : "secondary"}
                              className={
                                tech.highlight
                                  ? `${exp.iconBg} ${exp.iconColor} border ${exp.borderColor} hover:opacity-80 transition-opacity font-semibold`
                                  : "bg-secondary/50 hover:bg-secondary/80 transition-colors"
                              }
                            >
                              {tech.name}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="inline-flex items-center gap-4 border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/40 transition-all duration-300 group">
            <Award className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-sm font-semibold mb-1">Prix Hackathon "Code & Win" 2025</p>
              <p className="text-xs text-muted-foreground">1er Prix - ADIS & Ministère du Numérique RDC</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="ml-4 group-hover:bg-primary/10"
              asChild
            >
              <a href="#distinction">
                Voir distinction
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
