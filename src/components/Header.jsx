import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link
        to="/"
        class="link-secondary link-offset-3 link-underline-opacity-0 link-underline-opacity-100-hover"
      >
        <h1 class="h1">Northcoders News 🗞</h1>
      </Link>
    </header>
  );
}
