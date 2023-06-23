import { pionrozi } from "../../constants/index";
import { Flower } from "../";

const Pionrozi = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="container">
        <Flower items={pionrozi} />
      </div>
    </div>
  );
};

export default Pionrozi;