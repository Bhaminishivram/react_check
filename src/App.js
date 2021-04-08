import React,{Component} from "react";
import "./App.css"; 

class App extends Component { 
    constructor(props){
      super(props); 

      this.state ={
        firstName :null, 
        lastName:null, 
        email:null, 
        password:null, 
        formErrors:{
          
        }
      }
    }
  render(){

 return (
 <div className="wrapper">
  <div className ="from-wrapper">
    <h1>Create Account</h1> 

    <form onSubmit={this.handleSubmit} noValidate>
      <div className ="firstName">
          <label htmlFor ="firstName">First_Name</label>
          <input 
          type ="text" 
           className="" 
           placeholder ="first_Name"
           type ="text" 
           name="firstName" 
           noValidate  
           onChange={this.handleChange} 
           /> 
      </div>  

      <div className ="lastName">
          <label htmlFor ="lastName">Last_Name</label>
          <input 
          type ="text" 
           className="" 
           placeholder ="last_Name"
           type ="text" 
           name="lastName" 
           noValidate  
           onChange={this.handleChange} 
           /> 
      </div> 
      <div className ="email">
          <label htmlFor ="email">Email</label>
          <input 
          type ="text" 
           className="" 
           placeholder ="email"
           type ="emailt" 
           name="email" 
           noValidate  
           onChange={this.handleChange} 
           /> 
      </div> 
      <div className ="password">
          <label htmlFor ="password">Password</label>
          <input 
          type ="text" 
           className="" 
           placeholder ="password"
           type ="password" 
           name="password" 
           noValidate  
           onChange={this.handleChange} 
           />  
      </div> 
      <div className="createAccount">
        <button type="submit"> Create Account</button>
        <small>Already Have An Account?</small>
      </div>
      </form>
      </div> 
      </div> 
 
    );
  }
} 
export default App;