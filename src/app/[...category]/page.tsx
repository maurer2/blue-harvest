import { getDataFromEndpoint } from '../server-actions/getDataFromEndpoint/getDataFromEndpoint';
import * as styles from './page.css';

type CategoryProps = {
  params: Record<string, string[]>; // route segments in string[]
  searchParams?: Record<string, string>;
};

const baseURL = 'https://swapi.dev/api';

export default async function Category({ params }: CategoryProps) {
  const category = params.category[0];
  const url = `${baseURL}/${category}`;
  const categoryData = await getDataFromEndpoint<Record<string, string>>(url);

  return (
    <div className={styles.page}>
      <h2>{category}</h2>
      <p>{url}</p>
      <pre>
        <code>{JSON.stringify(categoryData)}</code>
      </pre>
    </div>
  );
}
