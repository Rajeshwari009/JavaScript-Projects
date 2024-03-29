import classes from "./AvailableFruits.module.css";
import React, { useContext } from "react";
import CartContext from "./CartContext";

const AvailableItems = (props) => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      image:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      image:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      image:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      image:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

 

  const ctx = useContext(CartContext);
  const addFruit = (item) => {
    const quantity = parseInt(document.getElementById("quantity").value);
    ctx.addItems({ ...item, quantity: quantity });

    // const existingItem= ctx.items.find((item)=> item.id===fruit.id)
  };

  const display =  productsArr.map((item) => (
    <div className={classes["fruit-item"]} key={item.id}>
      <img
        className={classes["fruit-image"]}
        src={item.image}
        alt="Fruit"
      ></img>

      <div className={classes.downarea}>
        <h3>{item.title}</h3>
        <p>${item.price}</p>

        <label className={classes.label} htmlFor="quantity"></label>
        <input
          className={classes["input-field"]}
          type="number"
          min={1}
          max={5}
          step={1}
          defaultValue={1}
          id="quantity"
        ></input>

        <button onClick={() => addFruit(item)}> + Add</button>
      </div>
    </div>
  ));

  return <div className={classes["fruit-container"]}>{display}</div>;
};

export default AvailableItems;
