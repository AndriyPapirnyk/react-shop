import './Sales.css';
import Card from '../popular/card/Card';
import data from '../Data.json';

function Sales() {
  return (
    <section className='sales'>
        <h1>Our Sales</h1>
        <div className="sales__list">
            {data.map(item => item.sale ? <Card key={item.name} name={item.name} price={item.price} img={item.img} /> : '' )}
        </div>
    </section>
  );
}

export default Sales;

