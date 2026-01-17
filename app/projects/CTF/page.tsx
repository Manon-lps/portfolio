"use client"

import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const projectImages = [
    "/ctf2.png",
    "/ctf3.png",
    "/ctf4.png",
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
                                    Bash
                                </span>
                                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                    GDScript
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-balance">
                                Projet CTF : Break the code
                            </h1>

                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
                                Conception et mise en œuvre d’une plateforme Capture The Flag à l’aide de l’outil CTFd, réalisée au sein d’une équipe de 4 personnes en appliquant la méthodologie agile SCRUM.
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
                                            Dans le cadre de ma deuxième année de BUT Informatique, j’ai participé à un projet en équipe visant à
                                            concevoir un site web d’hébergement de Capture The Flag (CTF). Les CTF sont des événements pédagogiques
                                            axés sur la cybersécurité, dans lesquels les participants résolvent des défis pour obtenir un “flag”
                                            (code secret). Le projet s’est appuyé sur l’outil open source CTFd, qui fournit une base fonctionnelle
                                            modulable, que nous avons personnalisée pour répondre aux besoins du client.
                                        </p>
                                    </div>
                                    <div className="bg-accent/30 rounded-2xl p-8 space-y-6">
                                        <div className="relative w-full h-[400px] rounded-xl overflow-hidden " onClick={() => setIsZoomed(true)}>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/ctf6.png`}
                                                alt="Architecture MVC du projet Herbazon"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>


                                        <p className="text-muted-foreground leading-relaxed text-center">
                                            Exemple de défis et visuel de celui-ci.
                                        </p>
                                    </div>
                                </section>

                                {/* Phases */}
                                <section className="space-y-8">
                                    <h2 className="text-4xl font-serif font-bold">Déroulement du projet</h2>

                                    <div className="space-y-6">
                                        <div className="border-l-4 border-l-primary pl-8 py-4">
                                            <h3 className="text-xl font-semibold mb-3">
                                                Objectifs et Organisation
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                Le projet s’est déroulé sur plusieurs semaines en méthode agile SCRUM, avec :                                           </p>
                                            <ul className="space-y-2 text-muted-foreground text-m">
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>
                                                        des daily meetings pour la synchronisation de l’équipe
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span> des sprints de deux semaines</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span> une planification et un suivi du projet via GitLab (issues, board, backlog)</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span> des reunions avec le client à intervalles réguliers</span>
                                                </li>
                                            </ul>
                                            <br></br>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                Notre objectif était double : personnaliser la plateforme CTFd et concevoir des défis originaux, en mettant l’accent sur la créativité, la technique et l’expérience utilisateur.
                                            </p>
                                        </div>
                                        <div className="bg-accent/30 rounded-2xl p-8 space-y-6">
                                            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/ctf5.png`}
                                                    alt="Architecture MVC du projet Herbazon"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>


                                            <p className="text-muted-foreground leading-relaxed text-center">
                                                Backlog GitLab
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-l-secondary pl-8 py-4">
                                            <h3 className="text-xl font-semibold mb-3">Réalisations personnelles</h3>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                Au sein de l'équipe, j'ai pris en charge plusieurs aspects :
                                            </p>
                                            <ul className="space-y-2 text-muted-foreground text-m">
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <div>
                                                        <span>Création de défis :</span>
                                                        <ul className="space-y-2 text-muted-foreground text-m mt-2">
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Un défi Forensic basé sur une image disque Linux personnalisée (créée via le terminal), où l'utilisateur devait fouiller les fichiers pour trouver le flag.
                                                                </span>
                                                            </li>
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Un défi Web basé sur les cookies, réalisé en HTML et PHP.
                                                                </span>
                                                            </li>
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Un mini-jeu interactif en GDScript (Godot Engine) simulant un escape game à travers un poste informatique.
                                                                </span>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <div>
                                                        <span>Contribution graphique : </span>
                                                        <ul className="space-y-2 text-muted-foreground text-m mt-2">
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Réalisation de la charte visuelle du site : couleurs, page des règles, personnalisation des cartes de défis.
                                                                </span>
                                                            </li>
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Développement de pages HTML/CSS pour intégrer le design au sein de CTFd.
                                                                </span>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-secondary">•</span>
                                                    <div>
                                                        <span>Participation à l’infrastructure technique : </span>
                                                        <ul className="space-y-2 text-muted-foreground text-m mt-2">
                                                            <li className="flex gap-2">
                                                                <span className="text-secondary">◦</span>
                                                                <span>
                                                                    Découverte et utilisation de Docker et Portainer pour le déploiement de CTFd.
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="border-l-4 border-l-primary pl-8 py-4">
                                            <h3 className="text-xl font-semibold mb-3">
                                                Apports pédagogiques
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                Le projet Break The Code a été une expérience complète mêlant développement, cybersécurité, design, infrastructure et gestion agile. Il m’a permis de mobiliser des compétences transversales tout en approfondissant mes connaissances techniques dans des domaines que j’apprécie particulièrement : la création de défis interactifs, la personnalisation d’interfaces web et l’organisation de projet collaboratif.
                                            </p>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                Travailler avec un client réel et une équipe m’a permis de développer mon sens de l’adaptation, de la communication et de la rigueur technique. Ce projet m’a également donné un premier aperçu concret des défis liés à la mise en production d’un service web sécurisé, ce qui en fait l’un des projets les plus formateurs de ma formation jusqu’à présent.
                                            </p>
                                        </div>
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
                                </section>
                            </div>

                            <aside className="space-y-8">
                                <div className="sticky top-32 space-y-8">
                                    <div className="bg-accent/30 rounded-2xl p-6 space-y-6">
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Durée</h3>
                                            <p className="font-semibold">4 mois</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Rôle</h3>
                                            <p className="font-semibold">Développeur Full stack</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Type</h3>
                                            <p className="font-semibold">Projet académique (BUT 2)</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Équipe</h3>
                                            <p className="font-semibold">4 développeurs</p>
                                        </div>
                                    </div>

                                    <div className="bg-accent/30 rounded-2xl p-6 space-y-4">
                                        <h3 className="font-semibold text-lg">Technologies</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {["PHP", "HTML", "CSS", "GitLab", "CTFd", "GDScript", "Bash"].map((tech) => (
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
                                        href="/projects/Mida"
                                        className="text-2xl font-serif font-bold hover:text-primary transition-colors"
                                    >
                                        Projet MIDA
                                    </Link>
                                </div>
                                <Link
                                    href="/projects/Mida"
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
