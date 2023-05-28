import { Brightness2, Brightness3, MenuRounded } from "@mui/icons-material";
import { useState } from "react";
import Search from "../search/search";
import { colors } from "../../constants/color";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

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
          <a style={{display: "block", color: colors.secondary }} href="/rozi">Розы</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="/xrizantem">хризантемы</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="/pioni">Пионы</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="/kustavrozi">Куставые розы</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="/gerberi">Герберы</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="/tyulpani">Тюльпаны</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="/pinrozi">Пионовидние розы</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="/karobrozi">Розы в коробке</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="/korzinrozi">Розы в корзине</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="/orhideya">Орхидея</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="/romashka">Ромашки</a>
        </li>
        <li className="list-group-item list-group-item-success" >
          <a style={{display: "block", color: colors.secondary }} href="/koznadpisyu">Корзину с надписью</a>
        </li>
      </ul>
      <Search />
    </div>
  );
};

export default Menu;
