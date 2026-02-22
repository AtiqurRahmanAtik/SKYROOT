
import { useLocation } from 'react-router';
import ContactHero from '../../Components/Contact/ContactHero';
import ContactMain from '../../Components/Contact/ContactMain';
import Footer from '../../Components/Contact/Footer';

const Contacts = () => {

    const location = useLocation();
    const hiddenFooter = location.pathname;
console.log(hiddenFooter)

  return (
   
    <>
    <div className="min-h-screen font-sans selection:bg-purple-100 selection:text-purple-900">
      <ContactHero />
      <ContactMain />
      <Footer />
    </div>
    </>

  );
};

export default Contacts;