import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((body) => {
      setComments(body);
    });
  }, []);

  return (
    <details>
      <summary>Comments ({comments.length})</summary>
      {comments.length ? (
        comments.map((comment) => {
          return (
            <ul key={comment.comment_id}>
              <li className="comment">"{comment.body}"</li>
              <li className="comment-author">{comment.author}</li>
            </ul>
          );
        })
      ) : (
        <p>Loading comments...</p>
      )}
    </details>
  );
}
