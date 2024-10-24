'use client'
import React, { useState, useRef } from 'react';

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

export default function Portfolio() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const handleDownloadPdf = async () => {
    if (!contentRef.current || isGeneratingPdf) return;

    try {
      setIsGeneratingPdf(true);
      const html2pdf = (await import('html2pdf.js')).default;

      const opt = {
        margin: [6, 4, 6, 4],
        filename: 'portafolioCesco.pdf',
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

  return (
    <div
      ref={contentRef}
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 sm:p-6 rounded-lg shadow-lg"
    >
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 sm:p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Portfoli</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Informació Personal</h2>
            <p>Nom: Francesc</p>
            <p>Cognoms: Fors Ferrer</p>
            <p>Data de Naixement: 21 de novembre de 1975</p>
            <p>Lloc de Naixement: Barcelona</p>
            <p>Adreça Actual: C/ Rector Coch 1</p>
            <p>Lloret de Mar - Girona</p>
            <p>DNI: 44004300X</p>
            <p>Mòbil: +34 618900003</p>
            <p>Correu Electrònic:</p>
            <p>cescofors75@gmail.com</p>
            <SocialLink href="http://www.linkedin.com/in/cescofors/">
              LinkedIn: linkedin.com/in/cescofors/
            </SocialLink>
            <SocialLink href="http://github.com/cescofors75">
              Github: github.com/cescofors75
            </SocialLink>
            <SocialLink href="http://cesco.dev">
              Portfoli: www.cesco.dev
            </SocialLink>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Educació</h2>
            <div className="mb-2">
              <h3 className="font-medium">1997-2002: Universitat de Girona UDG</h3>
              <p>Grau: Enginyeria Tècnica en Informàtica de Gestió</p>
            </div>
            <div>
              <h3 className="font-medium">1991-1996: Escola Núria Perpinyà Barcelona</h3>
              <p>Grau: Formació Professional I-II, Tècnic Especialista en Informàtica de Gestió</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Projecte Actual</h2>
          <h3 className="font-medium">Baco AI (2023-2024) JS</h3>
          <p className="mb-2">
            Descripció: Dona vida al teu propi Sommelier Virtual. Un servei on els establiments poden crear i gestionar el seu sommelier personalitzat amb facilitat i rapidesa.
            <SocialLink href="https://baco.cat/" className="ml-1">
              baco.cat/
            </SocialLink>
          </p>
          <p>Acceleradora: ISDI (Escola de negocis) Barcelona (Next Generator)</p>
          <p>Microsoft Startup Founders Hub (Patrocinador)</p>
          <p>Desenvolupament de patrons dinàmics de Relacions Embeddings (vectors) RAG (Retrieve and Generate)</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Llengües</h2>
          <p>Català: Natiu. Nivell C.</p>
          <p>Espanyol: Natiu.</p>
          <p>Francès: Escrit i parlat correctament. Nivell intermedi.</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Llenguatges de Programació</h2>
          <p>
            ASM, Cobol, Visual Basic, Visual C, HTML, CSS, C++, ASP, JSP, PHP, SQL, .NET, XSL, XML, Drupal, JavaScript, Ajax, React, Next.js
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Sistemes de Gestió de Bases de Dades</h2>
          <p>Oracle, MySQL, SQL Server, PostgreSQL, Supabase</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Eines de Programació</h2>
          <p>VS Code, Node.js, Bun</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">APIs & Serveis</h2>
          <p>OpenAI, Stability.ai, Mistral, Cohere, Anthropic, Vercel</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Sistemes Operatius</h2>
          <p>Windows, Macintosh, Linux, IoT</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Altres</h2>
          <p>Google Analytics, Business Intelligence i Big Data, Power BI, Azure</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Experiència</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">2021-2022: Euro4x4parts (França)</h3>
              <p>
                Desenvolupament d'aplicacions informàtiques per al departament de R+D. Solució OBD2. Sistema per a cotxes antics connectats a internet.
              </p>
            </div>
            <div>
              <h3 className="font-medium">2019-2021: Euro4x4parts (França)</h3>
              <p>Cap del Departament d'Accessoris.</p>
            </div>
            <div>
              <h3 className="font-medium">2015-2019: Euro4x4parts</h3>
              <p>Director de la filial a Canàries.</p>
            </div>
            <div>
              <h3 className="font-medium">2012-2014: Euro4x4parts</h3>
              <p>Tècnic comercial.</p>
            </div>
            <div>
              <h3 className="font-medium">2010-2012: Hotel San Carlos - Roses</h3>
              <p>
                Gestió i manteniment de programari i maquinari informàtic a l'hotel de Roses i oficines a Lloret de Mar.
              </p>
            </div>
            <div>
              <h3 className="font-medium">2010-2012: Freelance</h3>
              <p>Disseny i desenvolupament web: raidcostabrava.com - Drupal</p>
              <p>Disseny i desenvolupament web: costabravareggaefest.com - Drupal</p>
              <p>Disseny i desenvolupament web: radialtours.com - Drupal</p>
              <p>Disseny i desenvolupament web: casarusa.cat - Drupal</p>
              <p>Disseny i desenvolupament web: restaurantemasbusca.com - Drupal</p>
            </div>
            <div>
              <h3 className="font-medium">2005-2009: Mapicassa (Tecnocasa)</h3>
              <p>
                Responsable del departament de TI. Gestió i manteniment informàtic de 5 oficines, intranet, web corporativa, circuits tancats de càmeres de seguretat.
              </p>
              <p>Disseny i desenvolupament web: llantas4x4.es - PHP</p>
              <p>Disseny i desenvolupament web: accesorios-4x4.com - PHP</p>
            </div>
            <div>
              <h3 className="font-medium">2002-2004: Freelance</h3>
              <p>Desenvolupament de programari de facturació i comptabilitat per a una empresa de construcció - PHP</p>
              <p>Disseny i desenvolupament web: shop-tottraccio.com - PHP</p>
              <p>Disseny i desenvolupament web: tottraccio.com - HTML, JavaScript</p>
            </div>
            <div>
              <h3 className="font-medium">2001: GGG Grup Gràfics Girona (Departament UdG)</h3>
              <p>Desenvolupament mini CAVE3D - C++ (UNIX - Silicon Graphics)</p>
            </div>
            <div>
              <h3 className="font-medium">2001: Freelance</h3>
              <p>Disseny i desenvolupament web: to2djs.net - Mini CMS - HTML, Flash</p>
              <p>Disseny i desenvolupament web: scratchcomando.com - HTML, Flash</p>
              <p>Disseny i desenvolupament web interna per a maquetació estil Kanban - PHP</p>
            </div>
            <div>
              <h3 className="font-medium">1999-2001: Jutjat de 1a Instància i Instrucció número 6 Girona</h3>
              <p>Auxiliar administratiu.</p>
            </div>
            <div>
              <h3 className="font-medium">1994-1996: Xerox Barcelona</h3>
              <p>Desenvolupament de programari After Sales - Barcelona. C++ v1 - Visual C++ v2</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Habilitats</h2>
          <p className="font-medium">Metodologia LEAN i DevOps:</p>
          <ul className="list-disc pl-5 mb-2">
            <li>
              Àmplia experiència en la implementació de metodologies LEAN per a l'optimització de processos.
            </li>
            <li>
              Coneixements sòlids en DevOps, facilitant la integració contínua i el lliurament continu de programari.
            </li>
            <li>
              Capacitat per identificar i eliminar desaprofitaments, millorant l'eficiència operativa i reduint costos.
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Llicències</h2>
          <p>Carnet B1.</p>
        </div>
      </div>
      <button
        onClick={handleDownloadPdf}
        disabled={isGeneratingPdf}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isGeneratingPdf ? 'Generant PDF...' : 'Descarregar com PDF'}
      </button>
    </div>
  );
}
