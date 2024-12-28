import React from 'react';
import './Specials.css';
import {SubHeading} from '../../components';
import {images} from '../../constants';
import FadeInSection from '../../components/FadeInSection/FadeInSection';

const Specials = () => {
  return (
    <div className="app__Specials" id="Specials">
        <FadeInSection>
            <div className="app__Specials-title">
                <h1 className="headtext__cormorant">Special Events & More</h1>
            </div>
        </FadeInSection>
        <FadeInSection translateYAmount={30}>
            <div className="app__Specials-img"><img src={images.dining}/></div> 
        </FadeInSection>
        <FadeInSection translateYAmount={30}>
            <div className="app__Specials-privatedining">
                <h1 className="app__specialMenu-menu_heading"> Events and Private Dining </h1>
                <p className="app__p__cormorant">
                    Our restaurant proudly boasts 3 private dining rooms each capable of hosting 30 guests, perfect for family reunions and team dinners. Please feel free to reach out via email to book the dining areas and request more information. We are also open to discussing larger events that require a full restaurant buy-out.
                </p>
            </div>
        </FadeInSection>
        <FadeInSection translateYAmount={30}>
            <div className="app__Specials-img"><img src={images.christmas}/></div> 
        </FadeInSection>
        <FadeInSection translateYAmount={30}>
            <div className="app__Specials-Christmas">
                <h1 className="app__specialMenu-menu_heading"> Christmas and New Years Eve </h1>
                <p className="app__p__cormorant">
                    Black Basil is offering a 25% discount for dinner on Christmas Eve and New Years Eve in light of the holiday spirits! The special holiday dinner will feature our take on unique Christmas classics and a decadent holiday decor. Book your spot through the reservation section above!
                </p>
            </div>
        </FadeInSection>
        <FadeInSection translateYAmount={30}>
            <div className="app__Specials-img"><img src={images.catering}/></div> 
        </FadeInSection>
        <FadeInSection translateYAmount={30}>
            <div className="app__Specials-catering">
                <h1 className="app__specialMenu-menu_heading">
                    Catering
                </h1>
                <p className="app__p__cormorant">
                    Hosting large scale events and want quality dining? Black Basil offers special catering services upon request at large revenues for social occassions including marriage, company dinners, and more. Food items choices for catering are more limited, and catering services must be requested 2 weeks in advance. If you need more information, llease feel free to reach out for personal inquiries!
                </p>
            </div>
        </FadeInSection>
    </div>
  )
}

export default Specials;
