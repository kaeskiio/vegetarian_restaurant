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
            <FadeInSection>
              <img src={images.plant1} style={{width: '500px', border: '3px solid #FFECB3', borderRadius: '6px'}} alt='plant 1'/>
            </FadeInSection>
            <FadeInSection>
              <img src={images.plant4} style={{width: '600px', border: '3px solid #FFECB3', borderRadius: '6px'}} alt='plant 4'/>
            </FadeInSection>
          </div>
          <FadeInSection>
            <p className="description" style={{fontSize: '25px', textTransform: 'none', marginTop: '40px'}}>
              Ali's farm delivers fresh, organic produce, including our signature Black Basil, every morning to ensure the best quality food for our guests while reducing food waste. Each morning, around 6:00 AM, we carefully prepare the fruits and vegetables—washing, cutting, and storing them to maintain freshness throughout the day.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p className="description" style={{fontSize: '25px', textTransform: 'none', margin: '3rem 0'}}>
              Our restaurant offers a diverse selection of vegetables, both in taste and preparation. As an amuse-bouche, we often present a fresh array of seasonal vegetables to our guests, unseasoned and unprocessed, to allow them to experience the produce in its purest form.
            </p>
          </FadeInSection>
          <FadeInSection>
            <div className="app__Kitchen-tofu">
              <img src={images.tofu1} style={{width: '500px', border: '3px solid #FFECB3', borderRadius: '6px'}} alt='tofu 1'/>
              <img src={images.tofu2} style={{width: '300px', border: '3px solid #FFECB3', borderRadius: '6px'}} alt='tofu 2'/>
            </div>
          </FadeInSection>
          <FadeInSection>
            <p className="description" style={{fontSize: '25px', textTransform: 'none', margin:'3rem 0'}}>
              Chef Joshua Wu crafts our house-made tofu from scratch, following his family’s generational recipe. Using locally-sourced soybeans, Chef Wu creates tofu that is not only delicious but also rich in nutrients.
            </p>
          </FadeInSection>
          <FadeInSection>
            <div className="app__Kitchen-Tonburi" style={{marginBottom:'3rem'}}>
                <img src={images.tonburi1} style={{width: '500px', border: '3px solid #FFECB3', borderRadius: '6px'}} alt='tonburi 1'/>
                <img src={images.tonburi2} style={{width: '500px', border: '3px solid #FFECB3', borderRadius: '6px'}} alt='tonburi 2'/>
            </div>
          </FadeInSection>
          <FadeInSection>
            <p className="description" style={{fontSize: '25px', textTransform: 'none', marginBottom:'3rem'}}>
              To recreate the refined taste of caviar, Black Basil drew inspiration from Eleven Madison Park. We use fresh tonburi seeds, also known as "land caviar," to create an elegant dining experience that is both environmentally conscious and sophisticated.
            </p>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}

export default Kitchen;
