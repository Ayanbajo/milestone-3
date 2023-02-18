
import './/singleArticle.css'
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

function SingleArticle() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({});

  const getData = async () => {
    const data = await fetch("/article/" + id);
    // console.log("Data from backend:", data);

    const cleanData = await data.json();
    setPost(cleanData);
  };
  // console.log("Post", post);
  useEffect(() => {
    getData();
  }, []);


  //DELETE
  const deleteArticle = async () => {
    // console.log('Hello from delete click')
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const data = await fetch(`/article/${id}`, requestOptions);
    // console.log("Data!!! from delte", data);
    navigate("/");
  };

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

        <Link className="single" to={`/article/${post._id}/edit`}><button className="card_btn">Edit</button></Link>

        <button className="card_btn card_btn4" onClick={deleteArticle}>Delete</button>
    </div>
      </>
)
}

export default SingleArticle
