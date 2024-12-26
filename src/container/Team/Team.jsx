import React, { useState } from 'react';
import './Team.css';
import {TeamMember} from '../../components';
import FadeInSection from '../../components/FadeInSection/FadeInSection';

const Team = () => {
  const [activeTitle, setActiveTitle] = useState(null);
  const toggleAccordion = (title) => {
    setActiveTitle(activeTitle === title ? null : title); // Toggle the active item by title
  };

  const teamMembers = [
    {
        name: 'Kacem Ettahali, Cofounder and Executive Chef',
        description: "Chef Ettahali started cooking at the age of six under the guidance of the acclaimed celebrity chef, Gordon Ramsay. He has since appeared on the TV show Hell's Kitchen and MasterChef where he showcased his exemplary culinary skills. Chef Ettahali later relocated to Paris to hone his skills at the culinary school, Le Cordon Bleu, developing an intuition for hospitality, management, culinary arts, and gastronomy. Upon graduating, he founded Black Basil with Chef Joshua Wu. Growing up in Morocco, Chef Ettahali brought his ancestral roots into cooking, incorporating an unique blend of mediterannean and french cuisine within the restaurant. During the pandemic, Black Basil closed down for two months, undergoing a huge revamp to become a fully vegatarian restaurant. Since then, Black Basil has received three michelin stars, becoming one of only two vegetarian restaurants with michelin stars. Chef Ettahali continues to utilize his platform to spread awareness regarding sustainability and eco-friendly practices.",
    },
    {
        name: 'Joshua Wu, Cofounder and Executive Chef',
        description: "Chef Joshua Wu was born and raised in Los Angeles, Californina. Early on, he became involved with culinary studies under the guidance of his parents who owned the michelin starred restaurant, Din Tai Fung. He eventually attended Stanford University where he studied culinary arts and hospitality, and he even joined his classmates in starting their own restaurant that specialized in vegetarian food. From there, Chef Wu moved to New York City to work as a chef at Eleven Madison Park where he recieved extensive training in working with fine dining and restaurant management. During the pandemic, Chef Wu quit working at Eleven Madison to join long-time friend Chef Ettahali to revamp Black Basil, bringing a more sustainable fine dining experience to the world."
    },
    {
        name: "Ayyan Rehman, Headchef",
        description: "Chef Ayyan Rehman was born and raised in Houston, Texas, where he developed a deep appreciation for diverse culinary traditions. Growing up in a family that valued homegrown ingredients, Ayyan’s interest in cooking flourished alongside his passion for farming. After studying culinary arts at the Culinary Institute of America in New York, he honed his skills at renowned restaurants such as Per Se and The Spotted Pig, gaining expertise in fine dining and sustainable practices. Ayyan’s entrepreneurial spirit led him to start his own farm, where he grows fresh, seasonal produce that plays a key role in his dishes. In collaboration with his long-time friend, Chef Ettahali, Ayyan took the reins of Black Basil during the pandemic, bringing his farm-to-table philosophy to the restaurant and transforming it into a beacon of innovative and sustainable fine dining."
    },
    {
        name: "Gideon Kastner, Pastry Chef",
        description: "Pastry Chef Gideon Kastner was born and raised in Montreal, Canada, where he developed a passion for baking at an early age. Surrounded by a vibrant culinary scene, Gideon was drawn to the art of pastry, inspired by his grandmother’s traditional recipes and the city’s rich European influence. He attended the Culinary Institute of America, where he specialized in pastry arts, refining his skills under the mentorship of acclaimed chefs. After graduating, Gideon worked in several prestigious patisseries, including Dominique Ansel Bakery in New York and Pierre Hermé in Paris, where he perfected his craft and developed a keen eye for detail and creativity. In recent years, Chef Kastner has combined his love for classic French pastry techniques with a modern twist, earning accolades for his innovative desserts. Today, he serves as the head pastry chef at Black Basil, where he brings a fresh perspective to the restaurant’s dessert offerings, delighting guests with his beautifully executed and imaginative confections.",
    },
    {
        name: "Rishabh Makker, Executive Wine Director",
        description: "Rishabh Makker was born and raised in New Delhi, India, where he first developed an interest in the world of wine through his family’s passion for fine dining and hospitality. His curiosity led him to pursue formal education in wine at the prestigious Le Cordon Bleu in London, where he studied viticulture and oenology. After completing his training, Rishabh gained hands-on experience working at renowned wineries and restaurants across Europe, including in the vineyards of Napa Valley and the cellars of Burgundy, France. With his deep understanding of both traditional wine regions and innovative winemaking techniques, Rishabh has developed a reputation for curating exceptional wine lists that perfectly complement modern cuisine. As the Wine Director at Black Basil, Rishabh brings a wealth of expertise to the team, crafting a wine program that balances sustainability with sophistication and offers guests a truly immersive dining experience.",
    },
    {
        name: "Winston Ma, Executive manager",
        description: "Winston Ma was born and raised in Guangdong, China, where he developed a strong appreciation for the region’s rich culinary heritage and vibrant hospitality industry. Growing up in a family that valued both business and tradition, Winston was inspired to pursue a career in hospitality management. He studied Business Administration at the University of Hong Kong, where he focused on restaurant management and operations. After completing his degree, Winston gained extensive experience working in high-end hotels and restaurants across Asia, including in Shanghai and Hong Kong, where he honed his skills in operations, team leadership, and customer service. As the Executive Manager at Black Basil, Winston combines his expertise in hospitality with his deep understanding of Chinese culture and cuisine. His leadership ensures the smooth operation of the restaurant, creating an exceptional dining experience for guests while maintaining a focus on sustainability and innovation.",
    }
  ]
  return (
    <div className='app__Team flex__center section__padding' id="Team">
        <div className='app__Team-title'>
            <h1 className="headtext__cormorant">Meet our Team</h1>
        </div>
        <div className='app__TeamMembers flex__center'>
            {teamMembers.map((member) => (
                <TeamMember name={member.name} description={member.description} isActive={activeTitle === member.name} onToggle={toggleAccordion}></TeamMember>
            ))}
        </div>
        <div className="app__TeamMembers-other flex__center">
            <FadeInSection><p className="p__cormorant">Elizabeth Zhang, Executive Sous Chef</p></FadeInSection>
            <FadeInSection><p className="p__cormorant">Daniel Isaac, Executive Sous Chef</p></FadeInSection>
            <FadeInSection><p className="p__cormorant">Yasmin Al-Mansoori, Junior Sous Chef</p></FadeInSection>
            <FadeInSection><p className="p__cormorant">Sami Shahriari, Junior Sous Chef</p></FadeInSection>
            <FadeInSection><p className="p__cormorant">Emily Johnson, Pastry Sous Chef</p></FadeInSection>
            <FadeInSection><p className="p__cormorant">Charlotte Anderson, Assitant Wine Director</p></FadeInSection>
            <FadeInSection><p className="p__cormorant">William Thomas, Service Director</p></FadeInSection>
        </div>
    </div>
  )
}

export default Team
