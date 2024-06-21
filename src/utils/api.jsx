import axios from "axios";

export default function getArticles() {
  return axios
    .get("https://nc-news-w1v4.onrender.com/api/articles/")
    .then((response) => response.data.articles)
    .catch((err) => console.log(err));
}

export function getArticle(article_id) {
  return axios
    .get("https://nc-news-w1v4.onrender.com/api/articles/" + article_id)
    .then((response) => response.data.article)
    .catch((err) => console.log(err));
}

export function getComments(article_id) {
  return axios
    .get("https://nc-news-w1v4.onrender.com/api/articles/" + article_id + "/comments")
    .then((response) => response.data.comments)
    .catch((err) => console.log(err));
}

export function patchLikes(article_id) {
  return axios
    .patch("https://nc-news-w1v4.onrender.com/api/articles/" + article_id, {
      inc_votes: 1,
    })
    .then((response) => response.data.article)
    .catch((err) => console.log(err));
}

export function postComment(article_id, newComment) {
  return axios
    .post("https://nc-news-w1v4.onrender.com/api/articles/" + article_id + "/comments", newComment)
    .then((response) => response.data.comment)
    .catch((err) => console.log(err));
}

export function deleteComment(comment_id) {
  return axios.delete("https://nc-news-w1v4.onrender.com/api/comments/" + comment_id);
}
