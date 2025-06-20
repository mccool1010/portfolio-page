import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Code, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Award,
  Trophy,
  GraduationCap,
  Wrench,
  Shield,
  Brain,
  Globe,
  Database,
  Cpu,
  Eye,
  Lock,
  Palette
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse movement for cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Projects data
  const projects = [
    {
      title: "Cuckoo Sandbox",
      description: "Built a secure sandbox to detect malicious software behaviors and automate malware analysis.",
      tech: ["Security", "Malware Analysis", "Automation"]
    },
    {
      title: "Image Classification Model",
      description: "Designed a CNN to accurately classify images into multiple categories using TensorFlow.",
      tech: ["TensorFlow", "CNN", "Deep Learning"]
    },
    {
      title: "Chatbot with Image Classification",
      description: "Combined NLP and computer vision to develop an interactive chatbot that interprets image inputs.",
      tech: ["NLP", "Computer Vision", "AI"]
    },
    {
      title: "Sign Detection Model",
      description: "Real-time hand sign detection using OpenCV and deep learning to support sign language recognition.",
      tech: ["OpenCV", "Deep Learning", "Real-time Processing"]
    },
    {
      title: "E-Grievance System",
      description: "A full-stack platform allowing students to report grievances, with admin and teacher-level workflows.",
      tech: ["Full-Stack", "Web Development", "Database"]
    },
    {
      title: "Image-Based Food Nutrition Estimator",
      description: "AI system estimating calorie and nutrient content from food images.",
      tech: ["AI", "Computer Vision", "Health Tech"]
    },
    {
      title: "MediHack Healthcare Platform",
      description: "Created a medicine marketplace with direct video/voice chat, patient consent management, and doctor access to records.",
      tech: ["Healthcare", "Real-time Communication", "Full-Stack"]
    },
    {
      title: "Techlift Hackathon - Heart Rate Alert App",
      description: "Built a responsive frontend for a heart rate monitor and real-time alert app.",
      tech: ["React", "Healthcare", "Real-time Monitoring"]
    }
  ];

  // Certifications data
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford & DeepLearning.AI",
      icon: Brain
    },
    {
      title: "Foundations of Machine Learning",
      issuer: "NPTEL",
      icon: Award
    },
    {
      title: "Cisco Packet Tracer Badge",
      issuer: "Cisco Networking Academy",
      icon: Globe
    },
    {
      title: "Network Basics Badge",
      issuer: "Cisco Networking Academy",
      icon: Globe
    }
  ];

  // Hackathons data
  const hackathons = [
    {
      title: "RIBC Hackathon",
      description: "Participated (entry after cut-off)",
      icon: Trophy
    },
    {
      title: "NASA Space Apps Challenge",
      description: "Game development for space-themed challenge",
      icon: Trophy
    },
    {
      title: "MediHack",
      description: "Developed a full-stack telemedicine platform",
      icon: Trophy
    },
    {
      title: "Techlift Hackathon",
      description: "Created frontend for real-time heart rate monitoring and alerts",
      icon: Trophy
    }
  ];

  // Technical skills data with icons
  const technicalSkills = {
    "Programming Languages": [
      { name: "C", icon: Code },
      { name: "Java", icon: Code },
      { name: "Python", icon: Code }
    ],
    "AI & ML": [
      { name: "Supervised Learning", icon: Brain },
      { name: "Deep Learning", icon: Brain },
      { name: "Computer Vision", icon: Eye },
      { name: "Image Classification", icon: Eye }
    ],
    "Cybersecurity": [
      { name: "Malware Analysis", icon: Shield },
      { name: "Ethical Hacking", icon: Lock },
      { name: "Cuckoo Sandbox", icon: Shield }
    ],
    "Web & Tools": [
      { name: "HTML", icon: Globe },
      { name: "CSS", icon: Palette },
      { name: "Flask", icon: Code },
      { name: "Figma", icon: Palette },
      { name: "OpenCV", icon: Eye },
      { name: "TensorFlow", icon: Brain },
      { name: "Scikit-learn", icon: Brain }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Cursor Splash Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-difference filter blur-sm opacity-75 transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(1.5)',
        }}
      ></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hari Krishna
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: User },
                { id: 'skills', label: 'Skills', icon: Wrench },
                { id: 'projects', label: 'Projects', icon: Code },
                { id: 'contact', label: 'Contact', icon: Mail }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm ${
                    activeSection === id
                      ? 'text-blue-400 bg-blue-500/20 shadow-lg shadow-blue-500/25'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: User },
                { id: 'skills', label: 'Skills', icon: Wrench },
                { id: 'projects', label: 'Projects', icon: Code },
                { id: 'contact', label: 'Contact', icon: Mail }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center space-x-2 w-full px-4 py-3 text-left text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center px-4 relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-purple-500/25 backdrop-blur-sm border border-white/10">
              HK
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hello, I'm Hari Krishna
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Full-Stack Developer & AI Enthusiast crafting innovative solutions through code
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
            >
              <span>View My Work</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
          <div className="mt-12 animate-pulse">
            <ChevronDown size={32} className="mx-auto text-gray-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg flex items-center justify-center text-gray-400 backdrop-blur-sm border border-white/10 shadow-2xl">
                <div className="text-center">
                  <User size={64} className="mx-auto mb-4" />
                  <p className="text-sm">Replace with your photo</p>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer and AI enthusiast with a strong background in creating 
                innovative solutions that bridge technology and real-world problems. My journey in tech has 
                led me to explore various domains from cybersecurity to healthcare technology.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in machine learning, computer vision, and web development, I enjoy building 
                applications that make a meaningful impact. My projects range from malware detection systems 
                to healthcare platforms, each designed with user experience and technical excellence in mind.
              </p>

              {/* Education */}
              <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50">
                <div className="flex items-center space-x-3 mb-3">
                  <GraduationCap className="text-blue-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Education</h3>
                </div>
                <div className="text-gray-300">
                  <p className="font-semibold">B.Tech in Computer Science</p>
                  <p className="text-blue-400">LBS College of Engineering, Kasaragod</p>
                  <p className="text-sm text-gray-400">October 2022 - Present</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-900/30 rounded-lg backdrop-blur-sm border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400">8+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-purple-900/30 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400">4+</div>
                  <div className="text-gray-400">Hackathons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h4 className="text-lg font-bold text-blue-400 mb-4">{category}</h4>
                  <div className="space-y-3">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <skill.icon size={16} className="text-gray-400" />
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="group bg-green-900/20 rounded-lg p-6 backdrop-blur-sm border border-green-500/20 hover:border-green-400/50 hover:bg-green-900/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="text-white" size={20} />
                  </div>
                  <h4 className="font-bold text-white mb-2">{cert.title}</h4>
                  <p className="text-green-400 text-sm">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Hackathons & Competitions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {hackathons.map((hackathon, index) => (
                <div key={index} className="group bg-orange-900/20 rounded-lg p-6 backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/50 hover:bg-orange-900/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <hackathon.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">{hackathon.title}</h4>
                      <p className="text-orange-400 text-sm">{hackathon.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Here are some of the exciting projects I've worked on, spanning from AI and machine learning 
              to full-stack web development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative px-6 pb-6">
                  <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                    <span>Learn More</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Let's connect and discuss how we can work together!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="group text-center p-8 bg-blue-900/20 rounded-lg backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-900/30 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <a 
                href="mailto:harikrishnaarun5@gmail.com"
                className="text-blue-400 hover:text-blue-300 break-all transition-colors"
              >
                harikrishnaarun5@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="group text-center p-8 bg-green-900/20 rounded-lg backdrop-blur-sm border border-green-500/20 hover:border-green-400/50 hover:bg-green-900/30 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <a 
                href="tel:+919207499037"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                +91 9207499037
              </a>
            </div>

            {/* LinkedIn */}
            <div className="group text-center p-8 bg-purple-900/20 rounded-lg backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <Linkedin className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/hari-krishna-01378a248"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Connect with me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 py-8 relative">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Hari Krishna. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;