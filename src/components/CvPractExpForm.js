import React, { Component } from "react";
import uniqid from "uniqid";
import CvEdExForm from "./CvEdExpForm";

class CvPractExpForm extends Component {
    constructor (props) {
      super(props);
      this.state = {   
        practArr: [],
        pract: {
        companyName: "",
        positionTitle: "",
        dateWorkingFrom: "",
        dateWorkingUntil: "",
        id: uniqid(),
      }, 
        infoSubmited: false,
        showForm: false,
        showBtnPract: true,
        showEditFormEd: false,
        selectedEditId: "",
        showEditButton: true,
        showEditButtonBonus: false,
        section: false,
      } ;  

    }
  

    handleChangecompanyName = (e) => {
      this.setState({
        pract: {
          companyName: e.target.value,
          positionTitle: this.state.pract.positionTitle,
          dateWorkingFrom: this.state.pract.dateWorkingFrom,
          dateWorkingUntil: this.state.pract.dateWorkingUntil,
          id: this.state.pract.id,
          
   
        }
      })
    }
    handleChangepositionTitle = (e) => {
      this.setState({
        pract: {
          companyName: this.state.pract.companyName,
          positionTitle: e.target.value,
          dateWorkingFrom: this.state.pract.dateWorkingFrom,
          dateWorkingUntil: this.state.pract.dateWorkingUntil,
          id: this.state.pract.id,
          
        }
      })
    }
    handleChangedateWorkingFrom = (e) => {
      this.setState({
        pract: {
          companyName: this.state.pract.companyName,
          positionTitle: this.state.pract.positionTitle,
          dateWorkingFrom: e.target.value,
          dateWorkingUntil: this.state.pract.dateWorkingUntil,
          id: this.state.pract.id,
          
       
        }
      })
    }
    handleChangedateWorkingUntil = (e) => {
      this.setState({
        pract: {
          companyName: this.state.pract.companyName,
          positionTitle: this.state.pract.positionTitle,
          dateWorkingFrom:  this.state.pract.dateWorkingFrom,
          dateWorkingUntil: e.target.value,
          id: this.state.pract.id,
          
       
        }
      })
    }
   

    onSubmitGenInfo = (e) => {
      e.preventDefault();
      this.setState({
        practArr: this.state.practArr.concat(this.state.pract),
        pract: {
          companyName: "",
          positionTitle: "",
          dateWorkingFrom: "",
          dateWorkingUntil:"",
          id: uniqid(),
        },
      });
      this.setState({
        showForm: false,
        infoSubmited: true,
      })
      this.setState({
        showBtnPract: false,
        section: !this.state.section,
      })

      
    }

    showForm = () => {
      
      return( 
      <div>
      <form className="formNorm" onSubmit={this.onSubmitGenInfo}>
        <p>New practial experience</p>
       <label htmlFor="companyNameInput">Company name:</label>
       <input 
       onChange={this.handleChangecompanyName}
       id="companyNameInput"
       type="text">
       </input>
       <label htmlFor="positionTitleInput">Position title :</label>
       <input 
       onChange={this.handleChangepositionTitle}
       id="positionTitleInput"
       type="text">
       </input>
       <label htmlFor="dateWorkingInput">Date working from :</label>
       <input 
       onChange={this.handleChangedateWorkingFrom}
       id="dateWorkingInput"
       type="date"
       min="1980-01-01">
       </input>
       <label htmlFor="start">To :</label>
       <input 
       onChange={this.handleChangedateWorkingUntil}
       type="date" id="start" name="work-start"
       defaultValue=""
       min="1980-01-01"></input>
       <button
       type="submit" className="finishEditBtn">Submit
       </button>
       </form>
       </div>
      )
    }

    handleChangePositionTitleEd = (e) => {
      let newpractArr = this.state.practArr;
      let newPositionTitle = e.target.value;
      let indexSelectedEdit = newpractArr.findIndex(pract => pract.id === this.state.selectedEditId);
      newpractArr[indexSelectedEdit].positionTitle = newPositionTitle; 


      this.setState({
      practArr: newpractArr,
      })
    }


    handleChangeCompanyNameEd = (e) => {
      let newPractArr = this.state.practArr;
      let newCompanyName = e.target.value;
      let indexSelectedEdit = newPractArr.findIndex(pract => pract.id === this.state.selectedEditId);
      newPractArr[indexSelectedEdit].companyName = newCompanyName; 


      this.setState({
      practArr: newPractArr,
      })
    
    }


    handleChangeDateWorkingFromEd = (e) => {
      let newpractArr = this.state.practArr;
      let newDateWorkingFrom = e.target.value;
      let indexSelectedEdit = newpractArr.findIndex(pract => pract.id === this.state.selectedEditId);
      newpractArr[indexSelectedEdit].dateWorkingFrom = newDateWorkingFrom; 


      this.setState({
      practArr: newpractArr,
      })
    
    }
    handleChangeDateWorkingUntilEd = (e) => {
      let newpractArr = this.state.practArr;
      let newDateWorkingUntil = e.target.value;
      let indexSelectedEdit = newpractArr.findIndex(pract => pract.id === this.state.selectedEditId);
      newpractArr[indexSelectedEdit].dateWorkingUntil = newDateWorkingUntil; 


      this.setState({
      practArr: newpractArr,
      })
    
    }

    onSubmitEditing() {

    }
    showEditFormEd() {
        let selectpract = this.state.practArr.filter(pract => pract.id === this.state.selectedEditId );
        let newPositionTitle = selectpract[0].positionTitle;
        let newCompanyName = selectpract[0].companyName;
        let newDateWorkingFrom = selectpract[0].dateWorkingFrom;
        let newDateWorkingUntil = selectpract[0].dateWorkingUntil;
      return (
        <div className="formNorm">
          <p> Edit practical experience</p>
         <label htmlFor="schoolNameInput">Company name :</label>
         <input 
         onChange={this.handleChangeCompanyNameEd}
         id="schoolNameInput"
         type="text"
         value={newCompanyName}>
         </input>
         <label htmlFor="titleStudyInput">Position title :</label>
         <input 
         onChange={this.handleChangePositionTitleEd}
         id="titleStudyInput"
         type="text"
         defaultValue={newPositionTitle}>
         </input>
         <label htmlFor="dateStudyFromInput">From :</label>
         <input 
         onChange={this.handleChangeDateWorkingFromEd}
         id="dateStudyInput"
         type="text"
         value={newDateWorkingFrom}>
         </input>
         <label htmlFor="dateStudyUntilInput">Until :</label>
         <input 
         onChange={this.handleChangeDateWorkingUntilEd}
         id="dateStudyInput"
         type="text"
         value={newDateWorkingUntil}>
         </input>
         <button onClick={this.handleChangeEditBtn} className="finishEditBtn">Finish Edit</button>
        </div>
      )
    }


    handleChangeEditBtn = (e) => {
      this.setState({showEditButton: true})
      this.setState({showEditFormEd: false,
      showBtnPract:!this.state.showBtnPract,
      section: true,})
    
      
    }

    handleEdit = (e) => {
        this.setState({showEditFormEd:!this.state.showEditFormEd})
        this.setState({selectedEditId: e.target.id})
        this.setState({showBtnPract: !this.state.showBtnPract,
        section: false,})
        
        
    }

    handleToggle() {
        this.setState({showForm:!this.state.showForm});
        this.setState({showBtnPract:!this.state.showBtnPract});
       
    }

    showBtnPract() {
         return ( <button onClick={() => this.handleToggle()}className="createPractExpBtn">+</button> )
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
      return(<div className="divGlob" onMouseEnter={this.handleOver} onMouseLeave={this.handleOut}>
        {this.state.showEditButtonBonus ? <button className="createEdExpBtnBonus" onClick={() => this.handleToggle()}>+</button> : null}
        {this.state.practArr.map((pract) => {
        return <div>{this.state.showEditButton ? <button id={pract.id} className="buttonEdit" onClick={this.handleEdit}>Edit</button> : null}
         <div className="divGen"> 
         <p key={uniqid()}>Company Name : {pract.companyName}</p>
        <p key={uniqid()}>Position Title : {pract.positionTitle}</p>
        <p key={uniqid()}>Working from : {pract.dateWorkingFrom}</p>
        <p key={uniqid()}>until : {pract.dateWorkingUntil}</p>
       </div>
       </div>
      })}
    </div>
      )
    }

    render() {
      return (
        <div>
          {this.state.showBtnPract ? this.showBtnPract() : null }
          {this.state.section ? this.section() : null}
          {this.state.showForm ? this.showForm() : null }
          {this.state.showEditFormEd ? this.showEditFormEd() : null}
         </div>
        
      );
    }


}

export default CvPractExpForm;