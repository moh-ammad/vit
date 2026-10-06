import Link from 'next/link';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

// Custom social icons as SVG components
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <GraduationCap className="w-8 h-8" />
              <span>Viitaran</span>
            </Link>
            <p className="text-sm mb-4">
              Transform your learning journey with expert-led courses and personalized learning paths.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="hover:text-white transition">Browse Courses</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* For Learners */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Learners</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sign-up" className="hover:text-white transition">Get Started</Link></li>
              <li><Link href="/courses" className="hover:text-white transition">Explore Courses</Link></li>
              <li><Link href="/sign-in" className="hover:text-white transition">Student Login</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Corporate Training</Link></li>
            </ul>
          </div>

          {/* For Educators */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Educators</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/teacher-resources" className="hover:text-white transition">Teacher Resources</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Instructional Design</Link></li>
              <li><Link href="/sign-up" className="hover:text-white transition">Become an Instructor</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Partner With Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">Email</p>
                <a href="mailto:info@viitaran.com" className="hover:text-white transition">info@viitaran.com</a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">Phone</p>
                <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">Location</p>
                <p>Global Learning Hub</p>
              </div>
            </div>
          </div>
        </div>

                {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Connect with us:</span>
              <div className="flex items-center gap-4">
                <a href="https://linkedin.com/company/viitaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@viitaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                  <YouTubeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {currentYear} Viitaran Learning+. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

