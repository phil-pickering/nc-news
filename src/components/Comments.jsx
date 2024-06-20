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
      <summary>&nbsp;Comments ({comments.length})</summary>
      {comments.length ? (
        comments.map((comment) => {
          let formattedDate = comment.created_at.slice(0, 10);
          return (
            <ul key={comment.comment_id}>
              <li className="comment-date">{formattedDate}</li>
              <li className="comment">
                "{comment.body}" —
                <span className="comment-author">{comment.author}</span>
              </li>
            </ul>
          );
        })
      ) : (
        <p>Loading comments...</p>
      )}
    </details>
  );
}
