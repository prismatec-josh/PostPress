export default function PostPreview({ props }) {
  const { _id, title, author, body } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>by {author}</p>
      <p>{body}</p>
    </div>
  );
}
