import { tyulpani } from "../../constants/index";
import { Flower } from "../";

const Tyulpani = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="container">
        <Flower items={tyulpani} />
      </div>
    </div>
  );
};

export default Tyulpani;
