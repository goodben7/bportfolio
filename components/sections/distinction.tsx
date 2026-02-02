"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Award,
  Calendar,
  Users,
  Sparkles,

  Code2,
  Target,
  Layers,
  Zap,
  Lightbulb,
  ArrowUpRight
} from "lucide-react";

const distinctions = [
  {
    id: "hackathon-2025",
    title: "Code & Win",
    subtitle: "Hackathon National",
    rank: "1er Prix Innovation & Excellence Technique",
    year: "2025",
    organizer: "Ministère de l’Économie Numérique, ARPTC, ADN",
    level: "National",
    category: "Gouvernance & Transformation Digitale",
    project: "SISAG",
    projectDescription: "Système d'Information pour le Suivi de l'Action Gouvernementale",
    description: "Lauréat du 1er Prix au Hackathon national \"Code & Win\" (2025), organisé par le Ministère de l’Économie Numérique, l’ARPTC et l’ADN. Ce prix récompense l’innovation et l’excellence technique dans le développement de solutions numériques pour la transformation digitale de la RDC.",
    impact: [
      "Solution innovante primée parmi 50+ participants au niveau national",
      "Architecture multi-tenant reconnue pour sa scalabilité et son potentiel d’impact dans le secteur public",
      "Projet en cours de développement, avec un déploiement prévu pour améliorer la transparence administrative"
    ],
    skills: [
      {
        name: "Innovation",
        description: "Développement d’une solution SaaS primée pour la gouvernance publique.",
        icon: Lightbulb,
        color: "text-accent"
      },
      {
        name: "Problem Solving",
        description: "Résolution de défis complexes liés à la traçabilité administrative.",
        icon: Target,
        color: "text-primary"
      },
      {
        name: "Architecture",
        description: "Conception d'une infrastructure microservices et multi-tenant robuste.",
        icon: Layers,
        color: "text-accent"
      },
      {
        name: "Performance",
        description: "Optimisation des flux de données pour un reporting en temps réel.",
        icon: Zap,
        color: "text-primary"
      },
      {
        name: "Collaboration",
        description: "Coordination technique efficace au sein d'une équipe pluridisciplinaire.",
        icon: Users,
        color: "text-accent"
      }
    ],
    technologies: ["Symfony", "REST API", "PostgreSQL", "Docker", "JWT", "Git", "Chart.js"],
    featured: true,
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/50",
    glowColor: "shadow-accent/30"
  }
];

export function Distinction() {
  return (
    <section id="distinction" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-primary/10 to-accent/10" />

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

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
            <Trophy className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Prix & Distinctions</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Reconnaissance & Prix
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">
            Distinctions reflétant mon engagement pour l'innovation, l'excellence technique et la qualité du code
          </p>
        </motion.div>

        {/* Distinctions List */}
        <div className="space-y-8">
          {distinctions.map((distinction, index) => (
            <motion.div
              key={distinction.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className={`group relative overflow-hidden border-2 ${distinction.borderColor} bg-card/80 backdrop-blur-xl hover:border-accent/70 transition-all duration-500 shadow-2xl hover:shadow-3xl ${distinction.glowColor}`}>
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${distinction.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

                {/* Rotating Glow Effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />



                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-10 items-start">
                    {/* Trophy Icon Section */}
                    <motion.div
                      initial={{ scale: 0.8, rotate: -15 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="flex-shrink-0"
                    >
                      <div className="relative group/trophy">
                        {/* Outer Glow */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-accent to-primary blur-2xl opacity-60"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.4, 0.7, 0.4]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />

                        {/* Trophy Container */}
                        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-accent/30 to-primary/30 border-4 border-accent/40 shadow-2xl group-hover/trophy:scale-110 transition-transform duration-500">
                          <motion.div
                            animate={{
                              y: [0, -10, 0],
                              rotateY: [0, 15, -15, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Trophy className="h-24 w-24 md:h-28 md:w-28 text-accent drop-shadow-2xl" />
                          </motion.div>


                        </div>
                      </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-6">
                      {/* Header */}
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <Badge className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground border-0 px-4 py-1.5 text-sm font-bold shadow-lg">
                            🏆 {distinction.rank}
                          </Badge>
                          <Badge variant="outline" className="border-primary/40 text-primary font-semibold">
                            {distinction.category}
                          </Badge>
                        </div>

                        <div>
                          <h3 className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                            {distinction.title}
                          </h3>
                          <p className="text-xl md:text-2xl font-bold text-accent mb-2">
                            {distinction.subtitle}
                          </p>
                          <p className="text-base text-muted-foreground font-medium">
                            {distinction.organizer}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-base text-muted-foreground leading-relaxed text-left border-l-4 border-accent/40 pl-4 py-2 bg-secondary/20 rounded-r-lg">
                        {distinction.description}
                      </p>

                      {/* Meta Information */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-accent/40 transition-all">
                          <div className="p-2 rounded-lg bg-accent/20">
                            <Award className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <div className="text-sm font-bold">Organisateur</div>
                            <div className="text-xs text-muted-foreground leading-tight">{distinction.organizer}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-primary/40 transition-all">
                          <div className="p-2 rounded-lg bg-primary/20">
                            <Calendar className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-bold">Année</div>
                            <div className="text-xs text-muted-foreground">{distinction.year}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/20 border-2 border-border/50 hover:border-accent/40 transition-all">
                          <div className="p-2 rounded-lg bg-accent/20">
                            <Users className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <div className="text-sm font-bold">Niveau</div>
                            <div className="text-xs text-muted-foreground">{distinction.level}</div>
                          </div>
                        </div>
                      </div>

                      {/* Impact Section */}
                      <div className="p-6 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30">
                        <h4 className="text-base font-bold mb-4 flex items-center gap-2">
                          <Zap className="h-5 w-5 text-accent" />
                          Impact & Reconnaissance
                        </h4>
                        <ul className="space-y-2">
                          {distinction.impact.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-accent mt-0.5">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills & Technologies Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Skills Demonstrated */}
                        <div>
                          <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                            <Code2 className="h-4 w-4 text-primary" />
                            Compétences démontrées
                          </h4>
                          <div className="flex flex-col gap-3">
                            {distinction.skills.map((skill: any) => (
                              <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group/skill flex flex-col gap-1"
                              >
                                <div className="flex items-center gap-2">
                                  <Badge
                                    variant="outline"
                                    className={`${skill.color} border-current hover:bg-current/10 transition-all cursor-default font-semibold`}
                                  >
                                    <skill.icon className="h-3 w-3 mr-1" />
                                    {skill.name}
                                  </Badge>
                                </div>
                                {skill.description && (
                                  <p className="text-xs text-muted-foreground leading-relaxed ml-1">
                                    {skill.description}
                                  </p>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies Used */}
                        <div>
                          <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                            <Layers className="h-4 w-4 text-accent" />
                            Technologies utilisées
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {distinction.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                className="bg-accent/20 text-accent border border-accent/40 hover:bg-accent/30 transition-colors font-medium"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
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
