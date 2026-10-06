'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Users, Award, Lightbulb, Heart, Shield, Zap, Globe, BookOpen, CheckCircle, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <ValuesSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-indigo-900" />
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80" 
          alt="Team collaboration" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
            <Globe className="w-4 h-4" />
            <span>Who We Are</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transforming Education Through Innovation
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 leading-relaxed max-w-2xl">
            Viitaran is dedicated to making quality education accessible to everyone, everywhere. We combine cutting-edge technology with expert instruction.
          </p>
        </div>
      </div>
    </section>
  );
}
function MissionSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" 
                alt="Learning environment" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-xl shadow-lg hidden sm:block">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-indigo-100">Learners</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Fostering Continuous Learning and Growth
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We provide full-service course development, e-learning services, instructional design, LMS solutions, and more.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to embrace the pursuit of excellence. Excellence is not just about what we create — it is about the impact we create.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Industry Experts</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function ValuesSection() {
  const values = [
    { icon: <Lightbulb className="w-6 h-6" />, title: 'Innovation', description: 'We leverage cutting-edge technologies to create the best learning solutions.', color: 'indigo' },
    { icon: <Heart className="w-6 h-6" />, title: 'Passion', description: 'We are passionate about education and committed to helping every learner.', color: 'rose' },
    { icon: <Shield className="w-6 h-6" />, title: 'Integrity', description: 'We maintain the highest standards of honesty and transparency.', color: 'green' },
    { icon: <Zap className="w-6 h-6" />, title: 'Excellence', description: 'We strive for excellence in every project we deliver.', color: 'amber' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Our Values</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">What Drives Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our core values guide every decision we make.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${value.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' : value.color === 'rose' ? 'bg-rose-100 text-rose-600' : value.color === 'green' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: '10,000+', label: 'Active Learners', icon: <Users className="w-6 h-6" /> },
    { number: '250+', label: 'Expert Courses', icon: <BookOpen className="w-6 h-6" /> },
    { number: '95%', label: 'Satisfaction Rate', icon: <Award className="w-6 h-6" /> },
    { number: '50+', label: 'Industry Partners', icon: <Target className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 bg-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80" 
          alt="Stats background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-indigo-300">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-indigo-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
        <p className="text-lg text-gray-600 mb-8">Join thousands of learners transforming their careers with Viitaran.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/courses"><Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">Explore Courses<ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
          <Link href="/contact"><Button size="lg" variant="outline">Contact Us</Button></Link>
        </div>
      </div>
    </section>
  );
}
