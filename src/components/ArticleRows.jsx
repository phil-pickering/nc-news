import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getArticles from "../utils/api";

export default function ArticleRows() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((body) => setArticles(body));
  }, []);

  return (
    <>
      {articles.length ? (
        articles.map((article) => {
          return (
            <tr key={article.article_id}>
              <td>
                <Link to={"/article/" + article.article_id}>{article.title}</Link>
              </td>
              <td>{article.author}</td>
              <td>{article.created_at.slice(0, 10)}</td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td>Loading articles...</td>
        </tr>
      )}
    </>
  );
}
