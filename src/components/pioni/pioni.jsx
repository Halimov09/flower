import { pioni } from "../../constants/index";
import { Flower } from "../";

const Pioni = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="container">
        <Flower items={pioni} />
      </div>
    </div>
  );
};

export default Pioni;
