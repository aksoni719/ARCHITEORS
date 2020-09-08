import React, { Component } from 'react';
// import Navbar from './Components/Navbar';
import Footer from './Components/footer';
import './App.css';
import BestServices from './Components/BestServices';
// import DummyHeading from './Components/DummyHeading';
// import SearchBar from './Components/SearchBar';
// import DummyHeading1 from './Components/DummyHeading1';
import QualityContent from './Components/QualityContent';
import BackGroundImage from './Components/BackGroundImage'


class App extends Component{
render(){
return (
<div>
<BackGroundImage />

  {/* <Navbar /> */}
  {/* <SearchBar /> */}
  {/* <DummyHeading /> */}
  <BestServices />
  <QualityContent />
  <Footer />
</div>

);
}
 }
export default App;
