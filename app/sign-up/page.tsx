'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, GraduationCap, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { signUp } from '@/lib/auth/mock-auth';
import toast from 'react-hot-toast';

const inputClass = 'text-gray-900 placeholder:text-gray-400 bg-white';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student' as 'student' | 'teacher',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (!agreedToTerms) {
      toast.error('Please agree to terms');
      return;
    }
    setLoading(true);
    try {
      const result = await signUp(formData);
      if (result.success) {
        toast.success('Account created!');
        setTimeout(() => router.push('/dashboard'), 500);
      } else {
        toast.error(result.error || 'Failed');
      }
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const passwordStrength =
    formData.password.length < 6 ? 33 : formData.password.length < 10 ? 66 : 100;

  return (
    <div className="min-h-screen flex">
      {/* Left: Image Panel */}
      <div className="hidden lg:block flex-1 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80"
          alt="Students collaborating"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/85 to-indigo-900/75" />
        <div className="relative h-full flex flex-col justify-center px-12 text-white z-10">
          <h2 className="text-4xl font-bold mb-6">Start learning today</h2>
          <p className="text-xl text-indigo-100 mb-8">Join thousands achieving their goals</p>
          <div className="space-y-3">
            {['250+ courses', 'Learn at your pace', 'Earn certificates'].map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5" />
                <p className="text-lg">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center px-4 bg-white">
        <div className="w-full max-w-md py-12">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600">
              <GraduationCap className="w-8 h-8" />
              <span>Viitaran</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-2">Create account</h1>
            <p className="text-gray-600">Start learning today!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className={inputClass}
                required
              />
              <Input
                label="Last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className={inputClass}
                required
              />
            </div>
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">I am a</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { role: 'student', label: 'Student' },
                  { role: 'teacher', label: 'Teacher' },
                ].map(({ role, label }) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setFormData({ ...formData, role: role as any })}
                    className={`p-4 rounded-lg border-2 text-gray-900 transition ${
                      formData.role === role
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">{label}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={inputClass}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              {formData.password && (
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${passwordStrength}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            <Input
              label="Confirm"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className={inputClass}
              required
            />
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm text-gray-600">
                I agree to the{' '}
                <Link href="/terms" className="text-indigo-600">
                  Terms
                </Link>
              </span>
            </label>
            <Button type="submit" fullWidth loading={loading} size="lg">
              Create Account
            </Button>
            <div className="text-center text-sm text-gray-600">
              Have an account?{' '}
              <Link href="/sign-in" className="font-medium text-indigo-600">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}