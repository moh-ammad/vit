'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, BookOpen, Palette, Code, Presentation, FileCheck, Layers, Users, CheckCircle, Monitor, Video, PenTool } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesGrid />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900" />
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80" 
          alt="Professional services" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
            <Layers className="w-4 h-4" />
            <span>What We Offer</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl">
            Comprehensive e-learning solutions, instructional design, and custom development for organizations worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
function ServicesGrid() {
  const services = [
    { icon: <BookOpen className="w-6 h-6" />, title: 'E-Learning Development', description: 'Custom e-learning courses designed to engage learners and achieve measurable outcomes.', features: ['Interactive modules', 'SCORM compliant', 'Mobile-friendly'], image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80' },
    { icon: <Presentation className="w-6 h-6" />, title: 'Instructional Design', description: 'Expert instructional design services that transform content into effective learning experiences.', features: ['Needs analysis', 'Curriculum design', 'Storyboards'], image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80' },
    { icon: <Palette className="w-6 h-6" />, title: 'Art & Production', description: 'Professional graphics, animations, and multimedia production for engaging content.', features: ['Custom illustrations', '2D/3D animation', 'Video production'], image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80' },
    { icon: <Code className="w-6 h-6" />, title: 'App & Web Development', description: 'Custom learning platforms, LMS solutions, and educational applications.', features: ['Custom LMS', 'Mobile apps', 'Web platforms'], image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80' },
    { icon: <FileCheck className="w-6 h-6" />, title: 'Assessment Solutions', description: 'Comprehensive assessment design and implementation for accurate skill measurement.', features: ['Question banks', 'Adaptive testing', 'Analytics'], image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80' },
    { icon: <Users className="w-6 h-6" />, title: 'Corporate Training', description: 'Tailored training programs for organizations looking to upskill their workforce.', features: ['Needs assessment', 'Blended learning', 'ROI tracking'], image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">What We Do</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Full-service solutions for all your learning and development needs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-indigo-600 shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function ProcessSection() {
  const steps = [
    { step: '01', title: 'Discovery', description: 'We start by understanding your needs, goals, and target audience.', icon: <Users className="w-6 h-6" /> },
    { step: '02', title: 'Design', description: 'Our experts create a detailed plan and design for your solution.', icon: <PenTool className="w-6 h-6" /> },
    { step: '03', title: 'Development', description: 'We build your solution using the latest technologies and best practices.', icon: <Code className="w-6 h-6" /> },
    { step: '04', title: 'Delivery', description: 'We deliver, implement, and provide ongoing support for your project.', icon: <Monitor className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">How We Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">A proven process that delivers results.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-indigo-100 mb-4">{item.step}</div>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80" 
          alt="CTA background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-indigo-200 mb-8">Let us help you create impactful learning experiences.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact"><Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">Contact Us<ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
          <Link href="/courses"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Explore Courses</Button></Link>
        </div>
      </div>
    </section>
  );
}
