import { useContext, useState } from "react";
import React from 'react';
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Item from "../Components/Item/Item";
import cart_icon from '../Components/Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import './Css/Product.css';

const Product = () => {
  const { productId } = useParams();
  const { all_product, addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(""); // State to manage selected size

  // Filter the product based on productId
  const filteredItem = all_product.filter(e => e.id === Number(productId));

  // Function to handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="Filtered-item">
      <div className='Filtered-item-properties'>
        {filteredItem.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            description={item.description}
            rating={item.rating} // Correctly pass the rating
          />
        ))}
      </div>
      <div className="item-description">
        {filteredItem.map((item) => (
          <div key={item.id}>
            <span>Description: {item.description}</span>
            <img src={item.rating} alt="Rating" />
          </div>
        ))}
      </div>
      <br />
      <div className="select-size">
        <span>SELECT SIZE: </span>
        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
          <button
            key={size}
            className={selectedSize === size ? 'selected' : ''}
            onClick={() => handleSizeSelect(size)}
          >
          {size}
          </button>
        ))}
      </div>
      <br />
      <div className="add-to-cart">
        <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
        {filteredItem.map((item) => (
          <button
            key={item.id}
            disabled={!selectedSize}
            onClick={() => {
              addToCart(item.id);
              alert(`Added ${item.name} (${selectedSize}) to cart!`);
            }}
          >
            Add to Cart
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;

