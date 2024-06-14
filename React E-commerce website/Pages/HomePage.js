import React from 'react';
import '../Pages/HomePage.css';

const HomePage = () => {
  return (
    <div className='body'>
      <div style={{ position: 'relative', width: '100vw', height: '90vh', marginTop: '60px' }}>
        <video width="100%" autoPlay loop muted style={{ display: 'block', height: '100%', objectFit: 'cover' }}>
          <source src="https://videos.pexels.com/video-files/6467633/6467633-uhd_4096_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '24px', textAlign: 'center', width: '80%' }}>
          <h1 style={{ marginBottom: '20px' }}>
            𝐸𝓍𝓅𝓁𝑜𝓇𝑒 𝓉𝒽𝑒 𝒷𝑒𝓈𝓉 𝒾𝓃𝓉𝑒𝓇𝒾𝑜𝓇 𝒹𝑒𝓈𝒾𝑔𝓃 𝓌𝒾𝓉𝒽 𝑀𝑜𝒹𝑒𝓇𝓃 𝐼𝓃𝓉𝑒𝓇𝒾𝑜𝓇𝓈 !!
          </h1>
          <a href="/Product" style={{ textDecoration: 'none', color: 'black' }}>
            <button style={{ backgroundColor: 'black', color: 'white', padding: '15px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
              EXPLORE NOW
            </button>
          </a>
        </div>
      </div>

      <div className='slideshow-container'>
        <h1 className='slideshow-heading'>𝕺𝖓𝖊-𝖘𝖙𝖔𝖕 𝖘𝖍𝖔𝖕 𝖋𝖔𝖗 𝖆𝖑𝖑 𝖙𝖍𝖎𝖓𝖌𝖘 𝖎𝖓𝖙𝖊𝖗𝖎𝖔𝖗𝖘</h1>
        <p className='slideshow-subheading'> <i>(っ◔◡◔)っ ♥ Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. With a wide range of furniture & decor, we have your back from start to finish. ♥ </i></p>
        <div className="slides">
          <div className="slide">
            <a href='/Product'>
              <img src='https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/04/7-Elements-of-Interior-Designing-A-23-04.jpg' alt='Modular Interior' className="slide-image"/>
            </a>
            <div className="slide-content">
              <div className="title">Modular Interior</div>
              <a href='/Product' className="view-btn">View</a>
            </div>
          </div>
          <div className="slide">
            <a href='/Product'>
              <img src='https://www.realsimple.com/thmb/3rAU-gkJMskgyASiATdaxA2rmAI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/interior-design-style-GettyImages-1263826945-2872e7c0222842ea9ecb1c05794f6350.jpg' alt='Full Home Interior' className="slide-image"/>
            </a>
            <div className="slide-content">
              <div className="title">Full Home Interior</div>
              <a href='/Product' className="view-btn">View</a>
            </div>
          </div>
          <div className="slide">
            <a href='/Product'>
              <img src='https://images.squarespace-cdn.com/content/v1/5f401610829d211aa16190e7/5cd3dcf5-4715-4b8d-9495-faff82c770fa/helen-green-luxury-interior-designer-london.jpg' alt='Luxury Interior' className="slide-image"/>
            </a>
            <div className="slide-content">
              <div className="title">Luxury Interior</div>
              <a href='/Product' className="view-btn">View</a>
            </div>
          </div>
          <div className="slide">
            <a href='/Product'>
              <img src='https://images.squarespace-cdn.com/content/v1/593eb32515d5db6254d45a2a/bf6ba303-9241-4bb1-9d4a-5e322907e95a/Villa-interior-design-Dubai-with-Accouter-Design.jpg' alt='Renovations' className="slide-image"/>
            </a>
            <div className="slide-content">
              <div className="title">Renovations</div>
              <a href='/Product' className="view-btn">View</a>
            </div>
          </div>
          <div className="slide">
            <a href='/Product'>
              <img src='https://cityfurnish.com/blog/wp-content/uploads/2023/07/living-room-with-purple-wall-yellow-couch-with-purple-pillows-plant-side-min.jpg' alt='Commercial Interiors' className="slide-image"/>
            </a>
            <div className="slide-content">
              <div className="title">Commercial Interiors</div>
              <a href='/Product' className="view-btn">View</a>
            </div>
          </div>
          <div className="slide">
            <a href='/Product'>
              <img src='https://img.staticmb.com/mbcontent/images/crop/uploads/2023/2/bedroom-interior-design_0_1200.jpg' alt='Royal Interiors' className="slide-image"/>
            </a>
            <div className="slide-content">
              <div className="title">Royal Interiors</div>
              <a href='/Product' className="view-btn">View</a>
            </div>
          </div>
          <div className="slide">
            <a href='/Product'>
              <img src='https://www.marthastewart.com/thmb/oFQ1VJwAHHauZkFvqihOylBRxrc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/interior-design-styles-lead-getty-0623-cb4494a5a4c1430da51e3f638a18a98c.jpg' alt='Scandinavian Interiors' className="slide-image"/>
            </a>
            <div className="slide-content">
              <div className="title">Scandinavian Interiors</div>
              <a href='/Product' className="view-btn">View</a>
            </div>
          </div>
          <div className="slide">
            <a href='/Product'>
              <img src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/nine-small-house-interior-design-hacks/two-seater-couches-and-wall-mounts-design-hack.jpg' alt='Coastal Interiors' className="slide-image"/>
            </a>
            <div className="slide-content">
              <div className="title">Coastal Interiors</div>
              <a href='/Product' className="view-btn">View</a>
            </div>
          </div>
        </div>


        <div className="crafting-spaces">
            <h1 className="main-heading">Crafting Spaces</h1>
            <div className="container">
                <div className="box">
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-architecture"
                        >
                            <line x1="3" y1="21" x2="21" y2="21" />
                            <path d="M5 21V10.91a2 2 0 0 1 .8-1.59l7.2-5.19a2 2 0 0 1 2.4 0l7.2 5.19a2 2 0 0 1 .8 1.59V21" />
                            <polyline points="17 21 12 17 7 21" />
                            <polyline points="12 3 12 17 7 21" />
                        </svg>
                    </div>
                    <div className="title">Architecture Services</div>
                    <div className="content">Our expert architects seamlessly blend form and function, crafting innovative and sustainable designs that transform spaces while enhancing your lifestyle.</div>
                </div>
                <div className="box">
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-interior-design"
                        >
                            <circle cx="12" cy="12" r="3" />
                            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                            <path d="M6.9 8.1L5.48 5.64M17.02 5.64l-1.42 2.46" />
                        </svg>
                    </div>
                    <div className="title">Interior Design</div>
                    <div className="content">Discover personalized and inspiring interiors crafted by our talented designers, who skillfully blend aesthetics, functionality, and unique tastes to create your dream space.</div>
                </div>
                <div className="box">
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-turnkey"
                        >
                            <path d="M18 7v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5z" />
                            <line x1="12" y1="10" x2="12" y2="14" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </div>
                    <div className="title">Turnkey Projects</div>
                    <div className="content">Experience the ease of complete project management with our turnkey solutions, as we guide you from concept to completion, delivering breathtaking spaces ready for you to enjoy.</div>
                </div>
                <div className="box">
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-mep-design"
                        >
                            <path d="M12 20h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-7m-10 4h10M7 13h10M7 17h10M6 9h4" />
                        </svg>
                    </div>
                    <div className="title">MEP Design</div>
                    <div className="content">Trust our expert engineers to plan and integrate mechanical, electrical, and plumbing systems in your space, ensuring optimal performance, energy efficiency, and seamless functionality.</div>
                </div>
                <div className="box">
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-amc-services"
                        >
                            <path d="M21 12l-4.58-4.59a.94.94 0 0 0-.67-.27H13.5a3.5 3.5 0 0 0-3.5 3.5v1.41a.94.94 0 0 0 .27.67L12 21" />
                            <path d="M7.45 15.07l-.12-.12" />
                            <path d="M14.68 7.81a5 5 0 0 0-6.36-.26" />
                        </svg>
                    </div>
                    <div className="title">AMC Services</div>
                    <div className="content">Keep your space in peak condition with our reliable and comprehensive Annual Maintenance Services, ensuring your property retains its elegance and functionality year after year.</div>
                </div>
                <div className="box">
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-3d-modeling"
                        >
                            <path d="M12 21l-3-3H9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h0a2 2 0 0 1 2 2h0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h-2l-3 3" />
                            <path d="M12 5V2M5 9H2M5 12H2M5 15H2M22 9h-3M22 12h-3M22 15h-3M15 2v3M2 9h3M2 12h3M2 15h3M9 22v-3M12 22v-3M15 22v-3" />
                        </svg>
                    </div>
                    <div className="title">3D Modeling</div>
                    <div className="content">Visualize your dream space before it comes to life with our cutting-edge 3D modeling services, allowing you to explore and refine your design ideas with precision and clarity.</div>
                </div>
                <div className="box">
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-landscape-designing"
                        >
                            <path d="M15 3l6 6-3 3-6-6M10.45 14.79l1.6-1.6-1.6-1.6M14.5 10.74l1.6-1.6-1.6-1.6M8 18h2M7 16v2M17 8h2M16 7v2M7 14h2M10 17v2M20 5h2M19 4v2" />
                        </svg>
                    </div>
                    <div className="title">Landscape Designing</div>
                    <div className="content">Transform your outdoor spaces into captivating retreats with our bespoke landscape design services, where we harmonize natural elements and architectural features to create your personal oasis.</div>
                </div>
                <div className="box">
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-decor-ornaments"
                        >
                            <path d="M7 4h10a3 3 0 0 1 3 3v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3z" />
                            <path d="M7 12h0l2.56-1.71a1 1 0 0 1 1.42 0L12 12h0M12 12h0l2.56-1.71a1 1 0 0 1 1.42 0L17 12h0" />
                        </svg>
                    </div>
                    <div className="title">Decor Ornaments</div>
                    <div className="content">Enhance the charm and personality of your space with our curated selection of decorative items, handpicked to complement your design theme and elevate the overall aesthetic of your interiors.</div>
                </div>
                <div className="box">
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-furniture-design"
                        >
                            <path d="M21 10.5V9a3 3 0 0 0-3-3h-1M10.5 4H9a3 3 0 0 0-3 3v1M6 13.5v1a3 3 0 0 0 3 3h1" />
                            <path d="M10.5 20H9a3 3 0 0 1-3-3v-1M13.5 20v-1a3 3 0 0 0-3-3h-1" />
                            <path d="M13.5 4v-1a3 3 0 0 1 3-3h1" />
                            <path d="M10.5 4h3M6 13.5h12" />
                            <path d="M6 17.5h2M16 17.5h2M6 6.5h12M6 10.5h12" />
                        </svg>
                    </div>
                    <div className="title">Furniture Design</div>
                    <div className="content">Elevate your space with custom-designed furniture pieces that seamlessly blend with your interiors, crafted by our skilled artisans to reflect your personal style and preferences.</div>
                </div>
            </div>
        </div>





        <div className="crafting-spaces">
        <h1 className="underline">
˜”*°•.˜”*°• Why choose us? •°*”˜.•°*”˜</h1>


      <div className="container">
        <div className="item">
          <div className="item-content">
     
            <h2 className="item-title">Vastu</h2>
            <p>Vastu Shastra is an ancient science which helps one to get the natural benefits freely offered by the five basic elements of the universe in which we all live. We will suggest you the design of the interiors according to vastu. Vastu, which translates to “house” or one’s place of residence, focuses on creating harmony among the five elements – fire, earth, sky, water, and air in our surroundings.</p>
          </div>
          <div className="item-image">
            <img src="https://cdn.pixabay.com/photo/2014/05/02/12/45/ceiling-lamp-335975_640.jpg" alt="Vastu" />
          </div>
        </div>
        <div className="item">
          <div className="item-content">
            <h2 className="item-title">NRI Services</h2>
            <p>We remodel or decorate space may be Commercial/Residential for NRIs. We provide effective communication with our lead designers and architects during the entire process of designing your comfort zone for NRIs with special care. Consulting with the best interior designer in the Philippines is your first step in building the space you’ve always wanted.</p>
          </div>
          <div className="item-image">
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/10/SJ/QU/BV/29206063/best-home-interior-design.jpg" alt="NRI Services" />
          </div>
        </div>
        <div className="item">
          <div className="item-content">
            <h2 className="item-title">Modern Art</h2>
            <p>Modern interior design is characterized by clean lines, minimalism, and functionality, creating spaces that are sleek, sophisticated, and timeless. It embraces simplicity and often incorporates open floor plans, neutral color palettes, and a mix of natural materials such as wood, stone, and metal. Furniture and decor in modern interior design are often chosen for their form as well as their function, with an emphasis on simplicity and practicality.</p>
          </div>
          <div className="item-image">
            <img src="https://cdn.pixabay.com/photo/2023/11/05/21/57/living-room-8368382_640.jpg" alt="Modern Art" />
          </div>
        </div>
        <div className="item">
          <div className="item-content">
            <h2 className="item-title">3D Designs</h2>
            <p>Interior 3D design has revolutionized the way we envision and create interior spaces, offering a highly realistic and immersive experience that allows clients to visualize their projects with unparalleled clarity. By utilizing advanced 3D modeling software and techniques, interior designers can create detailed digital representations of rooms, buildings, and entire spaces, complete with accurate lighting, textures, and furnishings.</p>
          </div>
          <div className="item-image">
            <img src="https://uhe.edu.pk/wp-content/uploads/2022/10/Interrior-Design.png" alt="3D Designs" />
          </div>
        </div>
        {/* More items here */}
      </div>
    </div>


        <div className="client-slider-container">
      <h2 className="client-slider-heading">Our Trusted Clients</h2>
      <div className="client-slider">
        <div className="slider-inner">
          <img src="https://www.subhaakritee.com/assets/img/c1.webp" alt="Client 1" className="slider-img" />
          <img src="https://www.subhaakritee.com/assets/img/c2.webp" alt="Client 2" className="slider-img" />
          <img src="https://www.subhaakritee.com/assets/img/c10.webp" alt="Client 3" className="slider-img" />
          <img src="https://www.subhaakritee.com/assets/img/c4.webp" alt="Client 4" className="slider-img" />
          <img src="https://www.subhaakritee.com/assets/img/c13.webp" alt="Client 5" className="slider-img" />
          <img src="https://www.subhaakritee.com/assets/img/c3.webp" alt="Client 6" className="slider-img" />
          <img src="https://www.subhaakritee.com/upload/logo/1447152824.png" alt="Client 7" className="slider-img" />
          <img src="https://www.subhaakritee.com/upload/logo/1447152864.png" alt="Client 8" className="slider-img" />
          <img src="https://www.subhaakritee.com/assets/img/c7.webp" alt="Client 9" className="slider-img" />

       
          <img src="https://www.subhaakritee.com/assets/img/c1.webp" alt="Client 1" className="slider-img" />
          <img src="https://www.subhaakritee.com/assets/img/c2.webp" alt="Client 2" className="slider-img" />
          <img src="https://www.subhaakritee.com/assets/img/c10.webp" alt="Client 3" className="slider-img" />
          <img src="https://www.subhaakritee.com/assets/img/c4.webp" alt="Client 4" className="slider-img" />
          <img src="https://www.subhaakritee.com/assets/img/c13.webp" alt="Client 5" className="slider-img" />
          <img src="https://www.subhaakritee.com/assets/img/c3.webp" alt="Client 6" className="slider-img" />
          <img src="https://www.subhaakritee.com/upload/logo/1447152824.png" alt="Client 7" className="slider-img" />
          <img src="https://www.subhaakritee.com/upload/logo/1447152864.png" alt="Client 8" className="slider-img" />
          <img src="https://www.subhaakritee.com/assets/img/c7.webp" alt="Client 9" className="slider-img" />
        </div>
      </div>
    </div>







      </div>
    </div>
  );
};

export default HomePage;




// The essence of Vastu Shastra is leading a harmonious life in tune with nature. Imbalances among these five chief elements can lead to agitation, sorrow, failure, poor economic conditions, and other negative outcomes for individuals. Vastu Shastra provides effective solutions to address such issues, suggesting ways to live in harmony with the laws of nature for optimal health, peace, and efficiency. For those interested in designing their own vastu-compliant plan, it offers practical guidance.



// Vastu Shastra holds significant importance as it opens doors to happiness and prosperity. By tapping into the positive energies of the sun, moon, air, earth, and fire, it seeks to balance these elements, fostering harmony in individuals’ lives.





