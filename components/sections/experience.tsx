"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "FENX",
    role: "Développeur Backend",
    period: "2023 - Présent",
    location: "Kinshasa, RDC",
    description: "Conception et développement d'API RESTful pour des systèmes distribués à haute performance. Mise en place d'architectures microservices et optimisation des performances.",
    achievements: [
      "Développement d'API RESTful robustes et scalables",
      "Implémentation de systèmes distribués avec RabbitMQ",
      "Optimisation des performances et de la scalabilité",
      "Intégration de solutions de sécurité OAuth2"
    ],
    technologies: ["Symfony", "PostgreSQL", "RabbitMQ", "Docker", "REST API"],
    color: "from-primary/20 to-primary/5"
  },
  {
    company: "TINDA",
    role: "Backend Architect",
    period: "2022 - 2023",
    location: "Kinshasa, RDC",
    description: "Architecture et conception de solutions backend pour des applications d'entreprise. Leadership technique et mentorat d'équipe de développeurs.",
    achievements: [
      "Conception d'architectures backend évolutives",
      "Mise en place de bonnes pratiques de développement",
      "Mentorat et formation d'équipe technique",
      "Optimisation de la stack technique existante"
    ],
    technologies: ["ASP.NET Core", "SQL Server", "Azure", "Microservices", "CI/CD"],
    color: "from-accent/20 to-accent/5"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
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
              Expérience Professionnelle
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon parcours dans le développement backend et l&apos;architecture de systèmes distribués
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{exp.company}</h3>
                          <p className="text-lg text-primary font-medium">{exp.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-foreground/80">Réalisations clés</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-foreground/80">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
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
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
