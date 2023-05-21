import React, { useState } from "react";
import "./App.css";
import { Nav, SideNav } from "./components";
import { About, Hero, Projects, Footer } from "./containers";

function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <SideNav location={location} />
      </header>
      <div>
        <Hero setLocation={setLocation} />
        <Projects setLocation={setLocation} />
        <About setLocation={setLocation} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
