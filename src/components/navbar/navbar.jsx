import { Brightness2 } from "@mui/icons-material";
import { Menu } from "../";
import { colors } from "../../constants/color";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useState } from "react";
import BedtimeIcon from "@mui/icons-material/Bedtime";
const Navbar = () => {
  const [tru, setTru] = useState(false);

  const luna = () => {
    if (tru === false) {
      localStorage.setItem("ligh", 1);
      setTru(true)
    }else{
      localStorage.removeItem("ligh", 1)
      setTru(false)
    }

    console.log(localStorage.getItem("ligh"));
  };

  const darlightmode = () => {
    const darkmode = () => {
      document.querySelector("body").setAttribute("data-theme", "dark");
    };
    const ligtmode = () => {
      document.querySelector("body").setAttribute("data-theme", "light");
    };
    if (localStorage.getItem("ligh") == 1) darkmode();
    else ligtmode();
  };

  darlightmode();

  return (
    <div
      className="navbar shadow  mb-5 bg-body-tertiary darkmode"
      style={{ backgroundColor: colors.white }}
    >
      <div style={{ width: "100%" }}>
        <div className="container navbar-container">
          <div className="logo">
            <a
              style={{
                color: `${colors.gren}`,
                fontSize: "18px",
                fontWeight: "bold",
              }}
              href="/"
            >
              ROSEBUDFLOWERS
            </a>
          </div>
          <WbSunnyIcon
            onClick={luna}
            style={{
              display: tru ? "block" : "none",
              cursor: "pointer",
              color: colors.gren,
              marginLeft: "15px",
              width: "50px",
            }}
          />
          <BedtimeIcon
            onClick={luna}
            style={{
              color: "black",
              cursor: "pointer",
              display: tru ? "none" : "block",
              marginLeft: "15px",
              width: "50px",
              color: colors.gren,
            }}
          />
          <colors ln={tru} />
          <div className="menu">
            <Menu />
          </div>
          <div className="contact">
            <a
              style={{
                color: `${colors.secondary}`,
                fontSize: "18px",
                fontWeight: "bold",
              }}
              href="#"
            >
              +7 926 394 53 25
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
