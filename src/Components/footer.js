import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      color: 'white',
      fontFamily: "Times New Roman, Times, serif",
       },
    FooterText:{
        color:"white",
        fontFamily: "Times New Roman, Times, serif",
    }
  });

const Footer = () => {
    const classes = useStyles();
        return (
            <div style = {styles.nav}>
               <div>
                <h2 className={classes.FooterText}>About us</h2>
                <p className={classes.FooterText}> Artichect company with a vision to get customer</p>
               </div>
               <div>
                   <h2 className={classes.FooterText}>Customer Care</h2>
                   <p className={classes.FooterText}> Artichect company with a vision to get customer</p>
                   </div>
<div>
    <h2 className={classes.FooterText}>Contact us</h2>
    <p className={classes.FooterText}> Artichect company with a vision to get customer</p> 
    <input type = 'text'></input><Button classes={{
        root: classes.root,}}>Search</Button>
</div>

<div>
                <ul>
                    <li>
                    <IconButton classes={{
        root: classes.root,}}>

            <TwitterIcon />
         </IconButton>
                    </li>
                   
                    <li>
                       
                        <IconButton classes={{
        root: classes.root,}}>

            <FacebookIcon />
         </IconButton>
                    
                    </li>
                    <li>
                    <IconButton classes={{
        root: classes.root,}}>

            <GTranslateIcon />
         </IconButton>
                    </li>
                </ul>

            </div>
            </div>
            
        )

}


const styles = {
    
    nav : {
        height : 150,
        background : 'black',
        display : 'flex',
        justifyContent : 'space-around',
        alignItems : 'center',
        margin:'10000',

    },
   
}

export default Footer;
