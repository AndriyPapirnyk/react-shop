import './Popular.css';
import Card from './card/Card';
import data from '../Data.json'
import nextImg from './img/next-prev.png';


function Popuplar() {
  return (
    <section className='popular'>
      <h1>Our Furniture</h1>
      <div className="popular__row">
        <p>All of our furniture uses the best materials and choices for our customers.</p>
        <div className='popular__row-options'>
          <img src={nextImg} alt="" />
          <img src={nextImg} alt="" />
        </div>
      </div>
      <div className="popular__list">
        {data.map(item => <Card key={item.name} name={item.name} price={item.price} img={item.img} />)}
      </div>
    </section>
  );
}

export default Popuplar;
