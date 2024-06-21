import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import { postComment } from "../utils/api";
import { deleteComment } from "../utils/api";

export default function Comments() {
  const [comments, setComments] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((body) => setComments(body));
  }, []);

  function handleOpenAddCommentDlg() {
    const addCommentDlg = document.getElementById("addCommentDlg");
    addCommentDlg.showModal();
  }

  function handleCloseAddCommentDlg() {
    const addCommentDlg = document.getElementById("addCommentDlg");
    comment.value = "";
    addCommentDlg.close();
  }

  function handlePostComment() {
    const newComment = { body: comment.value, username: "cooljmessy" };
    if (newComment.body)
      postComment(article_id, newComment).then((comment) => {
        handleCloseAddCommentDlg();
        setComments([comment, ...comments]);
      });
  }

  function handleDeleteComment(deletedComment) {
    deleteComment(deletedComment.comment_id).then(() => {
      const updatedComments = comments.filter((comment) => comment.comment_id !== deletedComment.comment_id);
      setComments(updatedComments);
    });
  }

  return (
    <>
      <button onClick={handleOpenAddCommentDlg}>Add comment &nbsp; 💬</button>
      <dialog id="addCommentDlg">
        <form method="dialog">
          <p>
            <button type="button" onClick={handleCloseAddCommentDlg} className="closeBtn">
              ✖️
            </button>
          </p>
          <textarea rows="4" cols="50" id="comment" placeholder="Type your comment here..." required></textarea>
          <p>
            <button onClick={handlePostComment}>Post comment &nbsp; 📮 </button>
          </p>
        </form>
      </dialog>
      <details>
        <summary>&nbsp;Comments ({comments.length})</summary>
        {comments.length ? (
          comments.map((comment) => {
            const date = comment.created_at.slice(0, 10);
            return (
              <ul key={comment.comment_id}>
                <li className="comment-date">{date}</li>
                <li className="comment">
                  "{comment.body}" —<span className="comment-author">{comment.author} </span>
                  {comment.author === "cooljmessy" && (
                    <>
                      <button className="deleteBtn" onClick={() => handleDeleteComment(comment)}>
                        Delete comment &nbsp; 🗑
                      </button>
                    </>
                  )}
                </li>
              </ul>
            );
          })
        ) : (
          <p>Loading comments...</p>
        )}
      </details>
    </>
  );
}
