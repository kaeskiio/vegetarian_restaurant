import React from 'react';
import { SubHeading } from '../../components';

import './Farm.css';

const Farm = () => {
  return (
    <div className="app__farm">
      <div className='app__farm-header'>
        <SubHeading title="Harmony in every sustainable choice" />
        <h1 className="app__farm-title">Our Farm-to-Table Journey</h1>
      </div>
      <p className="app__farm-subtitle">
        Black basil's story is one of passion, sustainability, and a shared vision. Here's how it reaches your table.
      </p>
      <div className="app__farm-timeline">
        {}
        <div className="app__farm-timeline_item">
          <div className="timeline-badge">🌱</div>
          <div className="timeline-content">
            <h2>Discovering Ali's Farm</h2>
            <p>
              Nestled in the heart of the countryside, <strong>Ali's Farm</strong> is the basis for our restaurant. Their use of sustainable farming practices and unmatched quality of black basil left us in awe. Since 2015, Ali's Farm has taken on significant measures to promote sustainability in agriculture, among which include crop rotation and cover cropping. Crops are rotated seasonally and planted on demand in order maintain the nutrients in the soil, prevent soil erosion, and limit food waste. In addition, Ali's farm features almost no chemical products in their farming process. All fertilizers, herbicides, and pesticides are organic to limit chemical runoff in our environment. 
            </p>
          </div>
        </div>

        {}
        <div className="timeline-connector"></div>

        {}
        <div className="app__farm-timeline_item">
          <div className="timeline-badge">🤝</div>
          <div className="timeline-content">
            <h2>Building a Lasting Partnership</h2>
            <p>
              We formed a collaboration with Ali's Farm in 2020, during the midst of the globalwide pandemic. With a mindset and passion which directly aligned with our goals, Ali's Farm's owner, Ayyan Rehman, eagerly offered to work with us to further spread the message of eco-friendly farming and dining. We named our restaurant "Black Basil" in honor of the unique and delightful black basil that Ali's farm produces. In fact, many of our dishes center around the black basil as it adds a sophisticated flavor which elevates your dining experience.
            </p>
          </div>
        </div>

        {}
        <div className="timeline-connector"></div>

        {}
        <div className="app__farm-timeline_item">
          <div className="timeline-badge">🚛</div>
          <div className="timeline-content">
            <h2>Farm-Fresh Logistics</h2>
            <p>
              Through precise harvesting, sustainable farming, and eco-friendly transportation methods, fresh produce travels directly from Ali's Farm to our kitchen, ensuring freshness in every leaf. Ali's farm utilizes GPS-guided drones and sensors to monitor the nutrient content, temperature, and humitidty of the soil, effectively guiding real-time adjustments to irrigation and fertilization. Once the produce has been harvested, it is directly transported to Black Basil through electric vehicles with solar powered referigeration systems, limiting the release of greenhouse gases. Any left over produce is then sold at the local farmer's market or donated to soup kitchens to prevent food wastage.
            </p>
          </div>
        </div>

        {}
        <div className="timeline-connector"></div>

        {}
        <div className="app__farm-timeline_item">
          <div className="timeline-badge">🍽️</div>
          <div className="timeline-content">
            <h2>A Culinary Masterpiece</h2>
            <p>
              Ali's farm provides a variety of vegetables including tomatoes, eggplants, zucchini, bell peppers, and cucumbers. However, the star of the show is undoubtedly the black basil. With a sweet and spicy flavor, floral aroma, and anise-like undertone, black basil brings our vegetarian dishes to the next level. The complexity and nuance brought by the black basil elevates your dining experience. In addition, black basil offers numerous health benefits ranging from digestive aid to immune support. But most importantly, it's tasty. Each plate tells the story of its journey from farm to table.
            </p>
          </div>
        </div>
      </div>
      <div className="app__farm-info">
        <h2 className="app__farm-info-title">Discover the Heart of Sustainability</h2>
        <p className="app__farm-info-text">
          Ali's Farm is more than a source of exceptional black basil—it's a philosophy of sustainability, quality, and community. 
          Nestled in lush countryside landscapes, the farm employs regenerative farming techniques that enrich the soil, conserve water, 
          and create a haven for biodiversity. Their commitment to zero chemical use and renewable energy ensures that every plant is 
          cultivated with care and precision.
        </p>
        <p className="app__farm-info-text">
          Beyond farming, Ali's Farm is a beacon for community empowerment. They host educational workshops to promote sustainable 
          agriculture, ensuring that knowledge grows alongside their crops. By choosing Ali's Farm, you're supporting a vision of a 
          greener, healthier planet.
        </p>
        <div className="app__farm-info-location">
          <a href="https://www.google.com/maps/place/Ali%E2%80%99s+Farm/@29.5242093,-95.3598038,17z/data=!3m1!4b1!4m6!3m5!1s0x86409384fb9dfc5f:0x645a223f3014a21!8m2!3d29.5242093!4d-95.3572289!16s%2Fg%2F11h6t7nt77?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <button className="app__farm-info-map-btn">Explore on Google Maps</button>
          </a>
          <p className="app__farm-info-address">3946 Bellini Rd, Manvel, TX 77578</p>
        </div>
      </div>
  
    </div>
  );
};

export default Farm;
