import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./MyNavbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Test from "./components/Test.jsx";
import Search from "./components/Search.jsx";
import Notfound from "./components/Notfound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/test" element={<Test />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
