import React from 'react';
import HeroSection from '../../Components/Home/HeroSection';
import StatsSection from '../../Components/Home/StatsSection';
import ProjectsSection from '../../Components/Home/ProjectsSection';
import LatestUpdates from '../../Components/Home/LatestUpdates';
import Footer from '../../Components/Home/Footer';


const Home = () => {
  return (

    <>
    
<div className="min-h-screen font-sans">
       <HeroSection/>

    <StatsSection/>

    <ProjectsSection/>

    <LatestUpdates/>

    <Footer/>

</div>
 

    </>
  );
};

export default Home;