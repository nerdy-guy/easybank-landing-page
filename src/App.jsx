import React from "react";
import Articles from "./components/Articles/Articles";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
