"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Bonjour, je suis</p>
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight text-balance">Manon Lopes</h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 text-pretty">
              Étudiante en 3ème année de BUT Informatique et développeuse Full Stack en alternance chez Raiwai
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Java</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Python</span>
            <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
              Vue.js
            </span>
            <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">Javascript</span>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 mt-12"
          >
            Découvrir mon travail
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
    </section>
  )
}
