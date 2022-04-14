const FullComment = ({ comment }) => {
  return comment ? (
    <div className="full-comment flex">
      <span>Name: {comment.name}</span>
      <span>Email: {comment.id}</span>
      <span>Body: {comment.body}</span>
    </div>
  ) : (
    <p>Select a comment</p>
  );
};

export default FullComment;
