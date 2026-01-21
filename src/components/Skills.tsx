import { Server, Network, ShieldAlert, Search, Zap, Cloud, Code, Terminal } from 'lucide-react';

const skills = [
  {
    icon: Server,
    title: 'Administration Linux',
    description: 'Gestion des systèmes Linux, scripts shell, services réseau',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Network,
    title: 'Réseaux et sécurité réseaux',
    description: 'Configuration réseau, pare-feu, VPN, analyse de trafic',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    icon: ShieldAlert,
    title: 'Gestion des incidents et des risques',
    description: 'Analyse de risque, réponse aux incidents, plans de continuité',
    color: 'from-teal-500 to-emerald-500'
  },
  {
    icon: Search,
    title: 'Forensic numérique',
    description: 'Investigation numérique, analyse médico-légale, preuves numériques',
    color: 'from-emerald-500 to-green-500'
  },
  {
    icon: Zap,
    title: 'Pentesting',
    description: 'Tests d\'intrusion, évaluation de vulnérabilités, rapports',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: Cloud,
    title: 'Cloud et cloud security',
    description: 'nextcloud, SSO-MFA(keycloak), vault(hashicorp)',
    color: 'from-blue-400 to-indigo-400'
  },
  {
    icon: Code,
    title: 'Développement Web',
    description: 'HTML, CSS, JavaScript, frameworks frontend',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Terminal,
    title: 'Scripting et automatisation',
    description: 'Bash, Python, automatisation des tâches',
    color: 'from-purple-500 to-pink-500'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">
          Compétences & Expertises
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {skill.title}
              </h3>

              <p className="text-slate-600">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
