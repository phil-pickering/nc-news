import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api";
import { patchLikes } from "../utils/api";
import Header from "./Header";
import Comments from "./Comments";

export default function Article() {
  const [article, setArticle] = useState([]);
  const [likes, setLikes] = useState(article.votes);
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((body) => {
      setArticle(body);
    });
  }, []);

  let formattedDate = "";
  if (article.created_at) {
    formattedDate = article.created_at.slice(0, 10);
  } else {
    return (
      <>
        <Header />
        <p>Loading article...</p>
      </>
    );
  }

  function handleLike() {
    setLikes(likes + 1);

    patchLikes(article_id).then((article) => {
      setArticle((article) => ({
        ...article,
        votes: article.votes + 1,
      }));
    });
  }

  function handleAddComment() {
    const addCommentDlg = document.getElementById("addCommentDlg");
    addCommentDlg.showModal();
  }

  return (
    <>
      <Header />

      <article>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt="" height="250" />
        <dl>
          <dt>Author</dt>
          <dd>{article.author}</dd>
          <dt>Topic</dt>
          <dd>{article.topic}</dd>
          <dt>Date</dt>
          <dd>{formattedDate}</dd>
          <dt>Likes</dt>
          <dd>{article.votes}</dd>
        </dl>
        <p>{article.body}</p>

        <button onClick={handleLike}>Like &nbsp; ❤️</button>

        <button onClick={handleAddComment}>Add comment &nbsp; 💬</button>

        <dialog id="addCommentDlg">
          <form method="dialog">
            <textarea rows="4" cols="50"></textarea>
            <p>
              <button>Post comment &nbsp; 📮</button>
            </p>
          </form>
        </dialog>
      </article>
      <Comments />
    </>
  );
}
