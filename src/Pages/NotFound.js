import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found flex-column">
      <h2>404, Page is not found!</h2>
      <Link to="/" className='primary-btn'>Back to Home</Link>
    </div>
  );
};

export default NotFound;
