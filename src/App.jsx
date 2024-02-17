import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home";
import About from './About';
import {Userdetails} from './Userdetails';
function App() {
  return (
    <Userdetails>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Userdetails>
  );
}

export default App
