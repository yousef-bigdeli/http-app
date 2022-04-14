import axios from "axios";
import { useState } from "react";

const NewComment = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeInputHandler = (e) => {
    setComment((prevComment) => {
      return { ...prevComment, [e.target.name]: e.target.value };
    });
  };

  const createComment = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/comments", comment)
      .then((res) => console.log("Comment was added."))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="new-comment flex" onSubmit={createComment}>
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
          <textarea
            id="body"
            name="content"
            onChange={changeInputHandler}
            value={comment.content}
          ></textarea>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewComment;
