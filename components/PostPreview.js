export default function PostPreview({ _id, title, author, body }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>by {author}</p>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </div>
  );
}
