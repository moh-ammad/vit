'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, BookOpen, Video, FileText, Users, Award, Download, CheckCircle, Star } from 'lucide-react';

export default function TeacherResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ResourcesSection />
        <ToolsSection />
        <CommunitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80"
          alt="Teacher helping students in a classroom"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-indigo-800/85 to-cyan-900/75" />

      {/* Grid pattern (optional decorative layer) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white">
            <BookOpen className="w-4 h-4" />
            <span>Educator Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Teacher Resources
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 leading-relaxed">
            Tools, templates, and training to help you create impactful learning experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  const resources = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Lesson Plan Templates',
      description: 'Ready-to-use templates for various subjects and grade levels.',
      type: 'Download',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video Tutorials',
      description: 'Step-by-step guides on instructional design and course creation.',
      type: 'Watch',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'E-Books & Guides',
      description: 'In-depth resources on pedagogy and learning design.',
      type: 'Read',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certification Programs',
      description: 'Professional development courses for educators.',
      type: 'Enroll',
      image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Resources</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Everything You Need</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Free resources to support your teaching journey.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-indigo-600">
                  {resource.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-indigo-600 font-medium group-hover:text-indigo-700">
                  {resource.type === 'Download' && <Download className="w-4 h-4" />}
                  {resource.type === 'Watch' && <Video className="w-4 h-4" />}
                  {resource.type === 'Read' && <FileText className="w-4 h-4" />}
                  {resource.type === 'Enroll' && <Award className="w-4 h-4" />}
                  {resource.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  const tools = [
    {
      name: 'Course Builder',
      description: 'Create engaging courses with our intuitive drag-and-drop builder.',
      features: ['Multimedia support', 'Interactive quizzes', 'Progress tracking'],
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80',
    },
    {
      name: 'Assessment Creator',
      description: 'Design comprehensive assessments with various question types.',
      features: ['Auto-grading', 'Question banks', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    },
    {
      name: 'Content Library',
      description: 'Access thousands of reusable learning assets.',
      features: ['Stock images', 'Video clips', 'Templates'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Tools</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Powerful Creation Tools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to create professional learning content.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <ul className="space-y-2">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
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

function CommunitySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Community</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Join Our Educator Community</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Connect with thousands of educators worldwide. Share ideas, get feedback, and grow together.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Users className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Active Forums</h4>
                  <p className="text-gray-600">Discuss best practices with fellow educators.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Video className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Weekly Webinars</h4>
                  <p className="text-gray-600">Learn from industry experts in live sessions.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Recognition Program</h4>
                  <p className="text-gray-600">Get recognized for your contributions.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">5,000+</div>
              <div className="text-gray-600 mb-6">Active Educators</div>
              <Link href="/sign-up">
                <Button size="lg" className="inline-flex items-center gap-2">
                  Join Community
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Create Impact?</h2>
        <p className="text-xl text-indigo-100 mb-8">Start building your courses with our powerful tools.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/sign-up">
            <Button
              size="lg"
              variant="secondary"
              className="!bg-white !text-indigo-600 hover:!bg-gray-100 inline-flex items-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}