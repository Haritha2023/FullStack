import { createStore } from "redux";

//Action constants

const deposit = "Deposit";
const withdraw = "Withdraw";
//1
const store = createStore(reducer); //3 set the reducer to store

//2 create reducer

//reducer
function reducer(state = { amount: 1000, name: "Haritha" }, action) {
  if (action.type === deposit) {
    return { amount: state.amount + action.payload, name: state.name };
  }
  if (action.type === withdraw) {
    return { amount: state.amount - action.payload };
  }
  return state;
}

console.log(store.getState()); //getting the value of the state

//how to write an action
// {type:'Deposit'}

//create another action
// {type:'Withdraw', payload: 300 }

//ACTION CREATORS - a function which holds a action definition

function DepositAction(value) {
  return { type: "Deposit", payload: value };
}

function WithdrawAction(value) {
  return { type: "Withdraw", payload: value };
}

// to subscribe to store when any state changes it will give console.log messages

store.subscribe(() => {
  console.log(store.getState());
});

//to dispatch an action

store.dispatch(DepositAction(200));

store.dispatch(WithdrawAction(300));
