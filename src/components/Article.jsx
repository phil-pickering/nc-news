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
    getArticle(article_id).then((body) => setArticle(body));
  }, []);

  let date = "";
  if (article.created_at) date = article.created_at.slice(0, 10);
  else
    return (
      <>
        <Header />
        <p>Loading article...</p>
      </>
    );

  function handleLike() {
    patchLikes(article_id).then(() =>
      setArticle((article) => ({
        ...article,
        votes: article.votes + 1,
      }))
    );
  }

  return (
    <>
      <Header />
      <article>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt="" />
        <dl>
          <dt>Author</dt>
          <dd>{article.author}</dd>
          <dt>Topic</dt>
          <dd>{article.topic}</dd>
          <dt>Date</dt>
          <dd>{date}</dd>
          <dt>Likes</dt>
          <dd>{article.votes}</dd>
        </dl>
        <p>{article.body}</p>
      </article>
      <button onClick={handleLike}>Like &nbsp; ❤️</button>
      <Comments />
    </>
  );
}
