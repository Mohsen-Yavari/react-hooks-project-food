import React,{useEffect} from 'react';

//font from font awsome.com
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faSearch,faBars } from '@fortawesome/free-solid-svg-icons'

//img
import logo from "../image/logo-food.jpg";
import boy from "../image/boy.png"

//style
import "../App.css";

const Header = () => {

    useEffect(() => {
        const toggleMenu = document.querySelector(".toggleMenu");

        toggleMenu.addEventListener('click', ()=>{
            document.querySelector('.rightMenu').classList.toggle('active');
        })
    },[])

    return (
        <div className="header">
            <img src={logo} alt="" className="logo" />
            <div className="inputBox">
                <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                <input type="text" placeholder="Search..." />
            </div>
            <div className="shopingCart">
                
            <FontAwesomeIcon icon={faShoppingCart} className="cart" />
            <div className="cart-content">
                <p>2</p>
            </div>
            </div>
            <div className="profileContiner">
                <div className="imgBox">
                    <img src={boy} alt="" className="profilpicture" />
                </div>
                <h2 className="userName">user name</h2>
            </div>
            <div className="toggleMenu">
                <FontAwesomeIcon icon={faBars} className="toggleIcon" />

            </div>
        </div>
    );
};

export default Header;


