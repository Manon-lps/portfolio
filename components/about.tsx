import {Github} from "lucide-react";
import {Button} from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">À propos</h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Bonjour ! Je suis Manon, étudiante en 3ème année de BUT Informatique à l'IUT de Montpellier. Ma passion pour le développement
                a commencé il y a plusieurs années lorsque j'ai aidé mon ami à développer son serveur de jeu vidéo.
              </p>
              <p>
                Je me spécialise dans l'intégration d’applications et en management des systèmes d’information. J'aime
                particulièrement me rendre utile et voir les projets avancer dans une ambiance positive, où chacun trouve sa place et où
                  les utilisateurs sont satisfaits du résultat.
              </p>
              <p>
                  Ce besoin d’aider, d’apporter de l’ordre et de l’équilibre autour de moi, est ce qui me pousse à devenir développeuse.
                  Et pourquoi pas, à terme, accompagner une équipe en tant que cheffe de projet, toujours avec cette idée en tête :
                  veiller à ce que chacun se sente bien et impliqué.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Compétences principales</h3>
              <div className="space-y-3">
                {[
                  { name: "Java", level: 80 },
                  { name: "Python", level: 75 },
                  { name: "Symfony", level: 60 },
                  { name: "Vue.js", level: 55 },
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Formation</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-1 bg-primary rounded-full" />
                  <div className="space-y-1 pb-6">
                    <p className="font-medium">IUT de Montpellier</p>
                    <p className="text-sm text-muted-foreground">BUT Informatique · 2023 - 2026</p>
                  </div>
                </div>
              </div>
            </div>
              <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                  <a href="/CV_LOPES_MANON.pdf"
                     download="CV_LOPES_MANON.pdf">
                      Télécharger mon cv
                  </a>
              </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
