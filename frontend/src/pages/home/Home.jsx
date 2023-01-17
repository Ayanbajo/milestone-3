 import ArticleCards from '../../components/articlecards/ArticleCards'
import Header from '../../components/header/Header'
import './home.css'
import { useState, useEffect } from 'react'


function Home() {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    // console.log("We got clicked");
    const data = await fetch("http://localhost:3001/api/article");
    // console.log("DATA inital from backed", data);
    const cleanData = await data.json();
    // // console.log("STUFF FROM BACKNED!!", cleanData);
    setPosts(cleanData);
  };
  console.log("Posts", posts);

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetch("http://localhost:3001/api/article")
  //     console.log(data)
  //     setPosts(data)
  //   }
  //   getData()
  // }, [])


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