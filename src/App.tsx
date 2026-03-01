import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { ClientTestimonials } from './pages/ClientTestimonials';
import TermsAndCondition from './pages/Footer/TermsAndCondition';
import PrivacyPolicy from './pages/Footer/PrivacyPolicy';
import CookiesPolicy from './pages/Footer/CookiesPolicy';
import RefundPolicy from './pages/Footer/RefundPolicy';

const PublicLayout = () => (
  <div className="min-h-screen flex flex-col font-primary">
    <Navbar />
    <main className="grow">
      <Outlet />
    </main>
    <Footer />
    <AIAssistant />
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<ClientTestimonials />} />
          <Route path="/contact" element={<Contact />} />

          {/* 2. Added Legal & Policy Routes here */}
          <Route path="/termsOfUse" element={<TermsAndCondition />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
        </Route>

        
      </Routes>
    </Router>
  );
}
