import React from 'react';
import './TeamMember.css';
import {SubHeading} from '../../components';
import FadeInSection from '../../components/FadeInSection/FadeInSection';

const TeamMember = ({name, description, isActive, onToggle}) => {
  return (
    <div className="app__TeamMember flex__center section_padding">
        <div className="app__TeamMember-Header" onClick={() => onToggle(name)} >
            <div className="TeamMember-Name">
                <h1 className="p__cormorant" >{name}</h1>
            </div>
            <div className="TeamMember-Button">
                <button className='TeamMember-toggle'>{isActive ? '-' : '+'}</button>
            </div>
        </div>
        {isActive && (
        <div className="app__TeamMember-content-show">
            <FadeInSection>
                <p className="p__cormorant">{description}</p>
            </FadeInSection>
         </div>
        )}
    </div>
  )
}

export default TeamMember
