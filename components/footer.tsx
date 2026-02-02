"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  X,
  ExternalLink,
  ArrowUp,
  Cpu,
  Code2,
  Phone,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-card/60 backdrop-blur-xl overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container px-4 md:px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start mb-16">
          {/* Column 1: Brand & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-center md:text-left"
          >
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-black tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Benjamin KALOMBO MUKENA
              </h3>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest">
                <Cpu className="h-3 w-3" />
                Ingénieur Logiciel
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto md:mx-0 font-medium">
              Spécialisé en architectures backend et Core Banking Systems. Expert en création de solutions robustes, scalables et sécurisées pour les systèmes bancaires critiques.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/benjamin-kalombo-mukena-54520715b/", label: "LinkedIn", color: "hover:text-[#0077b5]" },
                { icon: Github, href: "https://github.com/goodben7", label: "GitHub", color: "hover:text-foreground" },
                { icon: X, href: "https://x.com/BenjaminMukena", label: "X", color: "hover:text-foreground" },
                { icon: Mail, href: "mailto:bmukena85@gmail.com", label: "Email", color: "hover:text-primary" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  className={`text-muted-foreground transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-center md:text-left"
          >
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Navigation</h4>
            <nav className="grid grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-8 max-w-[280px] mx-auto md:mx-0">
              {[
                { name: "Stack Technique", href: "#tech-stack" },
                { name: "Expérience", href: "#experience" },
                { name: "Projets Majeurs", href: "#projects" },
                { name: "Distinctions", href: "#distinction" },
                { name: "Formation", href: "#education" },
                { name: "Contact", href: "#contact" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-bold text-muted-foreground hover:text-primary transition-all flex items-center gap-2 group justify-center md:justify-start hover:translate-x-1"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Column 3: Collaborons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-center md:text-left"
          >
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Contactez-moi</h4>
              <p className="text-sm text-muted-foreground font-medium italic">Vous avez un projet en tête ? Parlons-en !</p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:bmukena85@gmail.com"
                className="group flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/40 hover:bg-secondary/50 transition-all justify-center md:justify-start"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email professionnel</p>
                  <p className="text-sm font-bold truncate">bmukena85@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+243828120996"
                className="group flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-accent/40 hover:bg-secondary/50 transition-all justify-center md:justify-start"
              >
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Appel direct / WhatsApp</p>
                  <p className="text-sm font-bold">+243 828 120 996</p>
                </div>
              </a>
            </div>

            <Button
              variant="outline"
              className="w-full md:w-auto mt-4 rounded-xl border-primary/20 hover:border-primary font-bold group"
              onClick={scrollToTop}
            >
              Retour en haut
              <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border/50">
          <div className="flex justify-center items-center text-center">
            <p className="text-sm text-foreground/90 font-black tracking-tight">
              © {currentYear} Benjamin KALOMBO MUKENA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
