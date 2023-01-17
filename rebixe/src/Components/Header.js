import './Component.css';
import Icon from './Icon.png';

function Header() {
    return ( 
        <div className="navbar">
        <div className="icon">
        <img src={Icon} alt="logo"/>
        </div>
        <div className="list">
            <ul>
                <li>HOME</li>
                <li>SERVICES</li>
                <li>PRODUCT</li>
                <li>AI INTERSHIP</li>
                <li>CAREER</li>
                <li>BLOG</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>
            </div>
            
        </div>
     );
}

export default Header;