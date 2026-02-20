import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import CourseDetail from './pages/CourseDetail';
import Blog from './pages/Blog';
import Events from './pages/Events';
import EventsPage from './pages/EventsPage';
import FeedbackPage from './pages/FeedbackPage';
import Instructors from './pages/Instructors';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import BrandedPlaceholder from './pages/BrandedPlaceholder';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';

// Admin Components
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import CoursesManagement from './pages/admin/CoursesManagement';
import UsersManagement from './pages/admin/UsersManagement';
import EventsManagement from './pages/admin/EventsManagement';
import EnrollmentsManagement from './pages/admin/EnrollmentsManagement';
import FeedbackManagement from './pages/admin/FeedbackManagement';
import ContactManagement from './pages/admin/ContactManagement';
import Analytics from './pages/admin/Analytics';
import ProtectedRoute from './components/layout/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'courses', element: <Courses /> },
      { path: 'courses/:id', element: <CourseDetail /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'events', element: <Events /> },
            { path: 'events-all', element: <EventsPage /> },
            { path: 'feedback', element: <FeedbackPage /> },
            { path: 'feedback/:courseId', element: <FeedbackPage /> },
      { path: 'instructors', element: <Instructors /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'cart', element: <Cart /> },
      { path: 'profile', element: <ProtectedRoute><UserProfile /></ProtectedRoute> },
      { path: 'careers', element: <BrandedPlaceholder title="Careers" /> },
      { path: 'press', element: <BrandedPlaceholder /> },
      { path: 'help', element: <BrandedPlaceholder /> },
      { path: 'partners', element: <BrandedPlaceholder /> },
      { path: 'community', element: <BrandedPlaceholder /> },
      { path: 'privacy', element: <BrandedPlaceholder /> },
      { path: 'terms', element: <BrandedPlaceholder /> },
      { path: 'cookies', element: <BrandedPlaceholder /> },
      { path: 'gdpr', element: <BrandedPlaceholder /> },
      { path: 'get-started', element: <BrandedPlaceholder /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute requiredRole="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: 'courses', element: <CoursesManagement /> },
      { path: 'events', element: <EventsManagement /> },
      { path: 'users', element: <UsersManagement /> },
      { path: 'enrollments', element: <EnrollmentsManagement /> },
      { path: 'feedback', element: <FeedbackManagement /> },
      { path: 'contacts', element: <ContactManagement /> },
      { path: 'analytics', element: <Analytics /> },
    ],
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
