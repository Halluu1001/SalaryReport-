import React from 'react';
import Pdf from "react-to-pdf";
import {Button} from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      maxWidth: 300,
    },
  });
const ref = React.createRef();

const PDF = (props) => {
    const classes = useStyles();
  return (
   <>
      <div className="Post" ref={ref}>
      <h3>Employee Name:</h3><h3>{props.empname}</h3>
      <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Earnings</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {/* <StyledTableRow key={props.basicgross}>    */}
        <StyledTableRow> <StyledTableCell align="right" >Basic Gross Pay</StyledTableCell>
        <StyledTableCell align="center" >{props.basicgross}</StyledTableCell>
        </StyledTableRow>
            <StyledTableRow> <StyledTableCell align="right">Approved Leave</StyledTableCell>
            <StyledTableCell align="center" >{props.aprleave}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>   <StyledTableCell align="right">Total Leave</StyledTableCell>
            <StyledTableCell align="center" >{props.leave}</StyledTableCell></StyledTableRow>
            <StyledTableRow>  <StyledTableCell align="right">Final Gross Pay</StyledTableCell>
            <StyledTableCell align="center" >{props.fgross}</StyledTableCell></StyledTableRow>
            <StyledTableRow> <StyledTableCell align="right">Basic</StyledTableCell>
            <StyledTableCell align="center" >{props.basic}</StyledTableCell></StyledTableRow>
            <StyledTableRow>  <StyledTableCell align="right">HR</StyledTableCell>
            <StyledTableCell align="center" >{props.hr}</StyledTableCell></StyledTableRow>
        {/* </StyledTableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
      <Pdf targetRef={ref} filename="Receipt.pdf">
        {({ toPdf }) => <Button size="small" style={{backgroundColor: '#561571', color: '#FFFFFF', float: 'right',marginTop: -480, marginRight: -50}} onClick={toPdf}>Generate Receipt</Button>}
      </Pdf>
    </>
  );
}

export default PDF;