import React, { Component } from 'react';
import '../style/style.css';

class Form extends Component {
   constructor(props){
      super(props);
      this.state ={
         inputVal: ''
      };
   }

   addNew(){
      this.props.mine(this.state.inputVal)
   }

   render() {
      return (
         <div>
            <input placeholder="enter a note"
            onChange={event => this.setState({inputVal: event.target.value})}/><br />
            <button className="btn btn-lg btn-success addButton"
            onClick={() => this.addNew()}>ADD TODO</button>
         </div>
      );
   }
}

export default Form;