import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { CardActionArea, CardActions } from "@mui/material";
import { Buying } from "../";
import { useEffect, useState } from "react";
import { asosiy } from "../../constants";
import { colors } from "../../constants/color";

const Asosiy = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(asosiy);
  }, [asosiy]);
  return (
    <div style={{paddingTop: "90px"}} className="darkmode">

    <h3 style={{color: colors.gren, paddingLeft: "10px"}}>Популярный товар :</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "30px",
          gap: "30px",
        }}
        className="shadow-sm p-3 mb-5 bg-body-tertiary rounded rozi container"
      >
        {item.map((item, i) => (
          <Card sx={{ maxWidth: "300px" }} className="darklight">
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
                  <Typography gutterBottom variant="h5" component="div" style={{color: colors.gren}}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{color: colors.gren}}>
                    {item.title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" mt={1} style={{color: colors.gren}}>
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

export default Asosiy;
