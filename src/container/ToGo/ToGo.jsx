import React, {useState} from 'react';
import './ToGo.css';
import FadeInSection from '../../components/FadeInSection/FadeInSection';

import {images, data} from "../../constants";

const ToGo = () => {
    const [cart, setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [highlight, setHighlight] = useState(null)

    const handleViewCart = () =>{
        setCartOpen(!cartOpen);
    };

    const handleAddToCart = (item, index) => {
        setCart((prevCart) => [...prevCart, item]);
        setHighlight(index);
        setTimeout(() => setHighlight(null), 300)
    };

    const handleRemoveFromCart = (indexToRemove) => {
        setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
    };

    return (
    <div className="app__ToGo" id="ToGo">
        <div className="app__ToGo-title">
            <h1 className="headtext__cormorant">Our Offerings</h1>
        </div>
        <div className="app__ToGo-image">
            <img src ={images.ToGo}/>
        </div>
        <h1 className="app__specialMenu-menu_heading">Courses</h1>
        <div className="app__ToGo-food">
            <div className="app__ToGo-fooditems">
                {data.TakeOut.map((item, index) => (
                <div key={item.name + index} className="app__ToGo-item">
                    <button onClick={() => handleAddToCart(item, index)} className={`app__ToGo-addToCartButton ${highlight === index ? 'highlight' : ''}`}>
                        <p className="p__cormorant">Add</p>
                    </button>
                    <div className="app__description">
                        <p className="app__specialMenu-menu_heading">{item.name}</p>
                        <p className="p__cormorant">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className="app__order">
            <button onClick={handleViewCart} className="app__ViewCartButton">
                <p className="p__cormorant">View Cart</p>
            </button>
            { cartOpen && (
                <div className="app__cart">
                    <h1 className="headtext__cormorant" style ={{fontSize: '40px'}}>My Cart</h1>
                    {cart.map((item, index) => (
                        <div key={`${item.name}-${index}`} className="app__ToGo-cartItem">
                            <p className="p__cormorant" style={{fontSize:'15px', lineHeight:'1rem', width:"80%"}}>{item.name}</p>
                            <button onClick={()=>{handleRemoveFromCart(index)}} className='app__remove'>
                                X
                            </button>
                        </div>
                    ))}
                    <div className="app__bottom">
                        <button onClick={handleViewCart} className="app__KeepShopping">
                            <p className="p__cormorant" style={{fontSize: '20px', lineHeight: '1.3rem', }}>Keep Shopping</p>
                        </button>
                        <button className="app__Checkout">
                             <p className="p__cormorant" style={{fontSize: '20px', lineHeight: '1rem', }}>Checkout</p>
                        </button>
                    </div>
                </div>
            )}
            <button>

            </button>
        </div>
    </div>
  )
}

export default ToGo;
