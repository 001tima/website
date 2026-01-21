import { Mail, Linkedin, Github, Twitter, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">
          Contactez-moi
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Travaillons ensemble
              </h3>
              <p className="text-slate-600 mb-6">
                Vous avez un projet en cybersécurité ou besoin d'une collaboration ?
                N'hésitez pas à me contacter, je serais ravie d'échanger avec vous.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:sophie.moreau@cybersec.fr"
                  className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  lyfatma2@gamil.com
                </a>

                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  Dakar, Sénégal
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-rose-500 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Suivez-moi</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/fatma-ly-772a182a5/"
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  target="_blank"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <form className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Nom
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Envoyer le message
            </button>
          </form>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-600">
          <p>© 2026 Fatima LY -Cybersécurité. Tous droits réservés.</p>
        </footer>
      </div>
    </section>
  );
}
