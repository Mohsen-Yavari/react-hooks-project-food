//font from font awsome.com
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faStar,faPlus} from '@fortawesome/free-solid-svg-icons';

import {useState,useEffect} from 'react';
import { Items } from './Data';
import {useStateValue} from "./StateProvider";
import { actionType } from './reducer';


let cartData = [];

     function ItemCart({imgSrc,name,ratings,price,itemId}) {
            const [isFavarit,setIsFavarit] =useState(false);
            const [cureentValue,setCureentValue] = useState(Math.floor(ratings));

            const [isCart,SetIsCart] = useState(null);
            const [{},dispatch] =useStateValue()

            useEffect(() => {
                if (isCart) {
                   cartData.push(isCart);
                   dispatch({
                       type: actionType.SET_CART,
                       cart:cartData
                   })
                   
                }
            },[isCart])

            const handelClick =(value) =>{
                setCureentValue(value);

            }
    return (
        <div className="itemCart" id={itemId}>
            <div className={`isFavarit ${isFavarit ? 'active' : ''}`}
            onClick = {() => setIsFavarit(!isFavarit)}
            >
              
               
            <FontAwesomeIcon icon={faHeart}className="favaritIcon"/>
            </div>

            <div className="imgBox">
                <img src={imgSrc} alt="" className="itemImg" />
            </div>
            <div className="itemContent">
                <h3 className="itemName">{name}</h3>
                <div className="bottom">
                    <div className="reatings">
                        {Array.apply(null, {length : 5}).map((e,i) => (
                                <i key={i} className={`ratings ${cureentValue > i ? "orange" : "gray"}`}
                                onClick ={() =>handelClick(i + 1)}
                                >
                                  <FontAwesomeIcon icon={faStar} className="iconStar" />
                                </i>
             
                        ))}
                        <h3 className="price">
                            <span>$</span>{price}</h3>
           
                    </div>
                    <div className="addToCart"
                     onClick={() => SetIsCart(Items.find(n => n.id === itemId))}
                     >
                    <FontAwesomeIcon icon={faPlus}  className="iconPlus" />

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ItemCart;