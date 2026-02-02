"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 text-center">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary-color)_0%,transparent_70%)] opacity-[0.03]" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-10 max-w-5xl mx-auto"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background shadow-2xl overflow-hidden mb-6 group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
            <img
              src="/me.jpeg"
              alt="Benjamin KALOMBO MUKENA"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            {/* Ring Glow */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 ring-4 ring-primary/10" />
          </motion.div>

          {/* Main Title Group */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
            >
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
                Benjamin
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                KALOMBO MUKENA
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block"
            >
              <Badge variant="outline" className="text-lg md:text-xl py-1.5 px-6 border-primary/30 text-primary font-bold tracking-widest uppercase bg-primary/5">
                Ingénieur Logiciel
              </Badge>
            </motion.div>
          </div>

          {/* Optimized Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium"
          >
            Ingénieur Logiciel spécialisé en <span className="text-foreground font-bold italic">architectures backend</span> et <span className="text-foreground font-bold italic">Core Banking Systems</span>.
            Expert en création de solutions robustes, scalables et sécurisées pour les systèmes bancaires critiques.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Button
              size="lg"
              className="group h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
              asChild
            >
              <a href="#contact">
                Contactez-moi
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 group border-primary/20 hover:border-primary/40 hover:bg-primary/5 font-bold rounded-xl transition-all"
              asChild
            >
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                Télécharger le CV
              </a>
            </Button>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 border-t border-border/50 pt-10"
          >
            {[
              { name: "Stack", href: "#tech-stack" },
              { name: "Expérience", href: "#experience" },
              { name: "Projets", href: "#projects" },
              { name: "Distinctions", href: "#distinction" },
              { name: "Formation", href: "#education" },
              { name: "Contact", href: "#contact" }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-6 pt-2"
          >
            {[
              { icon: Github, href: "https://github.com/goodben7", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/benjamin-kalombo-mukena-54520715b/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:bmukena85@gmail.com", label: "Email" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
