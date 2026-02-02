"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  MapPin,
  Sparkles,
  Award,
  BookOpen,
  Binary,
  Briefcase,
  Layout,
  Calendar,
  Layers
} from "lucide-react";

const educationData = [
  {
    institution: "Université de Kinshasa",
    abbreviation: "UNIKIN",
    degree: "Licence en Ingénierie Informatique",
    level: "Licence",
    period: "2022 – 2024",
    location: "Kinshasa, RDC",
    description: "Spécialisation avancée en ingénierie logicielle et conception de systèmes distribués. Focus sur l'architecture backend, la scalabilité et la gestion de données complexes.",
    specializations: [
      { name: "Génie Logiciel", highlight: true },
      "Systèmes Distribués",
      "Bases de Données",
      { name: "Architecture Backend", highlight: true }
    ],
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/40",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    accentColor: "text-primary"
  },
  {
    institution: "Université de Kinshasa",
    abbreviation: "UNIKIN",
    degree: "Graduat en Mathématiques & Informatique",
    level: "Graduat",
    period: "2019 – 2022",
    location: "Kinshasa, RDC",
    description: "Bases fondamentales solides alliant la rigueur mathématique à la logique algorithmique. Développement d'une capacité d'analyse critique et de résolution de problèmes techniques.",
    specializations: [
      "Algorithmique",
      "Analyse Mathématique",
      { name: "Développement Logiciel", highlight: true },
      "Structures de Données"
    ],
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/40",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    accentColor: "text-accent"
  },
  {
    institution: "Complexe Scolaire MAFUTA",
    abbreviation: "MAFUTA",
    degree: "Diplôme d’État — Commercial Informatique",
    level: "Baccalauréat",
    period: "2017 – 2018",
    location: "Kinshasa, RDC",
    description: "Introduction aux bases de l'informatique de gestion et aux premiers concepts de programmation, couplée à une formation en gestion commerciale.",
    specializations: [
      "Bases de la programmation",
      "Gestion Commerciale",
      "Outils Informatique"
    ],
    color: "from-primary/20 text-primary/10",
    borderColor: "border-border/60",
    iconBg: "bg-secondary/40",
    iconColor: "text-muted-foreground",
    accentColor: "text-muted-foreground"
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />

      <div className="container px-4 md:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
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
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium uppercase tracking-wider">Formation Académique</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Parcours  Académique
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed mb-4">
            Un socle académique rigoureux en mathématiques et ingénierie informatique, formant une base solide pour la conception de solutions technologiques critiques.
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {educationData.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index === 2 ? "lg:col-span-2 max-w-2xl mx-auto w-full" : ""}
            >
              <Card className={`group relative h-full overflow-hidden border-2 ${edu.borderColor} bg-card/80 backdrop-blur-md hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative p-8 md:p-10 flex flex-col h-full">
                  {/* Top Header */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
                    <div className={`p-4 rounded-2xl ${edu.iconBg} ${edu.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                      <GraduationCap className="h-10 w-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{edu.institution}</h3>
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/30 border border-border/50">
                          <Calendar className="h-3.5 w-3.5 text-primary" />
                          <span className="text-sm font-semibold text-foreground/80">{edu.period}</span>
                        </div>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block" />
                        <Badge variant="outline" className="font-bold border-accent/40 text-accent">
                          {edu.level}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Degree & Description */}
                  <div className="space-y-4 mb-8 flex-1">
                    <h4 className="text-xl font-bold flex items-center justify-center sm:justify-start gap-2">
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-center sm:text-left">
                      {edu.description}
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground bg-secondary/30 w-fit px-3 py-1.5 rounded-lg mx-auto sm:mx-0">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Specializations Area */}
                  <div className="space-y-4 pt-6 border-t border-border/50">
                    <h5 className="text-sm font-bold uppercase tracking-widest text-foreground/80 flex items-center justify-center sm:justify-start gap-2">
                      <Binary className="h-4 w-4 text-primary" />
                      Compétences acquises
                    </h5>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {edu.specializations.map((spec, i) => {
                        const specName = typeof spec === 'string' ? spec : spec.name;
                        const isHighlighted = typeof spec === 'object' && spec.highlight;
                        return (
                          <motion.div
                            key={specName}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge
                              variant={isHighlighted ? "default" : "secondary"}
                              className={
                                isHighlighted
                                  ? `${edu.iconBg} ${edu.iconColor} border ${edu.borderColor} font-bold`
                                  : "bg-secondary/50 hover:bg-secondary/80 transition-colors"
                              }
                            >
                              {specName}
                            </Badge>
                          </motion.div>
                        );
                      })}
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
