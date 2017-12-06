//reducer takes in two parameters
//Also reducers handle all the editing of
//our App state

//1. the action(info about what happened)
//2. copy of current state

export function posts (state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing likes!');
      const i = action.index;
      return [
        ...state.slice(0, i), //before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), //after the one we are updating
      ]
    default:
      return state;
  }
}
