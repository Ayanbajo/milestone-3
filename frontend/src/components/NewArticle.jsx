import React from 'react'
import { useState, useEffect } from 'react'


const NewArticle = () => {
    
        const [title, editTitle] = useState('')
        console.log('title!!!', title)
    
        const [image, editImage] = useState('')
        console.log('image!!!', image)
    
        const [date, editDate] = useState('')
        console.log('date!!!', date)
    
        const [description, editDescription] = useState('')
        console.log('duration!!!', description)
    
        const [author, editAuthor] = useState('')
        console.log('genre!!!', author)
    
        const [content, editContent] = useState('')
        console.log('description!!!', content)

        const saveArticle = async ()=> {
            const requestOption = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  title: title,
                  image: image,
                  date: date,
                  description: description,
                  author: author,
                  content: content
                })
              };
            
            const data = await fetch(`/articles`, requestOption)                
        }

    return (
        <div>
            <div className="">
                <h2>Edit Article</h2>
                <form>
                    <label>Article Title: </label>
                    <input 
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e)=> {editTitle(e.target.value)}}
                        required
                    />
                    <label>Image URL: </label>
                    <input 
                        type="url"
                        id="image"
                        name="image"
                        value={image}
                        onChange={(e)=> {editImage(e.target.value)}}
                    />
                    <label>Date Published</label>
                    <input 
                        type="number"
                        id="date"
                        name="date"
                        value={date}
                        onChange={(e)=> {editDate(e.target.value)}}
                    />
                    <label>Description: </label>
                    <input 
                        type="number"
                        id="duration"
                        name="duration"
                        value={description}
                        onChange={(e)=> {editDescription(e.target.value)}}
                    />
                    <label>Author: </label>
                    <input 
                        type="text"
                        id="genre"
                        name="genre"
                        value={author}
                        onChange={(e)=> {editAuthor(e.target.value)}}
                    />
                    <label>Content: </label>
                    <textarea
                        id="description"
                        name="description" 
                        value={content}
                        onChange={(e)=> {editContent(e.target.value)}}
                        required
                    />
                    <input 
                        onClick={saveArticle}
                        type="submit"
                        value="Add Article"
                    />
                </form>
            </div>
        </div>
    );
};

export default NewArticle;