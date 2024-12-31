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
              Nestled in the heart of the countryside, <strong>Ali's Farm</strong> is the basis for our restaurant. Their use of sustainable farming practices and unmatched quality of black basil left us in awe. 
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
              We formed a collaboration with Ali's Farm, ensuring that every batch of black basil aligns with our high standards. Together, we work towards a shared goal of providing hearty meals that preserve our environment.
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
              Through precise harvesting, sustainable farming, and eco-friendly transportation methods, black basil travels directly from Ali's Farm to our kitchen, ensuring freshness in every leaf.
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
              In our dishes, black basil transforms into vibrant flavors and aromas, elevating your dining experience. Each plate tells the story of its journey from farm to table.
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
