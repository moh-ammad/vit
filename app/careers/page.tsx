'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MapPin, Clock, Briefcase, Users, Heart, Rocket, Globe, CheckCircle, Star } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhyJoinSection />
        <BenefitsSection />
        <OpeningsSection />
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
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" 
          alt="Team collaboration" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
            <Briefcase className="w-4 h-4" />
            <span>Join Our Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Careers</h1>
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl">
            Join a team of passionate educators and technologists shaping the future of learning.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyJoinSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Why Viitaran</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Make an Impact</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Viitaran, you will work on meaningful projects that help people learn and grow. We believe in fostering a culture of continuous learning and innovation.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Remote-Friendly</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Growth Opportunities</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Competitive Pay</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Learning Budget</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
              alt="Team working" 
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function BenefitsSection() {
  const benefits = [
    { icon: <Heart className="w-6 h-6" />, title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness programs.' },
    { icon: <Rocket className="w-6 h-6" />, title: 'Career Growth', description: 'Clear career paths and professional development opportunities.' },
    { icon: <Globe className="w-6 h-6" />, title: 'Remote Work', description: 'Work from anywhere with flexible hours.' },
    { icon: <Users className="w-6 h-6" />, title: 'Team Culture', description: 'Collaborative and inclusive team environment.' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Benefits</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Why You Will Love It Here</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpeningsSection() {
  const openings = [
    { title: 'Instructional Designer', location: 'Remote', type: 'Full-time', department: 'Content' },
    { title: 'Frontend Developer', location: 'Remote', type: 'Full-time', department: 'Engineering' },
    { title: 'E-Learning Developer', location: 'Hyderabad', type: 'Full-time', department: 'Content' },
    { title: 'UX Designer', location: 'Remote', type: 'Full-time', department: 'Design' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Open Positions</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Join Our Team</h2>
        </div>
        <div className="space-y-4">
          {openings.map((job, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{job.department}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">Apply Now</Button>
              </div>
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
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" 
          alt="CTA background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Do not see a fit?</h2>
        <p className="text-xl text-indigo-200 mb-8">Send us your resume and we will keep you in mind for future opportunities.</p>
        <Link href="/contact"><Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">Contact Us<ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
      </div>
    </section>
  );
}
