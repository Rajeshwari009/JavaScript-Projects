  // import classes from "./AvailableMeals.module.css";

  import MealItem from "./MealItem/MealItem";

  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Vegetable Biryani",
      description: "A fragrant rice dish cooked with mixed vegetables and aromatic spices.",
      price: 12.99,
      image: "https://cdn.pixabay.com/photo/2022/06/27/05/37/biryani-7286737_640.jpg"
    },
    {
      id: "m2",
      name: "Sushi Balls",
      description: "Rice balls topped with assorted ingredients including fish, avocado, and tobiko.",
      price: 14.5,
      image: "https://cdn.pixabay.com/photo/2021/01/01/15/31/sushi-balls-5878892_640.jpg"
    },
    {
      id: "m3",
      name: "Pastry",
      description: "A flaky pastry filled with a savory mixture of vegetables and spices.",
      price: 10.99,
      image: "https://cdn.pixabay.com/photo/2023/07/23/20/44/pastry-shop-8145805_640.jpg"
    },
    {
      id: "m4",
      name: "Curry",
      description: "A creamy spinach curry with cubes of paneer (Indian cottage cheese) and Indian spices.",
      price: 11.99,
      image: "https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_640.jpg"
    },
    {
      id: "m5",
      name: "Fruit Crepes",
      description: "Thin pancakes filled with fresh fruits and topped with whipped cream.",
      price: 9.99,
      image: "https://cdn.pixabay.com/photo/2016/11/29/11/15/fruits-1869132_640.jpg"
    },
    {
      id: "m6",
      name: "Food Soup",
      description: "A hearty soup filled with mixed vegetables, nuts, and raisins in a creamy coconut-based sauce.",
      price: 13.99,
      image: "https://cdn.pixabay.com/photo/2021/02/11/20/24/dessert-6006446_640.jpg"
    },
    {
      id: "m7",
      name: "Masala Dosa",
      description: "A crispy South Indian crepe filled with a spicy potato mixture.",
      price: 8.99,
      image: "https://recipes.net/wp-content/uploads/2023/05/masala-dosa-recipe_d563150be0b0109e2b9ef6e2d6a51c0e.jpeg"
    },
    {
      id: "m8",
      name: "Ice Cream",
      description: "A creamy frozen dessert made with milk, sugar, and various flavorings.",
      price: 10.99,
      image: "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_640.jpg"
    },
    {
      id: "m9",
      name: "Gourmetfood Bread",
      description: "A loaf of artisanal bread made with whole grains and seeds.",
      price: 12.99,
      image: "https://cdn.pixabay.com/photo/2020/10/01/22/39/gourmet-5619887_1280.jpg"
    },
    {
      id: "m10",
      name: "Tofu Rice",
      description: "A flavorful rice dish topped with tofu and a variety of vegetables.",
      price: 7.99,
      image: "https://cdn.pixabay.com/photo/2021/01/16/09/05/meal-5921491_640.jpg"
    },
    {
      id: "m11",
      name: "Pasta with Sliced Strawberry",
      description: "Pasta with a creamy tomato sauce topped with sliced strawberries.",
      price: 10.99,
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "m12",
      name: "Classic Cheeseburger",
      description: "A juicy beef patty topped with melted cheese, lettuce, tomato, and pickles in a sesame seed bun.",
      price: 9.99,
      image: "https://cdn.pixabay.com/photo/2016/03/05/19/37/appetizer-1238459_960_720.jpg"
    },
    {
      id: "m13",
      name: "Club Sandwich",
      description: "A triple-decker sandwich with layers of turkey, bacon, lettuce, tomato, and mayonnaise.",
      price: 8.99,
      image: "https://images.pexels.com/photos/13983277/pexels-photo-13983277.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "m14",
      name: "Margherita Pizza",
      description: "A classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
      price: 11.99,
      image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
    },
    {
      id: "m15",
      name: "Vegetarian Penne Arrabbiata",
      description: "Penne pasta tossed in a spicy tomato sauce with garlic and chili peppers.",
      price: 10.99,
      image: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pasta-3010062_960_720.jpg"
    },
  ];





  const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        image={meal.image}
        price={meal.price}
      />
    ));  
    return (
      <section >
        <div>
          <div> {mealsList}</div>
          </div>
        
      </section>
    );
  };
  export default AvailableMeals;
