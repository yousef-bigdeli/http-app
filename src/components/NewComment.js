import { useState } from "react";

const NewComment = ({ postComment }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const changeInputHandler = (e) => {
    setComment((prevComment) => {
      return { ...prevComment, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postComment(comment);
    setComment({
      name: "",
      email: "",
      body: "",
    });
  };

  return (
    <div>
      <form className="new-comment flex" onSubmit={submitHandler}>
        <div className="flex">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={changeInputHandler}
            value={comment.name}
          />
        </div>
        <div className="flex">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={changeInputHandler}
            value={comment.email}
          />
        </div>
        <div className="flex">
          <label htmlFor="body">Body</label>
          <textarea id="body" name="body" onChange={changeInputHandler} value={comment.body}/>
        </div>
        <button type="submit" className='add-btn'>Add</button>
      </form>
    </div>
  );
};

export default NewComment;
