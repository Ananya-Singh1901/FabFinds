import p1_img from './p1_img.jpeg';
import p2_img from './p2_img.jpeg';
import p3_img from './p3_img.jpeg';
import p4_img from './p4_img.jpeg';
import p5_img from './p5_img.jpeg';
import p6_img from './p6_img.jpeg';
import p7_img from './p7_img.jpeg';
import p8_img from './p8_img.jpeg';
import p9_img from './p9_img.jpeg';
import p10_img from './p10_img.jpeg';
import p11_img from './p11_img.jpeg';
import p12_img from './p12_img.jpeg';
import p13_img from './p13_img.jpeg';
import p14_img from './p14_img.jpeg';
import p15_img from './p15_img.jpeg';
import p16_img from './p16_img.jpeg';
import p17_img from './p17_img.jpeg';
import p18_img from './p18_img.jpeg';
import p19_img from './p19_img.jpeg';
import p20_img from './p20_img.jpeg';
import p21_img from './p21_img.jpeg';
import p22_img from './p22_img.jpeg';
import p23_img from './p23_img.jpeg';
import p24_img from './p24_img.jpeg';
import p25_img from './p25_img.jpeg';
import p26_img from './p26_img.jpeg';
import p27_img from './p27_img.jpeg';
import p28_img from './p28_img.jpeg';
import p29_img from './p29_img.jpeg';
import p30_img from './p30_img.jpeg';
import p31_img from './p31_img.jpeg';
import p32_img from './p32_img.jpeg';
import p33_img from './p33_img.jpeg';
import p34_img from './p34_img.jpeg';
import p35_img from './p35_img.jpeg';
import p36_img from './p36_img.jpeg';

const all_product = [
  { id: 1, name: "Orange Colourblocked Hooded Sweatshirt", category: "kid", image: p1_img, new_price: 50.0, old_price: 80.5 },
  { id: 2, name: "Pink Floral Dress", category: "kid", image: p2_img, new_price: 45.0, old_price: 70.0 },
  { id: 3, name: "Navy Blue Jeans", category: "kid", image: p3_img, new_price: 40.0, old_price: 60.0 },
  { id: 4, name: "Red Polka Dot Skirt", category: "kid", image: p4_img, new_price: 30.0, old_price: 50.0 },
  { id: 5, name: "Green Cargo Pants", category: "kid", image: p5_img, new_price: 35.0, old_price: 55.0 },
  { id: 6, name: "Yellow Sundress", category: "kid", image: p6_img, new_price: 42.0, old_price: 65.0 },
  { id: 7, name: "Black Graphic T-Shirt", category: "kid", image: p7_img, new_price: 25.0, old_price: 40.0 },
  { id: 8, name: "Purple Unicorn Hoodie", category: "kid", image: p8_img, new_price: 50.0, old_price: 80.5 },
  { id: 9, name: "Red Checkered Shirt", category: "kid", image: p9_img, new_price: 37.0, old_price: 60.0 },
  { id: 10, name: "Blue Denim Jacket", category: "kid", image: p10_img, new_price: 60.0, old_price: 90.0 },
  { id: 11, name: "Black Leather Jacket", category: "woman", image: p11_img, new_price: 120.0, old_price: 200.0 },
  { id: 12, name: "Red Evening Gown", category: "woman", image: p12_img, new_price: 150.0, old_price: 250.0 },
  { id: 13, name: "Blue Skinny Jeans", category: "woman", image: p13_img, new_price: 80.0, old_price: 120.0 },
  { id: 14, name: "Green Summer Dress", category: "woman", image: p14_img, new_price: 70.0, old_price: 110.0 },
  { id: 15, name: "White Blouse", category: "woman", image: p15_img, new_price: 60.0, old_price: 100.0 },
  { id: 16, name: "Pink Cardigan", category: "woman", image: p16_img, new_price: 90.0, old_price: 130.0 },
  { id: 17, name: "Yellow Maxi Dress", category: "woman", image: p17_img, new_price: 110.0, old_price: 160.0 },
  { id: 18, name: "Grey Sweater", category: "woman", image: p18_img, new_price: 85.0, old_price: 140.0 },
  { id: 19, name: "Black Pencil Skirt", category: "woman", image: p19_img, new_price: 75.0, old_price: 120.0 },
  { id: 20, name: "Purple Tunic", category: "woman", image: p20_img, new_price: 65.0, old_price: 110.0 },
  { id: 21, name: "Blue Denim Jacket", category: "man", image: p21_img, new_price: 100.0, old_price: 150.0 },
  { id: 22, name: "Black Leather Boots", category: "man", image: p22_img, new_price: 120.0, old_price: 200.0 },
  { id: 23, name: "White T-Shirt", category: "man", image: p23_img, new_price: 30.0, old_price: 50.0 },
  { id: 24, name: "Green Cargo Shorts", category: "man", image: p24_img, new_price: 45.0, old_price: 70.0 },
  { id: 25, name: "Grey Hoodie", category: "man", image: p25_img, new_price: 60.0, old_price: 100.0 },
  { id: 26, name: "Brown Leather Belt", category: "man", image: p26_img, new_price: 25.0, old_price: 40.0 },
  { id: 27, name: "Navy Blue Blazer", category: "man", image: p27_img, new_price: 130.0, old_price: 210.0 },
  { id: 28, name: "Red Plaid Shirt", category: "man", image: p28_img, new_price: 50.0, old_price: 80.0 },
  { id: 29, name: "Black Jeans", category: "man", image: p29_img, new_price: 70.0, old_price: 110.0 },
  { id: 30, name: "White Sneakers", category: "man", image: p30_img, new_price: 90.0, old_price: 140.0 },
  { id: 31, name: "Blue Track Jacket", category: "man", image: p31_img, new_price: 80.0, old_price: 130.0 },
  { id: 32, name: "Grey Sweatpants", category: "man", image: p32_img, new_price: 50.0, old_price: 90.0 },
  { id: 33, name: "Black Beanie", category: "man", image: p33_img, new_price: 20.0, old_price: 35.0 },
  { id: 34, name: "Yellow T-Shirt", category: "man", image: p34_img, new_price: 25.0, old_price: 40.0 },
  { id: 35, name: "White Shirt", category: "man", image: p35_img, new_price: 60.0, old_price: 100.0 },
  { id: 36, name: "Brown Loafers", category: "man", image: p36_img, new_price: 70.0, old_price: 110.0 }
];

export default all_product;
