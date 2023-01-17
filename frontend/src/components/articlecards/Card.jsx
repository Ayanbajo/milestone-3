import './/card.css'
// import sunset from '../../images/sunset.jpg'
import {Link} from 'react-router-dom'

function Card({post}) {
  return (
      <div className="card">
          <img className='img_1' src={post.image} />
          <div className="cardinfo">
              <span className='title'>{post.title}</span>
              <span className='post_date'><em>{post.date}</em></span>
        <span className='author'>{post.author}</span>
              <p className='description'>{post.description} </p>
              <hr />
          </div>
          <p className='content2'>
              {post.content}
          </p>
          
      <Link className="single" to={`/article/${post._id}`}><button className="card_btn">READ MORE</button></Link>
    </div>
  )
}

export default Card
