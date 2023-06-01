import { kustavrozi } from "../../constants/index";
import { Flower } from "../";

const Kustavrozi = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="container">
        <Flower items={kustavrozi} />
      </div>
    </div>
  );
};

export default Kustavrozi;
