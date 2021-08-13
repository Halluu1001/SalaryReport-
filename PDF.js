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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Logo from './Logo.png';


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
      maxWidth: 600,
    },
      root: {
        minWidth: 700,
      },
  });
const ref = React.createRef();

const PDF = (props) => {
    const classes = useStyles();
  return (
   <>
   <Card className={classes.root}>
      <CardContent>
      <div className="Post" ref={ref}>
        <p><img src={Logo} alt= "Logo" width="80px" height="80px"/><h2 style={{fontWeight: 'bold'}}>RUBIX </h2><h2 style={{fontWeight:'400', marginTop:'-70px', marginLeft:'110px'}}>TECHNOLOGIES</h2></p>
        <h5 style={{fontWeight:'400'}}>Rajagiri, 10 Salairoad,</h5>
        <h5 style={{fontWeight:'400', marginBottom: '40px' , marginTop: '-20px'}}>Thillainagar Trichy-620018</h5>
        <h5 style={{fontWeight:'400', marginBottom: '40px', marginLeft:'400px', marginTop: '-98px'}}>+91 9500601772</h5>
        <h5 style={{fontWeight:'400', marginBottom: '40px' ,marginLeft:'400px', marginTop: '-30px'}}>www.rubixtek.com</h5>
        
      <h3>Employee Name:</h3><h3 style={{fontWeight:'500',marginTop: '-58px', marginLeft:'220px'}}>{props.empname}</h3>
      <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Earnings</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {/* <StyledTableRow key={props.basicgross}>    */}
        <StyledTableRow> <StyledTableCell align="left" >Basic Gross Pay</StyledTableCell>
        <StyledTableCell align="right" >{props.basicgross}</StyledTableCell>
        </StyledTableRow>
            <StyledTableRow> <StyledTableCell align="left">Approved Leave</StyledTableCell>
            <StyledTableCell align="right" >{props.aprleave}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>   <StyledTableCell align="left">Total Leave</StyledTableCell>
            <StyledTableCell align="right" >{props.leave}</StyledTableCell></StyledTableRow>
            <StyledTableRow>  <StyledTableCell align="left">Final Gross Pay</StyledTableCell>
            <StyledTableCell align="right" >{props.fgross}</StyledTableCell></StyledTableRow>
            <StyledTableRow> <StyledTableCell align="left">Basic (40%)</StyledTableCell>
            <StyledTableCell align="right" >{props.basic}</StyledTableCell></StyledTableRow>
            <StyledTableRow>  <StyledTableCell align="left">HR (25%)</StyledTableCell>
            <StyledTableCell align="right" >{props.hr}</StyledTableCell></StyledTableRow>
        {/* </StyledTableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
    
      </div>
      </CardContent>
    </Card> 
      <Pdf targetRef={ref} filename="Receipt.pdf">
        {({ toPdf }) => <Button size="small" style={{backgroundColor: '#561571', color: '#FFFFFF', float: 'right',marginTop: -500, marginRight: 50}} onClick={toPdf}>Generate Receipt</Button>}
      </Pdf>
    </>
  );
}

export default PDF;