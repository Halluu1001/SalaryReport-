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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Logo from './Logo.png';
// import Up from './Up.PNG';
// import Down from './Down.PNG';


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
        marginRight: -100,
      },
  });
const ref = React.createRef();

const PDF = (props) => {
    const classes = useStyles();
  return (
   <>
   <Card className={classes.root} >
      <CardContent>
      <div className="Post" ref={ref}>
      {/* <p><img src={Up} alt= "Up" width="80px" height="80px"/></p> */}
       
        <p><img src={Logo} alt= "Logo" width="80px" height="80px"/><h2 style={{fontWeight: 'bold'}}>RUBIX </h2><h2 style={{fontWeight:'400', marginTop:'-70px', marginLeft:'110px'}}>TECHNOLOGIES</h2></p>
        <h4 style={{fontWeight:'400'}}>Rajagiri, 10 Salairoad,</h4>
        <h4 style={{fontWeight:'400', marginBottom: '40px' , marginTop: '-20px'}}>Thillainagar Trichy-620018</h4>
        <h4 style={{fontWeight:'400', marginBottom: '40px', marginLeft:'450px', marginTop: '-98px'}}>+91 9500601772</h4>
        <h4 style={{fontWeight:'400', marginBottom: '40px' ,marginLeft:'450px', marginTop: '-30px'}}>www.rubixtek.com</h4>
       
        <h1 style={{textAlign: "center"}}>PAY SLIP</h1>
      <h3>Employee Name:</h3><h3 style={{fontWeight:'500',marginTop: '-58px', marginLeft:'220px'}}>{props.empname}</h3>
      <h3>Designation:</h3><h3 style={{fontWeight:'500',marginTop: '-58px', marginLeft:'220px'}}>React JS</h3>
      <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Leaves</StyledTableCell>
            <StyledTableCell align="right">No.of Days</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>   <StyledTableCell align="left">Total Leave</StyledTableCell>
            <StyledTableCell align="right" >{props.leave}</StyledTableCell></StyledTableRow>
            <StyledTableRow> <StyledTableCell align="left">Approved Leave</StyledTableCell>
            <StyledTableCell align="right" >{props.aprleave}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
        </Table>
    </TableContainer><br/>
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
    <br/><br/>
    <h4 style={{ marginBottom: '-54px'}}>Employee Signature</h4><h4 style={{marginLeft: '500px'}}>Director</h4>
    {/* <p><img src={Down} alt= "Down" width="100px" height="90px" style={{marginTop: '200px'}}/></p> */}
      </div>
      </CardContent>
    </Card> 
      <Pdf targetRef={ref} filename="Receipt.pdf">
        {({ toPdf }) => <Button size="small" style={{backgroundColor: '#561571', color: '#FFFFFF', float: 'right',marginTop: -740, marginRight: 50}} onClick={toPdf}>Generate Receipt</Button>}
      </Pdf>
    </>
  );
}

export default PDF;
