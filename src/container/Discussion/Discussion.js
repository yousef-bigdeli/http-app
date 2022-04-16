import { useState, useEffect } from "react";
import Comment from "../../components/Comment";
import FullComment from "../../components/FullComment";
import NewComment from "../../components/NewComment";
import { toast } from "react-toastify";
import { getAllComments, postComment, deleteComment } from "../../services/commentServices";
import "./Discussion.css";

const Discussion = () => {
  const [comments, setComments] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);

  const getComments = async () => {
    getAllComments()
      .then(({ data }) => setComments(data.reverse().splice(0, 4)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getComments();
  }, []);

  const postCommentHandler = async (comment) => {
    try {
      await postComment(comment);
      getComments();
      toast.success("Comment was added.");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCommentHandler = async (id) => {
    try {
      await deleteComment(id);
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
        <FullComment comment={selectedComment} onDelete={deleteCommentHandler} />
      </section>
      <section className="flex">
        <NewComment postComment={postCommentHandler} />
      </section>
    </main>
  );
};

export default Discussion;
