import React from 'react';

import {SubHeading, } from '../../components'
import { data } from '../../constants';
import './TastingMenu.css';
import FadeInSection from '../../components/FadeInSection/FadeInSection';
import Course from '../../components/Course/Course';

const TastingMenu = () => (
  <div className = "app__TastingMenu flex__center section__padding" id = "tastingmenu">
    <FadeInSection>
    <div className = "app__TastingMenu-title">
      <h1 className ="headtext__cormorant">Tasting Menu</h1>
      <SubHeading title="Today's Selection"></SubHeading>
    </div>
    <div className="app__TastingMenu-FullMenu">
      <div className="app__TastingMenu-courseitems">
        {data.FullMenu.map((item, index) => (
          <Course key = {item.name +index} title={item.name} description = {item.description}/>
        ))}
      </div>
    </div>
    </FadeInSection>
  </div>
);

export default TastingMenu;
