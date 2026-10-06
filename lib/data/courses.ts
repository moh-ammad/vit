// Mock course data

export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  price: number;
  image: string;
  instructor: {
    id: string;
    name: string;
    title: string;
    avatar: string;
    bio: string;
  };
  rating: number;
  studentsCount: number;
  lessonsCount: number;
  language: string;
  hasCertificate: boolean;
  whatYouWillLearn: string[];
  requirements: string[];
  modules: CourseModule[];
  tags: string[];
  featured: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'quiz' | 'assignment';
  isPreview: boolean;
}

export const categories = [
  'Web Development',
  'Data Science',
  'Business',
  'Design',
  'Marketing',
  'Personal Development',
  'Teaching & Academics',
  'Health & Fitness',
];

export const courses: Course[] = [
  {
    id: 'web-dev-fundamentals',
    title: 'Complete Web Development Bootcamp',
    shortDescription: 'Master HTML, CSS, JavaScript, and modern web development practices from scratch.',
    description: 'Learn everything you need to become a professional web developer. This comprehensive course covers HTML5, CSS3, JavaScript ES6+, React, Node.js, and more. Build real-world projects and create a portfolio that will impress employers.',
    category: 'Web Development',
    level: 'Beginner',
    duration: '12 weeks',
    price: 0,
    image: '/course-images/web-dev.jpg',
    instructor: {
      id: 'instructor-1',
      name: 'Sarah Johnson',
      title: 'Senior Frontend Developer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
      bio: '10+ years of experience in web development. Former lead developer at major tech companies.',
    },
    rating: 4.8,
    studentsCount: 12453,
    lessonsCount: 156,
    language: 'English',
    hasCertificate: true,
    whatYouWillLearn: [
      'Build responsive websites with HTML5 and CSS3',
      'Master JavaScript and modern ES6+ features',
      'Create interactive UIs with React',
      'Build backend APIs with Node.js and Express',
      'Work with databases and authentication',
      'Deploy applications to production',
    ],
    requirements: [
      'A computer with internet access',
      'Basic computer skills',
      'No programming experience required',
    ],
    modules: [
      {
        id: 'module-1',
        title: 'Web Development Foundations',
        duration: '3 weeks',
        lessons: [
          { id: 'lesson-1', title: 'Introduction to Web Development', duration: '15 min', type: 'video', isPreview: true },
          { id: 'lesson-2', title: 'Setting Up Your Development Environment', duration: '20 min', type: 'video', isPreview: true },
          { id: 'lesson-3', title: 'HTML Basics', duration: '45 min', type: 'video', isPreview: false },
          { id: 'lesson-4', title: 'HTML Forms and Tables', duration: '30 min', type: 'video', isPreview: false },
          { id: 'lesson-5', title: 'HTML Practice Project', duration: '1 hour', type: 'assignment', isPreview: false },
        ],
      },
      {
        id: 'module-2',
        title: 'CSS Mastery',
        duration: '3 weeks',
        lessons: [
          { id: 'lesson-6', title: 'CSS Fundamentals', duration: '40 min', type: 'video', isPreview: false },
          { id: 'lesson-7', title: 'Flexbox Layout', duration: '35 min', type: 'video', isPreview: false },
          { id: 'lesson-8', title: 'CSS Grid', duration: '40 min', type: 'video', isPreview: false },
          { id: 'lesson-9', title: 'Responsive Design', duration: '50 min', type: 'video', isPreview: false },
          { id: 'lesson-10', title: 'CSS Quiz', duration: '20 min', type: 'quiz', isPreview: false },
        ],
      },
      {
        id: 'module-3',
        title: 'JavaScript Essentials',
        duration: '4 weeks',
        lessons: [
          { id: 'lesson-11', title: 'JavaScript Basics', duration: '50 min', type: 'video', isPreview: false },
          { id: 'lesson-12', title: 'Functions and Scope', duration: '45 min', type: 'video', isPreview: false },
          { id: 'lesson-13', title: 'DOM Manipulation', duration: '55 min', type: 'video', isPreview: false },
          { id: 'lesson-14', title: 'Async JavaScript', duration: '60 min', type: 'video', isPreview: false },
        ],
      },
      {
        id: 'module-4',
        title: 'React Framework',
        duration: '2 weeks',
        lessons: [
          { id: 'lesson-15', title: 'Introduction to React', duration: '40 min', type: 'video', isPreview: false },
          { id: 'lesson-16', title: 'Components and Props', duration: '50 min', type: 'video', isPreview: false },
          { id: 'lesson-17', title: 'State and Hooks', duration: '60 min', type: 'video', isPreview: false },
        ],
      },
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Web Development'],
    featured: true,
  },
  {
    id: 'data-science-python',
    title: 'Data Science with Python',
    shortDescription: 'Learn data analysis, visualization, and machine learning with Python.',
    description: 'Comprehensive data science course covering Python, NumPy, Pandas, Matplotlib, and Scikit-learn. Work on real-world datasets and build a portfolio of data science projects.',
    category: 'Data Science',
    level: 'Intermediate',
    duration: '10 weeks',
    price: 4999,
    image: '/course-images/data-science.jpg',
    instructor: {
      id: 'instructor-2',
      name: 'Dr. Michael Chen',
      title: 'Data Science Lead',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
      bio: 'PhD in Computer Science. 8 years experience in data science and machine learning.',
    },
    rating: 4.9,
    studentsCount: 8764,
    lessonsCount: 98,
    language: 'English',
    hasCertificate: true,
    whatYouWillLearn: [
      'Python programming for data science',
      'Data analysis with Pandas',
      'Data visualization with Matplotlib and Seaborn',
      'Statistical analysis and hypothesis testing',
      'Machine learning fundamentals',
      'Build predictive models',
    ],
    requirements: [
      'Basic programming knowledge',
      'Understanding of mathematics and statistics',
      'Python installed on your computer',
    ],
    modules: [
      {
        id: 'module-ds-1',
        title: 'Python for Data Science',
        duration: '2 weeks',
        lessons: [
          { id: 'ds-lesson-1', title: 'Python Fundamentals Review', duration: '30 min', type: 'video', isPreview: true },
          { id: 'ds-lesson-2', title: 'NumPy Arrays', duration: '45 min', type: 'video', isPreview: false },
          { id: 'ds-lesson-3', title: 'Pandas DataFrames', duration: '50 min', type: 'video', isPreview: false },
        ],
      },
    ],
    tags: ['Python', 'Data Science', 'Machine Learning', 'Pandas'],
    featured: true,
  },
  {
    id: 'ux-design-principles',
    title: 'UX Design Fundamentals',
    shortDescription: 'Create user-centered designs that solve real problems.',
    description: 'Learn the principles of user experience design, from user research to prototyping. Master design thinking, wireframing, and usability testing.',
    category: 'Design',
    level: 'Beginner',
    duration: '6 weeks',
    price: 0,
    image: '/course-images/ux-design.jpg',
    instructor: {
      id: 'instructor-3',
      name: 'Emily Rodriguez',
      title: 'Senior UX Designer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily',
      bio: 'Award-winning UX designer with 12 years of experience at leading design agencies.',
    },
    rating: 4.7,
    studentsCount: 6521,
    lessonsCount: 67,
    language: 'English',
    hasCertificate: true,
    whatYouWillLearn: [
      'User research methodologies',
      'Information architecture',
      'Wireframing and prototyping',
      'Usability testing',
      'Design systems',
      'Accessibility principles',
    ],
    requirements: [
      'No prior design experience needed',
      'Access to Figma (free version)',
      'Passion for creating great user experiences',
    ],
    modules: [
      {
        id: 'module-ux-1',
        title: 'Introduction to UX',
        duration: '1 week',
        lessons: [
          { id: 'ux-lesson-1', title: 'What is UX Design?', duration: '20 min', type: 'video', isPreview: true },
          { id: 'ux-lesson-2', title: 'The Design Thinking Process', duration: '30 min', type: 'video', isPreview: true },
        ],
      },
    ],
    tags: ['UX Design', 'UI Design', 'Figma', 'Design Thinking'],
    featured: false,
  },
  {
    id: 'digital-marketing-mastery',
    title: 'Digital Marketing Mastery',
    shortDescription: 'Master SEO, social media, content marketing, and analytics.',
    description: 'Comprehensive digital marketing course covering all channels. Learn to create effective marketing campaigns and measure ROI.',
    category: 'Marketing',
    level: 'Beginner',
    duration: '8 weeks',
    price: 3999,
    image: '/course-images/marketing.jpg',
    instructor: {
      id: 'instructor-4',
      name: 'David Kim',
      title: 'Marketing Strategist',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
      bio: 'Growth marketing expert who has helped scale multiple startups to millions in revenue.',
    },
    rating: 4.6,
    studentsCount: 9234,
    lessonsCount: 82,
    language: 'English',
    hasCertificate: true,
    whatYouWillLearn: [
      'SEO optimization techniques',
      'Social media marketing strategies',
      'Content marketing best practices',
      'Email marketing campaigns',
      'Google Analytics and data analysis',
      'Paid advertising on Google and Facebook',
    ],
    requirements: ['Basic understanding of business', 'No marketing experience required'],
    modules: [],
    tags: ['Marketing', 'SEO', 'Social Media', 'Analytics'],
    featured: false,
  },
  {
    id: 'business-leadership',
    title: 'Leadership & Management Essentials',
    shortDescription: 'Develop leadership skills to inspire and manage teams effectively.',
    description: 'Learn essential leadership and management skills for the modern workplace. Cover team building, communication, conflict resolution, and strategic thinking.',
    category: 'Business',
    level: 'Intermediate',
    duration: '5 weeks',
    price: 0,
    image: '/course-images/leadership.jpg',
    instructor: {
      id: 'instructor-5',
      name: 'Jennifer Martinez',
      title: 'Executive Coach',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer',
      bio: 'Former Fortune 500 executive turned leadership coach. MBA from Stanford.',
    },
    rating: 4.8,
    studentsCount: 5432,
    lessonsCount: 48,
    language: 'English',
    hasCertificate: true,
    whatYouWillLearn: [
      'Leadership styles and when to use them',
      'Effective communication strategies',
      'Building high-performing teams',
      'Conflict resolution',
      'Decision making and problem solving',
      'Strategic planning',
    ],
    requirements: ['Some work experience helpful but not required'],
    modules: [],
    tags: ['Leadership', 'Management', 'Business', 'Communication'],
    featured: true,
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development with React Native',
    shortDescription: 'Build cross-platform mobile apps for iOS and Android.',
    description: 'Learn to build professional mobile applications using React Native. Create apps that work on both iOS and Android from a single codebase.',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '10 weeks',
    price: 5999,
    image: '/course-images/mobile-dev.jpg',
    instructor: {
      id: 'instructor-6',
      name: 'Alex Thompson',
      title: 'Mobile Development Expert',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
      bio: 'Built over 50 mobile apps with millions of downloads. Former mobile lead at major tech company.',
    },
    rating: 4.7,
    studentsCount: 4521,
    lessonsCount: 124,
    language: 'English',
    hasCertificate: true,
    whatYouWillLearn: [
      'React Native fundamentals',
      'Navigation and routing',
      'API integration',
      'State management',
      'Publishing to app stores',
      'Performance optimization',
    ],
    requirements: ['JavaScript and React knowledge', 'Basic mobile development concepts'],
    modules: [],
    tags: ['React Native', 'Mobile Development', 'iOS', 'Android'],
    featured: false,
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

export function getCoursesByCategory(category: string): Course[] {
  return courses.filter(course => course.category === category);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter(course => course.featured);
}

export function searchCourses(query: string): Course[] {
  const lowerQuery = query.toLowerCase();
  return courses.filter(course => 
    course.title.toLowerCase().includes(lowerQuery) ||
    course.description.toLowerCase().includes(lowerQuery) ||
    course.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

