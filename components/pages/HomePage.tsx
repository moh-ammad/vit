import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, BookOpen, Users, Award, Clock, CheckCircle, Star, Play, Target, Sparkles, BarChart3, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getFeaturedCourses } from '@/lib/data/courses';

const categoryImages: Record<string, string> = {
  'Web Development': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
  'Data Science': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  'Business': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  'Design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  'Marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  'Personal Development': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
  'Teaching & Academics': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  'Health & Fitness': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  default: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
};

export default function HomePage() {
  const featuredCourses = getFeaturedCourses();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <WhySection />
        <FeaturedSection courses={featuredCourses} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>LEARNING • TECHNOLOGY • GROWTH</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Learning that moves you <span className="text-indigo-600">forward</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your career with expert-led courses, personalized learning paths, and industry-recognized certificates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button size="lg" className="group inline-flex items-center gap-2">
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="lg" variant="outline">Start Learning</Button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div><div className="text-3xl font-bold text-gray-900">10K+</div><div className="text-sm text-gray-600 mt-1">Active Learners</div></div>
              <div><div className="text-3xl font-bold text-gray-900">250+</div><div className="text-sm text-gray-600 mt-1">Expert Courses</div></div>
              <div><div className="text-3xl font-bold text-gray-900">95%</div><div className="text-sm text-gray-600 mt-1">Satisfaction</div></div>
            </div>
          </div>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative lg:block">
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Web Development Bootcamp</h3>
              <p className="text-sm text-gray-500">156 lessons • 12 weeks</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Course Progress</span>
              <span className="text-sm font-bold text-indigo-600">68%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 h-2 rounded-full" style={{ width: '68%' }}></div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Play className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 text-sm">JavaScript Fundamentals</h4>
                <p className="text-xs text-gray-500 mt-1">Module 3 • Lesson 11</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Achievement Unlocked!</p>
                <p className="text-xs text-gray-600">7-day learning streak</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustSection() {
  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-8">Trusted by leading organizations worldwide</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
          <div className="text-2xl font-bold text-gray-400">TechCorp</div>
          <div className="text-2xl font-bold text-gray-400">EduGlobal</div>
          <div className="text-2xl font-bold text-gray-400">InnovateLabs</div>
          <div className="text-2xl font-bold text-gray-400">FutureSkills</div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const features = [
    { icon: <Clock className="w-6 h-6" />, title: 'Learn at Your Pace', description: 'Access courses anytime, anywhere.' },
    { icon: <Users className="w-6 h-6" />, title: 'Expert-Led Learning', description: 'Learn from industry professionals.' },
    { icon: <Target className="w-6 h-6" />, title: 'Practical Content', description: 'Work on real-world projects.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Track Your Progress', description: 'Monitor your learning journey.' },
    { icon: <CheckCircle className="w-6 h-6" />, title: 'Assess Your Knowledge', description: 'Test your understanding with quizzes.' },
    { icon: <Award className="w-6 h-6" />, title: 'Earn Certificates', description: 'Receive industry-recognized certificates.' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why choose Viitaran?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We combine cutting-edge learning technology with expert instruction.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedSection({ courses }: { courses: any[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-lg text-gray-600">Start your learning journey</p>
          </div>
          <Link href="/courses" className="hidden md:block text-indigo-600 font-medium hover:text-indigo-700">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((c) => (
            <Link
              key={c.id}
              href={`/courses/${c.id}`}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={categoryImages[c.category] || categoryImages.default}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="text-xs font-medium px-2 py-1 bg-indigo-100 text-indigo-700 rounded">{c.category}</span>
                  <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded">{c.level}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition">{c.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{c.shortDescription}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="font-medium">{c.rating}</span>
                  </div>
                  <div className="font-semibold text-gray-900">
                    {c.price === 0 ? 'Free' : `₹${c.price}`}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-cyan-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to transform your career?</h2>
        <p className="text-xl text-indigo-100 mb-8">Join thousands of learners already achieving their goals.</p>
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
          <Link href="/courses">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}