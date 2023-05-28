import { Route, Routes } from "react-router-dom";
import { About, Footer, Main, Navbar, All, Buying, Pioni, Xrizantem, Rozi, Kustavrozi, Gerberi, Tyulpani } from "../";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pioni" element={<Pioni />} />
        <Route path="/xrizantem" element={<Xrizantem />} />
        <Route path="/rozi" element={<Rozi />} />
        <Route path="/kustavrozi" element={<Kustavrozi />} />
        <Route path="/gerberi" element={<Gerberi />} />
        <Route path="/tyulpani" element={<Tyulpani />} />
      </Routes>
      <About />
      <Footer />

    </div>
  );
};

export default App;
