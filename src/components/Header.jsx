import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Northcoders News</Link> 🗞
      </h1>
    </header>
  );
}
