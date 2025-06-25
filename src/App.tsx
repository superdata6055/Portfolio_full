import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Instagram, ExternalLink, Calendar, User, Briefcase, GraduationCap, Award, Code, Database, Palette, Smartphone, Globe, Server, Brain, BarChart, Wrench, Shield, MessageSquare, Users, Target, Lightbulb, TrendingUp, Search, Cpu, Zap, Settings, Book, Rocket, Star, Heart, Coffee, Music, Camera, Gamepad2 } from 'lucide-react';

// Force reference to prevent tree-shaking
const AI_CONTENT_FORCE = "AI Scrapping";
console.log("AI Content loaded:", AI_CONTENT_FORCE);

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      title: "Senior Data Analyst",
      company: "Deloitte",
      period: "2022 - Present",
      description: "Led data analytics initiatives for Fortune 500 clients, implementing advanced ML models and creating strategic insights that drove business decisions.",
      achievements: [
        "Increased client efficiency by 35% through automated reporting solutions",
        "Developed predictive models with 92% accuracy for demand forecasting",
        "Managed cross-functional teams of 8+ analysts across multiple projects"
      ]
    },
    {
      title: "Data Scientist",
      company: "TechCorp Solutions",
      period: "2020 - 2022",
      description: "Specialized in machine learning model development and deployment, focusing on customer behavior analysis and recommendation systems.",
      achievements: [
        "Built recommendation engine that increased user engagement by 28%",
        "Deployed ML models serving 1M+ daily users with 99.9% uptime",
        "Reduced customer churn by 22% through predictive analytics"
      ]
    },
    {
      title: "Junior Data Analyst",
      company: "DataInsights Inc",
      period: "2019 - 2020",
      description: "Analyzed large datasets to identify trends and patterns, created visualizations and reports for stakeholders.",
      achievements: [
        "Automated reporting processes, saving 15 hours per week",
        "Identified key business insights that led to $2M cost savings",
        "Developed interactive dashboards used by 50+ team members"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Stanford University",
      period: "2017 - 2019",
      gpa: "3.8/4.0",
      coursework: ["Machine Learning", "Statistical Analysis", "Big Data Analytics", "Data Visualization"]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      period: "2013 - 2017",
      gpa: "3.6/4.0",
      coursework: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2022",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "Certified Data Scientist",
      issuer: "Data Science Council of America",
      date: "2021",
      icon: <Award className="w-5 h-5" />
    }
  ];

  // Define skills with forced AI content
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "R", "SQL", "JavaScript", "Scala", "Java"]
    },
    {
      title: "Data & Analytics",
      icon: <Database className="w-6 h-6" />,
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Apache Spark"]
    },
    {
      title: "Visualization",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Tableau", "Power BI", "D3.js", "Plotly", "Matplotlib", "Seaborn"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Globe className="w-6 h-6" />,
      skills: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Git"]
    },
    {
      title: "AI",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "AI Scrapping", "Neural Networks"]
    },
    {
      title: "Business Intelligence",
      icon: <BarChart className="w-6 h-6" />,
      skills: ["Statistical Analysis", "A/B Testing", "Predictive Modeling", "Data Mining", "ETL", "KPI Development"]
    }
  ];

  const projects = [
    {
      title: "E-commerce Recommendation Engine",
      description: "Built a sophisticated recommendation system using collaborative filtering and deep learning techniques, improving user engagement and sales conversion rates.",
      technologies: ["Python", "TensorFlow", "AWS", "Redis", "PostgreSQL"],
      achievements: [
        "Increased click-through rates by 35%",
        "Boosted average order value by 22%",
        "Serving 2M+ recommendations daily"
      ],
      link: "#"
    },
    {
      title: "Customer Churn Prediction Model",
      description: "Developed a machine learning model to predict customer churn with high accuracy, enabling proactive retention strategies.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Tableau", "SQL"],
      achievements: [
        "Achieved 94% prediction accuracy",
        "Reduced churn rate by 18%",
        "Saved $1.2M in potential lost revenue"
      ],
      link: "#"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Created an interactive dashboard for real-time business metrics monitoring with automated alerts and insights.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
      achievements: [
        "Real-time data processing for 100K+ events/hour",
        "Reduced response time to critical issues by 60%",
        "Used by 200+ stakeholders daily"
      ],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Anirudh Patel
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['about', 'experience', 'education', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item 
                      ? 'text-purple-400' 
                      : 'text-white hover:text-purple-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ChevronDown className={`w-6 h-6 transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {['about', 'experience', 'education', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left py-2 capitalize transition-colors duration-200 ${
                    activeSection === item 
                      ? 'text-purple-400' 
                      : 'text-white hover:text-purple-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Data
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Scientist
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With nearly 2 years of experience across analytics, automation, and strategic consulting. My work bridges 
                <span className="text-purple-400"> technical expertise</span> with 
                <span className="text-pink-400"> business acumen</span>, delivering 
                NLP, and data-driven insights, I'm passionate about solving real-world problems through innovative AI solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                  Get In Touch
                </a>
                <a href="#projects" className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
                  View Projects
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                  <User className="w-32 h-32 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
            <p className="text-gray-400 text-lg">My professional journey in data science and analytics</p>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-purple-400 text-lg font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-5 h-5 mr-2" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <p className="text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
            <p className="text-gray-400 text-lg">Academic foundation and professional credentials</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-start mb-4">
                  <GraduationCap className="w-8 h-8 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-purple-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-400">{edu.period}</p>
                    <p className="text-gray-300 mt-2">GPA: {edu.gpa}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-400 mb-2">Key Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span key={idx} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 text-center">
                <div className="text-purple-400 mb-4 flex justify-center">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-purple-400 font-medium">{cert.issuer}</p>
                <p className="text-gray-400">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Tech Stack</h2>
            <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-purple-400 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-gray-300">{skill}</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                          style={{ width: `${85 + Math.random() * 15}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">Showcasing impactful data science solutions</p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <p className="text-gray-300 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg">Let's discuss how we can work together</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">anirudh.patel@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-400">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium text-white mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-pink-400 hover:bg-pink-400 hover:text-white transition-all duration-300">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 Anirudh Patel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;