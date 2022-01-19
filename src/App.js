import React, { Component } from "react";
import './App.css';
import CvGenInfoForm from "./components/CvGenInfoForm.js";
import uniqid from "uniqid";
import CvPractExpForm from "./components/CvPractExpForm";
import CvEdExpForm from "./components/CvEdExpForm";

class App extends React.Component {

  render() {
    return (
      
      <div className="containerBase">
      <h1>CV Application</h1>
      <p className="titleSection">General Informations</p>
      <CvGenInfoForm/>
      <p className="titleSection">Educational Experiences</p>
      <CvEdExpForm/>
      <p className="titleSection">Practical Experiences</p>
      <CvPractExpForm/>    
      <footer className="footer"> Project CV Application from "The Odin Project" by Issei20</footer>
       </div>
    )

}

}
export default App;