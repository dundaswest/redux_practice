//increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}
//add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMNET',
    postId,
    author,
    comment
  };
}
//remove comment
export function removeCommnet(postId, i) {
  return {
    type: 'REMOVE_COMMNET',
    i,
    postId
  };
}
