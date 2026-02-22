import { Route, Routes } from "react-router";

import Root from "./Root/Root";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Projects from "../Pages/Projects/Projects";
import Services from "../Pages/Services/Services";
import Contacts from "../Pages/contact/Contact";





const Routers = () => {
 
  return (


    <Routes>
      {/* Nasted Routes of Root */}
      <Route path="/" element={<Root/>}>
      
      <Route index element={<Home/>}></Route>
      <Route path="/aboutUs" element={<AboutUs/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/services" element={<Services/>}> </Route>
      <Route path="/contact" element={<Contacts/>}> </Route>
      
      </Route>

      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>


  //    <Route path="dashboard" element={<Dashboard />}>
  //   <Route index element={<Home />} />
  //   <Route path="settings" element={<Settings />} />
  // </Route>

  );
};

export default Routers;