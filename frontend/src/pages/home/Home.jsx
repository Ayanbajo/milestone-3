 import ArticleCards from '../../components/articlecards/ArticleCards'
import Header from '../../components/header/Header'
import './home.css'
import { useState, useEffect } from 'react'


function Home() {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    // console.log("We got clicked");
    const data = await fetch("http://localhost:3001/article");
    const cleanData = await data.json();

    setPosts(cleanData);
  };
  console.log("Posts", posts);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <Header />
      <div className="home">
        <ArticleCards posts={posts} />
      </div>

    </>
  )
}

export default Home