import { Route, Routes } from "react-router-dom";
import { About, Footer, Main, Navbar, All, Buying, Pioni, Xrizantem, Rozi, Kustavrozi, Gerberi, Tyulpani, Pionrozi, Karobrozi, Korzinrozi, Orhideya, Romashka, Korznadpisyu, Asosiy } from "../";
import { colors } from "../../constants/color";

const App = () => {
  return (
    <div style={{backgroundColor: colors.white}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pioni" element={<Pioni />} />
        <Route path="/xrizantem" element={<Xrizantem />} />
        <Route path="/rozi" element={<Rozi />} />
        <Route path="/kustavrozi" element={<Kustavrozi />} />
        <Route path="/gerberi" element={<Gerberi />} />
        <Route path="/tyulpani" element={<Tyulpani />} />
        <Route path="/pionrozi" element={<Pionrozi />} />
        <Route path="/karobrozi" element={<Karobrozi />} />
        <Route path="/korzinrozi" element={<Korzinrozi />} />
        <Route path="/orhideya" element={<Orhideya />} />
        <Route path="/romashka" element={<Romashka />} />
        <Route path="/korznadpisyu" element={<Korznadpisyu />} />
      </Routes>
      <Asosiy/>
      <About />
      <Footer />

    </div>
  );
};

export default App;
