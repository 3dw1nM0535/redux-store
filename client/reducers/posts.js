//reducer takes in two parameters
//Also reducers handle all the diting of
//our App state

//1. the action(info about what happened)
//2. copy of current state

export function posts (state = [], action) {
  console.log('This post will change!');
  console.log(state, action);
  return state;
}
