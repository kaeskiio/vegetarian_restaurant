import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';
import FadeInSection from '../../components/FadeInSection/FadeInSection';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <FadeInSection>
      <div className="app__specialMenu-title">
        <SubHeading title="Where nature meets flavor" />
        <h1 className="headtext__cormorant">Menu & Stories</h1>
      </div>
    </FadeInSection>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__left">
        <FadeInSection>
          <p className="app__specialMenu-menu_heading">Coffee and Tea</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </FadeInSection>
      </div>

      <div className="app__specialMenu-menu_img">
        <FadeInSection>
          <img src={images.negroni} alt="negroni img" />
        </FadeInSection>
      </div>

      <div className="app__specialMenu-menu_cocktail flex__right">
        <FadeInSection>
          <p className="app__specialMenu-menu_heading">Mocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
