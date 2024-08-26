import { promises as fs } from 'fs';
import Home from './Home';

export default async function Page() {
  const getFile = await fs.readFile(process.cwd() + '/src/app/schedule.json', 'utf8');
  const data = JSON.parse(getFile);

  return (
    <Home data={data} />
  );
}
