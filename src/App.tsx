import React from "react";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Carousel from "./components/Carousel";
import BasicStatistics from "./components/Statistics";
import Pricing from "./components/Pricing";
import SplitWithImage from "./components/SplitWithImage";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Carousel />
        <BasicStatistics />
        <SplitWithImage />
        <Pricing />
        <Cards />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
