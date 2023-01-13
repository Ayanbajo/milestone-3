import ArticleCards from '../../components/articlecards/ArticleCards'
import Header from '../../components/header/Header'
import './home.css'
// import Register from '../register/Register'
// import Article from '../article/Article'

function Home() {
  return (
    <>
    <Header />
      <div className="home">
        <ArticleCards />
        {/* <Article/> */}
      </div>
    </>
  )
}

export default Home