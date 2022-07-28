import React from "react";
import Footer from "../../../components/Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Branding from "../Branding/Branding";
import ContactUs from "../ContactUs/ContactUs";
import JobHunter from "../ForJobHunter/JobHunter";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import WhyJobOnboard from "../WhyJobOnboard/WhyJobOnboard";

const Home = () => {
  return (
    <>
      <Banner />
      <Branding />
      <WhyJobOnboard />
      <JobHunter />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;