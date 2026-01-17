"use client"

import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const projectImages = [
    "/trains-1.png",
    "/trains-3.png",
]

export default function TrainsProject() {
    const [activeImage, setActiveImage] = useState(0)

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
                  Java & JavaFX
                </span>
                                <span className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                  Algorithmique
                </span>
                                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Programmation Orientée Objet
                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-balance">
                                Projet Trains
                            </h1>

                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
                                Implémentation complète d'un jeu de plateau en Java avec algorithmes de graphes et interface graphique
                                JavaFX, réalisé en équipe durant ma première année de BUT Informatique.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <a
                                    href="https://github.com/Manon-lps/Trains"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors font-medium"
                                >
                                    <Github className="h-5 w-5" />
                                    Voir le code
                                </a>
                            </div>
                        </div>

                        <div className="mb-24">
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted/50 mb-6">
                                <Image
                                    src={projectImages[activeImage] || "/placeholder.svg"}
                                    alt="Aperçu du projet"
                                    fill
                                    className="object-cover"
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
                                        <Image src={img || "/placeholder.svg"} alt={`Aperçu ${idx + 1}`} fill className="object-cover" />
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
                                            Dans le cadre de ma première année de BUT Informatique, j'ai participé à la réalisation du projet
                                            Trains, une adaptation numérique en Java du jeu de plateau du même nom. Ce projet avait pour
                                            objectif de consolider nos compétences en programmation orientée objet, en algorithmique sur les
                                            graphes, ainsi qu'en développement d'interfaces graphiques.
                                        </p>
                                        <p>
                                            Le projet était structuré autour de plusieurs modules (GUI, logique métier, données) et évalué à
                                            l'aide de tests unitaires automatisés. Un soin particulier a été apporté à la qualité du code, à
                                            la gestion du versioning via GitLab, et au respect des bonnes pratiques de développement.
                                        </p>
                                    </div>
                                </section>

                                {/* Phases */}
                                <section className="space-y-8">
                                    <h2 className="text-4xl font-serif font-bold">Déroulement du projet</h2>

                                    <div className="space-y-6">
                                        <div className="border-l-4 border-l-primary pl-8 py-4">
                                            <h3 className="text-xl font-semibold mb-3">
                                                Phase 1 : Mécanique du jeu et architecture orientée objet
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                Développement de l'intégralité de la mécanique du jeu en Java, à partir d'un squelette fourni.
                                                Modélisation des joueurs, implémentation des tours de jeu et des différentes cartes avec leurs
                                                comportements uniques.
                                            </p>
                                            <ul className="space-y-2 text-muted-foreground text-sm">
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>
                            Développement des méthodes <code className="bg-muted px-2 py-0.5 rounded">jouerTour()</code>{" "}
                                                        et <code className="bg-muted px-2 py-0.5 rounded">run()</code>
                          </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>Implémentation de nombreuses cartes avec comportements variés</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>Gestion de la pioche, défausse, et mains de cartes</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>Tests unitaires et respect de l'architecture logicielle</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="border-l-4 border-l-secondary pl-8 py-4">
                                            <h3 className="text-xl font-semibold mb-3">Phase 2 : Intégration d'algorithmes de graphes</h3>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                Application des concepts de graphes pour modéliser le réseau ferroviaire et enrichir les
                                                mécaniques stratégiques du jeu. Implémentation d'algorithmes de parcours et de recherche de
                                                chemins optimaux.
                                            </p>
                                            <ul className="space-y-2 text-muted-foreground text-sm">
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <span>Modélisation du plateau de jeu sous forme de graphe</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <span>Détection de connexions entre villes via les rails posés</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <span>Implémentation d'algorithmes de parcours (Dijkstra)</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <span>Recherche de chemins pour des effets de cartes spécifiques</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="border-l-4 border-l-primary pl-8 py-4">
                                            <h3 className="text-xl font-semibold mb-3">
                                                Phase 3 : Développement de l'interface graphique JavaFX
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                Conception d'une interface graphique complète en JavaFX pour remplacer l'interface web fournie.
                                                Création des vues, intégration des interactions utilisateur, et respect des contraintes
                                                d'ergonomie.
                                            </p>
                                            <ul className="space-y-2 text-muted-foreground text-sm">
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>Construction des vues JavaFX (plateau, main, réserve, journal)</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>Intégration des interactions via des contrôleurs</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>Communication temps réel avec le backend Java</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>Amélioration de l'expérience utilisateur (UX)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* Technical Stack */}
                                <section className="space-y-8">
                                    <h2 className="text-4xl font-serif font-bold">Architecture technique</h2>

                                    <div className="bg-accent/30 rounded-2xl p-8 space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3 text-primary">Programmation Orientée Objet</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Architecture modulaire avec séparation claire entre la logique métier, l'interface graphique et
                                                les données. Utilisation des principes SOLID et des patterns de conception pour un code
                                                maintenable et évolutif.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold mb-3 text-secondary">Algorithmique des graphes</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Modélisation du réseau ferroviaire avec des structures de graphes. Implémentation d'algorithmes
                                                de recherche de chemins, détection de connexité et validation de placement de rails.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold mb-3 text-primary">Interface graphique JavaFX</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Développement d'une interface riche et interactive avec gestion des événements, animations et
                                                mise à jour dynamique de l'affichage selon l'état du jeu.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold mb-3 text-secondary">Tests & Qualité</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Tests unitaires pour garantir la fiabilité du code. Utilisation de GitLab
                                                pour le versioning et la collaboration en équipe.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="space-y-6">
                                    <h2 className="text-4xl font-serif font-bold">Ce que j'ai appris</h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="bg-primary/5 rounded-xl p-6 space-y-3">
                                            <div className=" h-12 rounded-lg bg-primary/10 flex items-center justify-center text-l font-bold">
                                                Compétence n°1 : Réaliser un développement d'application
                                            </div>
                                            <h3 className="font-semibold">Niveau 1 : AC1 : Implémenter des conceptions simples</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Développement des méthodes, modélisation des cartes et des éléments du jeu à partir d’un squelette fourni.
                                            </p>
                                        </div>

                                        <div className="bg-primary/5 rounded-xl p-6 space-y-3">
                                            <div className=" h-12 rounded-lg bg-primary/10 flex items-center justify-center text-l font-bold">
                                                Compétence n°1 : Réaliser un développement d'application
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC2 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Analyse des règles du jeu et implémentation d’une structure orientée objet cohérente pour répondre aux exigences métier.
                                            </p>
                                        </div>

                                        <div className="bg-secondary/5 rounded-xl p-6 space-y-3">
                                            <div className=" h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-l font-bold">
                                                Compétence n°2 : Optimiser des applications
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC1 : Choisir des structures de données complexes adaptées au problème</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Utilisation de collections adaptées pour gérer les pioches, mains de joueurs et défausses.
                                            </p>
                                        </div>

                                        <div className="bg-secondary/5 rounded-xl p-6 space-y-3">
                                            <div className="h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-l font-bold">
                                                Compétence n°2 : Optimiser des applications
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC2 : Utiliser des techniques algorithmiques adaptées pour des problèmes complexes</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Implémentation d’algorithmes de graphes pour la vérification des connexions ferroviaires et la gestion du plateau.
                                            </p>
                                        </div>

                                        <div className="bg-quinary/5 rounded-xl p-6 space-y-3">
                                            <div className="h-12 rounded-lg bg-quinary/10 flex items-center justify-center text-l font-bold">
                                                Compétence n°5 : Conduire un projet
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC4 : Définir et mettre en œuvre une démarche de suivi de projet</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Utilisation de GitLab pour le versioning, le suivi des tâches et la collaboration efficace en binôme.
                                            </p>
                                        </div>

                                        <div className="bg-senary/5 rounded-xl p-6 space-y-3">
                                            <div className="h-12 rounded-lg bg-senary/10 flex items-center justify-center text-l font-bold">
                                                Compétence n°6 : Collaborer au sein d'une équipe informatique
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC3 : Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Collaboration active avec mon binôme sur la répartition des tâches, les choix techniques et l’intégration du code.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <aside className="space-y-8">
                                <div className="sticky top-32 space-y-8">
                                    <div className="bg-accent/30 rounded-2xl p-6 space-y-6">
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Durée</h3>
                                            <p className="font-semibold">4 mois (3 phases)</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Rôle</h3>
                                            <p className="font-semibold">Développeur Java</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Type</h3>
                                            <p className="font-semibold">Projet académique (BUT 1)</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Équipe</h3>
                                            <p className="font-semibold">2 développeurs</p>
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className="bg-accent/30 rounded-2xl p-6 space-y-4">
                                        <h3 className="font-semibold text-lg">Technologies</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {["Java", "JavaFX", "Git", "GitLab", "Algorithmes de graphes", "POO"].map((tech) => (
                                                <span key={tech} className="px-3 py-1.5 bg-background rounded-lg text-sm font-medium">
                          {tech}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="space-y-3">
                                        <a
                                            href="https://github.com/Manon-lps/Trains"
                                            className="flex items-center gap-3 px-4 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors font-medium"
                                        >
                                            <Github className="h-5 w-5" />
                                            Code source
                                        </a>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        <div className="mt-32 pt-16 border-t border-border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-2">Projet suivant</p>
                                    <Link
                                        href="/projects/herbazon"
                                        className="text-2xl font-serif font-bold hover:text-primary transition-colors"
                                    >
                                        Herbazon
                                    </Link>
                                </div>
                                <Link
                                    href="/projects/herbazon"
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
        </div>
    )
}
