import { useState, useEffect } from "react";
import Comment from "../../components/Comment";
import FullComment from "../../components/FullComment";
import NewComment from "../../components/NewComment";
import "./Discussion.css";
import axios from "axios";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedComment, setSelectedComment] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComments(res.data.splice(0, 4)))
      .catch((err) => console.log(err));
  }, []);

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
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
