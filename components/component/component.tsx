'use client'
import React, { useState, useRef, useEffect } from 'react';
import { FaMoon, FaSun, FaDownload } from 'react-icons/fa';
import { translations } from './translations';

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, children, className }) => (
  <a href={href} target="_blank" className={`block hover:underline ${className || ''}`}>
    {children}
  </a>
);

// Objeto de traducciones con todo el contenido


export default function Portfolio() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Estado para el idioma seleccionado
  const [language, setLanguage] = useState<'ca' | 'es'>('ca');

  // Detectar automáticamente el idioma del usuario al cargar
  useEffect(() => {
    const userLang = navigator.language || navigator.languages[0];
    if (userLang.startsWith('es')) {
      setLanguage('es');
    } else if (userLang.startsWith('ca')) {
      setLanguage('ca');
    } else {
      setLanguage('es'); // Por defecto al español si no es catalán
    }
  }, []);

  const handleDownloadPdf = async () => {
    if (!contentRef.current || isGeneratingPdf) return;

    try {
      setIsGeneratingPdf(true);
      const html2pdf = (await import('html2pdf.js')).default;

      const opt = {
        margin: [4, 4, 4, 4],
        filename: 'portafolio.pdf',
        image: { type: 'jpeg', quality: 0.8 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      await html2pdf().set(opt).from(contentRef.current).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Obtener las traducciones según el idioma seleccionado
  const t = translations[language];

  return (
    <div>
      {/* Selector de idiomas */}
      <div className="flex justify-end mb-4">
      <button
          onClick={handleDownloadPdf}
          disabled={isGeneratingPdf}
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          
          <FaDownload className="mr-2" />
        </button>
        <button
          onClick={() => setLanguage('ca')}
          className={`px-4 py-2 mr-2 rounded ${
            language === 'ca' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Català
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`px-4 py-2 rounded ${
            language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Español
        </button>
      </div>

      <div
        ref={contentRef}
        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 sm:p-6 rounded-lg shadow-lg"
      >
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 sm:p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t.portfolioTitle}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">{t.personalInfo.title}</h2>
              <p>
                {t.personalInfo.name}: Francesc
              </p>
              <p>
                {t.personalInfo.surname}: Fors Ferrer
              </p>
              <p>
                {t.personalInfo.birthDate}: 21 de noviembre de 1975
              </p>
              <p>
                {t.personalInfo.birthPlace}: Barcelona
              </p>
              <p>
                {t.personalInfo.currentAddress}: C/ Rector Coch 1
              </p>
              <p>{t.personalInfo.city}</p>
              <p>
                {t.personalInfo.dni}: 44004300X
              </p>
              <p>
                {t.personalInfo.mobile}: +34 618900003
              </p>
              <p>
                {t.personalInfo.email}:
              </p>
              <p>cescofors75@gmail.com</p>
              <SocialLink href="http://www.linkedin.com/in/cescofors/">
                {t.personalInfo.linkedin}: linkedin.com/in/cescofors/
              </SocialLink>
              <SocialLink href="http://github.com/cescofors75">
                {t.personalInfo.github}: github.com/cescofors75
              </SocialLink>
              <SocialLink href="http://cesco.dev">
                {t.personalInfo.portfolio}: www.cesco.dev
              </SocialLink>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">{t.education.title}</h2>
              <div className="mb-2">
                <h3 className="font-medium">1997-2002: {t.education.university}</h3>
                <p>{t.education.degree1}</p>
              </div>
              <div>
                <h3 className="font-medium">1991-1996: {t.education.school}</h3>
                <p>{t.education.degree2}</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{t.currentProject.title}</h2>
            <h3 className="font-medium">{t.currentProject.projectName}</h3>
            <p className="mb-2">
              {t.currentProject.description}
              <SocialLink href="http://baco.cat/" className="ml-1">
                baco.cat/
              </SocialLink>
            </p>
            <p>{t.currentProject.accelerator}</p>
            <p>{t.currentProject.sponsor}</p>
            <p>{t.currentProject.development}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{t.languages.title}</h2>
            <p>{t.languages.catalan}</p>
            <p>{t.languages.spanish}</p>
            <p>{t.languages.french}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {t.programmingLanguages.title}
            </h2>
            <p>{t.programmingLanguages.list}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{t.databases.title}</h2>
            <p>{t.databases.list}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{t.tools.title}</h2>
            <p>{t.tools.list}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{t.apis.title}</h2>
            <p>{t.apis.list}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{t.operatingSystems.title}</h2>
            <p>{t.operatingSystems.list}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{t.others.title}</h2>
            <p>{t.others.list}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{t.experience.title}</h2>
            <div className="space-y-4">
              {t.experience.items.map((item, index) => (
                <div key={index}>
                  <h3 className="font-medium">
                    {item.period}: {item.company}
                  </h3>
                  <p>{item.role}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{t.skills.title}</h2>
            <p className="font-medium">{t.skills.leanDevOps}</p>
            <ul className="list-disc pl-5 mb-2">
              {t.skills.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{t.licenses.title}</h2>
            <p>{t.licenses.list}</p>
          </div>
        </div>
        <button
          onClick={handleDownloadPdf}
          disabled={isGeneratingPdf}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isGeneratingPdf ? t.generatingPdf : t.downloadPdf}
        </button>
      </div>
    </div>
  );
}
