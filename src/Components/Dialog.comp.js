import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

const Confirmation = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-title"
    >
      <DialogTitle id="alert-title">{"Are you sure to delete ? "}</DialogTitle>
      <DialogActions>
        <Button onClick={() => props.onDelete()}>Yes</Button>
        <Button onClick={() => props.close()}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirmation;
