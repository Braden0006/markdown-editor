import { useState } from "react";

import Navbar from "./components/Navbar";
import Preview from "./components/Preview";

function App() {

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Preview />
      </main>
    </>
  );
}

export default App;
