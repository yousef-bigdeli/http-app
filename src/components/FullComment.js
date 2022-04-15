const FullComment = ({ comment, onDelete }) => {
  return comment ? (
    <div className="full-comment flex">
      <span>Name: {comment.name}</span>
      <span>Email: {comment.email}</span>
      <span>Body: {comment.body}</span>
      <button onClick={() => onDelete(comment.id)}>Delete</button>
    </div>
  ) : (
    <p>Select a comment</p>
  );
};

export default FullComment;
