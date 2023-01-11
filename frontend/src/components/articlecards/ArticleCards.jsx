import './/articlecards.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import map from '../../images/map_n_passport.jpg'
import sunset from '../../images/sunset.jpg'
import airplane from '../../images/airplane.jpg'



const ArticleCards = () => {
    return (
        <>
        <div className="card_container">
                <div className="card">
                    <Card.Img variant="top" src={map} />
                    <Card.Body>
                        <Card.Title>Chamomille Tea</Card.Title>
                        <Card.Text>
                            One of the world's most famous herbal tea; made from the chamomille flower.
                        </Card.Text>
                        <Button bg="color" variant="dark" >Read More!</Button>
                    </Card.Body>
                </div >

                <div className="card">
                    <Card.Img variant="top" src={sunset} />
                    <Card.Body>
                        <Card.Title>Chamomille Tea</Card.Title>
                        <Card.Text>
                            One of the world's most famous herbal tea; made from the chamomille flower.
                        </Card.Text>
                        <Button bg="color" variant="dark">Read More!</Button>
                    </Card.Body>
                </div >

                <div className="card">
                    <Card.Img variant="top" src={airplane} />
                    <Card.Body>
                        <Card.Title>Chamomille Tea</Card.Title>
                        <Card.Text>
                            One of the world's most famous herbal tea; made from the chamomille flower.
                        </Card.Text>
                        <Button bg="color" variant="dark">Read More!</Button>
                    </Card.Body>
                </div >
             </div>
        </>
   )         
}
export default ArticleCards