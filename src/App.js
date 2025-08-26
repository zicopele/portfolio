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
  X,
  Globe
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'es' for Spanish

  // Translation data
  const translations = {
    en: {
      // Navigation
      nav: {
        portfolio: 'Portfolio',
        hero: 'hero',
        about: 'about',
        skills: 'skills',
        projects: 'projects',
        experience: 'experience',
        contact: 'contact'
      },
      // Hero Section
      hero: {
        name: 'Hamzi Farhat',
        title: 'Software Engineer • Full Stack Developer • UI/UX Designer',
        description: 'Software Engineering graduate passionate about AI, machine learning, and expanding into UI/UX design to create beautiful user experiences through modern web development.',
        viewWork: 'View My Work',
        getInTouch: 'Get In Touch'
      },
      // About Section
      about: {
        title: 'About Me',
        journey: 'My Journey',
        paragraph1: "I'm a Software Engineering graduate from Ontario Tech University with a passion for artificial intelligence, machine learning, and creating exceptional user experiences. My journey in technology spans from backend AI development to frontend development, and I'm actively expanding into UI/UX design to build comprehensive solutions that are both powerful and beautiful.",
        paragraph2: "With experience in IT support, student leadership, and various technical projects, I bring both technical expertise and a growing interest in design principles to every challenge. I'm particularly interested in computer vision, natural language processing, and learning to craft intuitive user interfaces that make complex technology accessible to everyone.",
        location: 'Location',
        locationValue: 'Colón, Panama',
        status: 'Status',
        statusValue: 'Software Engineering Graduate',
        ageLanguages: 'Age & Languages',
        ageLanguagesValue: '22 • Bilingual (English/Spanish)',
        experience: 'Experience',
        experienceValue: '5+ Years Coding',
        whatIDo: 'What I Do',
        doList: [
          'AI & Machine Learning Development',
          'Full Stack Web Development',
          'UI/UX Design & Frontend Development (Learning)',
          'Distributed Systems Design'
        ],
        designFocus: 'Design & Development Focus',
        focusList: [
          '🔬 Computer Vision & AI',
          '🎨 UI/UX Design & Prototyping',
          '💬 Natural Language Processing',
          '🌐 Frontend & Web Design',
          '🌐 Distributed Systems',
          '💾 Database Management'
        ],
        education: 'Education',
        ontarioTech: 'Ontario Tech University',
        ontarioTechDegree: 'Bachelor of Engineering in Software Engineering',
        ontarioTechPeriod: '2021 - 2025 (Graduated) | Oshawa, ON',
        caribbeanSchool: 'Caribbean International School',
        caribbeanDegree: 'Bachelor of Business, Science, and Liberal Arts',
        caribbeanPeriod: '2008 - 2021 | Colón, Panama'
      },
      // Skills Section
      skills: {
        title: 'Skills & Expertise',
        skillsList: [
          { name: 'Python', level: 92, category: 'Language' },
          { name: 'React/Frontend', level: 88, category: 'Frontend' },
          { name: 'Java', level: 90, category: 'Language' },
          { name: 'UI/UX Design', level: 85, category: 'Design' },
          { name: 'JavaScript', level: 87, category: 'Language' },
          { name: 'HTML/CSS', level: 90, category: 'Frontend' }
        ],
        proficiency: 'Proficiency',
        downloadResume: 'Download Resume (PDF)',
        portfolioSummary: 'Portfolio Summary'
      },
      // Projects Section
      projects: {
        title: 'Featured Projects',
        projectsList: [
          {
            title: 'Invasive Species Detection AI',
            description: 'Developed and trained a YOLOv5 deep learning model to detect invasive species in images and video feeds with high accuracy. Integrated computer vision techniques for classification and tracking.',
            tech: ['Python', 'YOLOv5', 'React', 'JSON', 'Computer Vision'],
            image: '🔬',
            link: 'https://github.com/Kevaunjh/insect-identification',
            demoLink: 'https://drive.google.com/file/d/1ZCuwRPcRJ_LMDN1AFngkyfp3aUcmbX48/view?usp=sharing',
            status: 'Live'
          },
          {
            title: 'Language Learning Companion AI',
            description: 'AI-powered language learning companion using OpenAI with interactive lessons, romanization, translation, and text-to-speech functions for enhanced user engagement.',
            tech: ['Python', 'JavaScript', 'React', 'OpenAI', 'HTML/CSS'],
            image: '🗣️',
            link: 'https://github.com/zicopele/ManyLingo',
            demoLink: '#',
            status: 'Live'
          },
          {
            title: 'Distributed Music Library',
            description: 'Distributed system to manage and stream music files across multiple nodes using Java RMI and socket programming with file replication and fault tolerance.',
            tech: ['Java', 'RMI', 'Socket Programming', 'P2P'],
            image: '🎵',
            link: 'https://github.com/Kevaunjh/Music_Library_GUI',
            demoLink: '#',
            status: 'Live'
          }
        ],
        liveDemo: 'Live Demo',
        code: 'Code'
      },
      // Experience Section
      experience: {
        title: 'Experience',
        experienceList: [
          {
            company: 'Caribbean International School',
            position: 'IT Support',
            period: 'May 2024 - Sep 2024',
            description: 'Provided technical support for hardware, software, and networking issues across the school. Performed routine system maintenance, software updates, and supported onboarding/offboarding processes.'
          },
          {
            company: 'Ontario Tech University',
            position: 'International Student Leader',
            period: 'May 2023 - Sep 2023',
            description: 'Mentored new international students, facilitated orientation sessions, campus tours, and cultural workshops to promote student engagement and inclusion.'
          },
          {
            company: 'Las Vegas S.A.',
            position: 'Sales Associate',
            period: 'May 2020 - Aug 2020',
            description: 'Highly motivated sales associate with extensive customer service and sales experience. Maintained merchandise presentation to maximize business appeal and revenue.'
          }
        ]
      },
      // Contact Section
      contact: {
        title: "Let's Work Together",
        description: "Ready to bring your ideas to life? Let's discuss your next project.",
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub'
      },
      // Footer
      footer: {
        copyright: '© 2024 Hamzi Farhat. Built with React and passion for innovation.'
      }
    },
    es: {
      // Navigation
      nav: {
        portfolio: 'Portafolio',
        hero: 'inicio',
        about: 'acerca',
        skills: 'habilidades',
        projects: 'proyectos',
        experience: 'experiencia',
        contact: 'contacto'
      },
      // Hero Section
      hero: {
        name: 'Hamzi Farhat',
        title: 'Ingeniero de Software • Desarrollador Full Stack • Diseñador UI/UX',
        description: 'Graduado en Ingeniería de Software apasionado por la IA, el aprendizaje automático y expandiéndome hacia el diseño UI/UX para crear experiencias de usuario hermosas a través del desarrollo web moderno.',
        viewWork: 'Ver Mi Trabajo',
        getInTouch: 'Contactar'
      },
      // About Section
      about: {
        title: 'Acerca de Mí',
        journey: 'Mi Trayectoria',
        paragraph1: 'Soy graduado en Ingeniería de Software de Ontario Tech University con pasión por la inteligencia artificial, el aprendizaje automático y la creación de experiencias de usuario excepcionales. Mi trayectoria en tecnología abarca desde el desarrollo de IA backend hasta el desarrollo frontend, y me estoy expandiendo activamente hacia el diseño UI/UX para construir soluciones integrales que sean tanto poderosas como hermosas.',
        paragraph2: 'Con experiencia en soporte de TI, liderazgo estudiantil y varios proyectos técnicos, aporto tanto experiencia técnica como un interés creciente en principios de diseño a cada desafío. Estoy particularmente interesado en visión por computadora, procesamiento de lenguaje natural y aprendiendo a crear interfaces de usuario intuitivas que hagan la tecnología compleja accesible para todos.',
        location: 'Ubicación',
        locationValue: 'Colón, Panamá',
        status: 'Estado',
        statusValue: 'Graduado en Ingeniería de Software',
        ageLanguages: 'Edad e Idiomas',
        ageLanguagesValue: '22 • Bilingüe (Inglés/Español)',
        experience: 'Experiencia',
        experienceValue: '5+ Años Programando',
        whatIDo: 'Lo Que Hago',
        doList: [
          'Desarrollo de IA y Aprendizaje Automático',
          'Desarrollo Web Full Stack',
          'Diseño UI/UX y Desarrollo Frontend (Aprendiendo)',
          'Diseño de Sistemas Distribuidos'
        ],
        designFocus: 'Enfoque en Diseño y Desarrollo',
        focusList: [
          '🔬 Visión por Computadora e IA',
          '🎨 Diseño UI/UX y Prototipado',
          '💬 Procesamiento de Lenguaje Natural',
          '🌐 Frontend y Diseño Web',
          '🌐 Sistemas Distribuidos',
          '💾 Gestión de Bases de Datos'
        ],
        education: 'Educación',
        ontarioTech: 'Ontario Tech University',
        ontarioTechDegree: 'Licenciatura en Ingeniería en Ingeniería de Software',
        ontarioTechPeriod: '2021 - 2025 (Graduado) | Oshawa, ON',
        caribbeanSchool: 'Caribbean International School',
        caribbeanDegree: 'Licenciatura en Negocios, Ciencias y Artes Liberales',
        caribbeanPeriod: '2008 - 2021 | Colón, Panamá'
      },
      // Skills Section
      skills: {
        title: 'Habilidades y Experiencia',
        skillsList: [
          { name: 'Python', level: 92, category: 'Lenguaje' },
          { name: 'React/Frontend', level: 88, category: 'Frontend' },
          { name: 'Java', level: 90, category: 'Lenguaje' },
          { name: 'Diseño UI/UX', level: 85, category: 'Diseño' },
          { name: 'JavaScript', level: 87, category: 'Lenguaje' },
          { name: 'HTML/CSS', level: 90, category: 'Frontend' }
        ],
        proficiency: 'Competencia',
        downloadResume: 'Descargar CV (PDF)',
        portfolioSummary: 'Resumen del Portafolio'
      },
      // Projects Section
      projects: {
        title: 'Proyectos Destacados',
        projectsList: [
          {
            title: 'IA de Detección de Especies Invasivas',
            description: 'Desarrollé y entrené un modelo de aprendizaje profundo YOLOv5 para detectar especies invasivas en imágenes y videos con alta precisión. Integré técnicas de visión por computadora para clasificación y seguimiento.',
            tech: ['Python', 'YOLOv5', 'React', 'JSON', 'Visión por Computadora'],
            image: '🔬',
            link: 'https://github.com/Kevaunjh/insect-identification',
            demoLink: 'https://drive.google.com/file/d/1ZCuwRPcRJ_LMDN1AFngkyfp3aUcmbX48/view?usp=sharing',
            status: 'Activo'
          },
          {
            title: 'Compañero de Aprendizaje de Idiomas IA',
            description: 'Compañero de aprendizaje de idiomas impulsado por IA usando OpenAI con lecciones interactivas, romanización, traducción y funciones de texto a voz para mayor participación del usuario.',
            tech: ['Python', 'JavaScript', 'React', 'OpenAI', 'HTML/CSS'],
            image: '🗣️',
            link: 'https://github.com/zicopele/ManyLingo',
            demoLink: '#',
            status: 'Activo'
          },
          {
            title: 'Biblioteca Musical Distribuida',
            description: 'Sistema distribuido para gestionar y transmitir archivos de música a través de múltiples nodos usando Java RMI y programación de sockets con replicación de archivos y tolerancia a fallos.',
            tech: ['Java', 'RMI', 'Programación de Sockets', 'P2P'],
            image: '🎵',
            link: 'https://github.com/Kevaunjh/Music_Library_GUI',
            demoLink: '#',
            status: 'Activo'
          }
        ],
        liveDemo: 'Demo en Vivo',
        code: 'Código'
      },
      // Experience Section
      experience: {
        title: 'Experiencia',
        experienceList: [
          {
            company: 'Caribbean International School',
            position: 'Soporte de TI',
            period: 'Mayo 2024 - Sep 2024',
            description: 'Proporcioné soporte técnico para problemas de hardware, software y redes en toda la escuela. Realicé mantenimiento rutinario del sistema, actualizaciones de software y apoyé procesos de incorporación/desvinculación.'
          },
          {
            company: 'Ontario Tech University',
            position: 'Líder de Estudiantes Internacionales',
            period: 'Mayo 2023 - Sep 2023',
            description: 'Mentoré a nuevos estudiantes internacionales, facilité sesiones de orientación, tours del campus y talleres culturales para promover la participación e inclusión estudiantil.'
          },
          {
            company: 'Las Vegas S.A.',
            position: 'Asociado de Ventas',
            period: 'Mayo 2020 - Ago 2020',
            description: 'Asociado de ventas altamente motivado con amplia experiencia en servicio al cliente y ventas. Mantuve la presentación de mercancía para maximizar el atractivo comercial y los ingresos.'
          }
        ]
      },
      // Contact Section
      contact: {
        title: 'Trabajemos Juntos',
        description: '¿Listo para dar vida a tus ideas? Hablemos de tu próximo proyecto.',
        email: 'Correo',
        linkedin: 'LinkedIn',
        github: 'GitHub'
      },
      // Footer
      footer: {
        copyright: '© 2024 Hamzi Farhat. Construido con React y pasión por la innovación.'
      }
    }
  };

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadSummary = () => {
    const portfolioHTML = `
<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <title>Hamzi Farhat ${language === 'en' ? 'Portfolio Summary' : 'Resumen del Portafolio'}</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; margin: 40px; line-height: 1.6; color: #333; }
        h1 { color: #92400e; border-bottom: 2px solid #92400e; padding-bottom: 10px; text-align: center; }
        h2 { color: #92400e; margin-top: 25px; margin-bottom: 15px; }
        .header { text-align: center; margin-bottom: 30px; }
        .contact { margin-bottom: 20px; font-size: 14px; }
        .section { margin-bottom: 25px; }
        .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 15px 0; }
        .skill-item { margin-bottom: 8px; }
        ul { padding-left: 20px; margin: 10px 0; }
        li { margin-bottom: 5px; }
        .project { margin-bottom: 15px; }
        .tech-tags { margin: 5px 0; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <h1>HAMZI FARHAT</h1>
    <div class="header">
        <h3>${t.hero.title}</h3>
        <div class="contact">
            <p><strong>${language === 'en' ? 'Age' : 'Edad'}:</strong> 22 | <strong>${t.about.location}:</strong> ${t.about.locationValue} | <strong>${language === 'en' ? 'Languages' : 'Idiomas'}:</strong> ${language === 'en' ? 'English & Spanish (Bilingual - Completely Fluent)' : 'Inglés y Español (Bilingüe - Completamente Fluido)'}</p>
            <p><strong>${t.contact.email}:</strong> hamziwfarhat@hotmail.com | <strong>GitHub:</strong> @zicopele | <strong>LinkedIn:</strong> /in/hamzi-farhat-bb9011215</p>
        </div>
    </div>
    <!-- Rest of the HTML content would be translated based on current language -->
</body>
</html>`;

    const newWindow = window.open('', '_blank');
    newWindow.document.write(portfolioHTML);
    newWindow.document.close();
    
    setTimeout(() => {
      newWindow.print();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-neutral-800 to-stone-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-neutral-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-stone-200 bg-clip-text text-transparent">
              {t.nav.portfolio}
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-amber-200 ${
                    activeSection === section ? 'text-amber-200' : 'text-neutral-300'
                  }`}
                >
                  {t.nav[section]}
                </button>
              ))}
              
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-amber-700/20 hover:bg-amber-700/30 transition-all duration-300 text-amber-200"
                title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
            </div>

            <div className="md:hidden flex items-center gap-3">
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-700/20 text-amber-200"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs">{language.toUpperCase()}</span>
              </button>
              
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize block px-3 py-2 text-neutral-300 hover:text-amber-200 w-full text-left"
                >
                  {t.nav[section]}
                </button>
              ))}
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
                {t.hero.name}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-300 mb-6 font-medium">
              {t.hero.title}
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              {t.hero.description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-amber-700 to-stone-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-900/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {t.hero.viewWork} <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-600/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {t.hero.getInTouch} <Mail className="w-5 h-5" />
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
              {t.about.title}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-amber-200">{t.about.journey}</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed font-light text-base">
                {t.about.paragraph1}
              </p>
              <p className="text-neutral-300 mb-6 leading-relaxed font-light text-base">
                {t.about.paragraph2}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-stone-900/40 p-4 rounded-lg border border-stone-600/30">
                  <MapPin className="w-6 h-6 text-amber-200 mb-2" />
                  <p className="text-sm text-neutral-400 font-light">{t.about.location}</p>
                  <p className="font-medium text-neutral-200">{t.about.locationValue}</p>
                </div>
                <div className="bg-stone-900/40 p-4 rounded-lg border border-stone-600/30">
                  <GraduationCap className="w-6 h-6 text-amber-200 mb-2" />
                  <p className="text-sm text-neutral-400 font-light">{t.about.status}</p>
                  <p className="font-medium text-neutral-200">{t.about.statusValue}</p>
                </div>
                <div className="bg-stone-900/40 p-4 rounded-lg border border-stone-600/30">
                  <Star className="w-6 h-6 text-amber-200 mb-2" />
                  <p className="text-sm text-neutral-400 font-light">{t.about.ageLanguages}</p>
                  <p className="font-medium text-neutral-200">{t.about.ageLanguagesValue}</p>
                </div>
                <div className="bg-stone-900/40 p-4 rounded-lg border border-stone-600/30">
                  <Target className="w-6 h-6 text-amber-200 mb-2" />
                  <p className="text-sm text-neutral-400 font-light">{t.about.experience}</p>
                  <p className="font-medium text-neutral-200">{t.about.experienceValue}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-amber-200" />
                  {t.about.whatIDo}
                </h4>
                <ul className="space-y-3 text-neutral-300">
                  {t.about.doList.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-200" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-amber-200" />
                  {t.about.designFocus}
                </h4>
                <div className="space-y-3 text-neutral-300 font-light">
                  {t.about.focusList.map((item, index) => (
                    <p key={index} className="text-sm">{item}</p>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30">
                <h4 className="text-xl font-bold text-center mb-4">{t.about.education}</h4>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-200">{t.about.ontarioTech}</h4>
                    <p className="text-sm text-neutral-300 font-light">{t.about.ontarioTechDegree}</p>
                    <p className="text-sm text-neutral-400 font-light">{t.about.ontarioTechPeriod}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-200">{t.about.caribbeanSchool}</h4>
                    <p className="text-sm text-neutral-300 font-light">{t.about.caribbeanDegree}</p>
                    <p className="text-sm text-neutral-400 font-light">{t.about.caribbeanPeriod}</p>
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
              {t.skills.title}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.skills.skillsList.map((skill, index) => (
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
                <span className="text-sm text-neutral-400 font-light">{skill.level}% {t.skills.proficiency}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Hamzi Farhat Resume.pdf"
              download="Hamzi_Farhat_Resume.pdf"
              className="bg-gradient-to-r from-amber-700 to-stone-700 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-900/25 transition-all duration-300 flex items-center justify-center gap-2 mx-auto sm:mx-0 inline-flex"
            >
              <Download className="w-5 h-5" />
              {t.skills.downloadResume}
            </a>
            
            <button
              onClick={handleDownloadSummary}
              className="border border-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-600/10 transition-all duration-300 flex items-center justify-center gap-2 mx-auto sm:mx-0"
            >
              <Download className="w-5 h-5" />
              {t.skills.portfolioSummary}
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-amber-200 to-stone-200 bg-clip-text text-transparent">
              {t.projects.title}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.projectsList.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-stone-800/30 to-neutral-700/30 rounded-xl overflow-hidden border border-stone-600/30 hover:border-amber-600/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{project.image}</div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      project.status === 'Live' || project.status === 'Activo'
                        ? 'bg-green-600/20 text-green-300' 
                        : 'bg-yellow-600/20 text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-neutral-200">{project.title}</h3>
                  <p className="text-neutral-400 mb-4 text-sm font-light leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-amber-700/20 text-amber-300 px-2 py-1 rounded font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => window.open(project.demoLink, '_blank')}
                      className="flex items-center gap-1 text-amber-200 hover:text-amber-100 transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">{t.projects.liveDemo}</span>
                    </button>
                    <button
                      onClick={() => window.open(project.link, '_blank')}
                      className="flex items-center gap-1 text-neutral-400 hover:text-neutral-300 transition-colors font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">{t.projects.code}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-amber-200 to-stone-200 bg-clip-text text-transparent">
              {t.experience.title}
            </span>
          </h2>
          
          <div className="space-y-8">
            {t.experience.experienceList.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-stone-800/30 to-neutral-700/30 p-6 rounded-xl border border-stone-600/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-amber-200">{exp.position}</h3>
                    <h4 className="text-lg text-neutral-300 font-medium">{exp.company}</h4>
                  </div>
                  <span className="text-neutral-400 mt-2 md:mt-0 font-light">{exp.period}</span>
                </div>
                <p className="text-neutral-300 font-light leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-200 to-stone-200 bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light">
            {t.contact.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-stone-800/30 to-neutral-700/30 p-6 rounded-xl border border-stone-600/30">
              <Mail className="w-8 h-8 text-amber-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t.contact.email}</h3>
              <p className="text-neutral-400 font-light">hamziwfarhat@hotmail.com</p>
            </div>
            <div className="bg-gradient-to-br from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30">
              <Linkedin className="w-8 h-8 text-amber-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t.contact.linkedin}</h3>
              <p className="text-neutral-400 font-light">/in/hamzi-farhat-bb9011215</p>
            </div>
            <div className="bg-gradient-to-br from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30">
              <Github className="w-8 h-8 text-amber-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t.contact.github}</h3>
              <p className="text-neutral-400 font-light">@zicopele</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-neutral-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-neutral-400 font-light">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;