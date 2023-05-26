import { Route, Routes } from "react-router-dom";
import { About, Footer, Main, Navbar, All } from "../";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <All/>
      <About />
      <Footer />
    </div>
  );
};

export default App;
