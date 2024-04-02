import React, {useContext}from 'react'
import classes from '../components/Product.module.css';
import CartContext from '../Store/CartContext';
import { Link } from 'react-router-dom';

export const ProductArr= [
    {
    id:1,
    title: "Royal Charm bed",
    price: "345",
    image: "https://benoitfurniture.com/wp-content/uploads/2021/11/best-furniture-shops-hyderabad-1024x917.jpg",
    description: "Luxury beds with a thoughtful combination of royal aesthetics and modern comfort"
},

{
    id:2,
    title: "Royal sofa",
    price: 555,
    image: "https://benoitfurniture.com/wp-content/uploads/2021/11/best-furniture-stores-hyderabad-1024x917.jpg",
    description:"An eclectic range of luxury sofa styles from international furniture brands"
},

{
    id:3,
    title:"Hendrix Upholstered Barrel Chair",
    price:232,
    image:"https://ouchcart.com/cdn/shop/products/Hendrix_Upholstered_Barrel_Chair_8_fd06884e-ed68-48ea-86b8-996c4b9cf1be.webp?v=1667035780&width=700",
    description:" Modern style with this 2-piece set of armchairs."
},


{
    id:4,
    title:" Premium Wooden Sofa Couch",
    price:129,
    image:"https://ouchcart.com/cdn/shop/products/Fuhr_Tufted_Armless_Chaise_Lounge.jpg?v=1637931363&width=800",
    description:"upholstered in soft, plush microfiber fabric"
},


{
    id:5,
    title:"Round Shape Dining Table",
    price:323,
    image:"https://ouchcart.com/cdn/shop/products/512c9GXEItL.jpg?v=1634601132&width=500",
    description:"Made from Premium Quality Sheesham Wood (Indian Rosewood)",
},


{
    id:6,
    title:"GRAND ROMAN WALL CLOCK",
    price:125,
    image:"https://ouchcart.com/cdn/shop/products/k9Ef5f47mm.jpg?v=1697048256&width=800",
    description:"Handmade One-of-a-kind original piece  Perfect for a modern or coastal-themed room"
},


{
    id:7,
    title:"Zozo Engineered Wood Wall",
    price:130,
    image:"https://ouchcart.com/cdn/shop/files/5_6_c1cd8a2a-273f-4d61-bfbc-e7aca640e9e8.jpg?v=1692952399&width=900",
    description:"Material Premium engineered wood and Finish Flowery wenge finish"
},



{
    id:8,
    title:"Creative Romantic Love Design ",
    price:100,
    image:"https://ouchcart.com/cdn/shop/products/si.jpg?v=1634607475&width=900",
    description:"Sleek Design: Beautiful Black floating shelves are made by premium MDF"
},



{
    id:9,
    title:"Rolled Arm Back Tufted Chesterfield Sofa",
    price:400,
    image:"https://ouchcart.com/cdn/shop/products/Owen_84_Genuine_Leather_Rolled_Arm_Chesterfield_Sofa.jpg?v=1641808446&width=800",
    description:"Premium Top-grain leatherette on all seating areas and armrests and leatherette splits into front rails, sides, and back"
},



{
    id:10,
    title:"Daffodil Wooden Floor Lamp",
    price:301,
    image:"https://ouchcart.com/cdn/shop/products/Daffodil-Brown-Wooden-Floor-Lamp-1.jpg?v=1654857835&width=900",
    description:"Our Floor Lamps are designed and made with love, right here in India"
},



{
    id:11,
    title:"Blaze Luxurious Italian Dining Table",
    price:900,
    image:"https://dukaan.b-cdn.net/700x700/webp/upload_file_service/24a40706-a1e6-480e-a6dd-c09251f4bf93/h17a9f29e15f147cd891020c296da16f9m-1-1.jpg",
    description:"gold table with a black marble top, featuring a unique twisted design that adds grace to any room",
},



{
    id:12,
    title:"Wooden Furniture Design",
    price:450,
    image:"https://www.urbanwood.in/image/catalog/blogs/1260h-teak-wood-living-room-furniture-1051780.jpg",
    description:"Best Wooden Furniture Design for Living Room"
},



{
    id:13,
    title:"Premium Sofa",
    price: 350,
    image:"https://img.etimg.com/thumb/msid-99739311,width-300,height-225,imgsize-78972,resizemode-75/fentonpremiumsofa4.jpg",
    description:"The premium sofa sets are made from high-quality materials that are both durable and comfortable"

    
},



{
    id:14,
    title:"Georgian Glamour Grand Crystal",
    price:500,
    image:"https://www.whiteteak.com/media/catalog/product/h/l/hl198-10001_4_.jpg?width=550&height=550&canvas=550,550&optimize=high&fit=bounds",
    description:"Georgian Glamour Grand Crystal"
},



{
    id:15,
    title:"Drop Dead crystal",
    price:600,
    image:"https://www.whiteteak.com/media/catalog/product/h/l/hl15-10006_5__1.jpg?width=715&height=715&canvas=715,715&optimize=high&fit=bounds",
    description:"Drop Dead Gorgeous crystals",
},

]



const ProductArray = (props) => {
    const ctx= useContext(CartContext)
    const addItemHandler = (product) => {
        ctx.addItem(product);
    };

   
return (
    <div className={classes.productContainer}>
      {ProductArr.map(product => (
        <div key={product.id} className={classes.productItem}>
        <Link to={`/Product/${product.id}`}> <img src={product.image} alt={product.title} className={classes.productImage} /></Link> 
          <div className={classes.productInfo}>
          <Link to={`/Product/${product.id}`} className={classes.link} ><h3 className={classes.productTitle}>{product.title}</h3></Link>
            <p className={classes.productDescription}>{product.description}</p>
            <p className={classes.productPrice}>${product.price}</p>
            <div className={classes.productControls}>
              <input type="number" min="1" max="5" step="1" defaultValue="1" className={classes.quantityInput} />
              <button className={classes.addButton} onClick={() => addItemHandler(product)}>Add to Cart</button>
             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ProductArray;

