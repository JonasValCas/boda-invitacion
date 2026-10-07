import WeddingHero from '../../components/wedding/WeddingHero'
import RSVP from '../RSVP/RSVP'

import './Home.css'

function Home() {
  return (
    <main className="home">
      <WeddingHero />

      <RSVP />
    </main>
  )
}

export default Home