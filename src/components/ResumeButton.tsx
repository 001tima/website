import { Download } from 'lucide-react';

export default function ResumeButton() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <a
          href="CV/cv.pdf"
          download
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-rose-500 rounded-full shadow-lg hover:opacity-90 transition-opacity duration-300 hover:scale-105 transform"
        >
          <Download className="w-5 h-5 mr-2" />
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}
