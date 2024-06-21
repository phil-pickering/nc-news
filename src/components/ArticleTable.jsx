import ArticleRows from "./ArticleRows";

export default function ArticleTable() {
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <ArticleRows />
        </tbody>
      </table>
    </main>
  );
}
