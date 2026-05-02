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
        level: "Niveau 1",
        code: "AC1",
        label: "Implémenter des conceptions simples",
        projects: [
          {
            name: "Projet Trains",
            href: "/projects/trains",
            description: "Développement des méthodes, modélisation des cartes et des éléments du jeu à partir d'un squelette fourni.",
          },
          {
            name: "Herbazon",
            href: "/projects/herbazon",
            description: "Implémentation des modèles, vues et contrôleurs pour gérer dynamiquement les produits (ajout, modification, suppression, affichage).",
          },
        ],
      },
      {
        level: "Niveau 1",
        code: "AC2",
        label: "Élaborer des conceptions simples",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC3",
        label: "Faire des essais et évaluer leurs résultats en regard des spécifications",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC4",
        label: "Développer des interfaces utilisateurs",
        projects: [],
      },
      {
        level: "Niveau 2",
        code: "AC1",
        label: "Implémenter des conceptions complexes",
        projects: [
          {
            name: "Projet CTF",
            href: "/projects/CTF",
            description: "Création de défis en Forensic, Web et GDScript avec logique spécifique à chaque type, intégration dans un environnement sécurisé.",
          },
        ],
      },
      {
        level: "Niveau 2",
        code: "AC2",
        label: "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
        projects: [
          {
            name: "Projet Trains",
            href: "/projects/trains",
            description: "Analyse des règles du jeu et implémentation d'une structure orientée objet cohérente pour répondre aux exigences métier.",
          },
          {
            name: "Projet CTF",
            href: "/projects/CTF",
            description: "Définition des valeurs de points, catégories, visibilités, flags et types de réponse pour chaque défi sur la plateforme.",
          },
        ],
      },
      {
        level: "Niveau 2",
        code: "AC3",
        label: "Adopter de bonnes pratiques de conception et de programmation",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "",
          },
        ],
      },
      {
        level: "Niveau 2",
        code: "AC4",
        label: "Vérifier et valider la qualité de l'application par les tests",
        projects: [
          {
            name: "Herbazon",
            href: "/projects/herbazon",
            description: "Vérification du bon fonctionnement des fonctionnalités liées aux produits : ajout, affichage, mise à jour, suppression. En simulant un parcours utilisateur.",
          },
        ],
      },
      {
        level: "Niveau 3",
        code: "AC1",
        label: "Choisir et implémenter les architectures adaptées",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "",
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
            description: "",
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
            description: "",
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
    acs: [
      {
        level: "Niveau 1",
        code: "AC1",
        label: "Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC2",
        label: "Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...)",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC3",
        label: "Formaliser et mettre en œuvre des outils mathématiques pour l'informatique",
        projects: [],
      },
      {
        level: "Niveau 2",
        code: "AC1",
        label: "Choisir des structures de données complexes adaptées au problème",
        projects: [
          {
            name: "Projet Trains",
            href: "/projects/trains",
            description: "Utilisation de collections adaptées pour gérer les pioches, mains de joueurs et défausses.",
          },
        ],
      },
      {
        level: "Niveau 2",
        code: "AC2",
        label: "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
        projects: [
          {
            name: "Projet Trains",
            href: "/projects/trains",
            description: "Implémentation d'algorithmes de graphes pour la vérification des connexions ferroviaires et la gestion du plateau.",
          },
        ],
      },
      {
        level: "Niveau 2",
        code: "AC3",
        label: "Développer des interfaces utilisateur",
        projects: [
          {
            name: "Projet CTF",
            href: "/projects/CTF",
            description: "Personnalisation des thèmes CSS et structuration HTML/CSS pour le visuel des cartes, la navigation et la page de règles.",
          },
        ],
      },
      {
        level: "Niveau 2",
        code: "AC4",
        label: "Évaluer l'impact environnemental et sociétal des solutions proposées",
        projects: [],
      },
    ],
  },
  {
    id: 3,
    domain: "Compétence n°3 : Administrer des systèmes informatiques",
    bgClass: "bg-tertiary/5",
    headerClass: "bg-tertiary/10",
    borderClass: "border-l-tertiary",
    acs: [
      {
        level: "Niveau 1",
        code: "AC1",
        label: "Identifier les différents composants (matériels et logiciels) d'un système numérique",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC2",
        label: "Utiliser les fonctionnalités de base d'un système multitâches / multiutilisateurs",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC3",
        label: "Installer et configurer un système d'exploitation et des outils de développement",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC4",
        label: "Configurer un poste de travail dans un réseau d'entreprise",
        projects: [],
      },
      {
        level: "Niveau 2",
        code: "AC1",
        label: "Concevoir et développer des applications communicantes",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "",
          },
          {
            name: "MyAvatar",
            href: "/projects/Myavatar",
            description: "",
          },
        ],
      },
      {
        level: "Niveau 2",
        code: "AC2",
        label: "Utiliser des serveurs et des services réseaux virtualisés",
        projects: [
          {
            name: "Projet CTF",
            href: "/projects/CTF",
            description: "Déploiement et maintenance du projet via Docker et Portainer.",
          },
        ],
      },
      {
        level: "Niveau 2",
        code: "AC3",
        label: "Sécuriser les services et données d'un système",
        projects: [],
      },
    ],
  },
  {
    id: 4,
    domain: "Compétence n°4 : Gérer des données de l'information",
    bgClass: "bg-quaternary/5",
    headerClass: "bg-quaternary/10",
    borderClass: "border-l-quaternary",
    acs: [
      {
        level: "Niveau 1",
        code: "AC1",
        label: "Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC2",
        label: "Visualiser des données",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC3",
        label: "Concevoir une base de données relationnelle à partir d'un cahier des charges",
        projects: [],
      },
      {
        level: "Niveau 2",
        code: "AC1",
        label: "Optimiser les modèles de données de l'entreprise",
        projects: [
          {
            name: "Herbazon",
            href: "/projects/herbazon",
            description: "Conception d'une base de données MySQL pour charger dynamiquement les informations produits, assurer la persistance et la cohérence des données.",
          },
          {
            name: "Projet CTF",
            href: "/projects/CTF",
            description: "Paramétrage des modèles de données pour les défis, catégories, scoring, utilisateurs et feedbacks sur les résultats.",
          },
        ],
      },
      {
        level: "Niveau 2",
        code: "AC2",
        label: "Assurer la confidentialité des données (intégrité et sécurité)",
        projects: [
          {
            name: "Projet CTF",
            href: "/projects/CTF",
            description: "Mise en place de bonnes pratiques de sécurité sur CTFd (compte admin, validation des flags, accès restreint).",
          },
        ],
      },
      {
        level: "Niveau 2",
        code: "AC3",
        label: "Organiser la restitution de données à travers la programmation et la visualisation",
        projects: [
          {
            name: "Projet CTF",
            href: "/projects/CTF",
            description: "Affichage des scores des participants, restitution dynamique des classements dans l'interface de CTFd, structuration des informations visibles par l'utilisateur.",
          },
        ],
      },
      {
        level: "Niveau 2",
        code: "AC4",
        label: "Manipuler des données hétérogènes",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    domain: "Compétence n°5 : Conduire un projet",
    bgClass: "bg-quinary/5",
    headerClass: "bg-quinary/10",
    borderClass: "border-l-quinary",
    acs: [
      {
        level: "Niveau 1",
        code: "AC1",
        label: "Appréhender les besoins du client et de l'utilisateur",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC2",
        label: "Mettre en place les outils de gestion de projet",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC3",
        label: "Identifier les acteurs et les différentes phases d'un cycle de développement",
        projects: [],
      },
      {
        level: "Niveau 2",
        code: "AC1",
        label: "Identifier les processus présents dans une organisation en vue d'améliorer les systèmes d'information",
        projects: [],
      },
      {
        level: "Niveau 2",
        code: "AC2",
        label: "Formaliser les besoins du client et de l'utilisateur",
        projects: [],
      },
      {
        level: "Niveau 2",
        code: "AC3",
        label: "Identifier les critères de faisabilité d'un projet informatique",
        projects: [],
      },
      {
        level: "Niveau 2",
        code: "AC4",
        label: "Définir et mettre en œuvre une démarche de suivi de projet",
        projects: [
          {
            name: "Projet Trains",
            href: "/projects/trains",
            description: "Utilisation de GitLab pour le versioning, le suivi des tâches et la collaboration efficace en binôme.",
          },
          {
            name: "Herbazon",
            href: "/projects/herbazon",
            description: "Gestion du projet en binôme avec GitLab : versioning, intégration progressive des fonctionnalités.",
          },
          {
            name: "Projet CTF",
            href: "/projects/CTF",
            description: "Participation à la planification, à la priorisation via le backlog, aux sprints de développement et aux réunions client.",
          },
        ],
      },
      {
        level: "Niveau 3",
        code: "AC1",
        label: "Mesurer les impacts économiques, sociétaux et technologiques d'un projet informatique",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "",
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
            description: "",
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
            description: "",
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
        level: "Niveau 1",
        code: "AC1",
        label: "Appréhender l'écosystème numérique",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC2",
        label: "Découvrir les aptitudes requises selon les différents secteurs informatiques",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC3",
        label: "Identifier les statuts, les fonctions et les rôles de chaque membre d'une équipe pluridisciplinaire",
        projects: [],
      },
      {
        level: "Niveau 1",
        code: "AC4",
        label: "Acquérir les compétences interpersonnelles pour travailler en équipe",
        projects: [],
      },
      {
        level: "Niveau 2",
        code: "AC1",
        label: "Comprendre la diversité, la structure et la dimension de l'informatique dans une organisation (ESN, DSI...)",
        projects: [],
      },
      {
        level: "Niveau 2",
        code: "AC2",
        label: "Appliquer une démarche pour intégrer une équipe informatique au sein d'une organisation",
        projects: [],
      },
      {
        level: "Niveau 2",
        code: "AC3",
        label: "Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique",
        projects: [
          {
            name: "Projet Trains",
            href: "/projects/trains",
            description: "Collaboration active avec mon binôme sur la répartition des tâches, les choix techniques et l'intégration du code.",
          },
          {
            name: "Herbazon",
            href: "/projects/herbazon",
            description: "Collaboration efficace : coordination du développement, communication autour des choix d'architecture et d'interface, validation commune des livrables.",
          },
          {
            name: "Projet CTF",
            href: "/projects/CTF",
            description: "Travail collectif avec répartition claire des tâches (infrastructure, design, défis), entraide technique et communication active.",
          },
        ],
      },
      {
        level: "Niveau 2",
        code: "AC4",
        label: "Rendre compte de son activité professionnelle",
        projects: [],
      },
      {
        level: "Niveau 3",
        code: "AC1",
        label: "Organiser et partager une veille technologique et informationnelle",
        projects: [
          {
            name: "MIDA",
            href: "/projects/Mida",
            description: "",
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
            description: "",
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
            description: "",
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
            description: "",
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
                Synthèse des compétences acquises dans le cadre du B.U.T. Informatique — Parcours D : Intégration d&apos;applications et management du système d&apos;information. Chaque compétence est illustrée par un ou plusieurs projets concrets.
              </p>
            </div>

            <div className="space-y-12">
              {competencies.map((comp) => (
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
