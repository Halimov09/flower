import { korznadpisyu } from "../../constants/index";
import { Flower } from "../";

const Korznadpisyu = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="container">
        <Flower items={korznadpisyu} />
      </div>
    </div>
  );
};

export default Korznadpisyu;
