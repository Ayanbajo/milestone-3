import './/addArticle.css'
import {Link} from 'react-router-dom'

function AddArticle() {
    return (
    <>
            <div className='header_title'>
                <h2 className='page_intro'>Share your experience below. </h2>
            </div>
            <div className='form_container'>
                <label>Title</label>
                    <input className="articleInput" type="text" placeholder='Enter article title' />
                <label>Image</label>
                    <input className="articleInput" type="url" placeholder='Enter url'/>
                <label>Date</label>
                    <input className="articleInput" type="text" placeholder='Post Date' />
                <label>Author</label>
                    <input className="articleInput" type="text" placeholder='Enter name' />
                <label>Description</label>
                    <input className="articleInput" type="text" placeholder='Describe your content' />
                <label>Content</label>
                    <textarea
                        className="articleInput"
                        type="text"
                        placeholder='Enter content here'
                    />
                <button className="card_btn"><Link className="single" to="/home">Submit</Link></button>
                
            </div>
    </>
    )
} 

export default AddArticle