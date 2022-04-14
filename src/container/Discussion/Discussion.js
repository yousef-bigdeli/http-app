import { useState, useEffect } from "react";
import Comment from "../../components/Comment";
import FullComment from "../../components/FullComment";
import NewComment from "../../components/NewComment";
import "./Discussion.css";
import axios from "axios";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedComment, setSelectedComment] = useState(null);

  const getComments = () => {
    axios
      .get("http://localhost:3001/comments")
      .then((res) => setComments(res.data.reverse().splice(0, 4)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getComments();
  }, []);

  const postComment = (comment) => {
    axios
      .post("http://localhost:3001/comments", comment)
      .then((res) => {
        getComments();
        console.log("Comment was added.");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="container">
      <section className="flex">
        {comments ? (
          comments.map((item) => (
            <Comment
              key={item.id}
              comment={item}
              onClick={() => setSelectedComment(item)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <section className="flex">
        <FullComment comment={selectedComment} />
      </section>
      <section className="flex">
        <NewComment postComment={postComment} />
      </section>
    </main>
  );
};

export default Discussion;
