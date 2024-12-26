import React from 'react';

import './Course.css';

const Course = ({title, description}) => (
  <div className = "app__Courseitem">
    <div className="app__Courseitem-head">
      <div className="app__Courseitem-name">
        <p className="p__cormorant" style={{color: '#DCCA87'}}>
          {title}
        </p>
      </div>
      <div className="app__Courseitem-sub">
        <p className="p__opensans" style = {{color: "AAA"}}>{description}</p>
      </div>
    </div>
  </div>
);

export default Course;
