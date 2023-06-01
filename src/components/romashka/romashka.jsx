import { romashka } from "../../constants/index";
import { Flower } from "../";

const Romashka = () => {
  return (
    <div style={{ paddingTop: "150px"}}>
      <div className="container">
        <Flower items={romashka} />
      </div>
    </div>
  );
};

export default Romashka;
