import { korzinrozi } from "../../constants/index";
import { Flower } from "../";

const Korzinrozi = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="container">
        <Flower items={korzinrozi} />
      </div>
    </div>
  );
};

export default Korzinrozi;
