import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PDF from './PDF';

function SalaryReport() {
  const [grosspay, setGrossPay] = useState(5000);
  const [appleave, setAppleave] = useState(0);
  const [totgross, setTotgross] = useState(grosspay - appleave);
  const [basic,setBasic] = useState(0);
  const[hr,setHr] = useState(0);
  const ref = React.createRef();
 
 function calculateTotal() {
    setTotgross(grosspay - appleave*161);
    setBasic(grosspay*40/100);
    setHr(basic*25/100);
   
  }
  
    
    const useStyles = makeStyles((theme) => ({
      root: {
        minWidth: 450,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        table: {
            minWidth: 1000,
          },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
     
        const classes = useStyles();
        const [state, setState] = React.useState({
          month: 'January',
          name: 'Haleem',
          year: '',
        });
      
        const handleChange = (event) => {
          const name = event.target.name;
          setState({
            ...state,
            [name]: event.target.value,
          });
        };
      
    return (
        <div >
            <h4 >Salary Report</h4>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Month</InputLabel>
        <Select 
        
      
          native
          value={state.month}
          onChange={handleChange}
          label="Month"
          inputProps={{
            name: 'month',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>January</option>
          <option value={20}>February</option>
          <option value={30}>March</option>
          <option value={40}>April</option>
          <option value={50}>May</option>
          <option value={60}>June</option>
          <option value={70}>July</option>
          <option value={80}>August</option>
          <option value={90}>September</option>
          <option value={100}>October</option>
          <option value={110}>November</option>
          <option value={120}>December</option>
        </Select>
     </FormControl> <br/>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-id-native-simple">Name</InputLabel>
      <Select 
      
      native
      value={state.name}
      onChange={handleChange}
      label="Name"
      inputProps={{
        name: 'name',
        id: 'outlined-id-native-simple',
      }}
    >
      <option aria-label="None" value="" />
      <option value={10}>Haleem</option>
   
    </Select><br/>
      <TextField 
      size="small"
           variant= "outlined"
           label ="Year"
           type='number'
           value={state.year}
           name = "year"
          onChange = {handleChange}
          inputProps={{ max: 2021, min: 2019 }}
           />
           
           </FormControl><br/>
           <Button size="small"  style={{marginLeft: 250 ,backgroundColor: '#561571', color: '#FFFFFF'}}>Select</Button>
           <br/><br/>
           <div className="Post" ref={ref}>
      <br/> 
      {/* <Button  size="small" style={{backgroundColor: '#561571', color: '#FFFFFF', float: 'right'}}>Generate Receipt</Button> */}
      
      <Card className={classes.root}>
      <CardContent>
      <div className="number-inputs">
      <Typography variant="body2" component="p">
      <h3>Basic Gross Pay:</h3>
      <TextField
       size="small"
       variant= "outlined"
          type="number"
          value={grosspay}
          onChange={e => setGrossPay(+e.target.value)}
          placeholder="0"
          inputProps={{ max: 25000, min: 5000 }}
        />
        </Typography>
        <Typography variant="body2" component="p">
        <h3>Approved Leave:</h3>
        <TextField 
      size="small"
           variant= "outlined"
          type="number"
          value={appleave}
          onChange={e => setAppleave(+e.target.value)}
          placeholder="0"
          inputProps={{ max: 12, min: 0 }}
        />
        </Typography>
        <Typography variant="body2" component="p">
        <h3> Total Leave:</h3><h1 style={{color: "red"}}>8</h1>
        
        </Typography>

<Button  size="small" style={{backgroundColor: '#561571', color: '#FFFFFF'}} onClick={calculateTotal}>Calculate</Button>
      
      <Typography variant="body2" component="p">
     <h3>Final Gross Pay: </h3><h1 style={{color: "green"}}>{totgross}</h1>
     </Typography>
        </div>
        <Typography variant="body2" component="p"  size="small"
          style={{float: 'right', marginTop: -455, marginRight: 100}}
          value= {basic}
          onChange={e => setBasic(+e.target.value)}
          >
        <h3> Basic:</h3><h2>40%</h2>
        <h1 style={{color: "green"}}>{basic}</h1>
        </Typography>
        <Typography variant="body2" component="p"
        style={{float: 'right', marginTop: -300, marginRight: 100}}
        value= {hr}
        onChange={e => setHr(+e.target.value)}>
        <h3> HR:</h3><h2>25%</h2>
        <h1 style={{color: "green"}}>{hr}</h1>
        </Typography>
        
      </CardContent>
    </Card> 
    </div>
    <PDF  empname={state.name} basicgross={grosspay} aprleave={appleave} leave="8" fgross={totgross} basic={basic} hr={hr} />
        </div>
         
    )
}

export default SalaryReport
