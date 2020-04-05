"use strict"

import { createStore} from 'redux';

// STEP 3 Define reducers
const reducer = function(state = 0, action){
  switch (action.type) {
    case "INCREMENT":
    return  state= action.payload;
    break;
  }
  return state
}


//STEP 1 Crete the Store

const store = createStore(reducer);

store.subscribe(function(){
  console.log('current state is: ', store.getState());
})

// STEP 2 Create and dispatch actions
store.dispatch({type: "INCREMENT", payload: {
  id: 1,
  title: 'Good Book',
  description: 'This is the good book',
  price: 33.33
})
