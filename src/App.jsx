import React from "react";
import Nav from "./components/nav";
import Meme from "./components/meme";
function App() {
  return (
    <div className="App">
      <Nav />
      <section className="main">
        <Meme />
      </section>
    </div>
  );
}

export default App;
