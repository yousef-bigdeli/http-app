import { CommentHTTP } from "./httpService";

const getAllComments = () => {
  return CommentHTTP.get("/comments");
};

const postComment = (comment) => {
  return CommentHTTP.post("/comments", comment);
};

const deleteComment = (id) => {
  return CommentHTTP.delete(`/comments/${id}`);
};

const getCommentById = (id) => {
  return CommentHTTP.get(`/comments/${id}`);
};

export { getAllComments, postComment, deleteComment, getCommentById };
