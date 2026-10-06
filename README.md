# Viitaran Learning+ - Premium LMS Platform

A modern, feature-rich Learning Management System built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## ✨ Features

### Pages Built
- **Homepage**: Hero with animations, features, stats, featured courses, CTA
- **Courses**: Browse all courses with search/filter functionality
- **Course Details**: Full curriculum, instructor info, enrollment sidebar
- **Sign In/Up**: Split-screen auth with password strength indicator
- **Dashboard**: Protected route with stats, progress tracking, my courses, recommendations
- **About, Services, Contact, Careers, Teacher Resources**: Content pages

### Design System
- **Colors**: Indigo primary (#4f46e5), Cyan accent (#06b6d4)
- **Typography**: Geist font family
- **Components**: Reusable Button, Input, Navbar, Footer
- **Responsive**: Mobile-first design, optimized for all screen sizes

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔐 Authentication

Mock auth system using localStorage. Use any email + password (6+ chars) to test authentication flow.

## 📁 Project Structure

```
app/
├── page.tsx              # Homepage
├── courses/              # Course listing & details
├── sign-in/sign-up/      # Authentication pages
├── dashboard/            # Protected student dashboard
└── [other pages]/        # About, contact, services, etc.

components/
├── layout/               # Navbar, Footer
├── pages/                # HomePage component
└── ui/                   # Button, Input components

lib/
├── auth/                 # Mock authentication system
└── data/                 # Course data (6 sample courses)
```

## 🎯 Status: ✅ Fully Working

✅ All pages functional (no 404 errors)  
✅ Premium UI/UX with smooth animations  
✅ Fully responsive across all devices  
✅ TypeScript throughout  
✅ Mock auth system (easily replaceable)  
✅ 6 sample courses with complete data  
✅ Protected routes with authentication  
✅ Toast notifications  
✅ Loading states  

## 🎨 UI/UX Features

- Gradient backgrounds with patterns
- Smooth hover effects and transitions
- Card-based layouts
- Progress bars and indicators
- Badge components for categories
- Icon integration (Lucide React)
- Custom scrollbar styling
- Mobile drawer navigation
- Split-screen authentication

## 📱 Responsive Design

- Mobile: 375px, 390px (iPhone sizes)
- Tablet: 768px (iPad)
- Desktop: 1024px, 1280px, 1440px+

## 🛠️ Tech Stack

- **Next.js 16.3.8** (App Router)
- **React 19.2.8**
- **TypeScript**
- **Tailwind CSS 4**
- **Lucide React** (icons)
- **React Hot Toast** (notifications)

## 🔮 Future Enhancements

- Video player integration for lessons
- Interactive quiz system with scoring
- Certificate generation and download
- Discussion forums and Q&A
- Teacher dashboard with course builder
- Payment integration (Stripe/PayPal)
- Advanced analytics dashboard
- Email notifications
- Course reviews and ratings

---

**Built with ❤️ to showcase premium UI/UX and modern web development practices**


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
