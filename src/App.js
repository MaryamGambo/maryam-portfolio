// import React from 'react';
// import { Button, Text } from "@maryamgambo/react-component-library";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//          <Button label="Test Button" backgroundColor="#55bd90"/>
//          <Text text="Hello World" backgroundColor="red"/>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>);
}
