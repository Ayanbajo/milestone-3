import Card from "../articlecards/Card"
import './/articlecards.css'
import React from 'react';


const ArticleCards = ({posts}) => {
    return (
        <div className='cards'>
            {posts.map((p,index) => (
                <Card key={index} post={p} />
            ))}
        </div>
   )         
}
export default ArticleCards