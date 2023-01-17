import './/editArticle.css'

function EditArticle() {
    return (
        <>
                <div className='edit_title'>
                    <h2 className='edit_intro'>Share your experience below. </h2>
                </div>
                <div className='form_container'>
                    <label>Title</label>
                        <input className="editInput" type="text" placeholder='Enter article title' />
                    <label>Image</label>
                        <input className="editInput" type="url" placeholder='Enter url'/>
                    <label>Date</label>
                        <input className="editInput" type="text" placeholder='Post Date' />
                    <label>Author</label>
                        <input className="editInput" type="text" placeholder='Enter name' />
                    <label>Description</label>
                        <input className="editInput" type="text" placeholder='Describe your content' />
                    <label>Content</label>
                        <textarea
                            className="editInput"
                            type="text"
                            placeholder='Enter content here'
                        />
                    <button className="card_btn">Update Article</button>
                    
                </div>
        </>
        )
}


export default EditArticle