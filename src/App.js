import './App.css';
import IdsPage from './components/Form/idsPage'
import Home from './components/HomePage/home'
import BestModel from './components/Form/bestModel';
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ids" element={<IdsPage />} />
            <Route path="/bestModel" element={<BestModel />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
