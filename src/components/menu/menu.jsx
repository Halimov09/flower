import { MenuRounded } from "@mui/icons-material";
import { useState } from "react";
import Search from "../search/search";
import { colors } from "../../constants/color";
import { Button } from "@mui/material";

const Menu = () => {
  const [hide, setHide] = useState(true);

  return (
    <div className="menu-button" >
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setHide(!hide);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "3px 10px",
        }}
      >
        {" "}
        Каталог<MenuRounded style={{ marginLeft: "10px" }} />
      </Button>
      <ul className="all-menu list-group " style={{ display: hide || "block" , zIndex: 10}}>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="">Розы</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="">хризантемы</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="">Пионы</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="">Куставые розы</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="">Герберы</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="">Тюльпаны</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="">Пионовидние розы</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="">Розы в коробке</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="">Розы в корзине</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="">Орхидея</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="">Ромашки</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="">Корзину с надписью</a>
        </li>
      </ul>
      <Search />
    </div>
  );
};

export default Menu;
