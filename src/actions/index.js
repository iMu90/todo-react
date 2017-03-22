export function addTodo(text){
   return {
      type: 'ADD',
      text,
      completed: false
   }
}

// export function complete(id) {
//    console.log("action id", id);
//    return {
//       type: 'COMPLETED',
//       id
//    }
// }