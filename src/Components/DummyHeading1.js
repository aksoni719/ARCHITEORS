import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DummyHeading from './DummyHeading';

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop:'1%',
    Width: "3vw",
    marginLeft:"1%",
    marginRight:'1%',
    padding:"2%",
    // border:"solid 1px",
    marginBottom:"2%",
    background:"yellow"
  },
  media: {
    height: 0,
    paddingBottom:'5%',
    paddingTop: '50%', // 16:9
  },
  legendAlign:{
    textAlign:"center"
  },
  HeadingAlign :{
    color: '#fff',
    textAlign: 'center',
    fontFamily: "Times New Roman, Times, serif",
},
TagLine:{
    letterSpacing: '3px',
    color: '#fff',
    textAlign: "center",
    fontFamily: "Times New Roman, Times, serif",
  },
  blurbText:{
    letterSpacing: '3px',
    color: '#131313',
    textAlign: "center",
    fontFamily: "Times New Roman, Times, serif",
  },
}));

const DummyHeading1 = () => {
  const classes = useStyles();

  return (
    <div>
    <Grid
    container
    
    direction="row"
    justify="center"
    alignItems="center"
  >
    <Card className={classes.root}>
      <CardHeader />
      <h1 className={classes.HeadingAlign}>Dummy Heading</h1>
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
    </Card>
    {/* 2ndcart */}
    <Card className={classes.root}>
      <CardHeader />
      <CardMedia
        className={classes.media}
        image="https://i.ytimg.com/vi/2HOnYpouO-M/maxresdefault.jpg"
        title="New building"
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          This is highly approved buiding by consulatant and architechtue ready for the sale 
        </Typography>
      </CardContent>
    </Card>


  </Grid>
  </div>
  );
}
export default DummyHeading1;