"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
    {
        title: "Projet Trains",
        description:
            "Implémentation complète d'un jeu de plateau en Java avec interface JavaFX. Intégration d'algorithmes de graphes et architecture orientée objet.",
        image: "/trains.png",
        tags: ["Java", "JavaFX", "Algorithmes"],
        link: "/projects/trains",
        github: "https://github.com/Manon-lps/Trains",
    },
    {
        title: "Herbazon",
        description:
            "Développement d'un site e-commerce fictif en php",
        image: "/herbazon.png",
        tags: ["HTML", "CSS3", "PHP"],
        link: "/projects/herbazon",
        github: "#",
    },
    {
        title: "Break the code",
        description:
            "Développement d'un Capture The Flag avec l'outil CTFd",
        image: "/eq3.png",
        tags: ["HTML", "CSS3", "PHP", "GDScript"],
        link: "/projects/CTF",
        github: "#",
    },
    {
        title: "MIDA",
        description:
            "Développement d’un module de maintenance intelligente pour l’optimisation de l’infrastructure ferroviaire.",
        image: "/logoRailwai.png",
        tags: ["Python", "PostegresSQL", "BitBucket", "Create T3"],
        link: "/projects/Mida",
        github: "#",
    },
    {
        title: "My Avatar",
        description:
            "Développement d’une application web permettant aux utilisateurs de gérer un avatar unique associé à une ou plusieurs adresses email.",
        image: "/eq3.png",
        tags: ["Symfony", "PHP", "Gitlab", "Docker"],
        link: "/projects/Myavatar",
        github: "#",
    },
]

export function Projects() {
    return (
        <section id="projects" className="py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <p className="text-sm uppercase tracking-wider text-primary font-medium">Projets</p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">Mes réalisations</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Une sélection de projets qui démontrent mes compétences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-0">
                                    <Link href={project.link}>
                                        <div className="relative h-48 overflow-hidden bg-muted cursor-pointer">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}${project.image || "/placeholder.svg"}`}
                                                alt={project.title}
                                                fill
                                                className="object-contain group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    </Link>
                                    <div className="p-6 space-y-4">
                                        <Link href={project.link}>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors cursor-pointer">
                                                {project.title}
                                            </h3>
                                        </Link>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground">
                          {tag}
                        </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-2 pt-2">
                                            <Button size="sm" className="flex-1" asChild>
                                                <Link href={project.link}>
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    Voir plus
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
