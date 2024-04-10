// HomePage.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Pages/HomePage.css';

const HomePage = () => {
  const history = useHistory();

  const viewMore = () => {
    history.push('/Product');
  };
  
  return (
    <div className="home-container">
      <div className="home-section">


      <div className="project-glimpse-container">
      <h1 className="home-heading">OUR PROJECT GLIMPSE</h1>
          <div className="project-glimpse-scroll">
            <img
              src='https://elledecor.in/wp-content/uploads/2023/11/H4_OL.jpg'
              alt='err'
              className="project-glimpse-image"
            />
            <img
              src='https://elledecor.in/wp-content/uploads/2023/11/H1_OL.jpg'
              alt='no'
              className="project-glimpse-image"
            />
            <img
              src='https://blogs.airbrickinfra.com/wp-content/uploads/2023/12/int_air-1536x1024.jpg'
              alt='no'
              className="project-glimpse-image"
            />
            <img
              src='https://blogs.airbrickinfra.com/wp-content/uploads/2024/03/Commercial-Interior-2.jpg'
              alt='err'
              className="project-glimpse-image"
            />
          </div>
          <button className="view-more-button" onClick={viewMore}>VIEW MORE</button>
        </div>
        <h1 className="home-heading">
          Innovative Designs, Impeccable Execution
        </h1>
        <h3 className="home-subheading">
          Passionately Creating Beautiful, Functional Spaces That Reflect Your
          Unique Style and Personality
        </h3>
        <img
          src='https://cms.media.wilo.com/cdnpic/wilo535223/6604479/wilo535223_1140x_1.jpg'
          alt='New'
          className="home-image"
        />
      </div>

      <div className="home-section home-section-alt">
        <h1 className="home-heading">Crafting Your Dream Space</h1>
        <h3 className="home-subheading">
          At Best Interiors, we manage every aspect of your project with
          precision and attention to detail. We work closely with you to fit
          your budget and bring your vision to life. Our mission is to make
          your dream space a reality, and we are passionate about our work from
          start to finish.
        </h3>
        <img
          src='https://www.nitidodesign.com/blog/wp-content/uploads/2021/08/residential-interior-design.jpg'
          alt='no'
          className="home-image"
        />
      </div>

      <div className="home-section">
        <h3 className="home-subheading">
          When it comes to luxury homes, we create an extravagant style with
          plenty of substance. Our Ultra Luxury Villa in Qatar is opulence at
          its best. Its luxury interiors have top quality marble floorings and
          walls, lustrous gold fittings, and tasteful chandeliers. With a base
          colour scheme of light grey, charcoal, and aegean blue highlighted
          with mustard yellow and houndstooth, the home gives off an aura of
          modern royalty. Moreover, the sumptuous interiors do not take away
          from its inviting ambiance.
        </h3>
      </div>

      <div className="home-section">
       
       
      </div>
    </div>
  );
};

export default HomePage;
