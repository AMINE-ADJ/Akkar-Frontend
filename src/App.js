import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomeBeforeAuth from "./pages/HomeBeforeAuth";
import HomeAfterAuth from "./pages/HomeAfterAuth";
import Details from "./pages/Details.js";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeBeforeAuth />} />
        <Route path="/authenticated" element={<HomeAfterAuth />} />
        <Route path="/details" element={<Details />} />

      </Routes>
    </div>
  );
}

export default App;
