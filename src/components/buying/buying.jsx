import * as React from "react";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import { useState } from "react";
import axios from "axios";


const Buying = ({ info }) => {
  const [size, setSize] = React.useState(undefined);
  const [post, setPost] = useState({
    nomi: info,
    name: "",
    tel: "",
    adres: "",
  });

  const handelinput = (e) => {
    const newData = { ...post };
    newData[e.target.id] = e.target.value;
    setPost(newData);
    console.log(newData);
  };

  function handelSubmit(event) {
    event.preventDefault();
    axios
      .post(
        `https://api.telegram.org/bot1912757273:AAGsY0cjlI-7hFZcbWK7AxszF5HIGKZZi-I/sendMessage?chat_id=1004979323&text=${JSON.stringify(
          post
        )}`,
        {
          Headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
            "Custom-Field": "some value",
          },
        }
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    console.log(post);
  }

  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Button
          variant="solid"
          color="success"
          size="md"
          onClick={() => setSize("md")}
        >
          ЗАКАЗАТ 
        </Button>
      </Stack>
      <Modal open={!!size} onClose={() => setSize(undefined)}>
        <ModalDialog
          aria-labelledby="size-modal-title"
          aria-describedby="size-modal-description"
          size={size}
        >
          <ModalClose />
          <Typography id="size-modal-title" component="h2">
            {info}
          </Typography>
          <form className="row g-3" onSubmit={handelSubmit}>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Ваше имя
              </label>
              <input
                onChange={(e) => handelinput(e)}
                name="name"
                type="text"
                className="form-control"
                id="name"
                value={post.name}
                required
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Ваш телефон
              </label>
              <input
                onChange={(e) => handelinput(e)}
                name="tel"
                type="tel"
                className="form-control"
                id="tel"
                value={post.tel}
                required
              />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Адрес доставки
              </label>
              <input
                type="text"
                className="form-control"
                id="adres"
                placeholder="Адрес доставки"
                onChange={(e) => handelinput(e)}
                value={post.adres}
                name="adres"
              />
            </div>

            <div class="col-12">
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Я даю согласие на обработку персональных данных
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
};

export default Buying;
