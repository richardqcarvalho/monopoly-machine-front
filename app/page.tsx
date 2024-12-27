import Home from './home/page'
import { getPlayerName } from './utils/cookies'

export default async function Page() {
  const name = await getPlayerName()

  return <Home name={name} />
}
