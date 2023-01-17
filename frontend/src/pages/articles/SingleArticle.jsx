
import './/singleArticle.css'
// import sunset from '../../images/sunset.jpg'
// import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function SingleArticle() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({});

  const getData = async () => {
    // console.log("We got clicked", id);
    const data = await fetch("http://localhost:3001/article/" + id);
    // console.log("Data from backend:", data);

    const cleanData = await data.json();
    setPost(cleanData);
  };
  // console.log("Post", post);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="article">
        <span className='title2'>{post.title}</span>
        <img className='article_img' src={post.image} />  
        <div className="articleinfo">
            <span className='post_date2'><em> {post.date}</em></span>
          <span className='author'>{post.author}</span>
          <p className='description'>{post.description} </p>
            <hr />
        </div>
        
        <p className='content'>
        {post.content}
        </p>
    </div>
      </>
)
}

export default SingleArticle
