import { rozi } from "../../constants/index";
import { Flower } from "../";

const Rozi = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="container">
        <Flower items={rozi} />
      </div>
    </div>
  );
};

export default Rozi;