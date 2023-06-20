import './Header.css';
import loupeImg from './img/header__loupe.png'
import menuImg from './img/header__menu.png'

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">House Staff</h1>
      <ul>
        <li>Home</li>
        <li>Goods</li>
        <li>Sales</li>
        <li>Rules</li>
      </ul>
      <div className="header__options">
        <img src={loupeImg} alt="" />
        <img src={menuImg} alt="" />
      </div>
    </header>
  );
}

export default Header;
