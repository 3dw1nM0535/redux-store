//comments reducers
//add comment on the basis of function recomposition
function postComment(state=[], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      //return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      //return new state without the deleted comment
      return [
        //from start to the one we want to delete
        ...state.slice(0, action.i),
        //after the deleted one to the end
        ...state.slice(action.i + 1)
      ]

    default:
      return state;

  }

  return state;
}

export function comments (state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      //take the current state
      ...state,
      //overwrite this post with a new one
      [action.postId]: postComment(state[action.postId], action)
    }
  }

  return state;
}
