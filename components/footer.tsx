"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Benjamin KALOMBO MUKENA</h3>
            <p className="text-sm text-muted-foreground">
              Ingénieur Logiciel spécialisé en Backend & Core Banking
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a href="#tech-stack" className="hover:text-primary transition-colors">
                Stack Technique
              </a>
              <a href="#experience" className="hover:text-primary transition-colors">
                Expérience
              </a>
              <a href="#projects" className="hover:text-primary transition-colors">
                Projets
              </a>
              <a href="#distinction" className="hover:text-primary transition-colors">
                Distinction
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:bmukena85@gmail.com" className="block hover:text-primary transition-colors">
                bmukena85@gmail.com
              </a>
              <a href="tel:+243828120996" className="block hover:text-primary transition-colors">
                +243 828 120 996
              </a>
            </div>
            <div className="flex gap-2 pt-2">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="https://github.com/benjaminkalombo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="https://linkedin.com/in/benjaminkalombo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="mailto:bmukena85@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Benjamin KALOMBO MUKENA. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1">
            Conçu avec <Heart className="h-4 w-4 text-primary fill-primary" /> et Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
