import './Customers.css';
import mainImg from './img/main.png';
import icon1 from '../customers/review/img/icon1.png'
import Review from './review/Review';

let reviews = [
    {name: 'Mh Jibon', rate: '4.8', img: icon1}
]

function Customers() {
  return (
    <section className='customers'>
        <img className='customers__img' src={mainImg} alt="" />
        <div className="customers__text">
            <h1>Our customers are very <br /> importan to us</h1>
            <p>
            @ Create an account to make purchases. <br />
            @ Browse and search for furniture. <br />
            @ Review detailed product information. <br />
            @ Use the shopping cart for easy checkout. <br />
            @ Enjoy a secure and hassle-free checkout process. <br />
            @ Leave reviews and ratings for purchased products. <br />
            @ Reach out to our customer support for assistance. <br />
            @ Rest assured, your privacy and security are important to us.
            </p>
            {reviews.map(item => <Review key={item.name} name={item.name} rate={item.rate} img={item.img} />)}
        </div>
    </section>
  );
}

export default Customers;
