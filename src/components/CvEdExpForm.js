import React, { Component } from "react";
import uniqid from "uniqid";
import CvGenInfoForm from "./CvGenInfoForm";
import CvPractExpForm from "./CvPractExpForm";

class CvEdExpForm extends Component {
    constructor (props) {
      super(props);
      this.state = {...this.state,  
        edArr: [], 
        edExp: {
        schoolName: "",
        titleStudy: "",
        dateStudyFrom: "",    
        dateStudyUntil: "",
        id: uniqid(),
      }, 
        infoSubmited: false,
        showForm: false,
        showBtnEd: true,
        showEditFormEd: false, 
        selectedEditId: "",
        showEditButton: false,
        showEditButtonBonus: false,
        section: false,
        divClassActive: 'div-not-active',
      } 
     


    }
  
    handleChangeschoolName = (e) => {
      this.setState({
        edExp: {
          schoolName: e.target.value,
          titleStudy: this.state.edExp.titleStudy,
          dateStudyFrom: this.state.edExp.dateStudyFrom,
          dateStudyUntil: this.state.edExp.dateStudyUntil,
          id: this.state.edExp.id,
          
   
        }
      })
    }
    handleChangetitleStudy = (e) => {
      this.setState({
        edExp: {
          schoolName: this.state.edExp.schoolName,
          titleStudy: e.target.value,
          dateStudyFrom: this.state.edExp.dateStudyFrom,
          dateStudyUntil: this.state.edExp.dateStudyUntil,
          id: this.state.edExp.id,
          
        }
      })
    }
    handleChangedateStudyFrom = (e) => {
      this.setState({
        edExp: {
          schoolName: this.state.edExp.schoolName,
          titleStudy: this.state.edExp.titleStudy,
          dateStudyFrom: e.target.value,
          dateStudyUntil: this.state.edExp.dateStudyUntil,
          id: this.state.edExp.id,
          
       
        }
      })
    }
  
    handleChangedateStudyUntil = (e) => {
      this.setState({
        edExp: {
          schoolName: this.state.edExp.schoolName,
          titleStudy: this.state.edExp.titleStudy,
          dateStudyFrom: this.state.edExp.dateStudyFrom,
          dateStudyUntil: e.target.value,
          id: this.state.edExp.id,
          
       
        }
      })
    }

    onSubmitGenInfo = (e) => {
      e.preventDefault();
      this.setState({

        edArr: this.state.edArr.concat(this.state.edExp),
        edExp: {
          schoolName: "",
          titleStudy: "",
          dateStudyFrom: "",
          dateStudyUntil:"",
          id: uniqid(),
        },
      });
      this.setState({
        showForm: false,
        infoSubmited: true,
        section: true,
      })
     
      

      this.setState({
        showBtnEd: false,
      })
      
    }
   
    showForm = () => {
      
      return( 
      <div>
      <form className="formNorm" onSubmit={this.onSubmitGenInfo}>
        <p>New educational experience</p>
       <label htmlFor="schoolNameInput">School name :</label>
       <input 
       onChange={this.handleChangeschoolName}
       id="schoolNameInput"
       type="text">
       </input>
       <label htmlFor="titleStudyInput">Title of study :</label>
       <input 
       onChange={this.handleChangetitleStudy}
       id="titleStudyInput"
       type="text">
       </input>
       <label htmlFor="dateStudyFromInput">From :</label>
       <input 
       onChange={this.handleChangedateStudyFrom}
       id="dateStudyFromInput"
       type="date">
       </input>
       <label htmlFor="dateStudyUntilInput">Until :</label>
       <input 
       onChange={this.handleChangedateStudyUntil}
       id="dateStudyUntilInput"
       type="date">
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

    }

    onSubmiteditInfo = (e) => {
      e.preventDefault();
      this.setState({
        edArr: this.state.edArr,
      })
    }

    handleChangetitleStudyEd = (e) => {
      let newEdArr = this.state.edArr;
      let newTitleStudy = e.target.value;
      let indexSelectedEdit = newEdArr.findIndex(edExp => edExp.id === this.state.selectedEditId);
      newEdArr[indexSelectedEdit].titleStudy = newTitleStudy; 


      this.setState({
      edArr: newEdArr,
      })
    }


    handleChangeschoolNameEd = (e) => {
      let newEdArr = this.state.edArr;
      let newSchoolName = e.target.value;
      let indexSelectedEdit = newEdArr.findIndex(edExp => edExp.id === this.state.selectedEditId);
      newEdArr[indexSelectedEdit].schoolName = newSchoolName; 


      this.setState({
      edArr: newEdArr,
      })
    
    }


    handleChangeDateStudyFromEd = (e) => {
      let newEdArr = this.state.edArr;
      let newDateStudyFrom = e.target.value;
      let indexSelectedEdit = newEdArr.findIndex(edExp => edExp.id === this.state.selectedEditId);
      newEdArr[indexSelectedEdit].dateStudyFrom = newDateStudyFrom; 


      this.setState({
      edArr: newEdArr,
      })
    
    }

    handleChangeDateStudyUntilEd = (e) => {
      let newEdArr = this.state.edArr;
      let newDateStudyUntil = e.target.value;
      let indexSelectedEdit = newEdArr.findIndex(edExp => edExp.id === this.state.selectedEditId);
      newEdArr[indexSelectedEdit].dateStudyUntil = newDateStudyUntil; 


      this.setState({
      edArr: newEdArr,
      })
    
    }

  
    showEditFormEd() {
        let selectedExp = this.state.edArr.filter(edExp => edExp.id === this.state.selectedEditId );
        let newTitleStudy = selectedExp[0].titleStudy;
        let newSchoolName = selectedExp[0].schoolName;
        let newDateStudyFrom = selectedExp[0].dateStudyFrom;
        let newDateStudyUntil =selectedExp[0].dateStudyUntil;
      return (
        <div className="formNorm">
        
         <label htmlFor="schoolNameInput">School name :</label>
         <input 
         onChange={this.handleChangeschoolNameEd}
         id="schoolNameInput"
         type="text"
         value={newSchoolName}>
         </input>
         <label htmlFor="titleStudyInput">Title of study :</label>
         <input 
         onChange={this.handleChangetitleStudyEd}
         id="titleStudyInput"
         type="text"
         defaultValue={newTitleStudy}>
         </input>
         <label htmlFor="dateStudyFromInput">Form :</label>
         <input 
         onChange={this.handleChangeDateStudyFromEd}
         id="dateStudyFromInput"
         type="text"
         value={newDateStudyFrom}>
         </input>
         <label htmlFor="dateStudyUntilInput">Until :</label>
         <input 
         onChange={this.handleChangeDateStudyUntilEd}
         id="dateStudyUntilInput"
         type="text"
         value={newDateStudyUntil}>
         </input>
         <button onClick={this.handleChangeEditBtn} className="finishEditBtn">Finish Edit</button>
         
         </div>
      )
    }

    handleChangeEditBtn = (e) => {
      this.setState({showEditButton: true})
      this.setState({showEditFormEd: false})
      this.setState({selectedDiv: 'selectedDiv',
      section: true,})
      
    }

    handleEdit = (e) => {
        this.setState({showEditFormEd:!this.state.showEditFormEd})
        this.setState({selectedEditId: e.target.id})
        this.setState({showEditButton: !this.state.showEditButton,
        section: false,})
        
 
  
    }

    showBtnEd() {
         return ( <button onClick={() => this.handleToggle()}className="createEdExpBtn">+</button> )
    }


    handleOver = (e) => {
      this.setState({showEditButton: true,
        showEditButtonBonus: true})
    }

    handleOut = (e) => {
      this.setState({showEditButton: false, 
        showEditButtonBonus: false})
    }


    section() {
     return ( <div className="divGlob" onMouseEnter={this.handleOver} onMouseLeave={this.handleOut}>
           {this.state.showEditButtonBonus ? <button className="createEdExpBtnBonus" onClick={() => this.handleToggle()}>+</button> : null}
           {this.state.edArr.map((edExp) => {
        return <div> 
           {this.state.showEditButton ? <button id={edExp.id} className="buttonEdit" onClick={this.handleEdit}>Edit</button> : null}
           <div className="divGen"> 
           <p>School Name : {edExp.schoolName}</p>
           <p>Title of Study : {edExp.titleStudy}</p>
           <p>From: {edExp.dateStudyFrom}</p>
           <p>Until : {edExp.dateStudyUntil}</p>
           </div>
           </div>;
        
      })}
    </div> )
    }


    render() {
      return (
        <div className="edExpDiv" >
        
        {this.state.showBtnEd ? this.showBtnEd() : null }
        {this.state.showForm ? this.showForm() : null }
        {this.state.showEditFormEd ? this.showEditFormEd() : null}
        {this.state.section ? this.section() : null}
      
         </div>
        
      );
    }


}

export default CvEdExpForm;