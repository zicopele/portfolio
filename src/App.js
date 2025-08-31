import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Download,
  ExternalLink,
  ChevronRight,
  Star,
  Target,
  GraduationCap,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');

  const skills = [
    { name: 'Python', level: 92, category: language === 'es' ? 'Lenguaje' : 'Language' },
    { name: 'React/Frontend', level: 88, category: 'Frontend' },
    { name: 'Java', level: 90, category: language === 'es' ? 'Lenguaje' : 'Language' },
    { name: language === 'es' ? 'Diseño UI/UX' : 'UI/UX Design', level: 85, category: language === 'es' ? 'Diseño' : 'Design' },
    { name: 'JavaScript', level: 87, category: language === 'es' ? 'Lenguaje' : 'Language' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadSummary = () => {
    const summaryText = `HAMZI FARHAT - RESUMEN DEL PORTAFOLIO
Ingeniero de Software | Desarrollador Full Stack | Aspirante a Diseñador UI/UX
Contacto: hamziwfarhat@hotmail.com | GitHub: @zicopele | LinkedIn: /in/hamzi-farhat-bb9011215

INFORMACIÓN PERSONAL
Edad: 22 años | Ubicación: Colón, Panamá | Idiomas: Bilingüe (Inglés/Español - Completamente fluido)

ENFOQUE PROFESIONAL
• Desarrollo de IA y Aprendizaje Automático
• Desarrollo Web Full Stack
• Diseño UI/UX y Desarrollo Frontend (Aprendiendo)
• Diseño de Sistemas Distribuidos

HABILIDADES TÉCNICAS CLAVE
Lenguajes: Python (92%), Java (90%), JavaScript (87%), HTML/CSS (90%)
Frameworks y Herramientas: React, Node.js, YOLOv5, OpenAI, RMI, Socket Programming
Desarrollo: Git, VS Code, IntelliJ IDEA, Ubuntu, MongoDB
Experiencia: 5+ años programando

PROYECTOS DESTACADOS
1. IA de Detección de Especies Invasivas - Modelo YOLOv5 para detección de especies
   Demo: https://drive.google.com/file/d/1ZCuwRPcRJ_LMDN1AFngkyfp3aUcmbX48/view
   Código: https://github.com/Kevaunjh/insect-identification

2. IA Compañero de Aprendizaje de Idiomas - Plataforma de aprendizaje con OpenAI
   Código: https://github.com/zicopele/ManyLingo

3. Biblioteca Musical Distribuida - Sistema distribuido Java RMI
   Código: https://github.com/Kevaunjh/Music_Library_GUI

EXPERIENCIA RECIENTE
• Soporte de TI - Caribbean International School (Mayo-Sep 2024)
• Líder Estudiantil Internacional - Ontario Tech University (Mayo-Sep 2023)
• Asociado de Ventas - Las Vegas S.A. (Mayo-Ago 2020)

EDUCACIÓN
Licenciatura en Ingeniería en Ingeniería de Software
Ontario Tech University (2021-2025) - Graduado

Licenciatura Bilingüe en Ciencias y Humanidades
Certificación Bilingüe en Comercio
Caribbean International School (2008-2021)`;

    const blob = new Blob([summaryText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Hamzi_Farhat_Resumen_Portafolio.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-neutral-800 to-stone-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-neutral-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-stone-200 bg-clip-text text-transparent">
              {language === 'es' ? 'Portafolio' : 'Portfolio'}
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('hero')}
                className={`transition-colors hover:text-amber-200 ${activeSection === 'hero' ? 'text-amber-200' : 'text-neutral-300'}`}
              >
                {language === 'es' ? 'Inicio' : 'Home'}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors hover:text-amber-200 ${activeSection === 'about' ? 'text-amber-200' : 'text-neutral-300'}`}
              >
                {language === 'es' ? 'Acerca' : 'About'}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`transition-colors hover:text-amber-200 ${activeSection === 'skills' ? 'text-amber-200' : 'text-neutral-300'}`}
              >
                {language === 'es' ? 'Habilidades' : 'Skills'}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`transition-colors hover:text-amber-200 ${activeSection === 'projects' ? 'text-amber-200' : 'text-neutral-300'}`}
              >
                {language === 'es' ? 'Proyectos' : 'Projects'}
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className={`transition-colors hover:text-amber-200 ${activeSection === 'experience' ? 'text-amber-200' : 'text-neutral-300'}`}
              >
                {language === 'es' ? 'Experiencia' : 'Experience'}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`transition-colors hover:text-amber-200 ${activeSection === 'contact' ? 'text-amber-200' : 'text-neutral-300'}`}
              >
                {language === 'es' ? 'Contacto' : 'Contact'}
              </button>
              
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="ml-4 px-3 py-1 text-sm border border-amber-600 rounded-full hover:bg-amber-600/10 transition-colors text-amber-200"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-neutral-300 hover:text-amber-200 w-full text-left"
              >
                {language === 'es' ? 'Inicio' : 'Home'}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-neutral-300 hover:text-amber-200 w-full text-left"
              >
                {language === 'es' ? 'Acerca' : 'About'}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block px-3 py-2 text-neutral-300 hover:text-amber-200 w-full text-left"
              >
                {language === 'es' ? 'Habilidades' : 'Skills'}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block px-3 py-2 text-neutral-300 hover:text-amber-200 w-full text-left"
              >
                {language === 'es' ? 'Proyectos' : 'Projects'}
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block px-3 py-2 text-neutral-300 hover:text-amber-200 w-full text-left"
              >
                {language === 'es' ? 'Experiencia' : 'Experience'}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-neutral-300 hover:text-amber-200 w-full text-left"
              >
                {language === 'es' ? 'Contacto' : 'Contact'}
              </button>
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="block px-3 py-2 text-amber-200 hover:bg-amber-600/10 w-full text-left"
              >
                {language === 'es' ? 'English' : 'Español'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-amber-700 to-stone-600 p-1">
              <img
                src="/hamzi.png"
                alt="Hamzi Farhat"
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-amber-200 to-stone-200 bg-clip-text text-transparent">
                Hamzi Farhat
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-300 mb-6 font-medium">
              {language === 'es' 
                ? 'Ingeniero de Software • Desarrollador Full Stack • Aspirante a Diseñador UI/UX'
                : 'Software Engineer • Full Stack Developer • Aspiring UI/UX Designer'
              }
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              {language === 'es'
                ? 'Graduado en Ingeniería de Software apasionado por la IA, el aprendizaje automático, y expandiéndome hacia el diseño UI/UX para crear hermosas experiencias de usuario a través del desarrollo web moderno.'
                : 'Software Engineering graduate passionate about AI, machine learning, and expanding into UI/UX design to create beautiful user experiences through modern web development.'
              }
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-amber-700 to-stone-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-900/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {language === 'es' ? 'Ver Mi Trabajo' : 'View My Work'} <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-600/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {language === 'es' ? 'Contáctame' : 'Get In Touch'} <Mail className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/zicopele" className="text-neutral-400 hover:text-amber-200 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/hamzi-farhat-bb9011215" className="text-neutral-400 hover:text-amber-200 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:hamziwfarhat@hotmail.com" className="text-neutral-400 hover:text-amber-200 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-amber-200 to-stone-200 bg-clip-text text-transparent">
              {language === 'es' ? 'Acerca de Mí' : 'About Me'}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-amber-200">
                {language === 'es' ? 'Mi Trayectoria' : 'My Journey'}
              </h3>
              <p className="text-neutral-300 mb-6 leading-relaxed font-light text-base">
                {language === 'es'
                  ? 'Soy graduado en Ingeniería de Software de Ontario Tech University con una pasión por la inteligencia artificial, el aprendizaje automático y la creación de experiencias de usuario excepcionales. Mi trayectoria en tecnología abarca desde el desarrollo de IA backend hasta el desarrollo frontend, y me estoy expandiendo activamente hacia el diseño UI/UX para construir soluciones integrales que sean tanto potentes como hermosas.'
                  : 'I\'m a Software Engineering graduate from Ontario Tech University with a passion for artificial intelligence, machine learning, and creating exceptional user experiences. My journey in technology spans from backend AI development to frontend development, and I\'m actively expanding into UI/UX design to build comprehensive solutions that are both powerful and beautiful.'
                }
              </p>
              <p className="text-neutral-300 mb-6 leading-relaxed font-light text-base">
                {language === 'es'
                  ? 'Con experiencia en soporte de TI, liderazgo estudiantil y varios proyectos técnicos, aporto tanto experiencia técnica como un interés creciente en principios de diseño a cada desafío. Estoy particularmente interesado en visión por computadora, procesamiento de lenguaje natural, y aprendiendo a crear interfaces de usuario intuitivas que hagan la tecnología compleja accesible para todos.'
                  : 'With experience in IT support, student leadership, and various technical projects, I bring both technical expertise and a growing interest in design principles to every challenge. I\'m particularly interested in computer vision, natural language processing, and learning to craft intuitive user interfaces that make complex technology accessible to everyone.'
                }
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-stone-900/40 p-4 rounded-lg border border-stone-600/30">
                  <MapPin className="w-6 h-6 text-amber-200 mb-2" />
                  <p className="text-sm text-neutral-400 font-light">
                    {language === 'es' ? 'Ubicación' : 'Location'}
                  </p>
                  <p className="font-medium text-neutral-200">
                    {language === 'es' ? 'Colón, Panamá' : 'Colón, Panama'}
                  </p>
                </div>
                <div className="bg-stone-900/40 p-4 rounded-lg border border-stone-600/30">
                  <GraduationCap className="w-6 h-6 text-amber-200 mb-2" />
                  <p className="text-sm text-neutral-400 font-light">
                    {language === 'es' ? 'Estado' : 'Status'}
                  </p>
                  <p className="font-medium text-neutral-200">
                    {language === 'es' ? 'Graduado en Ingeniería de Software' : 'Software Engineering Graduate'}
                  </p>
                </div>
                <div className="bg-stone-900/40 p-4 rounded-lg border border-stone-600/30">
                  <Star className="w-6 h-6 text-amber-200 mb-2" />
                  <p className="text-sm text-neutral-400 font-light">
                    {language === 'es' ? 'Edad y Idiomas' : 'Age & Languages'}
                  </p>
                  <p className="font-medium text-neutral-200">
                    {language === 'es' ? '22 • Bilingüe (Inglés/Español)' : '22 • Bilingual (English/Spanish)'}
                  </p>
                </div>
                <div className="bg-stone-900/40 p-4 rounded-lg border border-stone-600/30">
                  <Target className="w-6 h-6 text-amber-200 mb-2" />
                  <p className="text-sm text-neutral-400 font-light">
                    {language === 'es' ? 'Experiencia' : 'Experience'}
                  </p>
                  <p className="font-medium text-neutral-200">
                    {language === 'es' ? '5+ Años Programando' : '5+ Years Coding'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-amber-200" />
                  {language === 'es' ? 'Lo Que Hago' : 'What I Do'}
                </h4>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-200" />
                    <span className="font-light">
                      {language === 'es' ? 'Desarrollo de IA y Aprendizaje Automático' : 'AI & Machine Learning Development'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-200" />
                    <span className="font-light">
                      {language === 'es' ? 'Desarrollo Web Full Stack' : 'Full Stack Web Development'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-200" />
                    <span className="font-light">
                      {language === 'es' ? 'Diseño UI/UX y Desarrollo Frontend (Aprendiendo)' : 'UI/UX Design & Frontend Development (Learning)'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-200" />
                    <span className="font-light">
                      {language === 'es' ? 'Diseño de Sistemas Distribuidos' : 'Distributed Systems Design'}
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-amber-200" />
                  {language === 'es' ? 'Enfoque en Diseño y Desarrollo' : 'Design & Development Focus'}
                </h4>
                <div className="space-y-3 text-neutral-300 font-light">
                  <p className="text-sm">🔬 {language === 'es' ? 'Visión por Computadora e IA' : 'Computer Vision & AI'}</p>
                  <p className="text-sm">🎨 {language === 'es' ? 'Diseño y Prototipado UI/UX' : 'UI/UX Design & Prototyping'}</p>
                  <p className="text-sm">💬 {language === 'es' ? 'Procesamiento de Lenguaje Natural' : 'Natural Language Processing'}</p>
                  <p className="text-sm">🌐 {language === 'es' ? 'Frontend y Diseño Web' : 'Frontend & Web Design'}</p>
                  <p className="text-sm">🌐 {language === 'es' ? 'Sistemas Distribuidos' : 'Distributed Systems'}</p>
                  <p className="text-sm">💾 {language === 'es' ? 'Gestión de Bases de Datos' : 'Database Management'}</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30">
                <h4 className="text-xl font-bold text-center mb-4">
                  {language === 'es' ? 'Educación' : 'Education'}
                </h4>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-200">Ontario Tech University</h4>
                    <p className="text-sm text-neutral-300 font-light">
                      {language === 'es' ? 'Licenciatura en Ingeniería en Ingeniería de Software' : 'Bachelor of Engineering in Software Engineering'}
                    </p>
                    <p className="text-sm text-neutral-400 font-light">
                      {language === 'es' ? '2021 - 2025 (Graduado) | Oshawa, ON' : '2021 - 2025 (Graduated) | Oshawa, ON'}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-200">Caribbean International School</h4>
                    <p className="text-sm text-neutral-300 font-light">
                      {language === 'es' ? 'Licenciatura Bilingüe en Ciencias y Humanidades' : 'Bilingual Bachelor in Science and Humanities'}
                    </p>
                    <p className="text-sm text-neutral-300 font-light">
                      {language === 'es' ? 'Certificación Bilingüe en Comercio' : 'Bilingual Certification in Commerce'}
                    </p>
                    <p className="text-sm text-neutral-400 font-light">
                      {language === 'es' ? '2008 - 2021 | Colón, Panamá' : '2008 - 2021 | Colón, Panama'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-amber-200 to-stone-200 bg-clip-text text-transparent">
              {language === 'es' ? 'Habilidades y Experiencia' : 'Skills & Expertise'}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30 hover:border-amber-600/40 transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-neutral-200">{skill.name}</h3>
                  <span className="text-sm text-amber-200 font-medium">{skill.category}</span>
                </div>
                <div className="mb-2">
                  <div className="w-full bg-neutral-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-amber-600 to-stone-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm text-neutral-400 font-light">
                  {skill.level}% {language === 'es' ? 'Competencia' : 'Proficiency'}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={language === 'es' ? "/Hamzi Farhat Ingeniero de Sistemas CV.pdf" : "/Hamzi Farhat Software Engineer CV.pdf"}
              download={language === 'es' ? "Hamzi Farhat Ingeniero de Sistemas CV.pdf" : "Hamzi Farhat Software Engineer CV.pdf"}
              className="bg-gradient-to-r from-amber-700 to-stone-700 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-900/25 transition-all duration-300 flex items-center justify-center gap-2 mx-auto sm:mx-0 inline-flex"
            >
              <Download className="w-5 h-5" />
              {language === 'es' ? 'Descargar Currículum (PDF)' : 'Download Resume (PDF)'}
            </a>
            
            <button
              onClick={handleDownloadSummary}
              className="border border-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-600/10 transition-all duration-300 flex items-center justify-center gap-2 mx-auto sm:mx-0"
            >
              <Download className="w-5 h-5" />
              {language === 'es' ? 'Resumen del Portafolio' : 'Portfolio Summary'}
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-amber-200 to-stone-200 bg-clip-text text-transparent">
              {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-stone-800/30 to-neutral-700/30 rounded-xl overflow-hidden border border-stone-600/30 hover:border-amber-600/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">🔬</div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium bg-green-600/20 text-green-300">
                    {language === 'es' ? 'Activo' : 'Live'}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-neutral-200">
                  {language === 'es' ? 'IA de Detección de Especies Invasivas' : 'Invasive Species Detection AI'}
                </h3>
                <p className="text-neutral-400 mb-4 text-sm font-light leading-relaxed">
                  {language === 'es'
                    ? 'Desarrollé y entrené un modelo de aprendizaje profundo YOLOv5 para detectar especies invasivas en imágenes y videos con alta precisión. Integré técnicas de visión por computadora para clasificación y seguimiento.'
                    : 'Developed and trained a YOLOv5 deep learning model to detect invasive species in images and video feeds with high accuracy. Integrated computer vision techniques for classification and tracking.'
                  }
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'YOLOv5', 'React', 'JSON', language === 'es' ? 'Visión por Computadora' : 'Computer Vision'].map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-amber-700/20 text-amber-300 px-2 py-1 rounded font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => window.open('https://drive.google.com/file/d/1ZCuwRPcRJ_LMDN1AFngkyfp3aUcmbX48/view?usp=sharing', '_blank')}
                    className="flex items-center gap-1 text-amber-200 hover:text-amber-100 transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">{language === 'es' ? 'Demo en Vivo' : 'Live Demo'}</span>
                  </button>
                  <button
                    onClick={() => window.open('https://github.com/Kevaunjh/insect-identification', '_blank')}
                    className="flex items-center gap-1 text-neutral-400 hover:text-neutral-300 transition-colors font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">{language === 'es' ? 'Código' : 'Code'}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-stone-800/30 to-neutral-700/30 rounded-xl overflow-hidden border border-stone-600/30 hover:border-amber-600/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">🗣️</div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium bg-green-600/20 text-green-300">
                    {language === 'es' ? 'Activo' : 'Live'}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-neutral-200">
                  {language === 'es' ? 'IA Compañero de Aprendizaje de Idiomas' : 'Language Learning Companion AI'}
                </h3>
                <p className="text-neutral-400 mb-4 text-sm font-light leading-relaxed">
                  {language === 'es'
                    ? 'Compañero de aprendizaje con IA usando OpenAI con lecciones interactivas, romanización, traducción y funciones de texto a voz para mejorar la participación del usuario.'
                    : 'AI-powered language learning companion using OpenAI with interactive lessons, romanization, translation, and text-to-speech functions for enhanced user engagement.'
                  }
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'JavaScript', 'React', 'OpenAI', 'HTML/CSS'].map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-amber-700/20 text-amber-300 px-2 py-1 rounded font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => window.open('#', '_blank')}
                    className="flex items-center gap-1 text-amber-200 hover:text-amber-100 transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">{language === 'es' ? 'Demo en Vivo' : 'Live Demo'}</span>
                  </button>
                  <button
                    onClick={() => window.open('https://github.com/zicopele/ManyLingo', '_blank')}
                    className="flex items-center gap-1 text-neutral-400 hover:text-neutral-300 transition-colors font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">{language === 'es' ? 'Código' : 'Code'}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-stone-800/30 to-neutral-700/30 rounded-xl overflow-hidden border border-stone-600/30 hover:border-amber-600/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">🎵</div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium bg-green-600/20 text-green-300">
                    {language === 'es' ? 'Activo' : 'Live'}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-neutral-200">
                  {language === 'es' ? 'Biblioteca Musical Distribuida' : 'Distributed Music Library'}
                </h3>
                <p className="text-neutral-400 mb-4 text-sm font-light leading-relaxed">
                  {language === 'es'
                    ? 'Sistema distribuido para gestionar y transmitir archivos de música a través de múltiples nodos usando Java RMI y programación de sockets con replicación de archivos y tolerancia a fallos.'
                    : 'Distributed system to manage and stream music files across multiple nodes using Java RMI and socket programming with file replication and fault tolerance.'
                  }
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Java', 'RMI', language === 'es' ? 'Programación de Sockets' : 'Socket Programming', 'P2P'].map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-amber-700/20 text-amber-300 px-2 py-1 rounded font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => window.open('#', '_blank')}
                    className="flex items-center gap-1 text-amber-200 hover:text-amber-100 transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">{language === 'es' ? 'Demo en Vivo' : 'Live Demo'}</span>
                  </button>
                  <button
                    onClick={() => window.open('https://github.com/Kevaunjh/Music_Library_GUI', '_blank')}
                    className="flex items-center gap-1 text-neutral-400 hover:text-neutral-300 transition-colors font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">{language === 'es' ? 'Código' : 'Code'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-amber-200 to-stone-200 bg-clip-text text-transparent">
              {language === 'es' ? 'Experiencia' : 'Experience'}
            </span>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-stone-800/30 to-neutral-700/30 p-6 rounded-xl border border-stone-600/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-amber-200">
                    {language === 'es' ? 'Soporte de TI' : 'IT Support'}
                  </h3>
                  <h4 className="text-lg text-neutral-300 font-medium">Caribbean International School</h4>
                </div>
                <span className="text-neutral-400 mt-2 md:mt-0 font-light">
                  {language === 'es' ? 'Mayo 2024 - Sep 2024' : 'May 2024 - Sep 2024'}
                </span>
              </div>
              <p className="text-neutral-300 font-light leading-relaxed">
                {language === 'es'
                  ? 'Proporcioné soporte técnico integral para problemas de hardware, software y redes en toda la escuela. Realicé mantenimiento rutinario del sistema, actualizaciones de software y procesos de incorporación/desvinculación.'
                  : 'Provided technical support for hardware, software, and networking issues across the school. Performed routine system maintenance, software updates, and supported onboarding/offboarding processes.'
                }
              </p>
            </div>

            <div className="bg-gradient-to-r from-stone-800/30 to-neutral-700/30 p-6 rounded-xl border border-stone-600/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-amber-200">
                    {language === 'es' ? 'Líder Estudiantil Internacional' : 'International Student Leader'}
                  </h3>
                  <h4 className="text-lg text-neutral-300 font-medium">Ontario Tech University</h4>
                </div>
                <span className="text-neutral-400 mt-2 md:mt-0 font-light">
                  {language === 'es' ? 'Mayo 2023 - Sep 2023' : 'May 2023 - Sep 2023'}
                </span>
              </div>
              <p className="text-neutral-300 font-light leading-relaxed">
                {language === 'es'
                  ? 'Fui mentor de nuevos estudiantes internacionales, facilité sesiones de orientación, recorridos por el campus y talleres culturales para promover la participación e inclusión estudiantil.'
                  : 'Mentored new international students, facilitated orientation sessions, campus tours, and cultural workshops to promote student engagement and inclusion.'
                }
              </p>
            </div>

            <div className="bg-gradient-to-r from-stone-800/30 to-neutral-700/30 p-6 rounded-xl border border-stone-600/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-amber-200">
                    {language === 'es' ? 'Asociado de Ventas' : 'Sales Associate'}
                  </h3>
                  <h4 className="text-lg text-neutral-300 font-medium">Las Vegas S.A.</h4>
                </div>
                <span className="text-neutral-400 mt-2 md:mt-0 font-light">
                  {language === 'es' ? 'Mayo 2020 - Ago 2020' : 'May 2020 - Aug 2020'}
                </span>
              </div>
              <p className="text-neutral-300 font-light leading-relaxed">
                {language === 'es'
                  ? 'Asociado de ventas altamente motivado con amplia experiencia en servicio al cliente y ventas. Mantuve la presentación de mercancía para maximizar el atractivo comercial y los ingresos.'
                  : 'Highly motivated sales associate with extensive customer service and sales experience. Maintained merchandise presentation to maximize business appeal and revenue.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-200 to-stone-200 bg-clip-text text-transparent">
              {language === 'es' ? 'Trabajemos Juntos' : 'Let\'s Work Together'}
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light">
            {language === 'es'
              ? '¿Listo para dar vida a tus ideas? Hablemos sobre tu próximo proyecto.'
              : 'Ready to bring your ideas to life? Let\'s discuss your next project.'
            }
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-stone-800/30 to-neutral-700/30 p-6 rounded-xl border border-stone-600/30">
              <Mail className="w-8 h-8 text-amber-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {language === 'es' ? 'Correo' : 'Email'}
              </h3>
              <p className="text-neutral-400 font-light">hamziwfarhat@hotmail.com</p>
            </div>
            <div className="bg-gradient-to-br from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30">
              <Linkedin className="w-8 h-8 text-amber-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-neutral-400 font-light">/in/hamzi-farhat-bb9011215</p>
            </div>
            <div className="bg-gradient-to-br from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30">
              <Github className="w-8 h-8 text-amber-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-neutral-400 font-light">@zicopele</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-neutral-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-neutral-400 font-light">
            © 2024 Hamzi Farhat. {language === 'es' ? 'Construido con React y pasión por la innovación' : 'Built with React and passion for innovation'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;