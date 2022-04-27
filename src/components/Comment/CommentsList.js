import { useState, useEffect } from "react";
import Comment from "./Comment";
import { getAllComments } from "../../services/commentServices";

const CommentsList = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    getAllComments()
      .then(({ data }) => setComments(data.reverse().splice(0, 4)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <main className="container">
      <section className="flex">
        {comments ? (
          comments.map((item) => <Comment key={item.id} comment={item} />)
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </main>
  );
};

export default CommentsList;
