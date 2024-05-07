import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'; // Import custom CSS file

function Home() {
  return (
    <div>
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/09/11/11/18/chefs-1661131_960_720.jpg"

          alt="First slide"
        />
      
        <Carousel.Caption style={{ textAlign: 'left', left: '20%', right: '10%', marginBottom:'60px' }}>
          <h3>𝓕𝓵𝓪𝓿𝓸𝓾𝓻𝓼 𝓘𝓷𝓼𝓹𝓲𝓻𝓮𝓭 𝓫𝔂 𝓽𝓱𝓮 𝓢𝓮𝓪𝓼𝓸𝓷</h3>
          <p>Discover our seasonal delights!</p>
          <a href="/Menu" className="btn btn-primary"  style={{ backgroundColor: '#04AA6D', borderColor: '#04AA6D'}}>
            Order Now
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2023/06/01/08/53/strawberries-8033204_1280.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/03/27/19/23/cupcakes-1283821_1280.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>



    <h2 className="top-picks-heading">Today's Top Picks</h2>
    <div className="top-picks-container">
      <div className="top-pick">
        <img src="https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_640.jpg" alt="Muffin Cake" />
        <div className="overlay">
          <div className="text">Muffin Cake</div>
        </div>
      </div>
      <div className="top-pick">
        <img src="https://cdn.pixabay.com/photo/2021/11/20/22/45/sandwich-6812863_640.jpg" alt="Sandwich" />
        <div className="overlay">
          <div className="text">Sandwich</div>
        </div>
      </div>
      <div className="top-pick">
        <img src="https://cdn.pixabay.com/photo/2023/09/04/20/39/cake-8233676_640.jpg" alt="Blueberries" />
        <div className="overlay">
          <div className="text">Blueberries</div>
        </div>
      </div>
      <div className="top-pick">
        <img src="https://cdn.pixabay.com/photo/2022/02/02/09/50/food-6988009_640.jpg" alt="Waffles" />
        <div className="overlay">
          <div className="text">Waffles</div>
        </div>
      </div>
    </div>

    <div className="yummy-hut-container">
      <div className="yummy-hut-text">
        <h1>
𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓨𝓾𝓶𝓶𝔂 𝓗𝓾𝓽</h1>
        <p>Where culinary delights await you! At Yummy Hut, we pride ourselves on serving mouthwatering dishes made with the freshest ingredients and infused with flavors that will tantalize your taste buds. Whether you're craving savory classics or adventurous fusion cuisine, our diverse menu offers something for everyone. From hearty breakfast options to delectable dinner entrees and irresistible desserts, every dish at Yummy Hut is crafted with passion and precision to ensure a memorable dining experience. Come savor the essence of good food and great company at Yummy Hut today!</p>
      </div>
      <img
        className="yummy-hut-image"
        src="https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_1280.jpg"
        alt="Yummy Hut"
      />
    </div>



    <div className="home-container">
      <div className="content-wrapper">
        <div className="video-content-wrapper">
          <div className="video-box">
            <video autoPlay loop muted className="video-container">
              <source src="https://cdn.pixabay.com/video/2024/03/21/205006-926015709_tiny.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="text-content-wrapper">
          <div className="text-box">
          <h1>
          𝓒𝓾𝓵𝓲𝓷𝓪𝓻𝔂 𝓔𝔁𝓬𝓮𝓵𝓵𝓮𝓷𝓬𝓮 𝓪𝓽 𝓨𝓾𝓶𝓶𝔂 𝓗𝓾𝓽</h1>
            <p>
              Indulge in a culinary journey like no other at Yummy Hut. Our chefs are dedicated to creating unforgettable dining experiences by combining traditional cooking techniques with innovative flavors and presentations. With an emphasis on quality and creativity, each dish is meticulously prepared to delight your senses and leave you craving for more. Whether you're dining with family, friends, or colleagues, our welcoming atmosphere and impeccable service ensure that every visit to Yummy Hut is an occasion to remember. Yummy Hut, where every dish tells a story of passion and flavor. From our signature appetizers to our decadent desserts, each bite is a journey through culinary excellence. Our chefs blend tradition with innovation, crafting dishes that reflect the richness of global cuisine while celebrating local ingredients. At Yummy Hut, we invite you to savor the essence of good food and great company in an ambiance that feels like home.
            </p>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="text-content-wrapper">
          <div className="text-box">
          <h1>

          𝓐 𝓖𝓪𝓼𝓽𝓻𝓸𝓷𝓸𝓶𝓲𝓬 𝓐𝓭𝓿𝓮𝓷𝓽𝓾𝓻𝓮 𝓪𝔀𝓪𝓲𝓽𝓼 𝓪𝓽 𝓨𝓾𝓶𝓶𝔂 𝓗𝓾𝓽</h1>
            <p>
              At Yummy Hut, we believe in the power of food to bring people together and create lasting memories. That's why we go above and beyond to provide not just a meal, but an experience that nourishes both body and soul. Our commitment to excellence extends beyond the kitchen, as we source the finest ingredients, prioritize sustainability, and strive to exceed our guests' expectations at every turn. Join us at Yummy Hut, where every meal is a celebration of good taste, good times, and good company.Step into Yummy Hut and embark on a gastronomic adventure like no other. Our menu is a tribute to the diverse flavors and cultures that inspire us, offering a tantalizing array of options for every palate. Whether you're in the mood for comfort classics or daring culinary experiments, our chefs are here to delight you with their creativity and skill. Join us at Yummy Hut, where every meal is a celebration of taste, quality, and the joy of sharing food with loved ones.
            </p>
          </div>
        </div>
        <div className="video-content-wrapper">
          <div className="video-box">
            <video autoPlay loop muted className="video-container">
              <source src="https://cdn.pixabay.com/video/2022/11/25/140481-775376139_tiny.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>






   




    <div className="our-ambience-container">
      <h2 className="top-picks-heading">Our Ambience</h2>
      <p className="ambience-subheading">Serving best for you!!</p>
      <div className="videos-container">
        <div className="video-item">
          <video className="video" loop autoPlay muted>
            <source src="https://cdn.pixabay.com/video/2020/03/05/33256-396487978_tiny.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-item">
          <video className="video" loop autoPlay muted>
            <source src="https://cdn.pixabay.com/video/2015/08/12/361-136078589_tiny.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-item">
          <video className="video" loop autoPlay muted>
            <source src="https://cdn.pixabay.com/video/2016/02/29/2339-157269920_tiny.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-item">
          <video className="video" loop autoPlay muted>
            <source src="https://cdn.pixabay.com/video/2024/02/26/202004-916894674_tiny.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-item">
          <video className="video" loop autoPlay muted>
            <source src="https://cdn.pixabay.com/video/2019/08/11/25936-353764121_tiny.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-item">
          <video className="video" loop autoPlay muted>
            <source src="https://cdn.pixabay.com/video/2016/11/15/6409-191717380_tiny.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-item">
          <video className="video" loop autoPlay muted>
            <source src="https://cdn.pixabay.com/video/2015/10/16/1015-142621218_tiny.mp4" type="video/mp4" />
          </video>
        </div>
      
      </div>
    </div>



   
   








     <div className="our-chefs-container">
      <h1 className="top-picks-heading">Meet Our Chefs</h1>
      <div className="our-chefs-images">
        <div className="chef">
          <img
            className="chef-image"
            src="https://cdn.pixabay.com/photo/2018/09/25/08/41/chefs-3701721_640.jpg"
            alt="Chef 1"
          />
          <p className="chef-name">John Doe</p>
        </div>
        <div className="chef">
          <img
            className="chef-image"
            src="https://cdn.pixabay.com/photo/2014/06/10/15/47/pizza-366111_640.jpg"
            alt="Chef 2"
          />
          <p className="chef-name">Jane Smith</p>
        </div>
        <div className="chef">
          <img
            className="chef-image"
            src="https://cdn.pixabay.com/photo/2024/03/05/14/11/woman-8614629_640.jpg"
            alt="Chef 3"
          />
          <p className="chef-name">Maria Brown</p>
        </div>

        <div className="chef">
          <img
            className="chef-image"
            src="https://cdn.pixabay.com/photo/2020/09/06/19/56/man-5549944_640.jpg"
            alt="Chef 3"
          />
          <p className="chef-name">Davidson</p>
        </div>
      </div>
    </div>




    </div>

    
  );
}

export default Home;
