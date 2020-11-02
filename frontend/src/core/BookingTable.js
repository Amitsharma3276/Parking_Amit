import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Button from "@material-ui/core/Button";
import BookingFormDialog from "./components/BookingFormDialog";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BookingTable() {
  const classes = useStyles();

  const [mainTableRows, setMainTableRows] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/bookings/";
    axios.get(apiUrl).then((repos) => {
      setMainTableRows(repos.data);
    });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Booked Emp name</TableCell>
            <TableCell align="right">Bookers  name</TableCell>
            <TableCell align="right">BOoked Vehicle No</TableCell>
            <TableCell align="right">Updated At</TableCell>
            <TableCell align="right">Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mainTableRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.booked_emp_name}</TableCell>
              <TableCell align="right">{row.booked_by_name}</TableCell>
              <TableCell align="right">{row.booked_veh_no}</TableCell>
              <TableCell align="right">{row.updatedAt}</TableCell>
              <TableCell align="right">
                <BookingFormDialog row={row} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
