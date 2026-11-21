import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Cars from "./pages/cars";
import CarDetail from "./pages/caretail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;