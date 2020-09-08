import React, { Component } from 'react';
// import Navbar from './Components/Navbar';
import Footer from './Components/footer';
import './App.css';
import BestServices from './Components/BestServices';
import BackGroundImage from './Components/BackGroundImage';
import BackGroundImageQualityContent from './Components/BackGroungImage-QualityContent';


class App extends Component{
render(){
return (
<div>
  <BackGroundImage />
  <BestServices />
  <BackGroundImageQualityContent />
  <Footer />
</div>

);
}
 }
export default App;
