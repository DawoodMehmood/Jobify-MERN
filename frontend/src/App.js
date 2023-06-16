import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import PostJob from './pages/PostJob'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import About from './pages/About'
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
          <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/contact" 
              element={<Contact />} 
            />
            <Route 
              path="/about" 
              element={<About />} 
            />
            <Route 
              path="/post-job" 
              element={<PostJob />} 
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
} 

export default App;

