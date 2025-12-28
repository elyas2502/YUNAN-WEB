
import React, { Suspense, lazy } from 'react';
/* Added @ts-ignore to bypass false positive type error for react-router-dom exports */
// @ts-ignore
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { AppProvider } from './contexts/AppContext';
import GlobalLoader from './components/GlobalLoader';

// Lazy Load Pages for Performance Efficiency
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Book = lazy(() => import('./pages/Book'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Scholarships = lazy(() => import('./pages/Scholarships'));
const Programs = lazy(() => import('./pages/Programs'));
const Destinations = lazy(() => import('./pages/Destinations'));
const DestinationDetail = lazy(() => import('./pages/DestinationDetail'));
const SuccessStories = lazy(() => import('./pages/SuccessStories'));

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Suspense fallback={<GlobalLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/:id" element={<DestinationDetail />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/book" element={<Book />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </AppProvider>
  );
};

export default App;
