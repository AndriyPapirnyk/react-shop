import './Main.css';
import Header from './header/Header';
import Home from './home/Home';
import Popuplar from './popular/Popular';
import Customers from './customers/Customers';
import Subscription from './subsription/Subscription';
import Sales from './Sales/Sales';

function Main() {
  return (
    <div className="main">
        <div className="main__container">
            <Header />
            <Home />
            <Popuplar />
            <Subscription />
            <Sales />
            <Customers /> 
        </div>
    </div>
  );
}

export default Main;
