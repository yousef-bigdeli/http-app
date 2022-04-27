const FullComment = ({ comment, onDelete }) => {
  return comment ? (
    <div className="full-comment flex">
      <div>
        <span>Name:</span> {comment.name}
      </div>
      <div>
        <span>Email:</span> {comment.email}
      </div>
      <div>
        <span>Body:</span> {comment.body}
      </div>
      <button onClick={() => onDelete(comment.id)} className="delete-btn">Delete</button>
    </div>
  ) : (
    <p className='full-comment flex'>Select a comment</p>
  );
};

export default FullComment;
