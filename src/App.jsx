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
import Instructors from './pages/Instructors';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import BrandedPlaceholder from './pages/BrandedPlaceholder';
import NotFound from './pages/NotFound';

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
      { path: 'instructors', element: <Instructors /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'cart', element: <Cart /> },
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

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
