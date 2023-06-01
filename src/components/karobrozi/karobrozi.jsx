import { karobrozi } from "../../constants/index";
import { Flower } from "../";

const Karobrozi = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="container">
        <Flower items={karobrozi} />
      </div>
    </div>
  );
};

export default Karobrozi;
