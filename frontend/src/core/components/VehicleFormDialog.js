import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

export default function VehicleFormDialog({ row }) {
  const [open, setOpen] = React.useState(false);
  const [booked_emp_name, set_booked_emp_name] = React.useState("");
  const [booked_by_name, set_booked_by_name] = React.useState("");

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const handleCloseAndSubmit = () => {
      
    const apiUrl = "http://localhost:8000/api/bookings/";
    axios
      .post(apiUrl, {
          booked_emp_name: booked_emp_name,
          booked_by_name: booked_by_name,
          booked_veh_no:row.veh_registration_no
      })
            .then((repos) => { });
        const apiUrl2 = "http://localhost:8000/api/vehicles/" + row.id;
         axios
      .delete(apiUrl2, { })
             .then((repos) => {
                 console.log("deleted this one"+row.id);
             });

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
        Book
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
       
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={row.veh_registration_no}
                      disabled={true}
            label="Booked Vehicle No."
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={booked_emp_name}
            onChange={(event) => {
              set_booked_emp_name(event.target.value);
            }}
            label="Booked emp name"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={booked_by_name}
            onChange={(event) => {
              set_booked_by_name(event.target.value);
            }}
            label="Booked By Name"
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
