import Comment from "../../components/Comment";
import FullComment from "../../components/FullComment";
import NewComment from "../../components/NewComment";
import "./Discussion.css";

const Discussion = () => {
  return (
    <main className="container">
      <section className='flex'>
        <Comment />
        <Comment />
        <Comment />
      </section>
      <section className='flex'>
        <FullComment />
      </section>
      <section className='flex'>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
