import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api";
import Header from "./Header";
import Comments from "./Comments";

export default function Article() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((body) => {
      setArticle(body);
    });
  }, []);

  let formattedDate = "";

  if (article.created_at) {
    formattedDate = article.created_at.slice(0, 10);
  } else
    return (
      <>
        <Header />
        <p>Loading article...</p>
      </>
    );

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
        <button>Like ❤️</button>
        <button>Add comment 💬</button>
      </article>
      <Comments />
    </>
  );
}
