import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  fieldsetAlign:{
    marginTop:'1%',
    marginBottom:'1%'
  },
  root: {
    maxWidth: 375,
    marginLeft:50,
    padding:20,
    // border:"solid 1px",
    marginBottom:"2%"
  },
  media: {
    height: 0,
    paddingBottom:'50%',
    paddingTop: '50%', // 16:9
  },
  BestServicesHeader:{
    fontSize:"2vw",
    letterSpacing: '3px'
  },
  legendAlign:{
    textAlign:"center"
  }
}));

const BestServices = () => {
  const classes = useStyles();

  return (
    <fieldset className={classes.fieldsetAlign}>
    <legend className={classes.legendAlign}><p className={classes.BestServicesHeader}>Why Use ARCHITEORS</p></legend>
    <div>
    <Grid
    container
    
    direction="row"
    justify="center"
    alignItems="center"
  >
    <Card className={classes.root}>
      <CardHeader 
        title="Avoid Wait"
      />
      <CardMedia
        className={classes.media}
        image="https://i.ytimg.com/vi/meoo2kS5sfo/maxresdefault.jpg"
        title="New building"
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary">
        We connect you to verified Interior Design and Architectural Construction Firms directly to save time & brokerage.
        </Typography>
      </CardContent>
    </Card>
    {/* 2ndcart */}
    <Card className={classes.root}>
      <CardHeader 
        title="Free Posting"
      />
      <CardMedia
        className={classes.media}
        image="https://i.ytimg.com/vi/meoo2kS5sfo/maxresdefault.jpg"
        title="New building"
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary">
        Post your requirements in a hassle-free manner.
        </Typography>
      </CardContent>
    </Card>
    
    {/* 3rdcard */}
    <Card className={classes.root}>
      <CardHeader 
        title="Verified Posts"
      />
      <CardMedia
        className={classes.media}
        image="https://nimvo.com/wp-content/uploads/2019/10/Modern-Kitchen.jpg"
        title="New building"
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary">
        We publish verified posts after receiving the relevant permissions from the Property Owner.
        </Typography>
      </CardContent>
    </Card>
    {/* 4th card */}
    <Card className={classes.root}>
      <CardHeader
       title="Location Based Leads"         
       />
      <CardMedia
        className={classes.media}
        image="https://nimvo.com/wp-content/uploads/2019/10/Modern-Kitchen.jpg"
        title="New building"
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary">
        Purchase leads near your location in a quick and simple way.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  </div>
  </fieldset>
  );
}
export default BestServices;