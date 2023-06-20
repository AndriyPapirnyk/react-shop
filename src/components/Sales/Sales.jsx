import './Sales.css';
import Card from '../popular/card/Card';
import data from '../Data.json';

function Sales() {
  return (
    <section className='sales'>
        {data.map(item => item.sale ? <Card key={item.name} name={item.name} price={item.price} img={item.img} /> : '' )}
    </section>
  );
}

export default Sales;

