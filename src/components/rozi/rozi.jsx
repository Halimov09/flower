import { Padding } from "@mui/icons-material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useEffect, useState } from "react";
import {Buying} from "../";

const rozi = [
  {
    url: "https://flowers-lilac.vercel.app/img/imgonline-com-ua-resize-xsqnvQQCKP4F%20(1).png",
    name: "Розы 40 см",
    title:
      "Розы длиной 40 см Цвет: розовый/красный/белый/фиолетовый/бежевый/микс Упаковка: крафт бумага/прозрачная плёнка/цветная плёнка/без упаковки Цена указана за 1 ед.",
    narhi: "70р",
  },
  {
    url: "https://flowers-lilac.vercel.app/img/imgonline-com-ua-resize-FkZ1R5oCsmk5t.png",
    name: "Розы 50 см",
    title:
      "Розы длиной 50 см Цвет: розовый/красный/ белый/фиолетовый/бежевый/микс Упаковка: крафт бумага/прозрачная плёнка/цветная плёнка/без упаковки Цена указана за 1 ед.",
    narhi: "80р",
  },
  {
    url: "https://flowers-lilac.vercel.app/img/imgonline-com-ua-resize-EPr7IBbA2JWh1U.png",
    name: "Розы 60 см",
    title:
      "Розы длиной 60 см Цвет: розовый/красный/белый/фиолетовый/бежевый/микс Упаковка:крафт бумага/прозрачная плёнка/цветная плёнка/без упаковки Цена указана за 1 ед.",
    narhi: "90р",
  },
  {
    url: "https://flowers-lilac.vercel.app/img/imgonline-com-ua-resize-WvWORK7fZKRPyeP.png",
    name: "Розы 70 см",
    title:
      "Розы длиной 70 см Цвет: розовый/красный/белый/фиолетовый/бежевый/микс Упаковка:крафт бумага/прозрачная плёнка/цветная плёнка/без упаковки Цена указана за 1 ед.",
    narhi: "100р",
  },
  {
    url: "https://flowers-lilac.vercel.app/img/imgonline-com-ua-resize-6phJ0bamWaewG.png",
    name: "Розы 80 см",
    title:
      "Розы длиной 80 см Цвет: розовый/красный/белый/фиолетовый/бежевый/микс Упаковка:крафт бумага/прозрачная плёнка/цветная плёнка/без упаковки Цена указана за 1 ед.",
    narhi: "110р",
  },
];

const Rozi = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    setItem(rozi);
  }, [rozi]);

  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: "60px",
        gap: "20px",
      }}
      className="shadow-sm p-3 mb-5 bg-body-tertiary rounded rozi"
    >
      {items.map((item, i) => (
        <Card sx={{ maxWidth: "300px" }}>
          <div>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200px"
                image={item.url}
                alt={item.url}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" mt={1}>
                  {item.narhi}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Buying info={item.name}/>
            </CardActions>
            </div>
            </Card>
            ))}
    </div>
  );
};

export default Rozi;
