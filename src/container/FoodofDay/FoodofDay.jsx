import React from 'react';

import { images } from '../../constants';
import './FoodofDay.css';

const FoodofDay = () => (
  <div className="app__foodofday app__bg flex__center section__padding" id="foodofday">
    <div className="app__foodofday-overlay flex__center">
    </div>

    <div className="app__foodofday-content flex__center">
      <div className="app__foodofday-content_today">
        <h1 className="headtext__cormorant">Food of the Day</h1>
        <img src={images.spoon} alt="decorative spoon" className="spoon__img" />
        <p className="p__opensans">Today's special is our delicious Black Basil Pasta, featuring homemade plant-based ingredients for a rich, satisfying flavor that promotes sustainability.</p>
        <button type="button" className="custom__button">Discover More</button>
      </div>

      <div className="app__foodofday-content_image flex__center">
        <img src={images.tbb} alt="Food of the Day Image" />
      </div>

      <div className="app__foodofday-content_details">
        <h1 className="headtext__cormorant">Why It's Special</h1>
        <img src={images.spoon} alt="decorative spoon" className="spoon__img" />
        <p className="p__opensans">Our Black Basil Pasta is crafted with the finest locally sourced ingredients, combining tradition with innovation to create a unique culinary experience.</p>
        <button type="button" className="custom__button">Read More</button>
      </div>
    </div>
  </div>
);

export default FoodofDay;
