import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Chat from "./components/Chat";
import About from "./pages/About";
import NotFound from "./components/NotFound";
import BrainSegmentationViewer from "./components/BrainSegmentationViewer"; // Import the new component

function HomePage() {
  return (
    <>
      <Hero />
      <Products />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/brain-segmentation" element={<BrainSegmentationViewer />} /> {/* New route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
