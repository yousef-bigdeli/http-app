import NewComment from "../components/Comment/NewComment";
import { postComment } from "../services/commentServices";
import { toast } from "react-toastify";

const NewCommentPage = () => {
  const postCommentHandler = async (comment) => {
    try {
      await postComment(comment);
      toast.success("Comment was added.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex">
      <NewComment postComment={postCommentHandler} />
    </section>
  );
};

export default NewCommentPage;
