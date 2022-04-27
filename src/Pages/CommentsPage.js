import FullComment from "../components/Comment/FullComment";
import { deleteComment, getCommentById } from "../services/commentServices";
import { toast } from "react-toastify";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentsList from "../components/Comment/CommentsList";

const CommentsPage = () => {
  const [comment, setComment] = useState({});
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getCommentById(id)
        .then(({ data }) => setComment(data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  const deleteCommentHandler = async (id) => {
    try {
      await deleteComment(id);
      navigate("/");
      toast.success("Comment was deleted.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex">
      {pathname === "/comments" ? (
        <CommentsList />
      ) : (
        <FullComment comment={comment} onDelete={deleteCommentHandler} />
      )}
    </section>
  );
};

export default CommentsPage;
