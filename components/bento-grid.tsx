import { Github, Linkedin, Mail, MapPin, Code2, Database, Palette, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px]">
      {/* Hero section */}
      <Card className="md:col-span-4 lg:col-span-4 md:row-span-2 p-8 md:p-10 flex flex-col justify-between bg-card border-border hover:shadow-lg transition-all duration-300">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance text-foreground">
            Étudiante en 3ème année de BUT Informatique
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed max-w-2xl">
            Développeuse Full Stack en alternance chez Railwai
          </p>
        </div>
        <div className="flex gap-3 mt-6">
          <a
            href="https://github.com/manon-lps"
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-all"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://linkedin.com/in/manon-lopes"
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-all"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href="mailto:contact@manonlopes.dev"
            className="size-10 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-all"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </Card>

      {/* Location */}
      <Card className="md:col-span-2 lg:col-span-2 p-6 flex flex-col justify-between bg-secondary text-secondary-foreground hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="size-5" />
          <span className="text-sm font-medium">Localisation</span>
        </div>
        <div>
          <p className="text-2xl font-semibold">Montpellier</p>
          <p className="text-sm opacity-90 mt-1">France</p>
        </div>
      </Card>

      {/* Skills - Frontend */}
      <Card className="md:col-span-2 lg:col-span-2 p-6 flex flex-col justify-between bg-card border-border hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-2 mb-2">
          <Code2 className="size-5 text-secondary" />
          <span className="text-sm font-medium text-muted-foreground">Frontend</span>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-muted rounded-md text-sm">React</span>
            <span className="px-3 py-1 bg-muted rounded-md text-sm">Next.js</span>
            <span className="px-3 py-1 bg-muted rounded-md text-sm">TypeScript</span>
            <span className="px-3 py-1 bg-muted rounded-md text-sm">Tailwind</span>
          </div>
        </div>
      </Card>

      {/* Skills - Backend */}
      <Card className="md:col-span-2 lg:col-span-2 p-6 flex flex-col justify-between bg-card border-border hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-2 mb-2">
          <Database className="size-5 text-secondary" />
          <span className="text-sm font-medium text-muted-foreground">Backend</span>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-muted rounded-md text-sm">Node.js</span>
            <span className="px-3 py-1 bg-muted rounded-md text-sm">PostgreSQL</span>
            <span className="px-3 py-1 bg-muted rounded-md text-sm">API REST</span>
            <span className="px-3 py-1 bg-muted rounded-md text-sm">MongoDB</span>
          </div>
        </div>
      </Card>

      {/* Project 1 */}
      <Card className="md:col-span-2 lg:col-span-3 md:row-span-2 p-6 flex flex-col bg-card border-border hover:shadow-lg transition-all duration-300 group cursor-pointer">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
              <img
                src="/modern-web-dashboard.png"
                alt="Application E-commerce"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Application E-commerce</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plateforme complète avec gestion des paiements, authentification et dashboard admin.
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-muted rounded text-xs">Next.js</span>
            <span className="px-2 py-1 bg-muted rounded text-xs">Stripe</span>
            <span className="px-2 py-1 bg-muted rounded text-xs">PostgreSQL</span>
          </div>
        </div>
      </Card>

      {/* Project 2 */}
      <Card className="md:col-span-2 lg:col-span-3 md:row-span-2 p-6 flex flex-col bg-card border-border hover:shadow-lg transition-all duration-300 group cursor-pointer">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
              <img
                src="/social-media-app-interface.png"
                alt="Réseau social"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Réseau Social</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Application sociale avec fil d'actualité en temps réel et système de messagerie.
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-muted rounded text-xs">React</span>
            <span className="px-2 py-1 bg-muted rounded text-xs">Socket.io</span>
            <span className="px-2 py-1 bg-muted rounded text-xs">Node.js</span>
          </div>
        </div>
      </Card>

      {/* Design skill */}
      <Card className="md:col-span-2 lg:col-span-2 p-6 flex flex-col justify-between bg-card border-border hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-2 mb-2">
          <Palette className="size-5 text-secondary" />
          <span className="text-sm font-medium text-muted-foreground">Design</span>
        </div>
        <div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Création d'interfaces modernes et accessibles avec attention aux détails
          </p>
        </div>
      </Card>

      {/* About */}
      <Card
        id="about"
        className="md:col-span-4 lg:col-span-4 p-8 bg-card border-border hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="size-5 text-secondary" />
          <h2 className="text-2xl font-semibold text-foreground">À propos</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Développeur passionné avec une expertise en création d'applications web modernes. J'aime transformer des idées
          complexes en expériences utilisateur fluides et intuitives. Toujours à la recherche de nouveaux défis
          techniques et de technologies innovantes.
        </p>
      </Card>

      {/* Contact CTA */}
      <Card
        id="contact"
        className="md:col-span-4 lg:col-span-6 p-8 md:p-10 bg-primary text-primary-foreground hover:shadow-xl transition-all duration-300"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Travaillons ensemble</h2>
          <p className="text-lg mb-6 opacity-90 text-balance leading-relaxed">
            Vous avez un projet en tête ? Je serais ravi d'en discuter avec vous.
          </p>
          <a
            href="mailto:contact@manonlopes.dev"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:shadow-lg transition-all"
          >
            <Mail className="size-4" />
            Me contacter
          </a>
        </div>
      </Card>
    </div>
  )
}
