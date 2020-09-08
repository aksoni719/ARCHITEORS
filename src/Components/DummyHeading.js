import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
         flexGrow: 1,
  },
  middle:{
        marginTop: '3%',
        marginLeft: '6%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'left',
  },

  middleBox:{
        background: 'none',
        width: '45vw',
        height: 'auto',
        letterSpacing: '3px'
  },
  HeadingAlign :{
      // color:'#f5ba13',  
      // color: '#fff',
    letterSpacing: '3px',
      fontSize:'2.5vw',
      textAlign: 'center',
      fontFamily: "Times New Roman, Times, serif",
  },
  TagLine:{
    letterSpacing: '3px',
    color: '#fff',
    textAlign: "center",
    fontFamily: "Calibri",
  },
  blurbText:{
    letterSpacing: '3px',
    color: '#131313',
    textAlign: "center",
    fontFamily: "Calibri",
  },
  Buttonmargin: {
    margin: theme.spacing(5),
    width:"50%",
    height: "10%",
    marginLeft:'20%',
    backgroundColor:"white"
  }
}));

export default function DummyHeading() {

  const classes = useStyles();

  

  return (
    <Grid
    container
  direction="row"
  // justify="center"
  alignItems="center"
     className={classes.root}>
      <Grid item xs={12}>
      
        <Grid container justify="center" >
        <Box className={classes.middle}>
        <Box className={classes.middleBox}>
        <h1 className={classes.HeadingAlign}>ARCHITEORS</h1>
        <h3 className={classes.TagLine}>India’s Best Lead Site For Interior Design And Architectural Constructions</h3>
        <p className={classes.blurbText}>
        We at ARCHITEORS are trying to improve connective closures between every 
        Property Owner and Interior Design or Architectural Construction companies. 
        Using our new, user-friendly interface, ARCHITEORS helps Property Owners and 
        Interior Design or Architectural Construction service professionals to get in 
        touch with each other. The companies can buy verified leads from us and increase 
        their business productivity. Our mission is to bring dreams to reality, hence being
        recognized in the marketplace and serving healthy client relationships by providing 
        a measurable improvement in building assets.
        </p>
        <Button variant="outlined" size="large" className={classes.Buttonmargin}>
        Post your Property Details
        </Button>
        </Box>
      
        </Box>
        </Grid>
      </Grid>
      
    </Grid>
  );
}


