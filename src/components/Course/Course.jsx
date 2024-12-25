import React from 'react';

import './Course.css';

const Course = (title, description) => {
    <div className='.app__Course'>
        <div className=".app__Course-Head">
            
        </div>
        <div className=".app__Course-Name">
            <h1 className="p__cormorant" style={{color: '#DCCA87'}}>{title}</h1>
        </div>
        <div className=".app__Course-Description">
            <p className="p__opensans" style = {{color: "AAA"}}>{description}</p>
        </div>

    </div>
}

export default Course;