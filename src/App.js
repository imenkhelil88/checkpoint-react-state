import { Component } from "react";
import Profile from "./Component/Profile";
import "./App.css"

class  App extends Component {
  constructor() {
    super();
    this.state={isshow:true}
    }
   
  

  
 toggleVisibility=()=>this.setState({isshow:!this.state.isshow})
  render() { 
    return (
       <div>
      <button onClick={this.toggleVisibility}> show</button>
      {this.state.isshow && <Profile/>}
     
      </div>
      );
      
     
  }
}
 
export default  App;