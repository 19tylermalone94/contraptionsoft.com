'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  FiMenu, FiX, FiCode, FiBriefcase, FiZap, 
  FiMail, FiArrowRight, FiCheck, FiGlobe,
  FiDatabase, FiSettings, FiTrendingUp, FiCpu,
  FiUser, FiExternalLink
} from 'react-icons/fi';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 w-full">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center gap-2 sm:gap-3">
              <Image 
                src="/contraptionsoft_logo.jpg" 
                alt="ContraptionSoft Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-xl sm:text-2xl font-bold text-orange-500 hidden sm:inline">ContraptionSoft</span>
            </a>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-300 hover:text-orange-500 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-300 hover:text-orange-500 transition-colors font-medium">Services</a>
              <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors font-medium">Contact</a>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-orange-500 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-800 mt-2">
              <div className="flex flex-col gap-4 pt-4">
                <a 
                  href="#home" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-orange-500 transition-colors font-medium py-2"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-orange-500 transition-colors font-medium py-2"
                >
                  About
                </a>
                <a 
                  href="#services" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-orange-500 transition-colors font-medium py-2"
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-orange-500 transition-colors font-medium py-2"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center space-y-6 sm:space-y-8 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex justify-center mb-4 sm:mb-6">
              <Image 
                src="/contraptionsoft_logo.jpg" 
                alt="ContraptionSoft Logo"
                width={120}
                height={120}
                className="rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-100 leading-tight px-2">
              Custom Software Solutions
              <span className="block text-orange-500 mt-2">That Drive Business Growth</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
              Professional web development, AI agents, business automation, and custom software solutions 
              designed to streamline your operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-2">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Get Started
                <FiArrowRight />
              </a>
              <a
                href="#services"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-orange-500 border-2 border-orange-500 rounded-lg font-semibold hover:bg-orange-500/10 transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Web Development */}
            <div className="p-5 sm:p-6 md:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl border border-gray-800 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all hover:scale-105 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <FiGlobe className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4">Web Development</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Modern, responsive websites and web applications built with cutting-edge technologies. 
                From simple business sites to complex web platforms, we deliver solutions that perform.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Custom website design & development</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Website maintenance & updates</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>E-commerce solutions</span>
                </li>
              </ul>
            </div>

            {/* Business Software */}
            <div className="p-5 sm:p-6 md:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl border border-gray-800 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all hover:scale-105 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <FiBriefcase className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4">Business Software</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Custom software solutions designed to optimize your internal operations. 
                Streamline workflows, manage data efficiently, and improve productivity with tailored applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Custom business applications</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Data management systems</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Internal tool development</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Legacy system modernization</span>
                </li>
              </ul>
            </div>

            {/* Automation */}
            <div className="p-5 sm:p-6 md:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl border border-gray-800 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all hover:scale-105 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <FiZap className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4">Automation</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Eliminate repetitive tasks and reduce manual errors with intelligent automation solutions. 
                Free up your team's time to focus on what matters most.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Workflow automation</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Data processing automation</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>API integrations</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Custom automation scripts</span>
                </li>
              </ul>
            </div>

            {/* AI Agents */}
            <div className="p-5 sm:p-6 md:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl border border-gray-800 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all hover:scale-105 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <FiCpu className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4">AI Agents</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Deploy intelligent AI agents that work autonomously to handle complex tasks, make decisions, 
                and interact with your systems. Leverage cutting-edge agentic AI to transform your business operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Agentic AI systems</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>RAG (Retrieval-Augmented Generation)</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Intelligent automation agents</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                  <FiCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Custom agent development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4 sm:mb-6">
                About ContraptionSoft
              </h2>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">
                ContraptionSoft LLC is a software development company specializing in custom solutions 
                for businesses and individuals. Founded by Tyler Malone, a software engineer with 
                professional experience in full-stack development, DevOps, automation, and agentic AI.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">
                With a background that spans from military service to software engineering, we bring 
                a unique perspective to problem-solving. We're passionate about helping businesses 
                in Fort Collins and beyond leverage cutting-edge technology, including AI agents, to achieve their goals.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Whether you need a modern website, custom business software, AI agents, or automation solutions, 
                we're here to help you succeed.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-6 bg-[#1a1a1a] rounded-xl border border-gray-800 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1 sm:mb-2">100%</div>
                <div className="text-sm sm:text-base text-gray-400">Custom Solutions</div>
              </div>
              <div className="p-4 sm:p-6 bg-[#1a1a1a] rounded-xl border border-gray-800 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1 sm:mb-2">Fast</div>
                <div className="text-sm sm:text-base text-gray-400">Delivery Times</div>
              </div>
              <div className="p-4 sm:p-6 bg-[#1a1a1a] rounded-xl border border-gray-800 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1 sm:mb-2">Expert</div>
                <div className="text-sm sm:text-base text-gray-400">Support</div>
              </div>
              <div className="p-4 sm:p-6 bg-[#1a1a1a] rounded-xl border border-gray-800 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1 sm:mb-2">Modern</div>
                <div className="text-sm sm:text-base text-gray-400">Technologies</div>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-800">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <FiUser className="text-white text-3xl sm:text-4xl" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-3 sm:mb-4">
                  Meet the Founder
                </h3>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6">
                  ContraptionSoft is led by <strong className="text-gray-200">Tyler Malone</strong>, a software engineer 
                  with expertise in full-stack development, DevOps, distributed systems, and agentic AI. 
                  With professional experience building scalable applications and AI-driven solutions, Tyler brings 
                  a unique blend of technical expertise and problem-solving skills to every project.
                </p>
                <a
                  href="https://tylermmprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30"
                >
                  <span>Visit Personal Website</span>
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>

          {/* Veteran Owned Badge */}
          <div className="mt-8 sm:mt-12 flex justify-center">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl p-6 sm:p-8 border border-gray-800 hover:border-orange-500/50 transition-all max-w-md w-full">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <Image 
                    src="/64px-Seal_of_the_United_States_Marine_Corps.svg.png" 
                    alt="US Marine Corps Seal"
                    width={80}
                    height={80}
                    className="opacity-90"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-100 mb-2">
                    Veteran Owned Business
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400">
                    Proudly serving those who served. ContraptionSoft is a veteran-owned and operated business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
              Ready to transform your business with custom software solutions? Let's talk.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-800">
            <div className="space-y-6">
              <a
                href="mailto:tyler@contraptionsoft.com"
                className="block p-5 sm:p-6 bg-[#0a0a0a] rounded-xl border border-gray-800 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FiMail className="text-white text-lg sm:text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm text-gray-500 mb-1">Email</div>
                    <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-100 group-hover:text-orange-500 transition-colors break-all">
                      tyler@contraptionsoft.com
                    </div>
                  </div>
                  <FiArrowRight className="text-gray-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" />
                </div>
              </a>
              
              <div className="pt-4 sm:pt-6 border-t border-gray-800">
                <p className="text-sm sm:text-base text-gray-400 text-center">
                  We typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 bg-[#0a0a0a] border-t border-gray-800 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
            <div className="text-base sm:text-lg font-semibold text-orange-500">ContraptionSoft LLC</div>
            <div className="text-xs sm:text-sm text-gray-500">
              © {new Date().getFullYear()} ContraptionSoft LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
