import React from 'react';
import { Menu, X, Database, Globe, Code, Blocks } from 'lucide-react';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const services = [
    {
      title: "Data Science & Analytics",
      icon: <Database className="w-12 h-12 mb-4 text-green-700" />,
      description: "Advanced statistical analysis, machine learning, and data visualization solutions to drive business insights."
    },
    {
      title: "Web & Mobile Development",
      icon: <Globe className="w-12 h-12 mb-4 text-green-700" />,
      description: "Custom web applications and mobile solutions built with modern technologies and responsive design."
    },
    {
      title: "Blockchain Development",
      icon: <Blocks className="w-12 h-12 mb-4 text-green-700" />,
      description: "Innovative blockchain solutions and smart contract development for next-generation applications."
    },
    {
      title: "Custom Development",
      icon: <Code className="w-12 h-12 mb-4 text-green-700" />,
      description: "Tailored software solutions designed to meet your specific business needs and challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">The Data Pioneer</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-stone-700">Home</a>
                <a href="#services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-stone-700">Services</a>
                <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-stone-700">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-stone-700 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-stone-700">Home</a>
              <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-stone-700">Services</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-stone-700">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">Pioneering Data Solutions</span>
              <span className="block text-green-500">for Tomorrow's Challenges</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transforming complex data into actionable insights through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-stone-900">Our Services</h2>
            <p className="mt-4 text-xl text-stone-600">Comprehensive solutions for your technical needs</p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  {service.icon}
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{service.title}</h3>
                  <p className="text-stone-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-stone-900">Contact Us</h2>
            <p className="mt-4 text-xl text-stone-600">Let's discuss how we can help with your next project</p>
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-stone-900 mb-4">Josh</h3>
              <p className="text-stone-600 mb-2">Santa Rosa, California</p>
              <a href="mailto:Contact@TheDataPioneer.com" className="text-green-700 hover:text-green-800 font-medium">
                Contact@TheDataPioneer.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} The Data Pioneer LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;