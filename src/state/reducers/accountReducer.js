
//initial state = 0
//action includes type + payload
//Goal:
// read the action and return the state
// still use the banker example. payload is the money and state is the balance.
const reducer = (state=0, action) => {
  switch(action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
}

export default reducer;