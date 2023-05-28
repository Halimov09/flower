import { gerberi } from "../../constants/index";
import { Flower } from "../";

const Gerberi = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="container">
        <Flower items={gerberi} />
      </div>
    </div>
  );
};

export default Gerberi;
