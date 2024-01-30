import * as styles from './page.css';

export default async function Home() {
  return (
    <div className={styles.page}>
      <h1>Blue Harvest</h1>
      <p>Please select a category in the navigation bar or input field.</p>
    </div>
  );
}
