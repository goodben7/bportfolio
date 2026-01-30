"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Calendar, Users, Sparkles } from "lucide-react";

export function Distinction() {
  return (
    <section id="distinction" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/10 to-primary/10" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
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
            <span className="text-sm font-medium">Distinction</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Reconnaissance & Prix
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <motion.div
                  initial={{ scale: 0.8, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent blur-xl opacity-50" />
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30">
                      <Trophy className="h-16 w-16 md:h-20 md:w-20 text-primary" />
                    </div>
                  </div>
                </motion.div>

                <div className="flex-1 space-y-6">
                  <div className="space-y-3">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
                      1er Prix
                    </Badge>
                    
                    <h3 className="text-3xl md:text-4xl font-bold">
                      Hackathon &quot;Code & Win&quot;
                    </h3>
                    
                    <p className="text-xl text-primary font-semibold">
                      ADIS 2025
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-base">
                    Lauréat du premier prix au Hackathon national &quot;Code & Win&quot; organisé par l&apos;Agence de Développement de l&apos;Informatique et du Numérique (ADN) en partenariat avec le Ministère du Numérique de la République Démocratique du Congo.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border/50">
                      <Award className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">Organisateur</div>
                        <div className="text-xs text-muted-foreground">ADN & Min. Numérique</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border/50">
                      <Calendar className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">Année</div>
                        <div className="text-xs text-muted-foreground">2025</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border/50">
                      <Users className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">Niveau</div>
                        <div className="text-xs text-muted-foreground">National</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <h4 className="text-sm font-semibold mb-3 text-foreground/80">Compétences démontrées</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Innovation", "Problem Solving", "Architecture", "Performance", "Collaboration"].map((skill) => (
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
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
