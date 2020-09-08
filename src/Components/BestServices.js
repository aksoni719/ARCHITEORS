import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    fieldsetAlign:{
        marginTop:'1%',
        marginBottom:'1%'
      },
      legendAlign:{
        textAlign:"center"
      },
      BestServicesHeader:{
        fontSize:"2vw",
        letterSpacing: '3px'
      },
  media: {
    height: '30%',
    width: '40%',
  },
  serviceTag:{
    float:'left',
    fontSize: '2vw',
    marginLeft:'45%',
    marginTop: '-18%',
    fontFamily: "Calibri",
  },
  servicesDescription:{
      float: "left",
      fontFamily: "Calibri",
      fontSize:'1.5vw',
        marginLeft: '45%',
        marginTop: '-13%'
  },
  mediaRight:{
      float:'right',
      height: '30%',
      width: '40%',   
  },
  serviceTagRight:{
    fontFamily: "Calibri",
    fontSize:'2vw',
    marginTop:'5%',
    marginLeft:'10%',
  },
  servicesDescriptionRight:{
    marginLeft:'10%',
    fontFamily: "Calibri",
    fontSize:'1.5vw',
  },
  BackGroungDesign:{
    backgroundColor:'#f2f2f2'
  }
});

export default function BestServices() {
  const classes = useStyles();

  return (
    <fieldset className={classes.fieldsetAlign}>
    <legend className={classes.legendAlign}><p className={classes.BestServicesHeader}>Why Use ARCHITEORS</p></legend>

     {/* 1stcard */}
    <Card className={classes.BackGroungDesign}>
    <div>
    <img  className={classes.media} src="https://wallpapershome.com/images/wallpapers/house-3840x2160-mansion-pool-modern-interior-high-tech-yard-4407.jpg" />
    </div>
    <div>
    <p className={classes.serviceTag}>AVOID WAIT</p>
    <p className={classes.servicesDescription}>We connect you to verified Interior Design and Architectural Construction Firms directly to save time & brokerage.</p>  
    </div>
    </Card>
    {/* 2nd card */}
    <Card>
    <div>
    <img  className={classes.mediaRight} src="https://besthqwallpapers.com/Uploads/23-3-2018/45347/thumb2-4k-living-room-fireplace-stained-glass-window-stylish-interior.jpg" />
    </div>
    <div>
    <p className={classes.serviceTagRight}>FREE POSTING</p>
    <p className={classes.servicesDescriptionRight}>Post your requirements in a hassle-free manner.</p>  
    </div>
    </Card>
    {/* 3rd card */}
    <Card className={classes.BackGroungDesign}>
    <div>
    <img  className={classes.media} src="https://i.pinimg.com/originals/25/aa/99/25aa990a00c6fc659f7548d644c1e7ed.png" />
    </div>
    <div>
    <p className={classes.serviceTag}>VERIFIED POSTS</p>
    <p className={classes.servicesDescription}>We publish verified posts after receiving the relevant permissions from the Property Owner.</p>  
    </div>
    </Card>
    {/* 4th Card */}
    <Card>
    <div>
    <img  className={classes.mediaRight} src="https://i.ytimg.com/vi/meoo2kS5sfo/maxresdefault.jpg" />
    </div>
    <div>
    <p className={classes.serviceTagRight}>LOCATION BASED LEADS</p>
    <p className={classes.servicesDescriptionRight}>Purchase leads near your location in a quick and simple way.</p>  
    </div>
    </Card>
    </fieldset>
  );
}
