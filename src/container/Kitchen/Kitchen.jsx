import React from 'react';
import './Kitchen.css';
import {images} from '../../constants';
import {SubHeading} from '../../components';
import FadeInSection from '../../components/FadeInSection/FadeInSection';

const Kitchen = () => {
  return (
    <div className="app__Kitchen">
        <div className="app__Kitchen-content">
            <FadeInSection translateYAmount={0}>
                <div className="app__Kitchen-Header">
                    <h1 className="headtext__cormorant" style={{margin: '2rem 0'}}>Our Kitchen</h1>
                    <SubHeading title="Where the magic happens"></SubHeading>
                </div>
            </FadeInSection>
            <div className="app__Kitchen-Innovation">
                <div className="app__Kitchen-veggies">
                    <FadeInSection><img src={images.plant1} style={{width: '500px', border: '3px solid #FFECB3', borderRadius: '6px'}} alt='plant 1'/></FadeInSection>
                    <FadeInSection><img src={images.plant4} style={{width: '600px', border: '3px solid #FFECB3', borderRadius: '6px'}} alt='plant 4'/></FadeInSection>
                </div>
                <FadeInSection>
                    <p className="p__cormorant" style={{fontSize: '25px', textTransform: 'none', marginTop: '40px'}}>
                        Ali's farm delivers fresh produce(including our signature Black Basil) every morning, ensuring the best quality food for our guests while limiting food waste. We prepare our fruits and vegetables every morning around 6:00 AM, carefully washing, cutting, and storing them so that they remain fresh throughout the day.
                    </p>
                </FadeInSection>
                <FadeInSection>
                    <p className="p__cormorant" style={{fontSize: '25px', textTransform: 'none', margin: '3rem 0'}}>
                        Our restaurant offers a diverse offering of vegetables, both in taste and preparation. As an amuse bouche, our restaurant often presents a fresh selection of vegetables for guests to taste, free of any seasoning and processing. Our goal is to allow guests to experience the produce at in its purest form. 
                    </p>
                </FadeInSection>
                <FadeInSection>
                    <div className="app__Kitchen-tofu">
                        <img src={images.tofu1} style={{width: '500px', border: '3px solid #FFECB3', borderRadius: '6px'}} alt='tofu 1'/>
                        <img src={images.tofu2} style={{width: '300px', border: '3px solid #FFECB3', borderRadius: '6px'}} alt='tofu 2'/>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <p className="p__cormorant" style={{fontSize: '25px', textTransform: 'none', margin:'3rem 0'}}>
                        Chef Joshua Wu is responsible for making our very own tofu from scratch using his family's generational recipe. Chef Wu uses locally-sourced soybeans to create tofu that is both delicious and packed with nutrients. 
                    </p>
                </FadeInSection>
                <FadeInSection>
                    <div className="app__Kitchen-Tonburi" style={{marginBottom:'3rem'}}>
                        <img src={images.tonburi1} style={{width: '500px', border: '3px solid #FFECB3', borderRadius: '6px'}} alt='tonburi 1'/>
                        <img src={images.tonburi2} style={{width: '500px', border: '3px solid #FFECB3', borderRadius: '6px'}} alt='tonburi 2'/>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <p className="p__cormorant" style={{fontSize: '25px', textTransform: 'none', marginBottom:'3rem'}}>
                        To recreate the sophisticated taste of caviar, Black Basil took inspiration from Eleven Madison Park. We use fresh tonburi seeds, also known as "land caviar,"" to create an elegant dining experience that is safe for our environment.
                    </p>
                </FadeInSection>
            </div>
        </div>
    </div>
  )
}

export default Kitchen;
