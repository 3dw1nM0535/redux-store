//Action creators for our app
//Action for incrementing likes in our App
export function increment (index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//Action for adding comments to posts
export function addComment (postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//Action for removing or deleting comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }  
}


