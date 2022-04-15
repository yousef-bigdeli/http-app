import { useState, useEffect } from "react";
import Comment from "../../components/Comment";
import FullComment from "../../components/FullComment";
import NewComment from "../../components/NewComment";
import "./Discussion.css";
import axios from "axios";
import { toast } from "react-toastify";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedComment, setSelectedComment] = useState(null);

  const getComments = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/comments");
      setComments(data.reverse().splice(0, 4));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  const postComment = async (comment) => {
    try {
      await axios.post("http://localhost:3001/comments", comment);
      getComments();
      toast.success("Comment was added.");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${id}`);
      getComments();
      setSelectedComment(null);
      toast.success("Comment was deleted.");
    } catch (error) {
      console.log(error);
    }
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
        <FullComment comment={selectedComment} onDelete={deleteComment} />
      </section>
      <section className="flex">
        <NewComment postComment={postComment} />
      </section>
    </main>
  );
};

export default Discussion;
