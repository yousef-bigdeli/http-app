import { useParams } from "react-router-dom";
import Home from "./Pages/Home";
import CommentsPage from "./Pages/CommentsPage";
import NewCommentPage from "./Pages/NewCommentPage";
import NotFound from "./Pages/NotFound";

const routes = [
  { path: "comments/:id", element: <ValidateId /> },
  { path: "comments", element: <CommentsPage /> },
  { path: "new-comment", element: <NewCommentPage /> },
  { path: "/", element: <Home />, index: true },
  { path: "*", element: <NotFound /> },
];

export default routes;

// For validate blog id
function ValidateId() {
  const commentId = useParams().id.match(/\d+/);
  if (commentId) {
    return <CommentsPage />;
  }
  return <NotFound />;
}
