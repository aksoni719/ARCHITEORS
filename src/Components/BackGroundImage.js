import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
// import SearchBar from './SearchBar';
import DummyHeading from './DummyHeading';
// import classes from '*.module.css';

const useStyles = makeStyles((theme) => ({

    root:{
        heigth:'70%',
        backgroundImage: "url(https://www.jakpost.travel/wimages/large/88-885772_minimalist-wallpaper-4k-geometric-desktop-modern-paper-modern.jpg)",
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundAttachment:'fixed',
    }

}))

export default function BackGroundImage() {

    const classes = useStyles();

    return(
        
        <header className={classes.root}>
        <div>
{/* <img  src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg"
    /> */}
        <Navbar />
        {/* <SearchBar /> */}
        <DummyHeading />
        </div>
        </header>

    )

}