import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { menuData } from '../../data/MenuData';
import CommunititesDropDown from '../communititesDropDown/CommunititesDropDown';
import './navbar.css';
export default function Navbar() {
    const [navBar, setNavBar] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleClick = () => setIsMobile(!isMobile);

    const changeBackground = () => {
        if (window.scrollY >= 60) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropDown(false);
        } else {
            setDropDown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropDown(false);
        } else {
            setDropDown(false);
        }
    };

    window.addEventListener('scroll', changeBackground);
    return (
        <div className={navBar ? 'nav active' : 'nav'}>
            <Link to="/" className="link">
                <span className="logo"> EXIXR</span>
            </Link>
            <ul
                className={isMobile ? 'navListMobile' : 'navList'}
                onClick={() => setIsMobile(false)}
            >
                {menuData.map((item, index) => {
                    if (item.title === 'Communitites') {
                        return (
                            <li
                                className="navListItem"
                                key={index}
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <Link className="link drop-icon" to="">
                                    {item.title} <MdOutlineArrowDropDown />
                                    {dropDown && <CommunititesDropDown />}
                                </Link>
                            </li>
                        );
                    }
                    return (
                        <li className="navListItem" key={index}>
                            <Link className="link" to={item.link}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Link className="link" to="/contact">
                <button className="navContactButton">Contact Us</button>
            </Link>
            <div className="menuBars" onClick={handleClick}>
                {isMobile ? (
                    <FaTimes className="faTimes" />
                ) : (
                    <FaBars className="faBars" />
                )}
            </div>
        </div>
    );
}
