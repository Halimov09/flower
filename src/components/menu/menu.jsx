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
      <ul className="all-menu list-group darkmode" style={{ display: hide || "block" , zIndex: 10}} >
        <li className="list-group-item list-group-item-success darklight" >
          <a style={{display: "block", color: colors.gren }}  href="/rozi">Розы</a>
        </li>
        <li className="list-group-item list-group-item-success darklight" >
          <a style={{display: "block", color: colors.gren }}  href="/xrizantem">хризантемы</a>
        </li>
        <li className="list-group-item list-group-item-success darklight" >
          <a style={{display: "block", color: colors.gren }}  href="/pioni">Пионы</a>
        </li>
        <li className="list-group-item list-group-item-success darklight" >
          <a style={{display: "block", color: colors.gren }}  href="/kustavrozi">Куставые розы</a>
        </li>
        <li className="list-group-item list-group-item-success darklight" >
          <a style={{display: "block", color: colors.gren }}  href="/gerberi">Герберы</a>
        </li>
        <li className="list-group-item list-group-item-success darklight" >
          <a style={{display: "block", color: colors.gren }}  href="/tyulpani">Тюльпаны</a>
        </li>
        <li className="list-group-item list-group-item-success darklight" >
          <a style={{display: "block", color: colors.gren }}  href="/pionrozi">Пионовидние розы</a>
        </li>
        <li className="list-group-item list-group-item-success darklight" >
          <a style={{display: "block", color: colors.gren }}  href="/karobrozi">Розы в коробке</a>
        </li>
        <li className="list-group-item list-group-item-success darklight" >
          <a style={{display: "block", color: colors.gren }}  href="/korzinrozi">Розы в корзине</a>
        </li>
        <li className="list-group-item list-group-item-success darklight" >
          <a style={{display: "block", color: colors.gren }}  href="/orhideya">Орхидея</a>
        </li>
        <li className="list-group-item list-group-item-success darklight" >
          <a style={{display: "block", color: colors.gren }}  href="/romashka">Ромашки</a>
        </li>
        <li className="list-group-item list-group-item-success darklight" >
          <a style={{display: "block", color: colors.gren }}  href="/korznadpisyu">Корзину с надписью</a>
        </li>
      </ul>
      <Search />
    </div>
  );
};

export default Menu;
