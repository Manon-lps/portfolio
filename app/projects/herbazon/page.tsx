"use client"

import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const projectImages = [
    "/web-1.png",
    "/web-2.png",
    "/web-3.png",
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
                  PHP, HTML & CSS
                </span>
                                <span className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                  Développement Web
                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-balance">
                                Projet Herbazon
                            </h1>

                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
                                Développement d'un site e-commerce fictif avec PHP, réalisé en binôme durant ma deuxième année de BUT Informatique.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <a
                                    href="https://github.com"
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
                                            Dans le cadre de ma deuxième année de BUT Informatique, j’ai co-développé un site e-commerce
                                            fictif nommé Herbazon, en binôme, sur une période d’un mois. Ce projet avait pour but de simuler
                                            un site de vente de plantes et produits naturels, tout en appliquant les bonnes pratiques de
                                            développement web vues en cours.
                                        </p>
                                    </div>
                                </section>

                                {/* Phases */}
                                <section className="space-y-8">
                                    <h2 className="text-4xl font-serif font-bold">Déroulement du projet</h2>

                                    <div className="space-y-6">
                                        <div className="border-l-4 border-l-primary pl-8 py-4">
                                            <h3 className="text-xl font-semibold mb-3">
                                                Objectifs et Environnement Technique
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                Le développement du site s'est appuyé sur :                                            </p>
                                            <ul className="space-y-2 text-muted-foreground text-m">
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>
                                                        PHP côté serveur, avec une architecture MVC pour assurer la séparation des responsabilités
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>Une base de données MySQL, utilisée pour stocker et gérer dynamiquement les utilisateurs, produits, paniers et commandes</span>
                                                </li>
                                            </ul>
                                            <br></br>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                Le projet était versionné avec GitLab, ce qui nous a permis de collaborer efficacement, de suivre l’évolution du code et de pratiquer les workflows Git (branche principale, commits réguliers, intégration de fonctionnalités).
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-l-secondary pl-8 py-4">
                                            <h3 className="text-xl font-semibold mb-3">Réalisations techniques</h3>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                Pendant ce projet, je me suis concentrée sur les aspects suivants :
                                            </p>
                                            <ul className="space-y-2 text-muted-foreground text-m">
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <span>Gestion des produits : création des modèles, contrôleurs et vues permettant d’ajouter, afficher, modifier et supprimer des produits depuis la base de données</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <span>Intégration dynamique des produits dans le site : affichage des catalogues, pages de détails et fiches produits avec récupération de données depuis MySQL</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <span>Conception du design global du site : création de l’identité visuelle à l’aide de Bootstrap, choix des couleurs, typographies et mise en page</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="border-l-4 border-l-primary pl-8 py-4">
                                            <h3 className="text-xl font-semibold mb-3">
                                                Apports pédagogiques
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                Ce projet m'a permis de :
                                            </p>
                                            <ul className="space-y-2 text-muted-foreground text-m">
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>Approfondir ma maîtrise du modèle MVC dans un environnement PHP</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>Développer mes compétences en intégration HTML/CSS</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>Mieux comprendre l’interaction entre une interface dynamique et une base de données</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>Travailler efficacement en binôme en respectant une démarche projet sous contrainte de temps</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* Technical Stack */}
                                <section className="space-y-8">
                                    <h2 className="text-4xl font-serif font-bold">Architecture technique</h2>
                                    <div className="bg-accent/30 rounded-2xl p-8 space-y-6">
                                        <div className="relative w-full h-[400px] rounded-xl overflow-hidden " onClick={() => setIsZoomed(true)}>
                                            <Image
                                                src="/web-4.png"
                                                alt="Architecture MVC du projet Herbazon"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>


                                        <p className="text-muted-foreground leading-relaxed">
                                            Le projet Herbazon repose sur une architecture MVC (Modèle - Vue - Contrôleur),
                                            permettant de séparer clairement la logique métier, l’affichage et la gestion
                                            des actions utilisateur.
                                        </p>
                                    </div>
                                </section>

                                {/* Learning */}
                                <section className="space-y-6">
                                    <h2 className="text-4xl font-serif font-bold">Ce que j'ai appris</h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="bg-primary/5 rounded-xl p-6 space-y-3">
                                            <div className=" h-12 rounded-lg bg-primary/10 flex items-center justify-center text-l font-bold">
                                                Compétence n°1 : Réaliser un développement d'application
                                            </div>
                                            <h3 className="font-semibold">Niveau 1 : AC1 : Implémenter des conceptions simples</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Implémentation des modèles, vues et contrôleurs pour gérer dynamiquement les produits (ajout, modification, suppression, affichage).
                                            </p>
                                        </div>

                                        <div className="bg-primary/5 rounded-xl p-6 space-y-3">
                                            <div className=" h-12 rounded-lg bg-primary/10 flex items-center justify-center text-l font-bold">
                                                Compétence n°1 : Réaliser un développement d'application
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC4 : Vérifier et valider la qualité de l’application par les tests</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Vérification du bon fonctionnement des fonctionnalités liées aux produits : ajout, affichage, mise à jour, suppression. En simulant un parcours utilisateur.
                                            </p>
                                        </div>

                                        <div className="bg-quaternary/5 rounded-xl p-6 space-y-3">
                                            <div className=" h-12 rounded-lg bg-quaternary/10 flex items-center justify-center text-l font-bold">
                                                Compétence n°4 : Gérer des données de l’information
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC1 :  Optimiser les modèles de données de l'entreprise</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Conception d'une base de données MySQL pour charger dynamiquement les informations produits, assurer la persistance et la cohérence des données.
                                            </p>
                                        </div>

                                        <div className="bg-quinary/5 rounded-xl p-6 space-y-3">
                                            <div className="h-12 rounded-lg bg-quinary/10 flex items-center justify-center text-l font-bold">
                                                Compétence n°5 : Conduire un projet
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC4 : Définir et mettre en œuvre une démarche de suivi de projet</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Gestion du projet en binôme avec GitLab : versioning, intégration progressive des fonctionnalités.
                                            </p>
                                        </div>

                                        <div className="bg-senary/5 rounded-xl p-6 space-y-3">
                                            <div className="h-12 rounded-lg bg-senary/10 flex items-center justify-center text-l font-bold">
                                                Compétence n°6 : Collaborer au sein d’une équipe informatique
                                            </div>
                                            <h3 className="font-semibold">Niveau 2 : AC3 : Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Collaboration efficace : coordination du développement, communication autour des choix d’architecture et d’interface, validation commune des livrables.
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
                                            <p className="font-semibold">1 mois</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Rôle</h3>
                                            <p className="font-semibold">Développeur Web</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Type</h3>
                                            <p className="font-semibold">Projet académique (BUT 2)</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Équipe</h3>
                                            <p className="font-semibold">2 développeurs</p>
                                        </div>
                                    </div>

                                    <div className="bg-accent/30 rounded-2xl p-6 space-y-4">
                                        <h3 className="font-semibold text-lg">Technologies</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {["PHP", "HTML", "CSS", "GitLab", "MVC"].map((tech) => (
                                                <span key={tech} className="px-3 py-1.5 bg-background rounded-lg text-sm font-medium">
                          {tech}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <a
                                            href="https://github.com"
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
                                        href="/projects/CTF"
                                        className="text-2xl font-serif font-bold hover:text-primary transition-colors"
                                    >
                                        Projet CTF
                                    </Link>
                                </div>
                                <Link
                                    href="/projects/CTF"
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
                            src="/web-4.png"
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
