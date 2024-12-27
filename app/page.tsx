import Home from './home/page'
import { checkCookies } from './utils/cookies'

export default async function Page() {
  await checkCookies()

  return <Home />
}
