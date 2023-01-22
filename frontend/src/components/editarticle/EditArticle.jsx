import React, { useState, useEffect } from 'react'
import './/editArticle.css'
import {useParams, useNavigate} from 'react-router-dom'

function EditArticle() {
  const [post, setPost] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const getData = async () => {
      const data = await fetch(`http://localhost:3001/article/${id}`); 
    console.log("DATA inital from backed", data);

    const cleanData = await data.json();
    console.log("STUFF FROM BACKNED!!", cleanData);
    setPost(cleanData);
    setTitle(cleanData.title);
    setImage(cleanData.image);
    setDescription(cleanData.description);
    setAuthor(cleanData.author);
    setContent(cleanData.content);
  };

  useEffect(() => {
    getData();
  }, []);

  const articleEdit = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        image: image,
        date: date,
        description: description,
        author: author,
        content: content
      }),
    };

      const data = await fetch(`http://localhost:3001/article/${id}`, requestOptions).then(
          navigate("/")
      );
    
    console.log("Data!!! from edit", data);
  };
     
    return (
        <div>
            <div className="edit_form">
                <h2>Make your article changes below:</h2>
                <form className='form_container'>
                    <label className='form_label'>Article Title: </label>
                    <input 
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={post.title}
                        onChange={(e)=> {setTitle(e.target.value)}}
                        required
                    />
                    <label className='form_label'>Image URL: </label>
                    <input 
                        type="url"
                        id="image"
                        name="image"
                        defaultValue={post.image}
                        onChange={(e)=> {setImage(e.target.value)}}
                    />
                    <label className='form_label'>Date Published</label>
                    <input 
                        type="number"
                        id="date"
                        name="date"
                        defaultValue={post.date}
                        onChange={(e)=> {setDate(e.target.value)}}
                    />
                    <label className='form_label'>Description: </label>
                    <input 
                        type="type"
                        id="duration"
                        name="duration"
                        defaultValue={post.description}
                        onChange={(e)=> {setDescription(e.target.value)}}
                    />
                    <label className='form_label'>Author: </label>
                    <input 
                        type="text"
                        id="genre"
                        name="genre"
                        defaultValue={post.author}
                        onChange={(e)=> {setAuthor(e.target.value)}}
                    />
                    <label className='form_label'>Content: </label>
                    <textarea
                        id="description"
                        name="description" 
                        defaultValue={post.content}
                        onChange={(e)=> {setContent(e.target.value)}}
                        required
                    />
                    <button 
                        className="card_btn card_btn3"
                        onClick={articleEdit}>
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditArticle
