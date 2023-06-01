import { colors } from "../../constants/color";

const Footer = () => {
  return (
    <div style={{ backgroundColor: colors.white, marginTop: "90px" }}>
      <div className="container" style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
        <div className="one"></div>
        <div className="two"><a href="#">Made on Tillo All reserved</a></div>
        <div className="three"></div>
      </div>
    </div>
  );
};

export default Footer;
