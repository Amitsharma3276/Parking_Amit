import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

export default function CreateVehicleFormDialog() {
    const [open, setOpen] = React.useState(false);
    const [veh_type, set_veh_type] = React.useState("");
  const [veh_registration_no, set_veh_registration_no] = React.useState("");
  const [veh_used_for, set_veh_used_for] = React.useState("");

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const handleCloseAndSubmit = () => {
      
    const apiUrl = "http://localhost:8000/api/vehicles/";
    axios
      .post(apiUrl, {
          veh_type: veh_type,
          veh_registration_no: veh_registration_no,
          veh_used_for:veh_used_for
      })
            .then((repos) => { });
    
    setOpen(false);
    window.location.reload();
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleClickOpen}
      >
        Add Vehicle
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Batch Number</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={veh_type}
            onChange={(event) => {
              set_veh_type(event.target.value);
            }}         
            label="Vehicle  type"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={veh_registration_no}
            onChange={(event) => {
              set_veh_registration_no(event.target.value);
            }}
            label="Vehicle REGISTERATION NO"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={veh_used_for}
            onChange={(event) => {
              set_veh_used_for(event.target.value);
            }}
            label="vehicle used for"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseAndSubmit} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
