import './Footer.css';  

function Footer() {
  const data = new Date();
  return (
    <footer className='footer'>
        <div className="footer__container">
          <p>Всі права захищено &copy; {data.getFullYear()}</p>
        </div>
    </footer>
  );
}

export default Footer;
