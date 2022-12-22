import React from "react";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Carousel from "./components/Carousel";
import BasicStatistics from "./components/Statistics";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Carousel />
        <BasicStatistics />
      </ChakraProvider>
    </div>
  );
}

export default App;
