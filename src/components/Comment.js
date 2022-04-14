const Comment = ({ comment, onClick }) => {
  return (
    <div className="comment flex" onClick={onClick}>
      <span>Name: {comment.name}</span>
      <span>Email: {comment.email}</span>
    </div>
  );
};

export default Comment;
