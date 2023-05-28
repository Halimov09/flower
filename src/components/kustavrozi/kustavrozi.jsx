import { kustavrozi } from "../../constants/index";
import { Flower } from "../";

const Kustavrozi = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="container">
        <Flower items={kustavrozi} />
      </div>
    </div>
  );
};

export default Kustavrozi;
