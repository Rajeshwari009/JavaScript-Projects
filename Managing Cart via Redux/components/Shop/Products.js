import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Products= [
  {
    id: "p1",
    title: "My first book",
    price:50,
    description: "This is my first Book"
  },

  {
    id: "p2",
    title: "Laptop ",
    price:560,
    description: "This is my first Laptop"
  },
  {
    id: "p3",
    title: "Pizza",
    price:110,
    description: "Bought Pizza"
  },
  {
    id: "p4",
    title: " Bike",
    price:500,
    description: "This is my first Bike"
  },

  {
    id: "p5",
    title: "Car",
    price:700,
    description: "This is my first Car"
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>

        {Dummy_Products.map((product) =>(
            <ProductItem
            key={product.id}
            id={product.id}
            title= {product.title}
            price= {product.price}
            description= {product.description}
            />
          
        ))}
      

          
        
      </ul>
    </section>
  );
};

export default Products;
