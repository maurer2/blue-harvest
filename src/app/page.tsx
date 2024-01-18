import * as styles from './page.css';

// type HomeProps = {
//   searchParams?: Record<string, string>;
// };

export default async function Home() {
  return (
    <div className={styles.page}>
      <h1>Blue Harvest</h1>
      <p>Please select a category in the navigation bar</p>
    </div>
  );
}
