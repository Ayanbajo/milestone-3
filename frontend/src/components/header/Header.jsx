import './/header.css'
import travelSuitcase from '../../images/travelsuitcase.jpg'


function Header() {
    return (
        <>
        <div className="header">
                <h1 className="header_title"> Food & Travel Blog</h1>
        </div>
            <img className='header_img' src={travelSuitcase} alt="Travel Packing" />
            
        </>
    )
}

export default Header