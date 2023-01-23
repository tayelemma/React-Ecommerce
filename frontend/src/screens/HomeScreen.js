import React from "react";
import { useLocation } from "react-router-dom";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import ContactInfo from "../components/homeComponents/ContactInfo";
import ShopSection from "./../components/homeComponents/ShopSelection";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";

const HomeScreen = () => {
  window.scrollTo(0, 0);

  const location = useLocation();
  const keyword = location.pathname.split("/")[2];
  const pagenumber = location.pathname.split("/")[4];

  console.log(location);
  console.log(keyword, "keyword");
  console.log(pagenumber, "pagenumber");

  return (
    <div>
      <Header />
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;