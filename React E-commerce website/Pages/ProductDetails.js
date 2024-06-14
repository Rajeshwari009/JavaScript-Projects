import React, { useContext } from 'react';
import { useParams, Route, useHistory } from 'react-router-dom';
import CommentsPage from './CommentsPage';
import { ProductArr } from '../components/ProductArray';
import '../Pages/ProductDetails.css';
// import { CartContext } from '../Store/CartContext';
import { AuthContext } from '../Store/AuthContext';
import CartContext from '../Store/CartContext';

const newProducts = [
    {
        id: 9,
        title: "Rolled Arm Back Tufted Chesterfield Sofa",
        price: 400,
        image: "https://ouchcart.com/cdn/shop/products/Owen_84_Genuine_Leather_Rolled_Arm_Chesterfield_Sofa.jpg?v=1641808446&width=800",
        description: "Premium Top-grain leatherette on all seating areas and armrests and leatherette splits into front rails, sides, and back"
    },
    {
        id: 10,
        title: "Daffodil Wooden Floor Lamp",
        price: 301,
        image: "https://ouchcart.com/cdn/shop/products/Daffodil-Brown-Wooden-Floor-Lamp-1.jpg?v=1654857835&width=900",
        description: "Our Floor Lamps are designed and made with love, right here in India"
    },
    {
        id: 11,
        title: "Blaze Luxurious Italian Dining Table",
        price: 900,
        image: "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/24a40706-a1e6-480e-a6dd-c09251f4bf93/h17a9f29e15f147cd891020c296da16f9m-1-1.jpg",
        description: "gold table with a black marble top, featuring a unique twisted design that adds grace to any room",
    },
    {
        id: 12,
        title: "Wooden Furniture Design",
        price: 450,
        image: "https://www.urbanwood.in/image/catalog/blogs/1260h-teak-wood-living-room-furniture-1051780.jpg",
        description: "Best Wooden Furniture Design for Living Room,Wooden furniture brings a timeless charm and warmth to any space, making it a popular choice for interior design."
    }
];

const ProductDetails = () => {
    const { productid } = useParams();
    const items = ProductArr.find(product => product.id === parseInt(productid));

    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const addItemHandler = (product) => {
        if (!authCtx.isLoggedIn) {
            history.push('/login');
            alert('Please Login to Continue shopping')
        } else {
            cartCtx.addItem(product);
        }
    };

    return (
        <div>
            <div className="product-item">
                <img src={items.image} alt='Product' className="product-image" />
                <p className="product-title">{items.title}</p> 
                <p className="product-description">{items.description}</p> 
                <p className="product-price">${items.price}</p> 
                <a href='/Product'> <button className='view-more-btn'>View More Products</button> </a>
            </div>

            <div className="newproduct-list">
                {newProducts.map((product) => (
                    <div key={product.id} className="newproduct">

                       <a href={`/Product/${product.id}`}  className='newproduct-a'> <img src={product.image} alt={product.title} className="newproduct-image" /> </a>
                       <a href={`/Product/${product.id}`}  className='newproduct-a'><p className="newproduct-title">{product.title}</p>   </a>
                        <p className="newproduct-description">{product.description}</p>
                        <p className="newproduct-price">${product.price}</p>
                        <a href={`/Product/${product.id}`} className="newproduct-btn">VIEW</a>
                        <button className="addButton" onClick={() => addItemHandler(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            <div className="services-container">
                <div className="services-grid">
                    <div className="service">
                        <img src="https://www.godrejinterio.com/imagestore/B2C/homeinteriors/homepage/Desktop/Home%20what%20we%20offer/PNG/1.%20Customised.png" alt="Customized furniture & interiors" className="service-image" />
                        <p className="service-title">Customized furniture & interiors</p>
                    </div>
                    <div className="service">
                        <img src="https://www.godrejinterio.com/imagestore/B2C/homeinteriors/homepage/Desktop/Home%20what%20we%20offer/PNG/2.%20Management.png" alt="Design & project management services" className="service-image" />
                        <p className="service-title">Design & project management services</p>
                    </div>
                    <div className="service">
                        <img src="https://www.godrejinterio.com/imagestore/B2C/homeinteriors/homepage/Desktop/Home%20what%20we%20offer/PNG/3.%20After%20Sales.png" alt="Post sales service" className="service-image" />
                        <p className="service-title">Post sales service</p>
                    </div>
                    <div className="service">
                        <img src="https://www.godrejinterio.com/imagestore/B2C/homeinteriors/homepage/Desktop/Home%20what%20we%20offer/PNG/4.%20One%20Stop%20Solution.png" alt="One stop solution for fulfilling all your interior design needs" className="service-image" />
                        <p className="service-title">One stop solution for fulfilling all your interior design needs</p>
                    </div>
                </div>
            </div>

            <Route path={`/Product/${productid}/Comments`} >
                <CommentsPage />
            </Route>
        </div>
    );
}

export default ProductDetails;
