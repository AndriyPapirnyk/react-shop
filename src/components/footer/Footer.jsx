import './Footer.css';  

function Footer() {
  const data = new Date();
  return (
    <footer className='footer'>
        <div className="footer__container">
          <p>All rights reserved &copy; {data.getFullYear()}</p>
        </div>
    </footer>
  );
}

export default Footer;
