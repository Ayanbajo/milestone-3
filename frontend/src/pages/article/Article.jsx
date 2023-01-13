import './/article.css'
import sunset from '../../images/sunset.jpg'

function Article() {

  return (
     <div className="card">
          <img className='img_2' src={sunset} alt='Sunset traveler' />
          <div className="cardinfo">
              <span className='title'>A Trip to Remember</span>
              <span className='post_date'><em>Posted: August 20</em></span>
              <hr />
          </div>
          <p className='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero. Suscipit sequi rem ea? Aut quisquam consequuntur atque. Id, dolor perspiciatis expedita sunt quas voluptate!orem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero. 
          </p>
          <button className="card_btn">READ MORE!</button>
    </div>
  )
}


export default Article