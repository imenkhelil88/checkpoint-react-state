import { Component } from "react";


class profile extends Component {
    constructor() {
        super();
        this.state={fullName:'Imen',bio:'this is my bio' ,imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU',profession:'student',count:0}
    }
    test=()=>{return this.setState({count:this.state.count+1})}
    componentDidMount(){
      setInterval(this.test,2000)
    }
    render() { 
        return ( 
            <div className="affichage"> 
            <img src={this.state.imgSrc}  alt='404' /> 
            <p>{this.state.fullName }</p>
            <p> {this.state.bio} </p>
            <p>{this.state.profession}</p>
            <span>{this.state.count}</span>
            
            </div>
         );
    }
}
 
export default profile;