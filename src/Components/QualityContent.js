import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import './QualityContent.css'

const useStyles = makeStyles((theme) => ({
    fieldsetAlign:{
      marginTop:'1%',
      marginBottom:'1%',
    },
    legendAlign:{
        fontSize:'2vw',
      textAlign:"center"
    },
  }));



const  QualityContent=() => {

    const classes = useStyles();
  return (
    <fieldset className={classes.fieldsetAlign}>
    <legend className={classes.legendAlign}>How it Works</legend>
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span>Project Details</span>
          </dt>
          <ul>
          <li>Property Owners would use ARCHITEORS to upload details about their projects.
</li>
          <li>They would answer questions to help categorize their project details and match with the right Interior Designer or Architect professional for the job.</li>
            <li>We verify all details to ensure that it is categorized and matched quickly.</li>
            </ul>
        </div>
        <div className="term">
          <dt>
            <span>Daily Updates</span>
          </dt>
          <ul>
          <li>
          Our team would verify the posts using necessary parameters and allow the post to go live on our website and app, after receiving the relevant permissions from the Property Owner, regarding their personal information and requirements.
          </li>
          <li>ARCHITEORS would send push notifications (once you have downloaded and registered on our app), text message (if required) and emails.</li>
            </ul>
        </div>
        <div className="term">
          <dt>
            <span>FREE Estimates</span>
          </dt>
          <ul>
          <li>The service providers would contact the Property Owner and send them quotes on basis of their requirements.</li>
          <li>The Property Owners would choose from the designs and project estimates that best suit their requirements and would then decide as to which firm they would like to give the project to.</li>
        </ul>
        </div>
      </dl>
    </div>
    </fieldset>
  );
}

export default QualityContent;