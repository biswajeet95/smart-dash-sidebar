import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Sattings from "./Pages/Sattings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sattings" element={<Sattings />} />
      </Routes>
    </div>
  );
}

export default App;
