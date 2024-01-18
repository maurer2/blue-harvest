import * as styles from './loading.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <p>Data is being fetched. Please wait!</p>
    </div>
  );
}
