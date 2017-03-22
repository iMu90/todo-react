
// const checking = (state =[], id) => {
//    // let pos = 0;
//    // for(let i = 0; i < state.length; i++){
//    //    if(state[i].id === id.id){
//    //       console.log("found");
//    //    }
//    // }
//    // return pos;
//    const comp = state.filter(rem => rem.id === id.id);
//    return comp;
//
// }
export default (state = [], action) => {
   switch (action.type) {
      case "ADD":
         let {text, completed} = action;
         state = [...state, {
            id: Math.random(),
            text,
            completed
         }]
         return state;
      default:
         return state;
   }
};