import React from 'react';
import './/addArticle.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddArticle() {
    // const [post, setPost] = useState([]);
    // let { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");

    const reload = async () => {
        navigate("/")
    }
  
    const handleSave = async () => {
        console.log("Is this working?")
        navigate("/");
  
    const requestOptions = {
                method: "POST",
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
  
        const data = await fetch("http://localhost:3001/article", requestOptions)
        const cleanData = await data.json();
            console.log("Did you save?", cleanData);
        };

        return (
            <>
                <div className='header_title'>
                    <h2 className='page_intro'>Share your experience below. </h2>
                </div>
                <div className='form_container'>
                    <label>Title</label>
                    <input className="articleInput"
                        type="text"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        value={title}
                        placeholder='Enter article title'
                    />
                    <label>Image</label>
                    <input className="articleInput"
                        type="url"
                        onChange={(e) => {
                            setImage(e.target.value);
                        }}
                        value={image}
                        placeholder='Enter url' />
                    <label>Date</label>
                    <input className="articleInput"
                        type="text"
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                        value={date}
                        placeholder='Post Date' />
                    <label>Author</label>
                    <input className="articleInput"
                        type="text"onChange={(e) => {
                            setAuthor(e.target.value);
                        }}
                        value={author}
                        placeholder='Enter name' />
                    <label>Description</label>
                    <input className="articleInput"
                        type="text"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        value={description}
                        placeholder='Describe your content' />
                    <label>Content</label>
                    <textarea
                        className="articleInput"
                        type="text"
                        onChange={(e) => {
                            setContent(e.target.value);
                        }}
                        value={content}
                        placeholder='Enter content here'
                    />
                    <div>
                    <button className="card_btn"
                        onClick={handleSave}
                        type="submit"
                        // disabled={!title || !image || !date || !author || !content ||description}  
                    > Submit

                        </button>
                    </div>

                    <div>
                      <button className="card_btn"
                        onClick={reload}
                        type="cancel"
                    > Cancel </button>
                    </div>
                </div>
            </>
        )
    }
   

export default AddArticle