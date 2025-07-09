import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Globe, Users, TrendingUp, Calendar, Award, MapPin, Mail, Phone, Linkedin, MessageCircle, Star, ArrowRight, CheckCircle, Play, ExternalLink, Building, Shield, Zap, Target, Menu, X } from 'lucide-react';

const BRICSHomepage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [countersStarted, setCountersStarted] = useState(false);

  const colors = {
    primary: '#353535',
    accent: '#FF7824', 
    secondary: '#E9DC61',
    tertiary: '#62AAF1',
    white: '#FFFFFF'
  };

  const heroSlides = [
    {
      title: "Connecting Opportunity, Trade & Trust Across BRICS+ Nations",
      subtitle: "A global business networking and diplomatic alliance fostering collaboration between entrepreneurs, investors, and institutions across BRICS and the Global South.",
      highlight: "40% of Global GDP • 3.2B Population • $23T+ Combined Economy",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Shaping the Future of Multipolar Commerce",
      subtitle: "Where diplomatic relationships meet entrepreneurial innovation across emerging economies driving the next wave of global prosperity.",
      highlight: "South-South Cooperation • Digital Sovereignty • Sustainable Growth",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  const stats = [
    { number: 45, label: "Partner Countries", icon: Globe, suffix: "+" },
    { number: 12000, label: "Active Members", icon: Users, suffix: "+" },
    { number: 2.8, label: "Facilitated Trade Volume", icon: TrendingUp, suffix: "B USD" },
    { number: 200, label: "Annual Events", icon: Calendar, suffix: "+" }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      title: "CEO, Mumbai FinTech Solutions",
      country: "India",
      text: "Through BRICS+ Alliance, we secured $15M Series B funding and expanded to 4 new markets. The diplomatic connections opened doors we never imagined.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Ahmed Al-Rashid", 
      title: "Managing Director, Gulf-Africa Trade Corp",
      country: "UAE",
      text: "The regulatory support and government introductions helped us navigate complex compliance across 12 countries. Invaluable for international expansion.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Maria Santos",
      title: "Founder, SustainTech Brazil",
      country: "Brazil", 
      text: "From a small startup to a $50M renewable energy company - the BRICS+ network provided both capital and strategic partnerships that made it possible.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const sectors = [
    {
      title: "Infrastructure & Energy",
      description: "Connecting mega-projects across continents with sustainable energy solutions and smart city initiatives.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "$1.2T Pipeline",
      opportunities: ["Renewable energy corridors", "Smart cities development", "Cross-border connectivity", "Green infrastructure bonds"],
      growth: "+23%"
    },
    {
      title: "Fintech & Digital Innovation", 
      description: "Pioneering financial inclusion and digital payment ecosystems across emerging markets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "500M+ Users",
      opportunities: ["Central bank digital currencies", "Cross-border payments", "Financial inclusion tech", "Blockchain infrastructure"],
      growth: "+45%"
    },
    {
      title: "Healthcare & Life Sciences",
      description: "Advancing accessible healthcare through innovation, manufacturing, and regulatory collaboration.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "$300B Market",
      opportunities: ["Generic pharmaceuticals", "Medical device manufacturing", "Health tech solutions", "Regulatory harmonization"],
      growth: "+18%"
    },
    {
      title: "Manufacturing & Export",
      description: "Building resilient supply chains and promoting value-added manufacturing across BRICS+ nations.",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "$2.1T Volume",
      opportunities: ["Supply chain diversification", "Technology transfer", "Export facilitation", "Industrial cooperation"],
      growth: "+12%"
    }
  ];

  const upcomingEvents = [
    {
      title: "BRICS+ Global Business Summit 2025",
      date: "March 15-17, 2025",
      location: "New Delhi, India",
      type: "Summit",
      description: "The flagship annual gathering bringing together 2,000+ business leaders, policymakers, and investors from across BRICS+ nations.",
      attendees: "2,000+ delegates",
      featured: ["50+ Government Ministers", "200+ Fortune 500 CEOs", "1000+ Investment Opportunities"],
      price: "Early Bird: $1,200"
    },
    {
      title: "Africa-Asia Trade Corridor Forum",
      date: "February 8-9, 2025", 
      location: "Cape Town, South Africa",
      type: "Trade Mission",
      description: "Exploring new trade routes and investment opportunities between African and Asian markets with dedicated B2B sessions.",
      attendees: "500+ participants",
      featured: ["Direct Government Access", "Bilateral Trade Agreements", "Infrastructure Partnerships"],
      price: "Member Rate: $800"
    },
    {
      title: "Digital Finance & Blockchain Symposium",
      date: "January 25, 2025",
      location: "Virtual Event", 
      type: "Digital Forum",
      description: "Shaping the future of cross-border payments and digital currencies in emerging economies.",
      attendees: "1,000+ online",
      featured: ["Central Bank Governors", "Fintech Unicorns", "Regulatory Frameworks"],
      price: "Free for Members"
    }
  ];

  const partnerLogos = [
    "World Bank Group", "Asian Development Bank", "African Development Bank", 
    "BRICS Development Bank", "Export-Import Bank", "Confederation of Indian Industry",
    "Brazil Chamber of Commerce", "Russia Chamber of Commerce", "China Council for Trade"
  ];

  const achievements = [
    { icon: Building, title: "500+ Companies Established", desc: "Across BRICS+ markets" },
    { icon: Shield, title: "95% Compliance Success", desc: "Regulatory approval rate" },
    { icon: Zap, title: "72 Hours Avg", desc: "Government introduction time" },
    { icon: Target, title: "$50M+ Avg Deal Size", desc: "Facilitated investments" }
  ];

  // Animated counter hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!countersStarted) return;
      
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration, countersStarted]);
    
    return count;
  };

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            
            // Start counters when stats section is visible
            if (entry.target.id === 'stats-section') {
              setCountersStarted(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Auto-slide hero
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Animated counter components
  const AnimatedCounter = ({ end, suffix }) => {
    const count = useCounter(end);
    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Premium Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B+</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse" 
                     style={{ backgroundColor: colors.accent }}></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  BRICS+ Business Alliance
                </h1>
                <p className="text-xs text-gray-500 font-medium tracking-wide">
                  GLOBAL TRADE • DIPLOMATIC NETWORKS • STRATEGIC PARTNERSHIPS
                </p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {['About', 'Our Work', 'Membership', 'Ambassador', 'Events', 'Sectors', 'Partners', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} 
                   className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-semibold relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="px-6 py-2 rounded-full font-semibold transition-all hover:scale-105 shadow-md"
                      style={{ backgroundColor: colors.accent, color: colors.white }}>
                Join Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              {['About', 'Our Work', 'Membership', 'Ambassador', 'Events', 'Sectors', 'Partners', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} 
                   className="block text-gray-700 hover:text-orange-500 font-semibold py-2">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
            style={{ 
              backgroundImage: `url(${heroSlides[activeSlide].image})`,
              transform: `scale(1.05) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          ></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 z-5">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="text-sm font-medium text-white">🌍 Representing {heroSlides[activeSlide].highlight}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              {heroSlides[activeSlide].title}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            {heroSlides[activeSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              className="group px-10 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105 shadow-2xl flex items-center space-x-3"
              style={{ backgroundColor: colors.accent, color: colors.white }}
            >
              <span>Join the Network</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button 
              className="px-10 py-4 text-lg font-semibold rounded-full border-2 transition-all hover:scale-105 backdrop-blur-md bg-white/10"
              style={{ borderColor: colors.secondary, color: colors.secondary }}
            >
              Become Ambassador
            </button>
            <button 
              className="px-10 py-4 text-lg font-semibold rounded-full border-2 transition-all hover:scale-105 backdrop-blur-md bg-white/10"
              style={{ borderColor: colors.tertiary, color: colors.tertiary }}
            >
              Next Business Meet
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">45+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$23T+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Combined GDP</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">3.2B</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Population</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">40%</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Global GDP</div>
            </div>
          </div>
        </div>

        {/* Enhanced slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`relative w-12 h-1 rounded-full transition-all duration-300 ${
                activeSlide === index ? 'bg-white' : 'bg-white/30'
              }`}
            >
              {activeSlide === index && (
                <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 z-20">
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm rotate-90 whitespace-nowrap">Scroll Down</span>
            <div className="w-px h-12 bg-white/30 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section id="stats-section" className="py-24 relative overflow-hidden" style={{ backgroundColor: colors.primary }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Driving Global Impact Through Strategic Partnerships
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our network spans continents, connecting leaders who are shaping the future of international commerce
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center transform transition-all duration-700 ${
                isVisible['stats-section'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                    <stat.icon className="w-10 h-10" style={{ color: colors.accent }} />
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-3">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Achievement highlights */}
          <div className="mt-20 grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <achievement.icon className="w-8 h-8 mb-4" style={{ color: colors.accent }} />
                <h3 className="text-white font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-full -translate-y-48 translate-x-48 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-6">
              🌟 About Our Mission
            </div>
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Bridging Nations, Building Futures
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At the intersection of diplomacy and commerce, we create unprecedented opportunities 
              for sustainable growth across the world's most dynamic emerging economies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: colors.accent + '20' }}>
                    <Target className="w-6 h-6" style={{ color: colors.accent }} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: colors.accent }}>Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To create the world's most trusted BRICS+ business networking platform, where entrepreneurs, 
                  institutions, and governments converge to shape a cooperative, multipolar global economy that 
                  prioritizes sustainable development, economic sovereignty, and mutual prosperity.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: colors.tertiary + '20' }}>
                    <Zap className="w-6 h-6" style={{ color: colors.tertiary }} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: colors.tertiary }}>Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We empower businesses and leaders from BRICS+ nations to connect, collaborate, and grow through 
                  curated networking, trade facilitation, regulatory support, and strategic partnerships that 
                  transcend traditional barriers and foster South-South cooperation.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="BRICS+ Vision" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-2xl flex items-center justify-center shadow-xl"
                   style={{ backgroundColor: colors.secondary }}>
                <Award className="w-16 h-16" style={{ color: colors.primary }} />
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-8 -left-8 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                <div className="text-2xl font-bold" style={{ color: colors.accent }}>95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Trusted by Leading Institutions</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-60">
              {partnerLogos.slice(0, 5).map((partner, index) => (
                <div key={index} className="text-center">
                  <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">{partner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Our Work Section */}
      <section id="our-work" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-6">
              ⚡ How We Create Impact
            </div>
            <h2 className="text-5xl font-bold mb-8" style={{ color: colors.primary }}>
              Strategic Services That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Through diplomatic partnerships and strategic initiatives, we facilitate meaningful 
              business connections across the world's fastest-growing economies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br"
                     style={{ backgroundColor: colors.accent + '20' }}>
                  <Users className="w-8 h-8" style={{ color: colors.accent }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                  Country Networking Chapters
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Structured, high-value networking events led by distinguished Country Ambassadors, 
                  connecting vetted members with diplomatic and business leaders.
                </p>
                
                <div className="space-y-3">
                  {[
                    "Power introductions between vetted members",
                    "Strategic business pitch rounds", 
                    "Regulatory and subsidy briefings",
                    "Partner showcase sessions",
                    "Closed-door diplomatic roundtables"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: colors.accent }} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-8 w-full py-3 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
                        style={{ backgroundColor: colors.accent + '10', color: colors.accent }}>
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br"
                     style={{ backgroundColor: colors.tertiary + '20' }}>
                  <TrendingUp className="w-8 h-8" style={{ color: colors.tertiary }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                  Trade & Investment Services
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive support for cross-border business development, strategic market entry, 
                  and government-facilitated partnerships.
                </p>
                
                <div className="space-y-3">
                  {[
                    "B2B matchmaking across BRICS+ sectors",
                    "Curated deal flows for strategic investment",
                    "Market entry advisory and support",
                    "Sector-specific delegations & exhibitions", 
                    "Government-to-business introductions"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: colors.tertiary }} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-8 w-full py-3 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
                        style={{ backgroundColor: colors.tertiary + '10', color: colors.tertiary }}>
                  <span>Explore Services</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br"
                     style={{ backgroundColor: colors.secondary + '20' }}>
                  <Shield className="w-8 h-8" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                  Legal, Compliance & Licensing
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  End-to-end regulatory support for seamless business operations across multiple 
                  jurisdictions with government liaison services.
                </p>
                
                <div className="space-y-3">
                  {[
                    "Company formation and structuring",
                    "Local compliance and taxation advisory",
                    "Business visas and licensing support",
                    "Intellectual property protection",
                    "Dispute resolution and arbitration"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: colors.secondary }} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-8 w-full py-3 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
                        style={{ backgroundColor: colors.secondary + '20', color: colors.primary }}>
                  <span>Get Support</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Sectors Section */}
      <section id="sectors" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600 font-semibold text-sm mb-6">
              🚀 Growth Sectors
            </div>
            <h2 className="text-5xl font-bold mb-8" style={{ color: colors.primary }}>
              Strategic Sectors Driving the Future
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Focusing on high-impact industries that define the future of emerging economies and global trade.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">{sector.title}</h3>
                      <div className="text-right">
                        <div className="text-sm text-gray-300">Growth</div>
                        <div className="text-lg font-bold text-green-400">{sector.growth}</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white font-semibold text-sm">{sector.stats}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{sector.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-3" style={{ color: colors.accent }}>Key Opportunities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {sector.opportunities.map((opp, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.accent }}></div>
                          <span className="text-sm text-gray-700">{opp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full py-3 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
                          style={{ backgroundColor: colors.accent + '10', color: colors.accent }}>
                    <span>Explore Sector</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Events Section */}
      <section id="events" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-600 font-semibold text-sm mb-6">
              📅 Upcoming Events
            </div>
            <h2 className="text-5xl font-bold mb-8" style={{ color: colors.primary }}>
              Flagship Events & Strategic Forums
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Connect with global leaders at our premier business gatherings that shape international commerce.
            </p>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="px-4 py-2 rounded-full text-sm font-bold"
                            style={{ backgroundColor: colors.accent + '20', color: colors.accent }}>
                        {event.type}
                      </span>
                      <span className="px-4 py-2 rounded-full text-sm font-bold bg-green-100 text-green-600">
                        {event.attendees}
                      </span>
                      <span className="text-2xl font-bold" style={{ color: colors.secondary }}>
                        {event.price}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{event.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-6 h-6" style={{ color: colors.tertiary }} />
                        <span className="font-semibold text-gray-700">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-6 h-6" style={{ color: colors.secondary }} />
                        <span className="font-semibold text-gray-700">{event.location}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-3" style={{ color: colors.accent }}>Featured Highlights:</h4>
                      <div className="grid md:grid-cols-3 gap-3">
                        {event.featured.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Star className="w-4 h-4" style={{ color: colors.secondary }} />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-right">
                    <button className="w-full lg:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg mb-4"
                            style={{ backgroundColor: colors.accent, color: colors.white }}>
                      Register Now
                    </button>
                    <button className="w-full lg:w-auto px-8 py-3 rounded-xl font-semibold border-2 transition-all hover:scale-105"
                            style={{ borderColor: colors.tertiary, color: colors.tertiary }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6">
              💬 Success Stories
            </div>
            <h2 className="text-5xl font-bold mb-8">What Our Members Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses across BRICS+ nations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.title}</p>
                    <p className="text-gray-400 text-xs">{testimonial.country}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: colors.secondary }} />
                  ))}
                </div>
                
                <p className="text-gray-200 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Membership CTA */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: colors.primary }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to Shape the Future of Global Business?
          </h2>
          <p className="text-2xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto">
            Join thousands of entrepreneurs, investors, and institutions building bridges 
            across the world's most dynamic economies.
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                   style={{ backgroundColor: colors.accent }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Member Partner</h3>
              <p className="text-gray-300 mb-6">For individuals and SMEs looking to expand globally</p>
              <div className="text-3xl font-bold text-white mb-6">$299/year</div>
              <button className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
                      style={{ backgroundColor: colors.accent, color: colors.white }}>
                Apply Now
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 rounded-full text-sm font-bold"
                      style={{ backgroundColor: colors.secondary, color: colors.primary }}>
                  Most Popular
                </span>
              </div>
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                   style={{ backgroundColor: colors.secondary }}>
                <Building className="w-8 h-8" style={{ color: colors.primary }} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Institutional Partner</h3>
              <p className="text-gray-300 mb-6">Chambers, Banks, Law Firms, and Corporates</p>
              <div className="text-3xl font-bold text-white mb-6">$1,999/year</div>
              <button className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
                      style={{ backgroundColor: colors.secondary, color: colors.primary }}>
                Learn More
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                   style={{ backgroundColor: colors.tertiary }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Honorary Partner</h3>
              <p className="text-gray-300 mb-6">Government, Embassy, and Academic Partners</p>
              <div className="text-3xl font-bold text-white mb-6">Custom</div>
              <button className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
                      style={{ backgroundColor: colors.tertiary, color: colors.white }}>
                Partner With Us
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-8">Not sure which tier is right for you?</p>
            <button className="px-8 py-4 rounded-xl font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B+</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">BRICS+ Business Alliance</h3>
                  <p className="text-gray-400">Global Trade • Diplomatic Networks • Strategic Partnerships</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Connecting opportunity, trade, and trust across BRICS+ nations through strategic 
                partnerships and diplomatic excellence.
              </p>
              <p className="text-gray-500 text-sm">
                Under the aegis of Sabarmati Legal Research & Policy Development Foundation
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['About Us', 'Our Work', 'Membership', 'Ambassador Program', 'Events', 'Sectors'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                      <ArrowRight size={16} />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Connect With Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6" style={{ color: colors.accent }} />
                  <span className="text-gray-300">info@bricsalliance.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6" style={{ color: colors.secondary }} />
                  <span className="text-gray-300">+91-XXX-XXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6" style={{ color: colors.tertiary }} />
                  <span className="text-gray-300">Mumbai, India</span>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <MessageCircle className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2024 BRICS+ Business Alliance. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BRICSHomepage;
