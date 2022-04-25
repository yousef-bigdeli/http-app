import { Link } from "react-router-dom";

const Comment = ({ comment, onClick }) => {
  return (
    <Link to={`/comments/${comment.id}`}>
      <div className="comment flex" onClick={onClick}>
        <span>Name: {comment.name}</span>
        <span>Email: {comment.email}</span>
      </div>
    </Link>
  );
};

export default Comment;
