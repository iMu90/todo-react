import React, {Component} from 'react';
import { connect } from "react-redux";
import Form from './form';
import TodoList from './TodoList';
import { addTodo } from "../actions";
import '../style/style.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         todo: '',
         completed: false
      };
   }

   adding(text){
      this.props.addTodo(text);
   }

   removing(id){
      this.props.complete(id);
   }

   render() {
      return (
         <div className="app">
            <Form mine={this.adding.bind(this)} />
            <hr/>
            <TodoList list={this.props.state} clicked={this.removing.bind(this)} />
         </div>
      );
   }
}

const mapToStateProps = (state) => {
   return{
      state
   }
};


export default connect(mapToStateProps, { addTodo })(App);
