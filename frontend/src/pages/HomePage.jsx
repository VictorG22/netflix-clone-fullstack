import CardList from "../components/CardList"
import Hero from "../components/Hero"

const HomePage = () => {
  return (
    <div className="p-5">
        <Hero />
        <CardList title="Now Playing" category="now_playing"/>
        <CardList title="Popular" category="popular"/>
        <CardList title="Top Rated" category="top_rated"/>
        <CardList title="Upcoming" category="upcoming"/>
    </div>
  )
}
export default HomePage
