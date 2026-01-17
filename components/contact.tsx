"use client"

import { Mail, Github, Linkedin, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <p className="text-sm uppercase tracking-wider text-primary font-medium">Contact</p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-balance">Travaillons ensemble</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Je suis toujours intéressé par de nouveaux projets et opportunités. N'hésitez pas à me contacter !
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a
                    href="mailto:manon_lopes@outlook.fr"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    manon_lopes@outlook.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Localisation</p>
                  <p className="text-muted-foreground">Montpellier, France</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-medium mb-4">Retrouvez-moi sur</p>
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="justify-start bg-transparent" asChild>
                  <a href="https://github.com/Manon-lps" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-3" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" className="justify-start bg-transparent" asChild>
                  <a href="https://www.linkedin.com/in/manon-lopes-aa91942ab/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-3" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Manon Lopes · Développé avec Next.js et v0
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
