import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Indonesia from './pages/Indonesia';
import Programming from './pages/Programming';
import Saved from './pages/Saved';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Indonesia />} />
        <Route path="/indonesia" element={<Indonesia />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
