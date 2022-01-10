import "./App.css";
import React from "react";
import Feedback from "./components/Feedback";
import ReviewBlock from "./components/ReviewBlock";

function App() {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    const localComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(localComments);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const addComment = (comment) => {
    comment.createdAt = new Date();
    setComments([...comments, comment]);
  };
  const handleRemoveComment = (index) => {
    const res = comments.filter((_, i) => index !== i);
    setComments(res);
  };

  return (
    <React.Fragment>
      <ReviewBlock comments={comments} onDelete={handleRemoveComment} />
      <Feedback onSubmit={addComment} />
    </React.Fragment>
  );
}

export default App;
