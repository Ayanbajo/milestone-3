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
              <hr />
          </div>
          <p className='description'>
              {post.content}
          </p>
          
          <button className="card_btn"><Link className="single" to="/article">READ MORE</Link></button>
    </div>
  )
}

export default Card
