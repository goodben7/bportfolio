"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  X,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  ArrowRight
} from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xeezkwja", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 5 seconds to allow new submission if needed
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setError(data.errors.map((error: any) => error.message).join(", "));
        } else {
          setError("Une erreur est survenue lors de l'envoi du message.");
        }
      }
    } catch (error) {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-50" />

      <div className="container px-4 md:px-6 relative z-10 max-w-6xl mx-auto">
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
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium uppercase tracking-wider">Parlons Ensemble</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Contactez-moi
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">
            Vous avez un projet en tête ou souhaitez collaborer sur des solutions innovantes ? N&apos;hésitez pas à me contacter pour en discuter !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-md p-8 group hover:border-primary/30 transition-all duration-300">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    Informations de contact
                  </h3>
                  <p className="text-muted-foreground">
                    Basé à Kinshasa, je suis ouvert aux opportunités locales et internationales.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:bmukena85@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/40 hover:bg-secondary/50 transition-all group/item"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover/item:scale-110 transition-transform">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email professionnel</p>
                      <p className="font-semibold text-foreground group-hover/item:text-primary transition-colors">bmukena85@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+243828120996"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-accent/40 hover:bg-secondary/50 transition-all group/item"
                  >
                    <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover/item:scale-110 transition-transform">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Téléphone / WhatsApp</p>
                      <p className="font-semibold text-foreground group-hover/item:text-accent transition-colors">+243 828 120 996</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 group/item">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover/item:scale-110 transition-transform">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Localisation</p>
                      <p className="font-semibold text-foreground">Kinshasa, RDC / Remote</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border/50">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Réseaux professionnels</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: "https://github.com/goodben7", label: "GitHub", color: "hover:bg-foreground hover:text-background" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/benjamin-kalombo-mukena-54520715b/", label: "LinkedIn", color: "hover:bg-[#0077b5] hover:text-white" },
                      { icon: X, href: "https://x.com/BenjaminMukena", label: "X", color: "hover:bg-foreground hover:text-background" }
                    ].map((social) => (
                      <Button
                        key={social.label}
                        size="icon"
                        variant="outline"
                        className={`h-12 w-12 rounded-xl border-border/50 transition-all duration-300 ${social.color}`}
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                          <social.icon className="h-5 w-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="border-border/50 bg-card/80 backdrop-blur-md p-8 md:p-10 relative overflow-hidden h-full">
              {/* Form Side Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative z-10 space-y-8"
                  >
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Envoyez un message</h3>
                      <p className="text-muted-foreground">Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.</p>
                      {error && (
                        <p className="text-sm text-red-500 font-medium bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                          {error}
                        </p>
                      )}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                            Nom Complet
                          </label>
                          <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl bg-secondary/20 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-muted-foreground/50"
                            placeholder="Jean Dupont"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                            Adresse Email
                          </label>
                          <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl bg-secondary/20 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-muted-foreground/50"
                            placeholder="jean@exemple.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">
                          Votre Message
                        </label>
                        <textarea
                          required
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-secondary/20 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none placeholder:text-muted-foreground/50"
                          placeholder="Parlez-moi de votre projet, de vos objectifs..."
                        />
                      </div>

                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        size="lg"
                        className="w-full h-14 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-bold text-lg rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          >
                            <Sparkles className="h-6 w-6" />
                          </motion.div>
                        ) : (
                          <>
                            Envoyer le message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50 text-primary">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold">Message Envoyé !</h3>
                      <p className="text-muted-foreground text-lg max-w-sm">
                        Merci pour votre message. Je reviendrai vers vous très prochainement !
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="rounded-xl px-8"
                    >
                      Envoyer un autre message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA for direct messaging */}

      </div>
    </section>
  );
}
