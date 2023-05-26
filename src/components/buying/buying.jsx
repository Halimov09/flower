import * as React from "react";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";

const Buying = ({ info }) => {
  const [size, setSize] = React.useState(undefined);

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
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
              Ваше имя
              </label>
              <input type="text" className="form-control" id="inputEmail4" required />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
              Ваш телефон
              </label>
              <input
                type="tel"
                className="form-control"
                id="inputPassword4"
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
                id="inputAddress"
                placeholder="Адрес доставки"
                required
              />
            </div>
            
            
            
            <div class="col-12">
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  required
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
