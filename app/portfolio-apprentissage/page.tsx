"use client"

import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

const competencies = [
  {
    id: 1,
    domain: "Compétence n°1 : Réaliser un développement d'application",
    bgClass: "bg-primary/5",
    headerClass: "bg-primary/10",
    borderClass: "border-l-primary",
    acs: [
      {
        level: "Niveau 3",
        code: "AC1",
        label: "Choisir et implémenter les architectures adaptées",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "Architecture fullstack : backend Python/FastAPI asynchrone, base PostgreSQL avec fonctions pgSQL, frontend Create T3 App (TypeScript). Choix technologiques adaptés aux contraintes industrielles ferroviaires.",
          },
          {
            name: "Herbazon",
            href: "/projects/herbazon",
            description: "Choix et implémentation d'une architecture MVC avec Symfony : séparation claire des responsabilités entre modèles, vues et contrôleurs pour une application web structurée.",
          },
          {
            name: "MyAvatar",
            href: "/projects/Myavatar",
            description: "Architecture Symfony adaptée à une application de gestion d'avatars multi-email, avec accès public via URL sécurisée (hash SHA256) et gestion de l'authentification.",
          },
        ],
      },
      {
        level: "Niveau 3",
        code: "AC2",
        label: "Faire évoluer une application existante",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "Refactorisation du backend existant vers une architecture asynchrone FastAPI et optimisation des requêtes SQL en fonctions pgSQL pour améliorer les performances.",
          },
          {
            name: "Projet Trains",
            href: "/projects/trains",
            description: "Prise en main et évolution d'un squelette de projet existant : implémentation des mécaniques de jeu, des règles métier et de la logique de plateau à partir d'une base de code fournie.",
          },
        ],
      },
      {
        level: "Niveau 3",
        code: "AC3",
        label: "Intégrer des solutions dans un environnement de production",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "Validation et test des routes API via Swagger/OpenAPI dans un contexte industriel réel. Vérification de la conformité des échanges entre le frontend et le backend.",
          },
          {
            name: "Projet CTF",
            href: "/projects/CTF",
            description: "Déploiement et mise en production de la plateforme CTFd via Docker et Portainer, dans un environnement réel utilisé par les participants lors de l'événement.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    domain: "Compétence n°2 : Optimiser des applications",
    bgClass: "bg-secondary/5",
    headerClass: "bg-secondary/10",
    borderClass: "border-l-secondary",
    acs: [],
  },
  {
    id: 3,
    domain: "Compétence n°3 : Administrer des systèmes informatiques",
    bgClass: "bg-tertiary/5",
    headerClass: "bg-tertiary/10",
    borderClass: "border-l-tertiary",
    acs: [],
  },
  {
    id: 4,
    domain: "Compétence n°4 : Gérer des données de l'information",
    bgClass: "bg-quaternary/5",
    headerClass: "bg-quaternary/10",
    borderClass: "border-l-quaternary",
    acs: [],
  },
  {
    id: 5,
    domain: "Compétence n°5 : Conduire un projet",
    bgClass: "bg-quinary/5",
    headerClass: "bg-quinary/10",
    borderClass: "border-l-quinary",
    acs: [
      {
        level: "Niveau 3",
        code: "AC1",
        label: "Mesurer les impacts économiques, sociétaux et technologiques d'un projet informatique",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "Analyse des impacts de la maintenance conditionnelle sur la fiabilité et les coûts opérationnels de l'infrastructure ferroviaire.",
          },
        ],
      },
      {
        level: "Niveau 3",
        code: "AC2",
        label: "Savoir intégrer un projet informatique dans le système d'information d'une organisation",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "Intégration du module MIDA comme GMAO indépendante ou connectée à une GMAO existante au sein du système d'information ferroviaire.",
          },
        ],
      },
      {
        level: "Niveau 3",
        code: "AC3",
        label: "Savoir adapter un système d'information",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "Adaptation du système de maintenance d'une approche calendaire vers une maintenance conditionnelle dynamique basée sur l'utilisation réelle des équipements.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    domain: "Compétence n°6 : Collaborer au sein d'une équipe informatique",
    bgClass: "bg-senary/5",
    headerClass: "bg-senary/10",
    borderClass: "border-l-senary",
    acs: [
      {
        level: "Niveau 3",
        code: "AC1",
        label: "Organiser et partager une veille technologique et informationnelle",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "Veille technologique sur les APIs REST asynchrones (FastAPI), les optimisations de bases de données PostgreSQL et les pratiques de maintenance conditionnelle.",
          },
        ],
      },
      {
        level: "Niveau 3",
        code: "AC2",
        label: "Identifier les enjeux de l'économie de l'innovation numérique",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "Compréhension des enjeux économiques de l'optimisation de la maintenance ferroviaire : réduction des coûts d'intervention, amélioration de la fiabilité et de la disponibilité des équipements.",
          },
        ],
      },
      {
        level: "Niveau 3",
        code: "AC3",
        label: "Guider la conduite du changement informatique au sein d'une organisation",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "Contribution à la transition organisationnelle vers une maintenance intelligente et conditionnelle au sein d'une équipe industrielle pluridisciplinaire.",
          },
        ],
      },
      {
        level: "Niveau 3",
        code: "AC4",
        label: "Accompagner le management de projet informatique",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "Collaboration avec le Product Owner et l'équipe technique pour prioriser les développements, suivre l'avancement via Jira et gérer les versions avec Bitbucket.",
          },
        ],
      },
    ],
  },
]

const projectBadgeColors: Record<string, string> = {
  "/projects/trains": "bg-primary/10 text-primary hover:bg-primary/20",
  "/projects/herbazon": "bg-secondary/10 text-secondary hover:bg-secondary/20",
  "/projects/CTF": "bg-tertiary/10 text-tertiary hover:bg-tertiary/20",
  "/projects/Mida": "bg-quaternary/10 text-quaternary hover:bg-quaternary/20",
  "/projects/Myavatar": "bg-quinary/10 text-quinary hover:bg-quinary/20",
}

export default function PortfolioApprentissage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-xl font-serif font-bold hover:text-primary transition-colors">
              <span className="font-medium text-foreground">Manon Lopes</span>
            </Link>
            <nav className="flex items-center gap-8">
              <Link href="/#about" className="text-sm hover:text-primary transition-colors">
                À propos
              </Link>
              <Link href="/#projects" className="text-sm hover:text-primary transition-colors">
                Projets
              </Link>
              <Link href="/portfolio-apprentissage" className="text-sm hover:text-primary transition-colors font-medium text-primary">
                Portfolio d&apos;apprentissage
              </Link>
              <Link href="/#contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Retour
            </Link>

            <div className="space-y-6 mb-16">
              <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
                Portfolio d&apos;apprentissage
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Synthèse des compétences acquises dans le cadre du B.U.T. Informatique - Parcours D : Intégration d&apos;applications et management du système d&apos;information. Chaque compétence est illustrée par un ou plusieurs projets concrets.
              </p>
            </div>

            <div className="space-y-12">
              {competencies.filter((comp) => comp.acs.length > 0).map((comp) => (
                <section key={comp.id} className="space-y-6">
                  <div className={`border-l-4 ${comp.borderClass} pl-6 py-2`}>
                    <h2 className="text-2xl font-serif font-bold">{comp.domain}</h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {comp.acs.map((ac, idx) => (
                      <div key={idx} className={`${comp.bgClass} rounded-xl p-6 space-y-4`}>
                        <div className={`rounded-lg ${comp.headerClass} px-4 py-2 text-sm font-bold text-center leading-snug`}>
                          {ac.level} · {ac.code}
                        </div>
                        <p className="font-semibold text-sm leading-snug">{ac.label}</p>
                        {ac.projects.length > 0 && (
                          <div className="space-y-3 pt-1">
                            {ac.projects.map((project) => (
                              <div key={project.href} className="space-y-1.5">
                                <Link
                                  href={project.href}
                                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${projectBadgeColors[project.href] ?? "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                                >
                                  {project.name}
                                  <ExternalLink className="h-3 w-3" />
                                </Link>
                                {project.description && (
                                  <p className="text-xs text-muted-foreground leading-relaxed pl-1">{project.description}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
