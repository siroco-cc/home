import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Users, TrendingUp, Target, LogIn, Building2, Globe, Brain } from "lucide-react";
import { ContactForm } from "~/components/ContactForm";
import { LoginModal } from "~/components/LoginModal";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-secondary">
      {/* Header */}
      <header className="bg-brand-secondary shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Siroco" 
                className="h-8 w-auto"
              />
              <span className="ml-3 text-sm text-gray-300">Technology Scaling Partners</span>
            </div>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Client Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary-lightest to-brand-secondary-lightest py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Scale Without
              <span className="block text-brand-primary">Losing Your Edge</span>
            </h2>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-brand-primary-dark md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-brand-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                About Siroco
              </h2>
              <p className="mt-6 text-lg text-gray-300">
                We help technology companies grow without losing what made them successful in the first place.
              </p>
              <p className="mt-4 text-lg text-gray-300">
                Founded by operators who've been in the trenches, Siroco specializes in the critical transition from startup to scale-up. We know firsthand that the strategies that get you from 0 to 1 rarely work for getting from 1 to 100.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">What We Do</h3>
                <p className="text-gray-300 mb-6">
                  We work with technology companies facing real scaling challenges: teams growing faster than their processes, products struggling under new demands, and founders learning to lead at scale. Our approach is hands-on and practical—we embed with your team, understand your specific context, and build solutions that actually work in practice, not just on paper.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Our Focus</h3>
                <ul className="space-y-4">
                  <li className="text-gray-300">
                    <span className="font-medium text-white">Operational scaling:</span> Building systems that grow with you, not bureaucracy that slows you down
                  </li>
                  <li className="text-gray-300">
                    <span className="font-medium text-white">Team & organizational design:</span> Structuring for speed and autonomy while maintaining alignment
                  </li>
                  <li className="text-gray-300">
                    <span className="font-medium text-white">Product strategy:</span> Evolving from single products to platforms without losing focus
                  </li>
                  <li className="text-gray-300">
                    <span className="font-medium text-white">Market expansion:</span> Entering new segments and geographies with calculated risks
                  </li>
                  <li className="text-gray-300">
                    <span className="font-medium text-white">Fundraising & financial planning:</span> Aligning growth ambitions with capital efficiency
                  </li>
                  <li className="text-gray-300">
                    <span className="font-medium text-white">AI Implementation:</span> Strategic integration of AI technologies to enhance operations and drive competitive advantage
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-400">
                  <h4 className="text-lg font-semibold text-white mb-3">Why Siroco</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    We've sat in your seat. We tap into a carefully curated network of practitioners—former CTOs, heads of product, and startup executives who've successfully navigated these exact challenges.
                  </p>
                  <p className="text-gray-300 text-sm mb-3">
                    Rather than relying on traditional consulting models, we connect you with specialists who've actually built and scaled technology companies.
                  </p>
                  <p className="text-gray-300 text-sm">
                    We're not here to implement generic playbooks or drop a deck and disappear. We measure our success by your outcomes—sustainable growth, stronger teams, and businesses built to last.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-brand-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Expertise
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Specialized support for technology companies navigating critical scaling challenges
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-brand-primary-lightest rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600">
                Strategic planning and execution for technology companies transitioning from startup to scale-up, with frameworks that evolve as you grow.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-brand-secondary-lightest rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ops</h3>
              <p className="text-gray-600">
                Operational scaling and organizational design that maintains startup agility while building the systems needed for sustainable growth.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-brand-primary-lightest rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">M&A</h3>
              <p className="text-gray-600">
                Mergers and acquisitions strategy for technology companies, from target identification to integration planning and execution.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-brand-secondary-lightest rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth</h3>
              <p className="text-gray-600">
                Growth strategy and execution for technology companies, balancing aggressive expansion with sustainable unit economics and market positioning.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-brand-primary-lightest rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expansion</h3>
              <p className="text-gray-600">
                Market expansion and international growth for technology companies, with calculated risk management and localization strategies.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-brand-secondary-lightest rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Implementation</h3>
              <p className="text-gray-600">
                Strategic integration of artificial intelligence technologies to enhance operations, automate processes, and drive competitive advantage in your market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-brand-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Get In Touch
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Ready to scale without losing what made you successful? Let's discuss how we can help you navigate your next growth phase.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-brand-primary mr-4" />
                  <span className="text-gray-300">contact@siroco.cc</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="/logo.png" 
              alt="Siroco" 
              className="h-8 w-auto mx-auto mb-2"
            />
            <p className="text-gray-400 mb-4">Scale Without Losing Your Edge</p>
            <p className="text-sm text-gray-500">
              © 2024 Siroco. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Named after the Mediterranean wind that shapes its landscape, Siroco helps technology companies navigate change and emerge stronger.
            </p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
}
