import React, { Component } from "react";
import uniqid from "uniqid";
import CvEdExpForm from "./CvEdExpForm";


class CvGenInfoForm extends React.Component{
    constructor (props) {
      super(props);
      this.state = {...this.state,  
        generalInfoArr: [],
        generalInfos: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        age: "",
        id: uniqid(),
      }, 
        infoSubmited: false,
        showForm: false,
        showBtn: true,
        showEditForm: false,
        showEditButton: false,
        showGen: false,
      } ;  

    }
  

    handleChangeFirstName = (e) => {
      this.setState({
        generalInfos: {
          firstName: e.target.value,
          lastName: this.state.generalInfos.lastName,
          phoneNumber: this.state.generalInfos.phoneNumber,
          email: this.state.generalInfos.email,
          age: this.state.generalInfos.age,
          id: this.state.generalInfos.id,
          
        }
      })
    }
    handleChangeLastName = (e) => {
      this.setState({
        generalInfos: {
          firstName: this.state.generalInfos.firstName,
          lastName: e.target.value,
          phoneNumber: this.state.generalInfos.phoneNumber,
          email: this.state.generalInfos.email,
          age: this.state.generalInfos.age,
          id: this.state.generalInfos.id,
          
        }
      })
    }
    handleChangeEmail = (e) => {
      this.setState({
        generalInfos: {
          firstName: this.state.generalInfos.firstName,
          lastName: this.state.generalInfos.lastName,
          phoneNumber: this.state.generalInfos.phoneNumber,
          email: e.target.value,
          age: this.state.generalInfos.age,
          id: this.state.generalInfos.id,
          
       
        }
      })
    }
    handleChangePhoneNumber = (e) => {
      this.setState({
        generalInfos: {
          firstName: this.state.generalInfos.firstName,
          lastName: this.state.generalInfos.lastName,
          phoneNumber: e.target.value,
          email: this.state.generalInfos.email,
          age: this.state.generalInfos.age,
          id: this.state.generalInfos.id,
          
        }
      })
    }
    handleChangeAge= (e) => {
      this.setState({
        generalInfos: {
          firstName: this.state.generalInfos.firstName,
          lastName: this.state.generalInfos.lastName,
          phoneNumber: this.state.generalInfos.phoneNumber,
          email: this.state.generalInfos.email,
          age: e.target.value,
          id: this.state.generalInfos.id,
          
          
        }
      })
    }

    onSubmitGenInfo = (e) => {
      e.preventDefault();
      
      this.setState({
        generalInfoArr: this.state.generalInfoArr.concat(this.state.generalInfos),
      
      })

      this.setState({
        showForm: false,
        infoSubmited: true,
        showGenInf: true,
        showEditForm: false,
        showGen: true,
      })
      
      
      
    }

    showForm = () => {
      
      return( 
      <div>
      <form className="formNorm" onSubmit={this.onSubmitGenInfo}>
       <label htmlFor="firstNameInput">First Name :</label>
       <input 
       onChange={this.handleChangeFirstName}
       id="firstNameInput"
       type="text"
       name="firstName">
       </input>
       <label htmlFor="lastNameInput">Last Name :</label>
       <input 
       onChange={this.handleChangeLastName}
       id="lastNameInput"
       type="text">
       </input>
       <label htmlFor="emailInput">Email :</label>
       <input 
       onChange={this.handleChangeEmail}
       id="emailInput"
       type="email">
       </input>
       <label htmlFor="phoneInput">Phone Number:</label>
       <input
       onChange={this.handleChangePhoneNumber}
       id="phoneInput"
       type="tel">
       </input>
       <label htmlFor="ageInput">Age :</label>
       <input
       onChange={this.handleChangeAge}
       id="ageInput"
       type="number"
       >
       </input>
       <button
       type="submit" className="finishEditBtn">Submit
       </button>
       </form>
       </div>
      )
    }

    handleToggle() {
        this.setState({showForm:!this.state.showForm});
        this.setState({showBtn:!this.state.showBtn})
   
    }

    showBtn () {
      return (<button onClick={() => this.handleToggle()}className="createCvBtn">+</button>)
    }

    editGenInfo() {
      return (
        <div>
        <form className="formNorm" onSubmit={this.onSubmitGenInfo}>
       <label htmlFor="firstNameInput">First Name :</label>
       <input 
       onChange={this.handleChangeFirstName}
       id="firstNameInput"
       type="text"
       value={this.state.generalInfos.firstName}>
       </input>
       <label htmlFor="lastNameInput">Last Name :</label>
       <input 
       onChange={this.handleChangeLastName}
       id="lastNameInput"
       type="text"
       value={this.state.generalInfos.lastName}>
       </input>
       <label htmlFor="emailInput">Email :</label>
       <input 
       onChange={this.handleChangeEmail}
       id="emailInput"
       type="email"
       value={this.state.generalInfos.email}>
       </input>
       <label htmlFor="phoneInput">Phone Number:</label>
       <input
       onChange={this.handleChangePhoneNumber}
       id="phoneInput"
       type="tel"
       value={this.state.generalInfos.phoneNumber}>
       </input>
       <label htmlFor="ageInput">Age :</label>
       <input
       onChange={this.handleChangeAge}
       id="ageInput"
       type="number"
       value={this.state.generalInfos.age}>
       </input>
       <button className="finishEditBtn" type="submit">Finish Edit</button>
       </form>
        </div>
      )
      
    }
    


    handleEdit = (e) => {
    this.setState({showEditForm: true,
    showEditButton: false,
    showGen: false,})
    }

    handleOver = (e) => {
      this.setState({showEditButton: true})
    }
    
    handleOut = (e) => {
      this.setState({showEditButton: false})
    }

    showGenInf() {
      return (
        <div className="divGlob" onMouseEnter={this.handleOver} onMouseLeave={this.handleOut}>
        {this.state.showEditButton ? <button className="buttonEdit" onClick={this.handleEdit}>Edit</button> : null}
        <div className="divGen">
        <p>First name : {this.state.generalInfos.firstName}</p>
        <p>Last name : {this.state.generalInfos.lastName}</p>
        <p>Email : {this.state.generalInfos.email}</p>
        <p>Phone number : {this.state.generalInfos.phoneNumber}</p>
        <p>Age : {this.state.generalInfos.age}</p>
        </div>
        </div>
    
        )
    }

    render() {
      return (
        <div>
        {this.state.showBtn ? this.showBtn() : null}
        {this.state.showForm ? this.showForm() : null }
        {this.state.showEditForm ? this.editGenInfo(): null}
        {this.state.showGen ? this.showGenInf() : null}
       
         </div>
        
      );
    }
  
  }
  
  export default CvGenInfoForm;