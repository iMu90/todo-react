import React, { Component } from 'react';

class TodoList extends Component {

   clicked(one){
      console.log("id", one);
      this.props.clicked(one);
   }
   createList(){
      let list = this.props.list.map(one => {
         let { id } = one;
         return (
            <li onClick={() => this.clicked({id})} key={id}>{one.text}</li>
         )
      });
      return list;
   }

   render() {

      return (
         <div>
            <ul>
               {this.createList()}
            </ul>
         </div>
      );
   }
}

export default TodoList;
