import { Route, Routes } from "react-router-dom";
import { About, Footer, Main, Navbar, All, Buying, Pioni, Xrizantem, Rozi } from "../";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pioni" element={<Pioni />} />
        <Route path="/xrizantem" element={<Xrizantem />} />
        <Route path="/rozi" element={<Rozi />} />
      </Routes>
      <About />
      <Footer />

    </div>
  );
};

export default App;
