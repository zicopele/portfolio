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

  const skills = [
    { name: 'Python', level: 92, category: 'Language' },
    { name: 'React/Frontend', level: 88, category: 'Frontend' },
    { name: 'Java', level: 90, category: 'Language' },
    { name: 'UI/UX Design', level: 85, category: 'Design' },
    { name: 'JavaScript', level: 87, category: 'Language' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' }
  ];

  const projects = [
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
  ];

  const experiences = [
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
    const portfolioHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hamzi Farhat Portfolio Summary</title>
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
        <h3>Software Engineer | Full Stack Developer | Aspiring UI/UX Designer</h3>
        <div class="contact">
            <p><strong>Age:</strong> 22 | <strong>Location:</strong> Colón, Panama | <strong>Languages:</strong> English & Spanish (Bilingual - Completely Fluent)</p>
            <p><strong>Email:</strong> hamziwfarhat@hotmail.com | <strong>GitHub:</strong> @zicopele | <strong>LinkedIn:</strong> /in/hamzi-farhat-bb9011215</p>
        </div>
    </div>

    <h2>PROFESSIONAL PROFILE</h2>
    <div class="section">
        <p>Software Engineering graduate from Ontario Tech University with expertise in AI/ML development, full-stack web development, and growing interest in UI/UX design. Bilingual professional fluent in both English and Spanish, with experience in technical support, student leadership, and innovative software projects.</p>
    </div>

    <h2>CORE COMPETENCIES</h2>
    <div class="section">
        <div class="skills-grid">
            <div>
                <h3>Technical Skills</h3>
                <div class="skill-item">• AI & Machine Learning Development</div>
                <div class="skill-item">• Full Stack Web Development</div>
                <div class="skill-item">• UI/UX Design & Frontend Development</div>
                <div class="skill-item">• Distributed Systems Design</div>
            </div>
            <div>
                <h3>Programming Languages</h3>
                <div class="skill-item">• Python (92% Proficiency)</div>
                <div class="skill-item">• Java (90% Proficiency)</div>
                <div class="skill-item">• JavaScript (87% Proficiency)</div>
                <div class="skill-item">• HTML/CSS (90% Proficiency)</div>
            </div>
        </div>
    </div>

    <h2>TECHNICAL TOOLKIT</h2>
    <div class="section">
        <p><strong>Languages:</strong> Python, Java, JavaScript, HTML, CSS, SQL, C/C++</p>
        <p><strong>Frameworks & Libraries:</strong> React, Node.js, YOLOv5, OpenAI API</p>
        <p><strong>Tools & Technologies:</strong> Git, VS Code, IntelliJ IDEA, Ubuntu, MongoDB, RMI, Socket Programming</p>
    </div>

    <h2>FEATURED PROJECTS</h2>
    <div class="section">
        <div class="project">
            <h3>1. Invasive Species Detection AI</h3>
            <p>YOLOv5 deep learning model for high-accuracy species detection in images and video feeds with computer vision integration for classification and tracking.</p>
            <div class="tech-tags">Technologies: Python, YOLOv5, React, JSON, Computer Vision</div>
            <p><strong>Demo:</strong> https://drive.google.com/file/d/1ZCuwRPcRJ_LMDN1AFngkyfp3aUcmbX48/view</p>
            <p><strong>Code:</strong> https://github.com/Kevaunjh/insect-identification</p>
        </div>

        <div class="project">
            <h3>2. Language Learning Companion AI</h3>
            <p>OpenAI-powered interactive learning platform with romanization, translation, and text-to-speech functions for enhanced user engagement.</p>
            <div class="tech-tags">Technologies: Python, JavaScript, React, OpenAI, HTML/CSS</div>
            <p><strong>Code:</strong> https://github.com/zicopele/ManyLingo</p>
        </div>

        <div class="project">
            <h3>3. Distributed Music Library System</h3>
            <p>Java RMI distributed system for managing and streaming music files across multiple nodes with file replication and fault tolerance.</p>
            <div class="tech-tags">Technologies: Java, RMI, Socket Programming, P2P</div>
            <p><strong>Code:</strong> https://github.com/Kevaunjh/Music_Library_GUI</p>
        </div>
    </div>

    <h2>PROFESSIONAL EXPERIENCE</h2>
    <div class="section">
        <div class="project">
            <h3>IT Support | Caribbean International School</h3>
            <p><em>May 2024 - September 2024 | Margarita, Colón</em></p>
            <ul>
                <li>Provided comprehensive technical support for hardware, software, and networking issues</li>
                <li>Performed routine system maintenance, software updates, and security patch installations</li>
                <li>Supported onboarding/offboarding processes including account creation and hardware setup</li>
            </ul>
        </div>

        <div class="project">
            <h3>International Student Leader | Ontario Tech University</h3>
            <p><em>May 2023 - September 2023 | Oshawa, ON</em></p>
            <ul>
                <li>Mentored new international students and facilitated their transition into university life</li>
                <li>Organized orientation sessions, campus tours, and cultural workshops</li>
                <li>Promoted student engagement and inclusion within the university community</li>
            </ul>
        </div>
    </div>

    <h2>EDUCATION</h2>
    <div class="section">
        <div class="project">
            <h3>Bachelor of Engineering in Software Engineering</h3>
            <p><strong>Ontario Tech University</strong> | 2021 - 2025 (Graduated) | Oshawa, ON</p>
        </div>
        <div class="project">
            <h3>Bilingual Bachelor in Science and Humanities & Bilingual Certification in Commerce</h3>
            <p><strong>Caribbean International School</strong> | 2008 - 2021 | Colón, Panama</p>
        </div>
    </div>

    <h2>KEY DIFFERENTIATORS</h2>
    <div class="section">
        <ul>
            <li><strong>Bilingual Expertise:</strong> Complete fluency in English and Spanish - valuable for international projects and diverse team environments</li>
            <li><strong>Cross-Cultural Experience:</strong> Education and work experience across Panama and Canada</li>
            <li><strong>Technical Leadership:</strong> Student leadership experience combined with strong technical foundation</li>
            <li><strong>Emerging Design Interest:</strong> Actively expanding into UI/UX design to complement technical skills</li>
        </ul>
    </div>

    <h2>CAREER OBJECTIVE</h2>
    <div class="section">
        <p>Seeking opportunities to leverage expertise in AI/ML and full-stack development while expanding into UI/UX design roles. Ready to contribute to innovative technology projects in multilingual, international environments and grow into design-focused positions that combine technical proficiency with user-centered thinking.</p>
    </div>
</body>
</html>`;

    // Create a new window and write the HTML content
    const newWindow = window.open('', '_blank');
    newWindow.document.write(portfolioHTML);
    newWindow.document.close();
    
    // Automatically trigger print dialog (user can save as PDF)
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
              Portfolio
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-amber-200 ${
                    activeSection === section ? 'text-amber-200' : 'text-neutral-300'
                  }`}
                >
                  {section}
                </button>
              ))}
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
              {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize block px-3 py-2 text-neutral-300 hover:text-amber-200 w-full text-left"
                >
                  {section}
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
                Hamzi Farhat
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-300 mb-6 font-medium">
              Software Engineer • Full Stack Developer • Aspiring UI/UX Designer
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Software Engineering graduate passionate about AI, machine learning, and expanding into 
              UI/UX design to create beautiful user experiences through modern web development.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-amber-700 to-stone-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-900/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View My Work <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-600/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get In Touch <Mail className="w-5 h-5" />
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
              About Me
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-amber-200">My Journey</h3>
              <p className="text-neutral-300 mb-6 leading-relaxed font-light text-base">
                I'm a Software Engineering graduate from Ontario Tech University with a passion for 
                artificial intelligence, machine learning, and creating exceptional user experiences. My journey 
                in technology spans from backend AI development to frontend development, and I'm actively expanding 
                into UI/UX design to build comprehensive solutions that are both powerful and beautiful.
              </p>
              <p className="text-neutral-300 mb-6 leading-relaxed font-light text-base">
                With experience in IT support, student leadership, and various technical projects, I bring both 
                technical expertise and a growing interest in design principles to every challenge. I'm particularly 
                interested in computer vision, natural language processing, and learning to craft intuitive user 
                interfaces that make complex technology accessible to everyone.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-stone-900/40 p-4 rounded-lg border border-stone-600/30">
                  <MapPin className="w-6 h-6 text-amber-200 mb-2" />
                  <p className="text-sm text-neutral-400 font-light">Location</p>
                  <p className="font-medium text-neutral-200">Colón, Panama</p>
                </div>
                <div className="bg-stone-900/40 p-4 rounded-lg border border-stone-600/30">
                  <GraduationCap className="w-6 h-6 text-amber-200 mb-2" />
                  <p className="text-sm text-neutral-400 font-light">Status</p>
                  <p className="font-medium text-neutral-200">Software Engineering Graduate</p>
                </div>
                <div className="bg-stone-900/40 p-4 rounded-lg border border-stone-600/30">
                  <Star className="w-6 h-6 text-amber-200 mb-2" />
                  <p className="text-sm text-neutral-400 font-light">Age & Languages</p>
                  <p className="font-medium text-neutral-200">22 • Bilingual (English/Spanish)</p>
                </div>
                <div className="bg-stone-900/40 p-4 rounded-lg border border-stone-600/30">
                  <Target className="w-6 h-6 text-amber-200 mb-2" />
                  <p className="text-sm text-neutral-400 font-light">Experience</p>
                  <p className="font-medium text-neutral-200">5+ Years Coding</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-amber-200" />
                  What I Do
                </h4>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-200" />
                    <span className="font-light">AI & Machine Learning Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-200" />
                    <span className="font-light">Full Stack Web Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-200" />
                    <span className="font-light">UI/UX Design & Frontend Development (Learning)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-200" />
                    <span className="font-light">Distributed Systems Design</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-amber-200" />
                  Design & Development Focus
                </h4>
                <div className="space-y-3 text-neutral-300 font-light">
                  <p className="text-sm">🔬 Computer Vision & AI</p>
                  <p className="text-sm">🎨 UI/UX Design & Prototyping</p>
                  <p className="text-sm">💬 Natural Language Processing</p>
                  <p className="text-sm">🌐 Frontend & Web Design</p>
                  <p className="text-sm">🌐 Distributed Systems</p>
                  <p className="text-sm">💾 Database Management</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-stone-800/40 to-neutral-700/40 p-6 rounded-xl border border-stone-600/30">
                <h4 className="text-xl font-bold text-center mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-200">Ontario Tech University</h4>
                    <p className="text-sm text-neutral-300 font-light">Bachelor of Engineering in Software Engineering</p>
                    <p className="text-sm text-neutral-400 font-light">2021 - 2025 (Graduated) | Oshawa, ON</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-200">Caribbean International School</h4>
                    <p className="text-sm text-neutral-300 font-light">Bilingual Bachelor in Science and Humanities</p>
                    <p className="text-sm text-neutral-300 font-light">Bilingual Certification in Commerce</p>
                    <p className="text-sm text-neutral-400 font-light">2008 - 2021 | Colón, Panama</p>
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
              Skills & Expertise
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
                <span className="text-sm text-neutral-400 font-light">{skill.level}% Proficiency</span>
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
              Download Resume (PDF)
            </a>
            
            <button
              onClick={handleDownloadSummary}
              className="border border-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-600/10 transition-all duration-300 flex items-center justify-center gap-2 mx-auto sm:mx-0"
            >
              <Download className="w-5 h-5" />
              Portfolio Summary
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-amber-200 to-stone-200 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-stone-800/30 to-neutral-700/30 rounded-xl overflow-hidden border border-stone-600/30 hover:border-amber-600/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{project.image}</div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      project.status === 'Live' 
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
                      <span className="text-sm">Live Demo</span>
                    </button>
                    <button
                      onClick={() => window.open(project.link, '_blank')}
                      className="flex items-center gap-1 text-neutral-400 hover:text-neutral-300 transition-colors font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
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
              Experience
            </span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
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
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-stone-800/30 to-neutral-700/30 p-6 rounded-xl border border-stone-600/30">
              <Mail className="w-8 h-8 text-amber-200 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
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
            © 2024 Hamzi Farhat. Built with React and passion for innovation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;