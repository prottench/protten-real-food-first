import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Protein from "./pages/Protein";
import Energy from "./pages/Energy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/protein" element={<Protein />} />
      <Route path="/energy" element={<Energy />} />
    </Routes>
  );
}

export default App;
