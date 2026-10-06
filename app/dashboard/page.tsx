'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, Award, Clock, Target } from 'lucide-react';
import { getAuthState, signOut } from '@/lib/auth/mock-auth';
import { getFeaturedCourses } from '@/lib/data/courses';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const courses = getFeaturedCourses();

  useEffect(() => {
    const authState = getAuthState();
    if (!authState.isAuthenticated) router.push('/sign-in');
    else setUser(authState.user);
  }, [router]);

  if (!user) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <Link href="/dashboard" className="text-2xl font-bold text-indigo-600">Viitaran</Link>
          <div className="flex gap-4">
            <Link href="/courses" className="text-gray-700 hover:text-indigo-600">Explore</Link>
            <button onClick={() => signOut()} className="text-gray-700 hover:text-red-600">Sign Out</button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Welcome, {user?.firstName}! 👋</h1>
        <p className="text-gray-600 mb-8">Ready to continue learning?</p>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <BookOpen className="w-6 h-6" />, label: 'Enrolled', value: '3' },
            { icon: <Award className="w-6 h-6" />, label: 'Completed', value: '1' },
            { icon: <Clock className="w-6 h-6" />, label: 'Hours', value: '24' },
            { icon: <Target className="w-6 h-6" />, label: 'Certificates', value: '1' },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">{s.icon}</div>
              <div className="text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 border mb-8">
          <h2 className="text-xl font-bold mb-4">My Courses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.slice(0, 3).map((c) => (
              <Link key={c.id} href={`/courses/${c.id}`} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="aspect-video bg-gradient-to-br from-indigo-500 to-cyan-500"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{c.title}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500">{c.lessonsCount} lessons</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border">
          <h2 className="text-xl font-bold mb-4">Recommended</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.slice(3, 6).map((c) => (
              <Link key={c.id} href={`/courses/${c.id}`} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">{c.shortDescription}</p>
                  <div className="text-sm font-semibold">{c.price === 0 ? 'Free' : `₹${c.price}`}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
