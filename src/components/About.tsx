import { Award, BookOpen, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">
          À propos de moi
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-blue-400 to-rose-400 rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="/img/tima1.png"
                alt="Experte en cybersécurité"
                className="w-full h-full object-cover mix-blend-overlay opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-xl flex items-center justify-center">
              <Award className="w-16 h-16 text-white" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Bonjour ! Je suis Fatima LY, étudiante en fin de cycle licence,  passionnée par les technologies de l’information et la cybersécurité, je m’investis pleinement dans l’apprentissage des principes fondamentaux de la sécurité informatique. Curieuse, motivée et déterminée, je cherche à renforcer mes compétences techniques dans la protection des systèmes et des données numériques. <br /> Mon objectif est de contribuer activement à la sécurisation des environnements informatiques tout en développant des compétences professionnelles solides et en restant en veille constante face aux nouvelles menaces et technologies.
              
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <BookOpen className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="font-semibold text-slate-800 mb-1">Formation continue</h3>
                <p className="text-sm text-slate-600">Toujours à jour sur les dernières menaces</p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Heart className="w-8 h-8 text-rose-500 mb-3" />
                <h3 className="font-semibold text-slate-800 mb-1">Passion</h3>
                <p className="text-sm text-slate-600">Défendre et protéger les systèmes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
