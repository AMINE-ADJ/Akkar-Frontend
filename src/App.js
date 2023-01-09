import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomeBeforeAuth from "./pages/HomeBeforeAuth";
import HomeAfterAuth from "./pages/HomeAfterAuth";
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeBeforeAuth />} />
        <Route path="authenticated" element={<HomeAfterAuth />} />
      </Routes>
    </div>
  );
}

export default App;
