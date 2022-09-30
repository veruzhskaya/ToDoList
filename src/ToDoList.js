import { Component } from "react";
import check from './checkmark.png'


export class ToDoList extends Component {
    state = {
    userInput: "",
    toDoList: [],
    }
    
    onChangeEvent(e) {
    this.setState ({userInput:e})
    
    }
    
    addPlan(input) {
     if (input ==='') {
       alert ("Please enter an item!")
     }
     else {
       let listArray = this.state.toDoList;
       listArray.push (input);
       this.setState ({toDoList:listArray, userInput: ""})
    }}
    
    crossWord(event) {
       const list = event.target;
       list.classList.toggle ('crossed');
    }
    
    deleteButton() {
       let listArray = this.state.toDoList;
       listArray = [];
       this.setState ({toDoList:listArray})
    }
    
    onFormSubmit(e) {
       e.preventDefault();
    }
    
    render() {
      return(
        <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="input">
          <input  type="text"
               placeholder="Plans for the week..."
               onChange={(e) => {this.onChangeEvent (e.target.value)}}
               value = {this.state.userInput}/>
          </div>
    
        <div className="btn">
           <button className="add" onClick={() => this.addPlan (this.state.userInput)}>Add</button>
        </div>
    
         <ul>
           {this.state.toDoList.map((item, index) => (
            <li className="plans" onClick={this.crossWord} key={index}>
            <img className="check" src={check} alt="check"/>
            {item}</li>
        ))}
         </ul>
        <div className="btn">
          <button className="delete" onClick={() => this.deleteButton()}>Delete</button>
        </div>
        </form>
        </div>
    )
    }
    
    } 