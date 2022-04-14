const NewComment = () => {
  return (
    <div>
      <form className="new-comment flex">
        <div className="flex">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="flex">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="flex">
          <label htmlFor="body">Body</label>
          <textarea id="body"></textarea>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewComment;
