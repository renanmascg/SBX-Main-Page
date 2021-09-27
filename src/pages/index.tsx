import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainInfoSection from '../components/MainInfoSection';
import InfoSection from '../components/InfoSection';
import { homeObj } from '../components/MainInfoSection/Data';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';


const HomePage: React.FC = () => {

  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <MainInfoSection obj ={homeObj}/>
      <Services />
      <InfoSection obj={homeObjOne}/>
      <InfoSection obj={homeObjTwo}/>
      <InfoSection obj={homeObjThree}/>
      <Footer />
    </>
  );
}

export default HomePage;