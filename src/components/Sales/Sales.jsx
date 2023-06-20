import './Sales.css';
import Card from '../popular/card/Card';
import data from '../Data.json';

import furniture1 from '../popular/card/img/furniture1.png';
import furniture2 from '../popular/card/img/furniture2.png';
import furniture3 from '../popular/card/img/furniture3.png';

let popularList = [
    {name: 'White Swan Chair', price: '40$', color: 'White', sale: false, img: furniture1},
    {name: 'Brown Long Table', price: '120$', color: 'Brown', sale: false, img: furniture2},
    {name: 'Milky Soft Sofa', price: '230$', color: 'Milky', sale: true, img: furniture3},
    {name: 'White TV Sofa', price: '410$', color: 'White', sale: false, img: 'https://hips.hearstapps.com/hmg-prod/images/posters-in-cozy-apartment-interior-royalty-free-image-943910360-1534189931.jpg'},
    {name: 'Blue Royal Chair', price: '110$', color: 'Blue', sale: false, img: 'https://housing.com/news/wp-content/uploads/2022/11/living-room-furniture-design-compressed-1.jpg'},
    {name: 'Light Journal Table', price: '90$', color: 'Light', sale: true, img: 'https://www.themanual.com/wp-content/uploads/sites/9/2021/04/best-affordable-high-quality-furniture.jpg?fit=800%2C800&p=1'},
    {name: 'Yellow TV Chair', price: '100$', color: 'Yellow', sale: false, img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwZnVybml0dXJlfGVufDB8fDB8fHww&w=1000&q=80'},
    {name: 'Black Office Chair', price: '60$', color: 'Black', sale: true, img: 'https://housing.com/news/wp-content/uploads/2022/11/Popular-wooden-furniture-design-for-home-and-types-of-wood.jpg'},
    {name: 'Brown Office Wardrobe', price: '220$', color: 'Brown', sale: false, img: 'https://www.cleanipedia.com/images/yvwvo5xgjuhg/fa99e7be91c654ebe89016138b1e283b/a3230c508f54fa74d42a0629ea936299/aHR0cHNfX193d3cuY2xlYW5pcGVkaWEuY29tX2NvbnRlbnRfZGFtX3VuaWxldmVyX2NsZWFuaXBlZGlhX2luZGlhX2dlbmVyYWxfaW1hZ2Vfc2h1dHRlcnN0b2NrXzEwNjEzMzU0OTAtMTQ4MDkwMi1qcGcuanBn/990w-660h/wood-furniture-restoration%3A-how-to-care-for-antique-wood-furniture.jpg'},
]


function Sales() {
  return (
    <section className='sales'>
        {popularList.map(item => item.sale ? <Card key={item.name} name={item.name} price={item.price} img={item.img} /> : '' )}
        <p>{data}</p>
    </section>
  );
}

export default Sales;

{/* <Card key={item.name} name={item.name} price={item.price} img={item.img} /> */}
