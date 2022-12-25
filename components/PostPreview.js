import styles from "./PostPreview.module.css";

export default function PostPreview({ _id, title, author, body }) {
  return (
    <div className={styles.previewBlock}>
      <h2>{title}</h2>
      <p>by {author}</p>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </div>
  );
}
