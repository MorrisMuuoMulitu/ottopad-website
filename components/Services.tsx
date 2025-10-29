import React, { useState } from 'react';
import Link from 'next/link';
import { Globe2, Smartphone, Cpu, Code2, ChevronRight, X } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [showAllServices, setShowAllServices] = useState(false);

  const services = [
    { 
      icon: Globe2, 
      title: 'Custom Web Design', 
      desc: 'Stunning, brand-aligned websites that convert visitors into loyal customers. Fully mobile-responsive.',
      price: 'From KES 25,000',
      details: 'Our custom web design service focuses on creating unique, visually appealing websites tailored specifically to your brand identity. We prioritize user experience, fast loading times, and responsive design that works flawlessly across all devices. Our team ensures your website not only looks professional but also drives conversions and business growth.'
    },
    { 
      icon: Code2, 
      title: 'E-commerce Solutions', 
      desc: 'Powerful online stores with secure payments, inventory management, and seamless user experience.',
      price: 'From KES 75,000',
      details: 'Build a robust online store that handles everything from product listings to secure payments and inventory management. We integrate multiple payment options including mobile money solutions popular in Kenya, ensuring your customers have a seamless shopping experience. Our solutions scale with your business and include features like order tracking, customer accounts, and admin dashboards.'
    },
    { 
      icon: Cpu, 
      title: 'SEO & Digital Marketing', 
      desc: 'Boost your online visibility and dominate search rankings with our data-driven SEO strategies for Kenya.',
      price: 'From KES 15,000',
      details: 'Increase your visibility on search engines with our comprehensive SEO and digital marketing strategies tailored to the Kenyan market. We focus on local SEO, content optimization, and performance tracking to ensure your business ranks higher and attracts more qualified leads. Our data-driven approach delivers measurable results with transparent reporting.'
    },
    { 
      icon: Smartphone, 
      title: 'UI/UX & Branding', 
      desc: 'Create a memorable brand identity and intuitive user experiences that captivate your audience.',
      price: 'From KES 30,000',
      details: 'Develop a cohesive brand identity that resonates with your target audience and creates lasting impressions. Our UI/UX design services focus on creating intuitive, engaging user experiences that guide visitors toward your desired actions. We conduct user research, create wireframes, and develop high-fidelity designs that align with your brand values and business goals.'
    },
  ];

  const openServiceModal = (index: number) => {
    setSelectedService(index);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeServiceModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const openAllServicesModal = () => {
    setShowAllServices(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeAllServicesModal = () => {
    setShowAllServices(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Elevate Your Business with Expert Web Solutions</h2>
            <p className="text-zinc-500 max-w-2xl">
              A selection of our core services designed to help your business succeed online.
            </p>
          </div>
          <button
            onClick={openAllServicesModal}
            className="text-emerald-600 font-medium flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
          >
            View all services{' '}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* Standard cards */}
          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 rounded-[2rem] bg-white border border-zinc-100 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full bg-emerald-50/30 group-hover:scale-150 group-hover:opacity-40 transition-all duration-700" />
              <div className="absolute top-0 right-0 w-32 h-32 -mr-14 -mt-14 rounded-full bg-emerald-100/40 group-hover:scale-125 group-hover:opacity-30 transition-all duration-700" />
              <service.icon className="w-10 h-10 text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <h3 className="text-xl font-bold mb-2 relative z-10">{service.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4 relative z-10">{service.desc}</p>
              <div className="mt-4 relative z-10">
                <p className="text-emerald-600 font-semibold">{service.price}</p>
                <button
                  onClick={() => openServiceModal(i)}
                  className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium mt-3 group-hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded relative z-10"
                >
                  View Details <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {selectedService !== null && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeServiceModal}
          >
            <div 
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center">
                      {React.createElement(services[selectedService].icon, { className: "w-7 h-7 text-emerald-600" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-900">{services[selectedService].title}</h3>
                      <p className="text-emerald-600 font-semibold mt-1">{services[selectedService].price}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeServiceModal}
                    className="text-zinc-500 hover:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-full p-2 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-zinc-600 leading-relaxed mb-6">
                  {services[selectedService].details}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-zinc-100">
                  <Link
                    href="#contact"
                    className="flex-1 bg-emerald-600 text-white text-center py-3 px-6 rounded-full font-medium hover:bg-emerald-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    Get Started
                  </Link>
                  <button
                    onClick={closeServiceModal}
                    className="flex-1 border border-zinc-300 text-zinc-700 py-3 px-6 rounded-full font-medium hover:bg-zinc-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    Back to Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Services Modal */}
        {showAllServices && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeAllServicesModal}
          >
            <div 
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-zinc-900">All Services</h3>
                  <button
                    onClick={closeAllServicesModal}
                    className="text-zinc-500 hover:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-full p-2 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div 
                      key={index} 
                      className="border border-zinc-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                          {React.createElement(service.icon, { className: "w-5 h-5 text-emerald-600" })}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-zinc-900">{service.title}</h4>
                          <p className="text-emerald-600 font-semibold mt-1">{service.price}</p>
                        </div>
                      </div>
                      
                      <p className="text-zinc-600 text-sm mb-4">{service.desc}</p>
                      
                      <button
                        onClick={() => {
                          closeAllServicesModal();
                          openServiceModal(index);
                        }}
                        className="text-emerald-600 text-sm font-medium hover:underline"
                      >
                        Learn more →
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-zinc-100 mt-8">
                  <Link
                    href="#contact"
                    className="flex-1 bg-emerald-600 text-white text-center py-3 px-6 rounded-full font-medium hover:bg-emerald-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    Contact Us for Any Service
                  </Link>
                  <button
                    onClick={closeAllServicesModal}
                    className="flex-1 border border-zinc-300 text-zinc-700 py-3 px-6 rounded-full font-medium hover:bg-zinc-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    Back to Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
