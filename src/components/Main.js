import React,{ useEffect,useState } from 'react';

import "../App.css";

//component
import BannerName from "./BannerName";
import SubmitMenuContainer from "./SubmitMenuContainer";
import MenuCart from "./MenuCart";
import { MenuItems, Items } from "./Data";
import ItemCart from "./ItemCart";
import DebitCart from './DebitCart';
import CardItem from "./CardItem";
import { useStateValue } from "./StateProvider";


//img
import delevery from "../image/delivery.png";
import burgary from "../image/burger.png";
import pizzary from "../image/pizza.jpg";
import sandwitch from "../image/sandwich.png";
import calbas from "../image/calbas.png";
import eshtrodol from "../image/oshtorodel.png"


//icons font awseome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faPassport,faHeart,faBookmark,faSearch,faCog } from '@fortawesome/free-solid-svg-icons';


const Main = () => {
    // Main Dish State
    const [MainData,setMainData] = useState(
        Items.filter(element =>element.itemId === "buger01")
    );
    const [{cart},dispatch] = useStateValue();

    useEffect(() => {
        const menuLi = document.querySelectorAll("#Menu li");

        function setMenueActive () {
            menuLi.forEach((n)=> n.classList.remove("active"));
            this.classList.add("active");
        }

        menuLi.forEach((n) => n.addEventListener("click",setMenueActive));


        // menu cart active toggle//
        const menuCards = document
        .querySelector(".rowContainer")
        .querySelectorAll(".rowMenuCart");


        function setMenuCardsActive(){
            menuLi.forEach((n)=> n.classList.remove("active"));
            this.classList.add("active");
        }

        menuCards.forEach((n) => n.addEventListener("click",setMenuCardsActive));

    },[MainData,cart]);

    //set fish item on filter
    const setData =(itemId) =>{
        setMainData(Items.filter(element =>element.itemId === itemId))
    }

    return (
        <>
        <main>
                <div className="mainContainer">
                    {/* banner */}
                    <div className="banner">
                        <BannerName name={"verti"} discont={"20"} link={"#"} />
                        <img src= {delevery}
                         alt="" 
                         className="delevery-picture"/>
                        </div>
                         
                         {/* dishcontainer */}
                         <div className="dishContainer">
                             <div className="menuCart">
                                 <SubmitMenuContainer name={"Menu list"} />
                             </div>
                             <div className="rowContainer">
                               {
                                    MenuItems &&  MenuItems.map((data) =>(
                                        <div key={data.id} onClick={ () => setData(data.itemId)}>
                                        <MenuCart
                                         imgSrc={data.imgSrc}
                                          name={data.name}
                                          isActive={data.id === 1 ? true : false}
                                           />
                                    </div>
                                    ))
                               }
           
                                        
                                
                                  
                                   
                                </div>
                             <div className="dishItemContainer">
                                 {
                                     MainData && MainData.map((data) =>(
                                     <ItemCart
                                         key={data.id}
                                         itemId={data.id}
                                        imgSrc={data.imgSrc}
                                        name={data.name}
                                         ratings={data.ratings}
                                        price={data.price} 
                                         />
                                                
                                     ))
                                 }
                                 </div>
                               
                             
                         
                        
                    </div>
                </div>

                {/* cart container for shopping */}
                <div className="rightMenu">
                    <div className="debitCartContainer">
                        <div className="debitCart">
                            <DebitCart />
                        </div>
                    </div>
                    {!cart ? <div></div> : 
                     <div className="cardCheackOutContainer">
                     <SubmitMenuContainer name={"Card Items"} />
 
                         <div className="cardContainer">
                             
                             <div className="cardItems">
{/* 
                                 chang item and picture and ...cart shop */}
                                 {
                                    cart && 
                                    cart.map(data =>(
                                        <CardItem 
                                        key={data.id} 
                                        itemId={data.id}
                                        name={data.name}
                                        imgSrc={data.imgSrc}
                                        
                                        price={data.price}
        
                                        />

                                    )) 
                                 }
                              
                         
                             </div>
                         </div>
                             <div className="togalSection">
                                 <h3>toatal</h3>
                                 <p><span>$ </span>45.5</p>
                             </div>
                             <button className="cheackOut">Cheack Out</button>
                     </div>
                    
                    }
                   
                </div>
                
            </main>
            <div className="bottomenu">
                <ul id="Menu">
                  <li>
                      <a href="#">
                          <span className="iconBottom"><FontAwesomeIcon icon={faHome} className="searchIcon" /></span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span className="iconBottom"><FontAwesomeIcon icon={faHeart} className="searchIcon" /></span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span className="iconBottom"><FontAwesomeIcon icon={faPassport} className="searchIcon" /></span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span className="iconBottom"><FontAwesomeIcon icon={faBookmark} className="searchIcon" /></span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span className="iconBottom"><FontAwesomeIcon icon={faSearch} className="searchIcon" /></span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span className="iconBottom"><FontAwesomeIcon icon={faCog} className="searchIcon" /></span>
                      </a>
                  </li>
                  <div className="circle"></div>
                </ul>  
            </div>
            </>

    );
};

export default Main;