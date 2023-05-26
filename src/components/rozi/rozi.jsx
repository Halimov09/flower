import { Padding } from "@mui/icons-material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";


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
  ];

const Rozi = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginTop: "60px", gap: "20px"}} className="shadow-sm p-3 mb-5 bg-body-tertiary rounded rozi">
      {rozi.map((item, i) => (
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
              <Button size="medium" style={{padding: "5px 25px"}} color="success" variant="contained">
              ЗАКАЗАТ
              </Button>
            </CardActions>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Rozi;
