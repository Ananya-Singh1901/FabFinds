import p1_img from '../Assets/p1_img.jpeg';
import p2_img from '../Assets/p2_img.jpeg';
import p3_img from '../Assets/p3_img.jpeg';
import p4_img from '../Assets/p4_img.jpeg';
import p5_img from '../Assets/p5_img.jpeg';
import p6_img from '../Assets/p6_img.jpeg';
import p7_img from '../Assets/p7_img.jpeg';
import p8_img from '../Assets/p8_img.jpeg';
import p9_img from '../Assets/p9_img.jpeg';
import p10_img from '../Assets/p10_img.jpeg';
import p11_img from '../Assets/p11_img.jpeg';
import p12_img from '../Assets/p12_img.jpeg';
import p13_img from '../Assets/p13_img.jpeg';
import p14_img from '../Assets/p14_img.jpeg';
import p15_img from '../Assets/p15_img.jpeg';
import p16_img from '../Assets/p16_img.jpeg';
import p17_img from '../Assets/p17_img.jpeg';
import p18_img from '../Assets/p18_img.jpeg';
import p19_img from '../Assets/p19_img.jpeg';
import p20_img from '../Assets/p20_img.jpeg';
import p21_img from '../Assets/p21_img.jpeg';
import p22_img from '../Assets/p22_img.jpeg';
import p23_img from '../Assets/p23_img.jpeg';
import p24_img from '../Assets/p24_img.jpeg';
import p25_img from '../Assets/p25_img.jpeg';
import p26_img from '../Assets/p26_img.jpeg';
import p27_img from '../Assets/p27_img.jpeg';
import p28_img from '../Assets/p28_img.jpeg';
import p29_img from '../Assets/p29_img.jpeg';
import p30_img from '../Assets/p30_img.jpeg';
import p31_img from '../Assets/p31_img.jpeg';
import p32_img from '../Assets/p32_img.jpeg';
import p33_img from '../Assets/p33_img.jpeg';
import p34_img from '../Assets/p34_img.jpeg';
import p35_img from '../Assets/p35_img.jpeg';
import p36_img from '../Assets/p36_img.jpeg';
import starrating from '../Assets/starrating.png';

const all_product = [
  { id: 1, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kid", image: p1_img, new_price: 50.0, old_price: 80.5, description: "A stylish and comfortable hoodie for boys, perfect for cool weather.", rating: starrating },
  { id: 2, name: "Girls Pink Floral Dress", category: "kid", image: p2_img, new_price: 45.0, old_price: 70.0, description: "A lovely pink floral dress for girls, ideal for special occasions.", rating: starrating },
  { id: 3, name: "Boys Navy Blue Jeans", category: "kid", image: p3_img, new_price: 40.0, old_price: 60.0, description: "Durable navy blue jeans for boys, perfect for everyday wear.", rating: starrating },
  { id: 4, name: "Girls Red Polka Dot Skirt", category: "kid", image: p4_img, new_price: 30.0, old_price: 50.0, description: "A cute red polka dot skirt for girls, great for casual outings.", rating: starrating },
  { id: 5, name: "Boys Green Cargo Pants", category: "kid", image: p5_img, new_price: 35.0, old_price: 55.0, description: "Comfortable green cargo pants for boys, with plenty of pockets.", rating: starrating },
  { id: 6, name: "Girls Yellow Sundress", category: "kid", image: p6_img, new_price: 42.0, old_price: 65.0, description: "A bright yellow sundress for girls, perfect for sunny days.", rating: starrating },
  { id: 7, name: "Boys Black Graphic T-Shirt", category: "kid", image: p7_img, new_price: 25.0, old_price: 40.0, description: "A trendy black graphic t-shirt for boys, great for casual wear.", rating: starrating },
  { id: 8, name: "Girls Purple Unicorn Hoodie", category: "kid", image: p8_img, new_price: 50.0, old_price: 80.5, description: "A magical purple unicorn hoodie for girls, perfect for cooler days.", rating: starrating },
  { id: 9, name: "Boys Red Checkered Shirt", category: "kid", image: p9_img, new_price: 37.0, old_price: 60.0, description: "A stylish red checkered shirt for boys, ideal for any occasion.", rating: starrating },
  { id: 10, name: "Girls Blue Denim Jacket", category: "kid", image: p10_img, new_price: 60.0, old_price: 90.0, description: "A classic blue denim jacket for girls, perfect for layering.", rating: starrating },
  { id: 11, name: "Women's Black Leather Jacket", category: "woman", image: p11_img, new_price: 120.0, old_price: 200.0, description: "A chic black leather jacket for women, a timeless wardrobe staple.", rating: starrating },
  { id: 12, name: "Women's Red Evening Gown", category: "woman", image: p12_img, new_price: 150.0, old_price: 250.0, description: "A stunning red evening gown for women, perfect for formal events.", rating: starrating },
  { id: 13, name: "Women's Blue Skinny Jeans", category: "woman", image: p13_img, new_price: 80.0, old_price: 120.0, description: "Stylish blue skinny jeans for women, great for everyday wear.", rating: starrating },
  { id: 14, name: "Women's Green Summer Dress", category: "woman", image: p14_img, new_price: 70.0, old_price: 110.0, description: "A light and airy green summer dress for women, ideal for warm days.", rating: starrating },
  { id: 15, name: "Women's White Blouse", category: "woman", image: p15_img, new_price: 60.0, old_price: 100.0, description: "A versatile white blouse for women, perfect for both work and casual outings.", rating: starrating },
  { id: 16, name: "Women's Pink Cardigan", category: "woman", image: p16_img, new_price: 90.0, old_price: 130.0, description: "A cozy pink cardigan for women, great for layering in cooler weather.", rating: starrating },
  { id: 17, name: "Women's Yellow Maxi Dress", category: "woman", image: p17_img, new_price: 110.0, old_price: 160.0, description: "A beautiful yellow maxi dress for women, perfect for summer events.", rating: starrating },
  { id: 18, name: "Women's Grey Sweater", category: "woman", image: p18_img, new_price: 85.0, old_price: 140.0, description: "A soft and comfortable grey sweater for women, ideal for everyday wear.", rating: starrating },
  { id: 19, name: "Women's Black Pencil Skirt", category: "woman", image: p19_img, new_price: 75.0, old_price: 120.0, description: "A sleek black pencil skirt for women, perfect for office wear.", rating: starrating },
  { id: 20, name: "Women's Purple Tunic", category: "woman", image: p20_img, new_price: 65.0, old_price: 110.0, description: "A stylish purple tunic for women, great for casual outings.", rating: starrating },
  { id: 21, name: "Men's Blue Denim Jacket", category: "man", image: p21_img, new_price: 100.0, old_price: 150.0, description: "A classic blue denim jacket for men, perfect for a casual look.", rating: starrating },
  { id: 22, name: "Men's Black Leather Boots", category: "man", image: p22_img, new_price: 120.0, old_price: 200.0, description: "Sturdy and stylish black leather boots for men, great for any occasion.", rating: starrating },
  { id: 23, name: "Men's White T-Shirt", category: "man", image: p23_img, new_price: 30.0, old_price: 50.0, description: "A versatile white t-shirt for men, perfect for layering or wearing on its own.", rating: starrating },
  { id: 24, name: "Men's Green Cargo Shorts", category: "man", image: p24_img, new_price: 45.0, old_price: 70.0, description: "Comfortable green cargo shorts for men, with plenty of pockets.", rating: starrating },
  { id: 25, name: "Men's Grey Hoodie", category: "man", image: p25_img, new_price: 60.0, old_price: 100.0, description: "A cozy grey hoodie for men, perfect for casual wear.", rating: starrating },
  { id: 26, name: "Men's Brown Leather Belt", category: "man", image: p26_img, new_price: 25.0, old_price: 40.0, description: "A durable brown leather belt for men, a versatile wardrobe staple.", rating: starrating },
  { id: 27, name: "Men's Navy Blue Blazer", category: "man", image: p27_img, new_price: 130.0, old_price: 210.0, description: "A stylish navy blue blazer for men, perfect for formal occasions.", rating: starrating },
  { id: 28, name: "Men's Red Plaid Shirt", category: "man", image: p28_img, new_price: 50.0, old_price: 80.0, description: "A classic red plaid shirt for men, great for casual wear.", rating: starrating },
  { id: 29, name: "Men's Black Jeans", category: "man", image: p29_img, new_price: 70.0, old_price: 110.0, description: "Stylish black jeans for men, perfect for everyday wear.", rating: starrating },
  { id: 30, name: "Men's White Sneakers", category: "man", image: p30_img, new_price: 90.0, old_price: 140.0, description: "Comfortable white sneakers for men, great for casual and sporty looks.", rating: starrating },
  { id: 31, name: "Men's Blue Track Jacket", category: "man", image: p31_img, new_price: 80.0, old_price: 130.0, description: "A sporty blue track jacket for men, perfect for workouts and casual wear.", rating: starrating },
  { id: 32, name: "Men's Grey Sweatpants", category: "man", image: p32_img, new_price: 50.0, old_price: 90.0, description: "Comfortable grey sweatpants for men, ideal for lounging and workouts.", rating: starrating },
  { id: 33, name: "Men's Black Beanie", category: "man", image: p33_img, new_price: 20.0, old_price: 35.0, description: "A warm black beanie for men, perfect for cold weather.", rating: starrating },
  { id: 34, name: "Men's Yellow T-Shirt", category: "man", image: p34_img, new_price: 25.0, old_price: 40.0, description: "A bright yellow t-shirt for men, great for casual wear.", rating: starrating },
  { id: 35, name: "Men's White Dress Shirt", category: "man", image: p35_img, new_price: 60.0, old_price: 100.0, description: "A crisp white dress shirt for men, perfect for formal occasions.", rating: starrating },
  { id: 36, name: "Men's Brown Loafers", category: "man", image: p36_img, new_price: 70.0, old_price: 110.0, description: "Stylish brown loafers for men, perfect for both casual and formal wear.", rating: starrating }
];

export default all_product;
