"use client"

import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const projectImages = [
    "/mida-1.png",
    "/mida-2.png",
    "/mida-3.png",
]

export default function TrainsProject() {
    const [activeImage, setActiveImage] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)


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
                            <Link href="/#contact" className="text-sm hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12 group"
                        >
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Retour
                        </Link>

                        <div className="space-y-8 mb-20">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                    Alternance
                                </span>
                                <span className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                                    Développement Fullstack
                                </span>
                                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                   Python
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-balance">
                                MIDA : Maintenance Intelligente des Infrastructures Ferroviaires
                            </h1>

                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
                                Développement d’un module de maintenance conditionnelle intelligente pour l’infrastructure ferroviaire, visant à adapter dynamiquement les cycles de maintenance aux sollicitations réelles des équipements, tout en prenant en compte les contraintes opérationnelles de planification.
                            </p>

                        </div>

                        <div className="mb-24">
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted/50 mb-6">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}${projectImages[activeImage] || "/placeholder.svg"}`}
                                    alt="Aperçu du projet"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex gap-4 overflow-x-auto pb-2">
                                {projectImages.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImage(idx)}
                                        className={`relative flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                            activeImage === idx
                                                ? "border-primary ring-2 ring-primary/20"
                                                : "border-border hover:border-primary/50"
                                        }`}
                                    >
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}${img || "/placeholder.svg"}`} alt={`Aperçu ${idx + 1}`} fill className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-[1fr,340px] gap-16">
                            {/* Main Content */}
                            <div className="space-y-16">
                                {/* Overview */}
                                <section className="space-y-6">
                                    <h2 className="text-4xl font-serif font-bold">Vue d'ensemble</h2>
                                    <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                                        <p>
                                            Dans le cadre de mon alternance en tant que Développeuse Fullstack, je travaille sur le module MIDA, une solution dédiée à l’optimisation des opérations de maintenance, de surveillance et de renouvellement de l’infrastructure ferroviaire.
                                        </p>
                                        <p>
                                            MIDA s’inscrit dans une logique de maintenance conditionnelle intelligente, en opposition à une maintenance strictement calendaire. L’objectif est d’adapter la périodicité des interventions en fonction de l’utilisation réelle des équipements, de leur état et des contraintes opérationnelles, afin d’améliorer la fiabilité, la disponibilité des installations et de réduire les coûts de maintenance.
                                        </p>
                                        <p>
                                            Le module peut être utilisé comme une GMAO (Gestion de la Maintenance Assistée par Ordinateur) indépendante ou être connecté à une GMAO existante, apportant ainsi une approche plus individualisée et dynamique pour chaque équipement.
                                        </p>
                                    </div>
                                </section>

                                <section className="space-y-6">
                                    <h2 className="text-4xl font-serif font-bold">Objectifs du projet</h2>
                                    <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                                        <ul className="space-y-2 text-muted-foreground text-m">
                                            <li className="flex gap-2">
                                                <span className="text-primary">•</span>
                                                <span>
                                                    Adapter dynamiquement les cycles de maintenance aux sollicitations réelles
                                                </span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-primary">•</span>
                                                <span> Réduire les interventions inutiles et les temps d’arrêt non nécessaires
                                                </span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-primary">•</span>
                                                <span> Optimiser la planification en tenant compte des contraintes opérationnelles</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-primary">•</span>
                                                <span> Améliorer la fiabilité et la disponibilité des équipements ferroviaires</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-primary">•</span>
                                                <span> Faire évoluer les pratiques de maintenance vers une approche plus intelligente et prédictive

</span>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Phases */}
                                <section className="space-y-8">
                                    <h2 className="text-4xl font-serif font-bold">Déroulement du projet</h2>

                                    <div className="space-y-6">
                                        <div className="border-l-4 border-l-primary pl-8 py-4">
                                            <h3 className="text-xl font-semibold mb-3">
                                                Organisation
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                Le projet s’inscrit dans un contexte industriel réel, avec des enjeux forts de performance, de fiabilité et de maintenabilité du code.                                           </p>
                                            <p className="text-muted-foreground leading-relaxed mb-4">Le développement s’effectue de manière itérative, en collaboration avec :</p>
                                            <ul className="space-y-2 text-muted-foreground text-m">
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>
                                                        un Product Owner,
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span> une équipe technique,</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span> et des contraintes métier spécifiques au domaine ferroviaire.</span>
                                                </li>
                                            </ul>
                                            <br></br>
                                            <p className="text-muted-foreground leading-relaxed mb-4">Une attention particulière est portée à :</p>
                                            <ul className="space-y-2 text-muted-foreground text-m">
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>
                                                        la qualité du code,
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span> la performance des traitements backend,</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span> la robustesse des échanges API,</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span> et la maintenabilité de la base de données.</span>
                                                </li>
                                            </ul>
                                            <br></br>
                                        </div>

                                        <div className="border-l-4 border-l-secondary pl-8 py-4">
                                            <h3 className="text-xl font-semibold mb-3">Mon rôle dans le projet</h3>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                En tant que Développeuse Fullstack, j’interviens sur le backend, le frontend et la base de données.
                                            </p>
                                            <p className="text-muted-foreground leading-relaxed mb-4 font-bold">Réalisations principales:</p>
                                            <ul className="space-y-2 text-muted-foreground text-m">
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <div>
                                                        <span>Refactorisation du backend en asynchrone</span>
                                                        <ul className="space-y-2 text-muted-foreground text-m mt-2">
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Passage de routes et traitements Python en asynchrone avec FastAPI
                                                                </span>
                                                            </li>
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Amélioration des performances et de la réactivité de l’application.
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <div>
                                                        <span>Optimisation des requêtes PostgreSQL</span>
                                                        <ul className="space-y-2 text-muted-foreground text-m mt-2">
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Transformation de requêtes SQL complexes en fonctions pgSQL
                                                                </span>
                                                            </li>
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Centralisation de la logique métier côté base
                                                                </span>
                                                            </li>
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Amélioration de la lisibilité et de la maintenabilité
                                                                </span>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <div>
                                                        <span>Correction de bugs front-end </span>
                                                        <ul className="space-y-2 text-muted-foreground text-m mt-2">
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Résolution de problèmes liés à l’affichage et au comportement de la carte dans l’application
                                                                </span>
                                                            </li>
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Amélioration de l’expérience utilisateur
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <div>
                                                        <span>Validation et test des API </span>
                                                        <ul className="space-y-2 text-muted-foreground text-m mt-2">
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Utilisation de Swagger / OpenAPI pour tester et valider les routes
                                                                </span>
                                                            </li>
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Vérification de la conformité des entrées/sorties API
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>

                                        </div>

                                        <section className="space-y-8">
                                            <h2 className="text-4xl font-serif font-bold">Architecture technique</h2>

                                            <div className="bg-accent/30 rounded-2xl p-8 space-y-6">
                                                <div>
                                                    <h3 className="text-lg font-semibold mb-3 text-primary">Backend</h3>
                                                    <ul className="space-y-2 text-muted-foreground text-m mt-2">
                                                        <li className="flex gap-2">
                                                            <span className="text-secondary">•</span>
                                                            <span>
                                                                    Python
                                                                </span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <span className="text-secondary">•</span>
                                                            <span>
                                                                    FastAPI
                                                                </span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <span className="text-secondary">•</span>
                                                            <span>
                                                                    API REST asynchrone
                                                                </span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <span className="text-secondary">•</span>
                                                            <span>
                                                                    Documentation via Swagger
                                                                </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-semibold mb-3 text-secondary">Base de données</h3>
                                                    <ul className="space-y-2 text-muted-foreground text-m mt-2">
                                                        <li className="flex gap-2">
                                                            <span className="text-secondary">•</span>
                                                            <span>
                                                                    PostgreSQL
                                                                </span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <span className="text-secondary">•</span>
                                                            <span>
                                                                    Fonctions pgSQL
                                                                </span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <span className="text-secondary">•</span>
                                                            <span>
                                                                   Optimisation des requêtes et logique métier côté base
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-semibold mb-3 text-primary">Frontend</h3>
                                                    <ul className="space-y-2 text-muted-foreground text-m mt-2">
                                                        <li className="flex gap-2">
                                                            <span className="text-secondary">•</span>
                                                            <span>
                                                                    Create T3 App
                                                                </span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <span className="text-secondary">•</span>
                                                            <span>
                                                                    TypeScript
                                                                </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-semibold mb-3 text-secondary">Outils</h3>
                                                    <ul className="space-y-2 text-muted-foreground text-m mt-2">
                                                        <li className="flex gap-2">
                                                            <span className="text-secondary">•</span>
                                                            <span>
                                                                    Bitbucket
                                                                </span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <span className="text-secondary">•</span>
                                                            <span>
                                                                    Jira
                                                                </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </section>

                                {/* Learning */}
                                {/* <section className="space-y-6">
                                    <h2 className="text-4xl font-serif font-bold">Ce que j'ai appris</h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="bg-primary/5 rounded-xl p-6 space-y-3">
                                            <div className=" h-12 rounded-lg bg-primary/10 flex items-center justify-center text-l font-bold">
                                                Compétence n°1 : Réaliser un développement d'application
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC1 : Implémenter des conceptions complexes</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Création de défis en Forensic, Web et GDScript avec logique spécifique à chaque type, intégration dans un environnement sécurisé.
                                            </p>
                                        </div>

                                        <div className="bg-primary/5 rounded-xl p-6 space-y-3">
                                            <div className=" h-12 rounded-lg bg-primary/10 flex items-center justify-center text-l font-bold">
                                                Compétence n°1 : Réaliser un développement d'application
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC2 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Définition des valeurs de points, catégories, visibilités, flags et types de réponse pour chaque défi sur la plateforme
                                            </p>
                                        </div>

                                        <div className="bg-secondary/5 rounded-xl p-6 space-y-3">
                                            <div className=" h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-l font-bold">
                                                Compétence 2 : Optimiser des applications
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC3 : Développer des interfaces utilisateur</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Personnalisation des thèmes CSS et structuration HTML/CSS pour le visuel des cartes, la navigation et la page de règles.
                                            </p>
                                        </div>

                                        <div className="bg-tertiary/5 rounded-xl p-6 space-y-3">
                                            <div className="h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-l font-bold">
                                                Compétence 3 : Administrer des systèmes informatiques
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC2 : Utiliser des serveurs et des services réseaux virtualisés</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Déploiement et Maintenance du projet via Docker et Portainer
                                            </p>
                                        </div>

                                        <div className="bg-quaternary/5 rounded-xl p-6 space-y-3">
                                            <div className="h-12 rounded-lg bg-quaternary/10 flex items-center justify-center text-l font-bold">
                                                Compétence 4 : Gérer des données de l'information
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC1 : Optimiser les modèles de données de l’entreprise</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Paramétrage des modèles de données pour les défis, catégories, scoring, utilisateurs et feedbacks sur les résultats.
                                            </p>
                                        </div>

                                        <div className="bg-quaternary/5 rounded-xl p-6 space-y-3">
                                            <div className="h-12 rounded-lg bg-quaternary/10 flex items-center justify-center text-l font-bold">
                                                Compétence 4 : Gérer des données de l'information
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC2 : Assurer la confidentialité des données (intégrité et sécurité)</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Mise en place de bonnes pratiques de sécurité sur CTFd (compte admin, validation des flags, accès restreint).
                                            </p>
                                        </div>

                                        <div className="bg-quaternary/5 rounded-xl p-6 space-y-3">
                                            <div className="h-12 rounded-lg bg-quaternary/10 flex items-center justify-center text-l font-bold">
                                                Compétence 4 : Gérer des données de l'information
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC3 : Organiser la restitution de données à travers la programmation et la visualisation</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Affichage des scores des participants, restitution dynamique des classements dans l’interface de CTFd, structuration des informations visibles par l’utilisateur.
                                            </p>
                                        </div>

                                        <div className="bg-quinary/5 rounded-xl p-6 space-y-3">
                                            <div className="h-12 rounded-lg bg-quinary/10 flex items-center justify-center text-l font-bold">
                                                Compétence 5 : Conduire un projet
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC4 : Définir et mettre en œuvre une démarche de suivi de projet</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Participation à la planification, à la priorisation via le backlog, aux sprints de développement et aux réunions client.
                                            </p>
                                        </div>

                                        <div className="bg-senary/5 rounded-xl p-6 space-y-3">
                                            <div className="h-12 rounded-lg bg-senary/10 flex items-center justify-center text-l font-bold">
                                                Compétence 6 : Collaborer au sein d'une équipe informatique
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC3 : Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Travail collectif avec répartition claire des tâches (infrastructure, design, défis), entraide technique et communication active.
                                            </p>
                                        </div>

                                    </div>
                                </section>*/}
                            </div>

                            <aside className="space-y-8">
                                <div className="sticky top-32 space-y-8">
                                    <div className="bg-accent/30 rounded-2xl p-6 space-y-6">
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Durée</h3>
                                            <p className="font-semibold">En cours</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Rôle</h3>
                                            <p className="font-semibold">Développeur Full stack</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Type</h3>
                                            <p className="font-semibold">Projet Alternance</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Équipe</h3>
                                            <p className="font-semibold">Pluridisciplinaire (technique & produit)</p>
                                        </div>
                                    </div>

                                    <div className="bg-accent/30 rounded-2xl p-6 space-y-4">
                                        <h3 className="font-semibold text-lg">Technologies</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {["Python", "FastAPI", "PostgreSQL", "Create T3", "BitBucket", "Jira"].map((tech) => (
                                                <span key={tech} className="px-3 py-1.5 bg-background rounded-lg text-sm font-medium">
                          {tech}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        <div className="mt-32 pt-16 border-t border-border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-2">Projet suivant</p>
                                    <Link
                                        href="/projects/Myavat"
                                        className="text-2xl font-serif font-bold hover:text-primary transition-colors"
                                    >
                                        My Avatar
                                    </Link>
                                </div>
                                <Link
                                    href="/projects/Myavatar"
                                    className="flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
                                >
                                    Voir le projet
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {isZoomed && (
                <div
                    className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center cursor-zoom-out"
                    onClick={() => setIsZoomed(false)}
                >
                    <div className="relative w-[90vw] h-[90vh]">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/ctf6.png`}
                            alt="Architecture MVC du projet Herbazon"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}

        </div>
    )
}
