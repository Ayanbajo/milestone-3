import React from 'react';
import Card from "../articlecards/Card"
import './/articlecards.css'



const ArticleCards = ({posts}) => {
    return (
        <div className='cards'>
            {posts.map((p) => (
                <Card post={p} />
            ))}
        </div>
   )         
}
export default ArticleCards