import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { CardActionArea, CardActions } from "@mui/material";
import { Buying } from "../";
import { useEffect, useState } from "react";

const Flower = ({ items }) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(items);
  }, [items]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "60px",
          gap: "30px",
        }}
        className="shadow-sm p-3 mb-5 bg-body-tertiary rounded rozi container"
      >
        {item.map((item, i) => (
          <Card sx={{ maxWidth: "300px" }}>
            <div>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width={"300px"}
                  height="auto"
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
                <Buying info={item.name} />
              </CardActions>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Flower;
