import React from "react";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Carousel from "./components/Carousel";
import BasicStatistics from "./components/Statistics";
import Pricing from "./components/Pricing";
import SplitWithImage from "./components/SplitWithImage";
import Footer from "./components/Footer";
import TestimonialPage from './components/Testimonial';
import Contact from './components/Contact';
import NewsLetter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Carousel />
        <BasicStatistics />
        <SplitWithImage />
        <Pricing />
        <TestimonialPage />
        <Contact />
        <NewsLetter />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
