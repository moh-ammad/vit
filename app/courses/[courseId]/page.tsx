import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, Star, Clock, Play, Check, ChevronDown, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getCourseById } from '@/lib/data/courses';

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const course = getCourseById(params.courseId);
  if (!course) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium px-3 py-1 bg-indigo-500 rounded">{course.category}</span>
              <span className="text-sm font-medium px-3 py-1 bg-gray-700 rounded">{course.level}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{course.description}</p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span>{course.rating} ({course.studentsCount.toLocaleString()})</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl p-6 border">
                <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {course.whatYouWillLearn.map((item, i) => (
                    <div key={i} className="flex gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border">
                <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
                <div className="space-y-3">
                  {course.modules.map((m, i) => (
                    <details key={i} className="border rounded-lg">
                      <summary className="p-4 cursor-pointer hover:bg-gray-50 flex justify-between">
                        <div>
                          <h3 className="font-semibold">{m.title}</h3>
                          <p className="text-sm text-gray-500">{m.lessons.length} lessons</p>
                        </div>
                        <ChevronDown className="w-5 h-5" />
                      </summary>
                      <div className="border-t p-4 space-y-2">
                        {m.lessons.map((l, j) => (
                          <div key={j} className="flex gap-3 text-sm">
                            <Play className="w-4 h-4 text-gray-400" />
                            <span className="flex-1">{l.title}</span>
                            <span className="text-gray-500">{l.duration}</span>
                          </div>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl border p-6 sticky top-4">
                <div className="aspect-video bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Play className="w-16 h-16 text-white" />
                </div>
                <div className="text-3xl font-bold mb-6">
                  {course.price === 0 ? <span className="text-green-600">Free</span> : `₹${course.price}`}
                </div>
                <Link href="/sign-up">
                  <Button fullWidth size="lg">Enroll Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
