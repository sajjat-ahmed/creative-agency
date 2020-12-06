import React from 'react';
import BigAgency from '../BigAgency/BigAgency';
import Contact from '../Contact/Contact';
import Feedbacks from '../Feedbacks/Feedbacks';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';
const Home = () => {
  return (
    <div>
      <Header></Header>
      <BigAgency></BigAgency>
      <Services></Services>
      <OurWorks></OurWorks>
      <Feedbacks></Feedbacks>
      <Contact></Contact>
    </div>
  );
};

export default Home;