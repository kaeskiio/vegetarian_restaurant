import React, { useState, useEffect} from 'react';
import './ToGo.css';
import { images, data } from '../../constants';
import FadeInSection from '../../components/FadeInSection/FadeInSection';
import { Link, useNavigate } from 'react-router-dom';

const ToGo = () => {
    const [cart, setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [highlight, setHighlight] = useState(null);
    const [cartEmpty, setCartEmpty] = useState(false);
    const [itemView, setItemView] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [index, setIndex] = useState(null);
    const urls = [images.course1, images.course2, images.course3, images.course5, images.course6, images.course7, images.course8, images.course9];

    useEffect(() => {
        setCartEmpty(cart.length === 0);
    }, [cart]);

    const handleViewCart = () => {
        setCartOpen((prevState) => !prevState);
    };

    const handleAddToCart = (item, index) => {
        setCart((prevCart) => [...prevCart, item]);
        setHighlight(index);
        setTimeout(() => setHighlight(null), 300);
    };

    const handleRemoveFromCart = (indexToRemove) => {
        setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const handleItemClicked = (item, index) => {
        setCurrentItem(item);
        setItemView(true);
        setIndex(index);
        window.scrollTo(0, 0);
    }

    const handleReturn = () => {
        setItemView(false);
        setIndex(null);
        setCurrentItem(null);
    }

    return (
        <div>
            {!itemView && (
                <div className="app__ToGo" id="ToGo">
                    <FadeInSection translateYAmount={30}>
                        <div className="app__ToGo-title">
                            <h1 className="headtext__cormorant">Our Offerings</h1>
                        </div>
                    </FadeInSection>
                    <FadeInSection translateYAmount={30}>
                        <div className="app__ToGo-image">
                            <img src={images.ToGo} alt="ToGo" />
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <h1 className="app__specialMenu-menu_heading">Courses</h1>
                    </FadeInSection>
                    <div className="app__ToGo-food">
                        <div className="app__ToGo-fooditems">
                            {data.TakeOut.map((item, index) => (
                                <div key={item.name + index} className="app__ToGo-item" onClick={() => handleItemClicked(item, index)}>
                                    <FadeInSection>
                                        <div className="app__description">
                                            <img src={urls[index]}/>
                                            <p className="app__specialMenu-menu_heading" style={{fontSize: "30px", lineHeight: '2rem', margin: '1rem'}}>{item.name}</p>
                                        </div>
                                        <div className = 'app__ToGo-item-description'>
                                                <div style = {{margin: '0rem 0rem'}}><p className="p__cormorant">${item.price.toFixed(2)}</p></div>
                                                <div style = {{margin: '0rem 1rem'}} className="p__cormorant">{item.calories}</div>
                                                <button
                                                    onClick={(e) => {e.stopPropagation(); handleAddToCart(item, index);}}
                                                    className={`app__ToGo-addToCartButton ${
                                                        highlight === index ? 'highlight' : ''
                                                    }`}
                                                >
                                                    <p className="p__cormorant">Add</p>
                                                </button>
                                            </div>
                                    </FadeInSection>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="app__order">
                        <button onClick={handleViewCart} className="app__ViewCartButton">
                            <p className="p__cormorant">View Cart</p>
                        </button>
                        {cartOpen && (
                            <div className={`app__cart ${cartOpen ? 'open' : ''}`}>
                                <h1 className="headtext__cormorant" style={{ fontSize: '40px' }}>
                                    My Cart
                                </h1>
                                { cartEmpty && (
                                    <p className="p__cormorant"
                                        style={{
                                        fontSize: '15px',
                                        lineHeight: '1rem',
                                        width: '100%',
                                        textAlign: 'center',
                                        color: '#FFECB3',
                                    }}>
                                        Your cart is empty, just like life without Black Basil
                                    </p>
                                )}
                                <div className="app__cart-items">
                                    {cart.map((item, index) => (
                                        <div
                                            key={`${item.name}-${index}`}
                                            className="app__ToGo-cartItem"
                                        >
                                            <p
                                                className="p__cormorant"
                                                style={{
                                                    fontSize: '15px',
                                                    lineHeight: '1rem',
                                                    width: '60%',
                                                }}
                                            >
                                                {item.name} - ${item.price.toFixed(2)}
                                            </p>
                                            <button
                                                onClick={() => handleRemoveFromCart(index)}
                                                className="app__remove"
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="app__cart-total">
                                    <p className="p__cormorant">Total: $ {calculateTotal()}</p>
                                </div>
                                <div className="app__bottom">
                                    <button onClick={handleViewCart} className="app__KeepShopping">
                                        <p className="p__cormorant" style={{ fontSize: '20px', lineHeight: '1.3rem' }}>
                                            Keep Shopping
                                        </p>
                                    </button>
                                    <button className="app__Checkout">
                                        <p className="p__cormorant" style={{ fontSize: '20px', lineHeight: '1rem' }}>
                                            Checkout
                                        </p>    
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {itemView && (
                <div className = 'app__menu_item'>
                    <div className = 'app__menu_item_picture'>
                        <Link to="/ToGo">
                            <a href="/" class="back-button" onClick = {handleReturn}>
                                <span>&larr; </span>
                                <p className='p__cormorant' style ={{margin:'0 1rem', fontSize: '15px'}}>Back to Shopping</p>
                            </a>
                        </Link>
                        <img className = 'app_menu_item-image' src = {urls[index]} alt ="menu item" style = {{
                            width: '90%',
                            borderRadius: '8px',
                        }}/>
                    </div>
                    <div className = "app__menu_item_description">
                        <p className = 'headtext__cormorant' style = {{fontSize:'50px', textAlign: 'left', lineHeight: '1.5'}}>{currentItem.name} </p>
                        <p className = 'p__cormorant' style = {{margin: '2rem 0', textAlign: 'left', color: 'lightgrey'}}>${currentItem.price} {currentItem.calories}</p>
                        <p className = 'p__cormorant' style = {{margin: '1rem 0', textAlign: 'left', lineHeight: '1.5', color: 'lightgrey'}}>{currentItem.description}</p>
                        <button
                            onClick={() => handleAddToCart(currentItem, index)}
                            className={`app__ToGo-addToCartButton ${
                                highlight === index ? 'highlight' : ''
                            }`}
                            style={{width:'250px', margin: '1rem 0'}}
                        >
                            <p className = 'p__cormorant' style={{fontSize:'25'}}>Add To Bag | ${currentItem.price}
                            </p>
                        </button>
                    </div>
                    <button onClick={handleViewCart} className="app__ViewCartButton">
                            <p className="p__cormorant">View Cart</p>
                        </button>
                        {cartOpen && (
                            <div className={`app__cart ${cartOpen ? 'open' : ''}`}>
                                <h1 className="headtext__cormorant" style={{ fontSize: '40px' }}>
                                    My Cart
                                </h1>
                                { cartEmpty && (
                                    <p className="p__cormorant"
                                        style={{
                                        fontSize: '15px',
                                        lineHeight: '1rem',
                                        width: '100%',
                                        textAlign: 'center',
                                        color: '#FFECB3',
                                    }}>
                                        Your cart is empty, just like life without Black Basil
                                    </p>
                                )}
                                <div className="app__cart-items">
                                    {cart.map((item, index) => (
                                        <div
                                            key={`${item.name}-${index}`}
                                            className="app__ToGo-cartItem"
                                        >
                                            <p
                                                className="p__cormorant"
                                                style={{
                                                    fontSize: '15px',
                                                    lineHeight: '1rem',
                                                    width: '60%',
                                                }}
                                            >
                                                {item.name} - ${item.price.toFixed(2)}
                                            </p>
                                            <button
                                                onClick={() => handleRemoveFromCart(index)}
                                                className="app__remove"
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="app__cart-total">
                                    <p className="p__cormorant">Total: $ {calculateTotal()}</p>
                                </div>
                                <div className="app__bottom">
                                    <button onClick={handleViewCart} className="app__KeepShopping">
                                        <p className="p__cormorant" style={{ fontSize: '20px', lineHeight: '1.3rem' }}>
                                            Keep Shopping
                                        </p>
                                    </button>
                                    <button className="app__Checkout">
                                        <p className="p__cormorant" style={{ fontSize: '20px', lineHeight: '1rem' }}>
                                            Checkout
                                        </p>    
                                    </button>
                                </div>
                            </div>
                        )}
                </div>
            )}
        </div>
    );
};

export default ToGo;
