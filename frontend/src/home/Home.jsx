import ArticleCards from "../components/articlecards/ArticleCards"
import Header from "../components/header/Header"
import './home.css'

function Home() {
  return (
    <>
    <Header />
    <div className="home">
        <ArticleCards />
      </div>
    </>
  )
}

export default Home