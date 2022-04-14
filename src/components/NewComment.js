const NewComment = () => {
  return (
    <div >
      <form className="new-comment">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="body">Body</label>
        <textarea id="body"></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewComment;
