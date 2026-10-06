// Mock authentication system
// This can be easily replaced with real auth (Auth.js, Clerk, Supabase, etc.)

export type UserRole = 'student' | 'teacher';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const AUTH_STORAGE_KEY = 'viitaran_auth';

// Get current auth state from localStorage
export function getAuthState(): AuthState {
  if (typeof window === 'undefined') {
    return { user: null, isAuthenticated: false };
  }

  try {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      return {
        user: data.user,
        isAuthenticated: true,
      };
    }
  } catch (error) {
    console.error('Error reading auth state:', error);
  }

  return { user: null, isAuthenticated: false };
}

// Sign in
export async function signIn(email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Mock validation
  if (!email || !password) {
    return { success: false, error: 'Email and password are required' };
  }

  if (password.length < 6) {
    return { success: false, error: 'Invalid credentials' };
  }

  // Create mock user
  const user: User = {
    id: crypto.randomUUID(),
    email,
    firstName: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
    lastName: 'User',
    role: email.includes('teacher') ? 'teacher' : 'student',
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    createdAt: new Date().toISOString(),
  };

  // Store in localStorage
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user }));

  return { success: true, user };
}

// Sign up
export async function signUp(data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}): Promise<{ success: boolean; user?: User; error?: string }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock validation
  if (!data.email || !data.password || !data.firstName || !data.lastName) {
    return { success: false, error: 'All fields are required' };
  }

  if (data.password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters' };
  }

  // Create mock user
  const user: User = {
    id: crypto.randomUUID(),
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    role: data.role,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.email}`,
    createdAt: new Date().toISOString(),
  };

  // Store in localStorage
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user }));

  return { success: true, user };
}

// Sign out
export function signOut(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    window.location.href = '/';
  }
}

// Update user profile
export async function updateProfile(updates: Partial<User>): Promise<{ success: boolean; user?: User; error?: string }> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const authState = getAuthState();
  if (!authState.user) {
    return { success: false, error: 'Not authenticated' };
  }

  const updatedUser = { ...authState.user, ...updates };
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user: updatedUser }));

  return { success: true, user: updatedUser };
}
