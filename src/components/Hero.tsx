import { Shield, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-rose-100/30"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 inline-block animate-fade-in">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-rose-400 rounded-full animate-spin-slow opacity-50"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full overflow-hidden shadow-2xl">
              <img
                src="public/img/tima2.jpg"
                alt="Sophie Moreau"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-rose-500 bg-clip-text text-transparent animate-fade-in">
          Fatima LY
        </h1>

        <p className="text-xl md:text-2xl text-slate-700 mb-4 animate-fade-in-delay">
          Etudiante en Cybersécurité
        </p>

        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
          Passionnée par la protection des données et la sécurité des systèmes d'information
        </p>

        <div className="flex gap-4 justify-center animate-fade-in-delay-3">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Me contacter
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-slate-700 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Voir mes projets
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-slate-400" />
      </a>
    </section>
  );
}
