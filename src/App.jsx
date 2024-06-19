import Home from "./components/Home";
import Article from "./components/Article";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:article_id" element={<Article />} />
    </Routes>
  );
}
