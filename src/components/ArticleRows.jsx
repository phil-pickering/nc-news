import { useState, useEffect } from "react";

export default function ArticleRows() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://nc-news-w1v4.onrender.com/api/articles/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <>
      {articles.articles &&
        articles.articles.map((article) => {
          return (
            <tr key={article.article_id}>
              <td class="col1">{article.title}</td>
              <td class="col2">{article.author}</td>
              <td class="col3">{article.created_at.slice(0, 10)}</td>
            </tr>
          );
        })}
    </>
  );
}
