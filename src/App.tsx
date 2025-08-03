import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, ChevronRight, Award, BookOpen, Heart, Calendar, Briefcase, Database, BarChart, Code, Brain, Cloud, Terminal, FileCode, BarChart as ChartBar, Bot } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      title: "Business Analyst Intern",
      company: "Blue Shield of California",
      location: "Long Beach, CA, USA",
      date: "January 2025 - June 2025",
      skills: [
        { name: "Python", icon: Code },
        { name: "SQL", icon: Database },
        { name: "Power BI", icon: BarChart },
        { name: "Tableau", icon: BarChart }
      ],
      description: [
        "Enhanced customer engagement insights by 25% through analysis of call transcripts and customer surveys using NLP and machine learning in Python",
        "Improved operational reporting efficiency by 30% by automating data pipelines using SQL and integrating with PostgreSQL",
        "Increased stakeholder visibility by developing Power BI and Tableau dashboards to monitor KPIs",
        "Streamlined reporting accuracy through Salesforce data integration",
        "Led project teams to deliver business intelligence solutions using statistics and segmentation models"
      ]
    },
    {
      title: "AI Engineer",
      company: "Kramah Software",
      location: "Bengaluru, KA, India",
      date: "July 2023 - December 2023",
      skills: [
        { name: "Python", icon: Code },
        { name: "SQL", icon: Database },
        { name: "Tableau", icon: BarChart },
        { name: "Power BI", icon: BarChart }
      ],
      description: [
        "Decreased research document processing time by 30% using machine learning and NLP models with Python and SQL",
        "Enabled data-driven decisions through predictive analytics dashboards in Tableau and Power BI",
        "Improved reporting efficiency by automating KPI metrics from Salesforce and SQL in an Agile environment"
      ]
    }
  ];

  const projects = [
    {
    title: "Copyright Image Retrieval System",
    role: "Developer / System Architect", // Or relevant role
    date: "May 2025 – Present", // Adjust dates as needed
    location: "Irvine, CA", // Adjust location
    color: "teal", // Choose a new color like 'teal', 'orange', etc.
    skills: ["Python", "Image Processing", "CSV Handling", "Data Matching", "Automation"], // Add specific technologies used
    description: "This project is a Copyright Image Retrieval System designed to automatically match and retrieve copyright registration images based on data from a CSV file containing copyright records. The system addresses the challenge of linking copyright registration numbers to their corresponding image files when the filenames don't directly correspond to the registration data. This system provides a robust, scalable solution for automating the retrieval of copyright registration images based on structured data, significantly reducing manual effort in copyright management workflows."
    },
    {
      title: "Leveraging AI for Strategic Banking Expansion",
      subtitle: "JPMorgan Chase EDGE Project",
      role: "AI Consultant",
      date: "Apr 2025 – Jun 2025",
      location: "Irvine, CA",
      color: "blue",
      skills: ["Python", "SQL", "PostgreSQL", "Tableau", "Power BI", "Machine Learning", "NLP"],
      description: "Conceptualized and led the development of JPX MetaBank, an autonomous, AR/VR-powered digital banking division for JPMorgan Chase designed to serve global customers by 2050. The division reimagines banking as an immersive, AI-native experience aligned with decentralized finance, blockchain infrastructure, and inclusive global access.Led end-to-end strategy development including market analysis, business model design, and financial forecasting (break-even by 2031, $44B revenue by 2045). Crafted a full executive pitch deck, investor narrative, and speaker notes for a simulated Shark Tank-style presentation. Conducted scenario planning and competitive analysis for future trends in DeFi, XR, AI, and tokenized finance."
    },
    {
      title: "Facebook Marketing Strategies",
      role: "Developer",
      date: "Jan 2025 – Mar 2025",
      location: "Irvine, CA",
      color: "purple",
      skills: ["Python", "NetworkX", "LangChain", "Community Detection", "Predictive Modeling", "Social Network Analysis", "Data Visualization"],
      description: "Developed a data-driven framework to enhance influencer identification and audience segmentation on Facebook. Improved targeting accuracy by 30% using predictive modeling and community detection algorithms. Integrated LangChain for enriched analysis of social graphs, enabling more effective, personalized marketing strategies and boosting campaign engagement rates."
    },
    {
      title: "Maserati Marketing via Data Insights",
      role: "Project Manager",
      date: "Oct – Dec 2024",
      location: "Irvine, CA",
      color: "green",
      skills: ["Python", "Machine Learning", "PyTorch", "LangChain", "Predictive Analytics"],
      description: "Increased marketing campaign efficiency by 22% through data-driven optimization and predictive maintenance modeling. Reduced production workflow bottlenecks by 18% using AI-driven improvements and enhanced brand differentiation through strategic partnerships."
    },
    {
      title: "Outfit Recommendation System",
      role: "Data Scientist",
      date: "Jul – Dec 2023",
      location: "Bengaluru, India",
      color: "pink",
      skills: ["Python", "PyTorch", "Neural Networks", "3D Modeling", "NeuMan Dataset"],
      description: "Increased outfit recommendation accuracy to 65.32% by engineering a Neural Collaborative Filtering model. Streamlined model training using the NeuMan Dataset for accurate 3D user models and led cross-functional team collaboration.",
      publication: {
        title: "A deep learning-powered wardrobe companion app for personalized fashion recommendations",
        link: "https://pubs.aip.org/aip/acp/article/3237/1/020010/3337603/A-deep-learning-powered-wardrobe-companion-app-for"
      }
    },
    {
      title: "Job Recommendation Dashboard",
      role: "ML Engineer",
      date: "Jan – Mar 2025",
      location: "Irvine, CA",
      color: "yellow",
      skills: ["Python", "NLP", "ETL", "PostgreSQL", "Tableau", "Power BI"],
      description: "Enhanced recommendation accuracy by 28% using machine learning and NLP for resume parsing. Improved dashboard insights with Tableau and Power BI visualizations, and accelerated data processing efficiency by 35% through SQL-based ETL processes."
    },
    {
      title: "Music Behavior Analysis",
      role: "Statistician",
      date: "Jul – Sep 2024",
      location: "Irvine, CA",
      color: "indigo",
      skills: ["Statistics", "Regression", "Python", "Data Analysis", "PowerPoint"],
      description: "Enhanced insight accuracy by 30% in analyzing music preferences using statistical analysis and linear regression. Led team coordination and delivered actionable insights through engaging presentations, while exploring integration with PyTorch and LangChain."
    },
    {
      title: "Voice Cabinator",
      role: "Data Analyst",
      date: "Jun – Oct 2022",
      location: "Bengaluru, India",
      color: "red",
      skills: ["Python", "NLP", "SQL", "PostgreSQL", "Tableau", "Power BI"],
      description: "Enhanced security for audio-based smart assistants by 30% through Speech Emotion Recognition algorithm implementation. Improved ETL pipeline efficiency by 25% and increased actionable insights through automated workflows and advanced BI reporting."
    },
    {
      title: "Restaurant Revenue Prediction",
      role: "ETL Developer",
      date: "Jan – Mar 2025",
      location: "Irvine, CA",
      color: "blue",
      skills: ["Python", "R Studio", "ETL", "Statistical Analysis", "LangChain"],
      description: "Improved revenue prediction accuracy by 18% through ETL pipelines and statistical models. Delivered actionable insights for restaurant profitability optimization using R Studio and Python, while exploring emerging AI tools for advanced analytics."
    },
    {
      title: "CQB Mission Planning AI",
      role: "AI Engineer",
      date: "Apr 2025 – Present",
      location: "Irvine, CA",
      color: "purple",
      skills: ["Python", "PyTorch", "LangChain", "RAG", "Image Processing"],
      description: "Reduced mission planning time by 50% using AI-powered analysis of blueprints and scenario simulation. Enhanced operator safety through advanced algorithms and implemented continuous improvement through retrieval-augmented generation (RAG)."
    },
    {
      title: "HR Policy Implementation Research",
      role: "Project Manager",
      date: "Apr 2025",
      location: "Irvine, CA",
      color: "green",
      skills: ["Machine Learning", "NLP", "TensorFlow", "PyTorch", "SQL"],
      description: "Enabled data-driven policy decisions using machine learning and NLP to analyze employee feedback. Enhanced collaboration through deep learning models and optimized policy analytics using BI tools for actionable HR insights."
    },
    {
      title: "Marketing via K-Means Clustering",
      role: "Data Analyst",
      date: "Sep – Dec 2024",
      location: "Irvine, CA",
      color: "yellow",
      skills: ["K-Means", "SQL", "Tableau", "Looker", "TensorFlow", "PyTorch"],
      description: "Increased marketing campaign engagement by 25% using K-Means clustering for customer segmentation. Enhanced advertising personalization through large dataset analysis and developed interactive dashboards for marketing metrics visualization."
    },
    {
      title: "Skin Vision - ML Medical Imaging",
      role: "Data Scientist",
      date: "Jun – Nov 2022",
      location: "Bengaluru, India",
      color: "pink",
      skills: ["Python", "PyTorch", "CNN", "Flask", "LangChain"],
      description: "Enhanced model accuracy by 18% through implementation of a feedback loop for misclassified images. Reduced skin disease detection time by 50% using CNN in PyTorch and developed a Flask-based web portal for real-time classification."
    }
  ];

  // Define AI tools data structure
  const aiToolsCategories = [
    {
      title: "AI Scrapping",
      color: "blue-400",
      tools: ['Chat4Data', 'Firecrawl', 'Crawl4AI', 'Gobii', 'NewsAPI', 'SerpApi', 'RapidAPI Scraper', 'Apify']
    },
    {
      title: "Full Stack AI Tools",
      color: "purple-400",
      tools: ['Tilda', 'Superblocks', 'Ciroos AI', 'Emergent.sh', 'Elestio', 'Databutton', 'Base44', 'Stitch', 'Dribbble', 'Supabase', 'SoftGen AI', 'Durable', 'Bubble', 'Lovable.dev', 'Bolt']
    },
    {
      title: "No Code AI Tools",
      color: "green-400",
      tools: ['OneDev', 'agenticSeek', 'Gitdocify', 'Palantir AIP', 'Jules', 'Deepsite', 'Eraser', 'Firebase Studio', 'Trae AI', 'Windsurf Editor', 'Cursor']
    },
    {
      title: "AI Workflows",
      color: "yellow-400",
      tools: ['n8n', 'Hugging Face Agents', 'Make', 'Globant AI Pods', 'MindStudio', 'Cheat Layer', 'Pickaxe', 'Pinecone', 'Beam AI Agentic Workflows', 'Zapier', 'AutoGen', 'LangChain', 'LlamaIndex Agentic Document Workflows', 'CrewAI', 'Model Context Protocol (MCP)']
    },
    {
      title: "LLMs",
      color: "blue-400",
      tools: ['Xavier AI', 'Prompt Genie', 'Corcel', 'Llama', 'Pinokio', 'Ollama', 'Qwen', 'Bolt AI', 'Claude', 'DeepSeek Chat', 'Microsoft Copilot', 'Google Gemini', 'ChatGPT']
    },
    {
      title: "Agentic AI",
      color: "pink-400",
      tools: ['Runner H', 'Surfer H', 'Tester H', 'Agent.ai', 'Spur', 'Fellou', 'GooseAI', 'Ace', 'Operator', 'Suna.so Agents', 'GenSpark Super Agent']
    },
    {
      title: "AI in Research",
      color: "purple-400",
      tools: ['Anara', 'Perplexity AI', 'Grok']
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-gray-100 font-sans">
      {/* Header */}
      <header className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Ani Rajeev
          </h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${
                  activeSection === item 
                    ? 'text-blue-400 font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-left py-2 ${
                    activeSection === item 
                      ? 'text-blue-400 font-medium' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text animate-gradient">
              Business Analyst
            </h1>
            <h2 className="text-4xl md:text-5xl text-gray-300 mb-8">
              & AI Engineer
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Helping bridge the gap between complex data and impactful business insights through ML, NLP and data-driven solutions.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300 mb-12">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-pink-400" />
                <span>San Francisco Bay Area, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-purple-400" />
                <a href="mailto:anirudhrajeev6055@gmail.com" className="hover:text-white transition-colors">
                  anirudhrajeev6055@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-pink-400" />
                <a href="tel:+19497380305" className="hover:text-white transition-colors">
                  +1 (949) 738-0305
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.linkedin.com/in/anirudh-rajeev-608027204/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a 
                href="mailto:anirudhrajeev6055@gmail.com"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
              >
                <Mail size={20} /> Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 border-b border-blue-500 pb-2 inline-block">
              About Me
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a results-oriented AI Engineer with nearly 2 years of experience across analytics, automation, and strategic consulting, with a Master's in Business Analytics from University of California, Irvine, California. 
                I love to make complex data lead to actionable business insights driving improvements in efficiency and predictive intelligence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in machine learning, NLP, and data-driven insights, I'm passionate about solving real-world problems 
                through innovative AI solutions. I thrive in collaborative environments where I can leverage my technical skills 
                and business acumen to deliver tangible results.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed"> 
                I'm looking for opputunities to collaboratively build AI driven solutions that address real world challenges using my knowledge in data science.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Interests & Hobbies</h3>
                <div className="flex flex-wrap gap-3">
                  {['Numismatics', 'Mridangam', 'Music', 'AI', 'Mountain Biking', 'Gym', 'Rock Climbing', 'Travel'].map((interest) => (
                    <span key={interest} className="bg-slate-700/50 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                      <Heart size={16} className="text-pink-400" />
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Tableau A–Z: Data Science Training',
                    'Power BI Desktop',
                    'Mastering AI Tools',
                    'DevOps Associate',
                    'Excel Pro Tips',
                    'Cyber Security & Digital Forensics',
                    'Project Management Foundations',
                    'Azure Workshop',
                    'Ecommerce & Digital Marketing'
                  ].map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <Award size={16} className="text-yellow-400" />
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 border-b border-blue-500 pb-2 inline-block">
              Experience
            </h2>
          
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Briefcase size={20} className="text-blue-400" />
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 text-lg">{exp.company}</p>
                    </div>
                    <div className="text-left md:text-right mt-2 md:mt-0">
                      <p className="text-gray-400">{exp.date}</p>
                      <p className="text-gray-500 flex items-center gap-1 md:justify-end mt-1">
                        <MapPin size={16} />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                
                  <div className="mb-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <skill.icon size={14} className="text-blue-400" />
                        {skill.name}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <ChevronRight size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 border-b border-blue-500 pb-2 inline-block">
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-${project.color}-500/50`}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-blue-400 text-sm mb-2">{project.subtitle}</p>
                    )}
                    <div className="flex flex-col space-y-2 mb-4 text-sm">
                      <div className="flex items-center text-blue-400">
                        <BookOpen size={16} className="mr-2" />
                        <span>{project.role}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    {project.description && (
                      <p className="text-gray-300 mb-4">{project.description}</p>
                    )}
                    {project.skills && (
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, i) => (
                          <span key={i} className="bg-slate-700/50 px-2 py-1 rounded-full text-xs text-gray-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.publication && (
                      <div className="mt-4 pt-4 border-t border-slate-700">
                        <a 
                          href={project.publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm"
                        >
                          <ExternalLink size={16} />
                          View Publication
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 border-b border-blue-500 pb-2 inline-block">
              Publications
            </h2>
            
            <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">
                A deep learning-powered wardrobe companion app for personalized fashion recommendations
              </h3>
              <p className="text-gray-300 mb-4">
                Published research on an innovative outfit recommendation system using Neural Collaborative Filtering,
                achieving 65.32% accuracy in personalized fashion recommendations. The paper details the implementation
                of advanced deep learning techniques and the integration of the NeuMan Dataset for 3D user modeling.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://pubs.aip.org/aip/acp/article/3237/1/020010/3337603/A-deep-learning-powered-wardrobe-companion-app-for"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
                >
                  <ExternalLink size={16} />
                  Read Publication
                </a>
                <span className="text-gray-400">AIP Conference Proceedings</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 border-b border-blue-500 pb-2 inline-block">
              Tech Stack
            </h2>
            {/* Main grid for initial skill categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Languages & Tools */}
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Languages & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Python', 'R', 'SQL', 'JavaScript', 'HTML', 'CSS', 'C++', 'C#', 'Arduino', 'Airflow', 'MySQL', 'Apache Hive', 'NoSQL', 'Linux',
                    'PostgreSQL', 'ETL', 'Statistics', 'Regression', 'PowerPoint', '3D Modeling', 'NeuMan Dataset', 'CNN', 'Flask', 'Networks', 'R Studio', 'Statistical Analysis', 'Data Analysis'
                  ].map((skill) => (
                    <span key={skill} className="bg-slate-700 text-gray-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Frameworks & Libraries */}
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'PyTorch', 'LangChain', 'HuggingFace', 'TensorFlow', 'Flask', 'RAG', 'K-Means', 'Neural Networks', 'Predictive Modeling', 'Machine Learning', 'NLP'
                  ].map((skill) => (
                    <span key={skill} className="bg-slate-700 text-gray-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Visualization */}
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Visualization</h3>
                <div className="flex flex-wrap gap-3">
                  {['Power BI', 'Tableau', 'Looker'].map((skill) => (
                    <span key={skill} className="bg-slate-700 text-gray-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Cloud & DevOps */}
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-3">
                  {['Azure', 'DevOps', 'Zapier', 'Make', 'n8n', 'Microsoft AutoGen', 'LlamaIndex', 'Pinecone', 'Supabase'].map((skill) => (
                    <span key={skill} className="bg-slate-700 text-gray-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* AI Section - This is now structured using a map from aiToolsCategories */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">AI Tools & Platforms</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiToolsCategories.map((category) => (
                  <div key={category.title} className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className={`text-lg font-bold mb-3 ${
                      category.color === 'blue-400' ? 'text-blue-400' :
                      category.color === 'purple-400' ? 'text-purple-400' :
                      category.color === 'green-400' ? 'text-green-400' :
                      category.color === 'yellow-400' ? 'text-yellow-400' :
                      category.color === 'pink-400' ? 'text-pink-400' :
                      'text-gray-300'
                    }`}>
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool) => (
                        <span key={tool} className="bg-slate-700/70 text-gray-200 px-2 py-1 rounded-full text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 border-b border-blue-500 pb-2 inline-block">
              Education
            </h2>
            
            <div className="space-y-8">
              {/* Education 1 */}
              <div className="bg-slate-800/50 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">MS in Business Analytics</h3>
                    <p className="text-blue-400">UC Irvine</p>
                    <p className="text-gray-400 mt-1">GPA: 3.5</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">2023 – 2025</span>
                </div>
                <p className="text-gray-300">
                  <span className="font-medium">Key Courses:</span> NLP, Predictive/Prescriptive Analytics, Machine Learning, Marketing Analytics, Social Analytics, Technical Consulting
                </p>
              </div>
              
              {/* Education 2 */}
              <div className="bg-slate-800/50 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">BS in Data Science</h3>
                    <p className="text-purple-400">Jain University</p>
                    <p className="text-gray-400 mt-1">GPA: 3.6</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">2020 – 2024</span>
                </div>
                <p className="text-gray-300">
                  <span className="font-medium">Key Courses:</span> Python, C++, SQL, NoSQL, Hadoop, Apache, Data Structures, Algorithms, HTML, CSS, Networks, Linux
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 border-b border-blue-500 pb-2 inline-block">
              Contact Me
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="mailto:anirudhrajeev6055@gmail.com" 
                className="bg-slate-800 hover:bg-slate-700 rounded-lg p-6 flex items-center gap-4 transition-all"
              >
                <Mail size={24} className="text-blue-400" />
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-gray-300">anirudhrajeev6055@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+19497380305" 
                className="bg-slate-800 hover:bg-slate-700 rounded-lg p-6 flex items-center gap-4 transition-all"
              >
                <Phone size={24} className="text-purple-400" />
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="text-gray-300">+1 (949) 738-0305</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/anirudh-rajeev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 rounded-lg p-6 flex items-center gap-4 transition-all"
              >
                <Linkedin size={24} className="text-blue-400" />
                <div>
                  <h3 className="text-lg font-medium text-white">LinkedIn</h3>
                  <p className="text-gray-300">linkedin.com/in/anirudh-rajeev</p>
                </div>
              </a>
              
              <div className="bg-slate-800 rounded-lg p-6 flex items-center gap-4">
                <MapPin size={24} className="text-green-400" />
                <div>
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="text-gray-300">San Francisco Bay Area</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Built with <span className="text-red-400">❤</span> by Anirudh Rajeev © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
