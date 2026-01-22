import { ExternalLink, Github } from 'lucide-react';

const categories = [
  {
    name: 'Analyse Forensique & Investigation Numérique',
    projects: [
      {
        title: 'Analyse des logs sur un serveur compromis',
        description: 'Examen approfondi des journaux système pour identifier les activités malveillantes et les points d\'entrée',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        pdf: 'projet/forensic.pdf',
        tags: ['Analyse', 'Logs', 'Sécurité'],
        color: 'from-blue-500 to-cyan-500'
      },
      {
        title: 'Analyse de logs PsExec non autorisé',
        description: 'Détection et investigation d\'une exécution de PsExec par un utilisateur non administrateur',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        pdf: 'projet/forensic2.pdf',
        tags: ['PsExec', 'Sécurité', 'Windows'],
        color: 'from-cyan-500 to-teal-500'
      },
      {
        title: 'Investigation USB avec USBDeview',
        description: 'Analyse des périphériques USB connectés et historique d\'utilisation avec l\'outil USBDeview',
        image: '/img/usb.jpeg',
        pdf: 'projet/forensic3.pdf',
        tags: ['USB', 'Forensique', 'Windows'],
        color: 'from-teal-500 to-emerald-500'
      },
      {
        title: 'Acquisition de données mobiles avec ADB',
        description: 'Extraction et analyse de preuves numériques sur appareils Android via Android Debug Bridge',
        image: 'img/adb.jpeg',
        pdf: 'projet/forensic4.pdf',
        tags: ['Mobile', 'Android', 'ADB'],
        color: 'from-emerald-500 to-green-500'
      },
      {
        title: 'Haute disponibilité avec Heartbeat',
        description: 'Mise en place et configuration d\'une infrastructure haute disponibilité avec Heartbeat',
        image: 'img/HA.jpeg',
        pdf: 'projet/heartbeat.pdf',
        tags: ['Haute disponibilité', 'Réseau', 'Sécurité'],
        color: 'from-green-500 to-lime-500'
      },
      {
        title: 'Investigation sur clé USB suspecte',
        description: 'Analyse forensique complète d\'une clé USB potentiellement malveillante',
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        pdf: 'projet/investigation_numerique.pdf',
        tags: ['USB', 'Forensique', 'Analyse'],
        color: 'from-lime-500 to-yellow-500'
      },
      {
        title: 'Investigation avec OSForensics',
        description: 'Analyse numérique avancée à l\'aide de l\'outil OSForensics pour la recherche de preuves',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        pdf: 'projet/osforensic.pdf',
        tags: ['OSForensics', 'Analyse', 'Forensique'],
        color: 'from-yellow-500 to-amber-500'
      }
    ]
  },
  {
    name: 'Sécurité Réseau & Infrastructures',
    projects: [
      {
        title: 'Configuration réseau',
        description: 'Routage statique',
        image: 'img/net.jpeg',
        pdf: 'projet/reseau.pdf',
        tags: ['Réseau', 'Sécurité', 'Infrastructure'],
        color: 'from-amber-500 to-orange-500'
      },
      {
        title: 'Audit de sécurité réseau',
        description: 'Teste de sécurité d\'un réseau local avec identification et remédiation des vulnérabilités',
        image: 'img/audit.jpeg',
        pdf: 'projet/audit1.pdf',
        tags: ['Audit', 'Réseau', 'Conformité'],
        color: 'from-orange-500 to-red-500'
      },
      {
        title: 'pfSense',
        description: 'Déploiement et configuration d\'un pare-feu open source',
        image: 'img/pfsense.jpeg',
        pdf: 'projet/pfsense.pdf',
        tags: ['Pare-feu', 'pfSense', 'Sécurité'],
        color: 'from-red-500 to-pink-500'
      }
    ]
  },
  {
    name: 'Sécurité Web & Tests d\'Intrusion',
    projects: [
      {
        title: 'Web security avec Burp suite',
        description: 'Tests d\'intrusion complets avec remédiation des vulnérabilités critiques',
        image: 'img/burp.jpeg',
        pdf: 'projet/web-security.pdf',
        tags: ['Web', 'Pentest', 'Sécurité'],
        color: 'from-pink-500 to-purple-500'
      },
      {
        title: 'Web security avec owasp zap',
        description: 'teste d\'intrusion web et identification des vulnérabilités',
        image: 'img/zap.jpeg',
        pdf: 'projet/web-zap.pdf',
        tags: ['Web', 'Pentest', 'Sécurité'],
        color: 'from-purple-500 to-indigo-500'
      }
    ]
  },
  {
    name: 'Ingénierie Sociale & Sensibilisation',
    projects: [
      {
        title: 'Campagne de phishing simulé',
        description: 'Test d\'ingénierie sociale avec formation personnalisée pour les employés',
        image: 'img/phis.jpeg',
        pdf: 'projet/phishing-campaign.pdf',
        tags: ['Phishing', 'Formation', 'Sensibilisation'],
        color: 'from-indigo-500 to-blue-500'
      }
    ]
  },
  {
    name: 'Cloud/Sécurité Cloud',
    projects: [
      {
        title: 'Cloud Computing',
        description: 'Principes de base du cloud',
        image: 'img/cloud.jpeg',
        pdf: 'projet/Cloud.pdf',
        tags: ['Cloud', 'AWS', 'Sécurité'],
        color: 'from-blue-400 to-cyan-400'
      }
    ]
  },
  {
    name: 'Audit & Scan de Vulnérabilités',
    projects: [
      {
        title: 'Audit de sécurité',
        description: 'Scan de vulnérabilités et identification des failles de sécurité',
        image: 'img/openvas.jpeg',
        pdf: 'projet/openvas.pdf',
        tags: ['Audit', 'Vulnérabilités', 'Analyse'],
        color: 'from-cyan-400 to-teal-400'
      }
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">
          Projets & Réalisations
        </h2>

        <div className="space-y-20">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="group/category">
              <div className="sticky top-20 z-10 bg-white/80 backdrop-blur-sm py-4 -mx-4 px-4 border-b border-slate-100">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 relative inline-block">
                  <span className="relative z-10 px-1">
                    {category.name}
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 -z-10 opacity-70 group-hover/category:w-full transition-all duration-500"></span>
                  </span>
                </h3>
                <div className="h-0.5 bg-gradient-to-r from-blue-100 to-transparent mt-2 w-1/3 group-hover/category:w-full transition-all duration-700"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {category.projects.map((project, projIndex) => (
                  <div
                    key={`${catIndex}-${projIndex}`}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col border border-slate-100 hover:border-blue-100"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-80 mix-blend-multiply transition-all duration-500`}></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-white/90 text-slate-800 text-xs font-medium rounded-full backdrop-blur-sm shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-4 mt-auto border-t border-slate-100 group-hover:border-slate-200 transition-colors duration-300">
                        <div className="flex gap-3">
                          <a 
                            href={project.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 group/button"
                          >
                            <span className="relative z-10">Voir</span>
                            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></span>
                          </a>
                        </div>
                        <button 
                          className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors duration-300 group/github"
                          title="Voir le code source"
                        >
                          <Github className="w-5 h-5 group-hover/github:scale-110 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
