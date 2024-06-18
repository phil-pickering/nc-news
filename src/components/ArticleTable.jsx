import ArticleRows from "./ArticleRows";

export default function ArticleTable() {
  return (
    <table class="table table-dark table-striped table-borderless">
      <thead>
        <tr>
          <th class="col1 text-primary">Title</th>
          <th class="col2 text-primary">Author</th>
          <th class="col3 text-primary">Date</th>
        </tr>
      </thead>
      <tbody>
        <ArticleRows />
      </tbody>
    </table>
  );
}
