
import './/singleArticle.css'
import sunset from '../../images/sunset.jpg'
import Carousel from 'react-bootstrap/Carousel';

function SingleArticle() {
  return (
    <>
    <div className="article">
      <span className='title2'>A Trip to Remember</span>
        <img className='article_img' src={sunset} alt='Sunset traveler' />
        <div className="articleinfo">
            <span className='post_date2'><em> Date: August 20</em></span>
          <span className='author'>Post By: James Harry</span>
          <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <hr />
        </div>
        
        <p className='content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero. Suscipit sequi rem ea? Aut quisquam consequuntur atque. Id, dolor perspiciatis expedita sunt quas voluptate!orem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero. Suscipit sequi rem ea? Aut quisquam consequuntur atque. Id, dolor perspiciatis expedita sunt quas voluptate!orem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero. Suscipit sequi rem ea? Aut quisquam consequuntur atque. Id, dolor perspiciatis expedita sunt quas voluptate!orem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero. Suscipit sequi rem ea? Aut quisquam consequuntur atque. Id, dolor perspiciatis expedita sunt quas voluptate!orem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero. Suscipit sequi rem ea? Aut quisquam consequuntur atque. Id, dolor perspiciatis expedita sunt quas voluptate!orem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero. Suscipit sequi rem ea? Aut quisquam consequuntur atque. Id, dolor perspiciatis expedita sunt quas voluptate!orem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cupiditate quis tempora nulla nihil libero.
        </p>
    </div>
      </>
)
}

export default SingleArticle
