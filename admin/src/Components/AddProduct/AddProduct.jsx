import React, {useState}from 'react'
import "./AddPrduct.css";
import upload_area from "../Assets/upload_area.svg";


const AddProduct = () => {
  const [image, setImage] = useState(null); // Change from 'false' to 'null'
    const [productDetails, setProductDetails] = useState({
        name: "",
        description: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    });

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }

    const addProductHandler = async () => {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', productDetails.name);
        formData.append('description', productDetails.description);
        formData.append('category', productDetails.category);
        formData.append('new_price', productDetails.new_price);
        formData.append('old_price', productDetails.old_price);

        try {
            const response = await fetch('http://localhost:5000/api/addproduct', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            const responseData = await response.json();
            alert('Your product got added');

            // Optionally, reset form
            setProductDetails({
                name: '',
                description: '',
                image: '',
                category: 'women',
                new_price: '',
                old_price: ''
            });
            setImage(null); // Reset the image state to null
        } catch (error) {
            console.error('Error adding product:', error);
        }
    }

    return (
        <div className="addproduct">
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input type="text" name="name" value={productDetails.name} onChange={changeHandler} placeholder="Type here" />
            </div>
            <div className="addproduct-itemfield">
                <p>Product description</p>
                <input type="text" name="description" value={productDetails.description} onChange={changeHandler} placeholder="Type here" />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input type="number" name="old_price" value={productDetails.old_price} onChange={changeHandler} placeholder="Type here" />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input type="number" name="new_price" value={productDetails.new_price} onChange={changeHandler} placeholder="Type here" />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product category</p>
                <select value={productDetails.category} name="category" className="add-product-selector" onChange={changeHandler}>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <p>Product image</p>
                <label htmlFor="file-input">
                    <img className="addproduct-thumbnail-img" src={!image ? upload_area : URL.createObjectURL(image)} alt="" />
                </label>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" name="image" id="file-input" accept="image/*" hidden />
            </div>
            <button className="addproduct-btn" onClick={addProductHandler}>ADD</button> {/* Change function call */}
        </div>
    );
};

export default AddProduct;