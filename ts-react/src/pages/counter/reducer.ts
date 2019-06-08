// import { combineReducers } from 'redux';
// import { ActionType } from 'typesafe-actions';

// import * as counters from './actions';
// import { ADD, INCREMENT } from './constants';

// export type CountersAction = ActionType<typeof counters>;

// export type CountersState = {
//   readonly reduxCounter: number;
// };

// export default combineReducers<CountersState, CountersAction>({
//   reduxCounter: (state = 0, action) => {
//     switch (action.type) {
//       case INCREMENT:
//         return state + 1; // action: { type: "INCREMENT"; }

//       case ADD:
//         return state + action.payload; // action: { type: "ADD"; payload: number; }

//       default:
//         return state;
//     }
//   },
// });

export default (state:any, action:any) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {count:state.count+action.amount}
    case 'DECREMENT':
      return {
        count:state.count-action.amount
      }
    default:
      return state
  }
}
