import React, { useState, useEffect } from 'react';
import "./ListProduct.css";
import cross_icon from '../Assets/cross_icon.png';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const backend_url = 'http://localhost:5000/uploads/'; 
  const currency = '$'; 

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v3/allproducts', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const products = await response.json();
      console.log('Fetched products:', products); // Log the fetched products
      setAllProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const removeHandler = async (productID) => {
    const raw = JSON.stringify({ id: productID });
    try {
      const response = await fetch('http://localhost:5000/api/removeproduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: raw
      });

      if (!response.ok) {
        throw new Error('Failed to remove product');
      }

      // Update the state to remove the deleted product from the list
      setAllProducts(allProducts.filter(product => product.id !== productID));
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p> <p>Title</p> <p>Old Price</p> <p>New Price</p> <p>Category</p> <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr/>
        {allProducts.length === 0 ? (
          <p>No products available</p>
        ) : (
          allProducts.map((product, index) => (
            <div key={index}>
              <div className="listproduct-format-main listproduct-format">
                <img className="listproduct-product-icon" src={backend_url + product.image} alt="loading" />
                <p className="cartitems-product-title">{product.name}</p>
                <p>{currency}{product.old_price}</p>
                <p>{currency}{product.new_price}</p>
                <p>{product.category}</p>
                <img className="listproduct-remove-icon" onClick={() => removeHandler(product.id)} src={cross_icon} alt="Remove" />
              </div>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ListProduct;
