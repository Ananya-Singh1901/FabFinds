import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/registration', async (req, res) => {
    try {

        const newUser = new User({
            id: newProductId,
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename,
            category: req.body.category,
            old_price:req.body.old_price,
            new_price:req.body.new_price
        });

        // Save the new product to the database
        const savedProduct = await newProduct.save();

        // Respond with the saved product as JSON
        res.json('ok');
    } catch (error) {
        // Handle any errors and respond with an error message
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Failed to add product' });
    }
});


export default UserRegistration;
