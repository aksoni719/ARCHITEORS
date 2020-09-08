import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import QualityContent from './QualityContent';

const useStyles = makeStyles((theme) => ({

    root:{
        heigth:'70%',
        backgroundImage: "url(https://s1.1zoom.me/big0/938/Houses_Mansion_Design_High-tech_style_550417_1024x1024.jpg)",
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundAttachment:'fixed',
    }

}))

export default function BackGroundImageQualityContent() {

    const classes = useStyles();

    return(
        
        <header className={classes.root}>
        <div>
        <QualityContent />
        </div>
        </header>

    )

}