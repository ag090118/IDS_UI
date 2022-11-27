import './App.css';
import IdsPage from './components/Form/idsPage'
import Home from './components/HomePage/home'
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ids" element={<IdsPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
