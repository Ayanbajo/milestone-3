import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './listarticle.css'

const ListArticles = ({ props }) => {
  const [view, setView ] = useState(false);

  const navigate = useNavigate();

  const editArticle = (id) => {
    navigate('/edit/'+id)
   
  }

  const smallView = () => {
    return (
      <div className="movie-simple" key={props.id}>
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
          <h4>{props.description}</h4>
      </div>    
    );
  };

   const wholeView = () => {
    const deleteArticle = async (id) => {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
      const data = await fetch(`/articles/${id}`, requestOptions);
      window.location.reload();
    };

    return (
      <div className="article-container">
        <div className="">
          <div className="">
            <img
              className="image"
              src={`http://via.placeholder.com/350x500`}
              alt={"article image"}
              height={"400px"}
            />
          </div>
          <div className="">
            <div className="">
              <h1 className="title">{props.title}</h1>
              <h4 className="">{props.date}</h4>
              <h4 className="">{props.author}</h4>
              <h4 className="">{props.content}</h4>
            </div>
            <div className="buttons">
              <button onClick={ () => editArticle(props._id) } className="">edit Article</button>
              <button onClick={ () => deleteArticle(props._id) } className="">Delete Article</button>
            </div>
          </div>
        </div>
      </div>
    )
  };
  return (   
    <div className="article-container" onClick={() => setView(!view)}>
    {view ? wholeView() : smallView()}
    </div>
  );
};

   
export default ListArticles;
