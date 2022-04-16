import axios from "axios";

const commentAxios = axios.create({
  baseURL: "http://localhost:3001",
});

const CommentHTTP = {
  get: commentAxios.get,
  post: commentAxios.post,
  put: commentAxios.put,
  delete: commentAxios.delete,
};

export { CommentHTTP };
