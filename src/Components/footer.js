import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PaymentIcon from '@material-ui/icons/Payment';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
          //   width: '25ch',
          },
          display:"flex",
          flexWrap:"wrap",
          fontFamily: "Times New Roman, Times, serif",
          backgroundColor:'#F5F5F7',
          height:'40vh',
        },
    AboutBox:{
        color:'#1D1D1F',
        width:'20vw',
        backgroundColor:'#F5F5F7'
    },
    CustomerCareBox:{
        color:'#1D1D1F',
        width:'20vw',
        backgroundColor:'#F5F5F7'
    },
    ContactUsBox:{
        color:'#1D1D1F',
        width:'20vw',
        backgroundColor:'#F5F5F7'
    },
    NewsletterBox:{
        color:'#1D1D1F',
        backgroundColor:'F5F5F7',
        width:'30vw',
        marginTop:'3vw',
        marginLeft:'3vw',
        // height:'20vh'
    },
    socialMediaLinkAlign:{
        backgroundColor:'#F5F5F7',
        width:'100%',
    },
    headingAlign:{
        fontSize:'1.8vw',
        marginLeft:'2vw',
        marginTop:'3vw'
    },
    SubscribeAlign:{
        fontSize:'1.8vw',
        float:'left',
        marginLeft:'1vw'
    },  
    subscribemailAlign:{
        marginLeft:'2%',
        width:'80%',
        height:'2em',
        borderRadius:'5px 5px 5px 5px',
        fontSize:'1vw',
        outline:'none',
        borderWidth: '1px'
    },
    submitButtonAlign:{
        marginLeft:'1%',
        width:'4vw',
        marginTop:'-.5%',
        height:'2.3vw',
        borderRadius:'5px 5px 5px 5px',
        backgroundColor:'#F5F5F7',
        outline:'none',
        fontSize:'.8vw',
    },
    termsConditionalign:{
        fontSize:'1vw'
    }
  }));

const Footer = () => {
    const classes = useStyles();
        return (
            <Box className={classes.root}
            display="flex">
            <Box className={classes.AboutBox}>
                <h3 className={classes.headingAlign}>About Us</h3>
                <ul>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                </ul>
            </Box>
            
            <Box className={classes.CustomerCareBox}>
            <h3 className={classes.headingAlign}>Customer Care</h3>
            <ul sty>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                </ul>
            </Box>
            
            <Box className={classes.ContactUsBox}>
            <h3 className={classes.headingAlign}>Contact us</h3>
            <ul>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                </ul>
            </Box>
            <Box className={classes.NewsletterBox}>
                <center>
                <h3 className={classes.SubscribeAlign}>Search Leads</h3>
                <input type="email" placeholder="Search For Leads" className={classes.subscribemailAlign}></input>
                <Button variant="outlined" size="large" className={classes.submitButtonAlign}>
        SEARCH
        </Button>
        </center>
        <center>
        <PaymentIcon style={{ fontSize: '2vw'}} />
        <AccountBalanceIcon style={{ fontSize: '2vw' }} />
            </center>
            </Box>
            <Box className={classes.socialMediaLinkAlign}>
                <center><FacebookIcon style={{ fontSize: '2vw' }} /> &nbsp;&nbsp; <InstagramIcon style={{ fontSize: "2vw" }} /></center>
                <center><p className={classes.termsConditionalign}>Terms and Conditions | Priavcy Policy | Sitemap</p></center>
            </Box>
            </Box>
        )

}


const styles = {
    
    li : {
        height : 150,
        background : 'black',
        display : 'flex',
        justifyContent : 'space-around',
        alignItems : 'center',
        margin:'10000',

    },
   
}

export default Footer;
