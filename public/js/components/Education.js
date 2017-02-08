import React from 'react';

const i18n = {
  us:{
    title: 'Education',
    university: 'National Sun-Yat-Sen University',
    subject: 'Applied Mathematics'
  },
  tw: {
    title: '學歷',
    university: '國立中山大學',
    subject: '應用數學系'
  }
}
const Education = (props) => (
  <div className="education">
    <h2 className="ui header">{i18n[props.language].title}</h2>
    <div className="content">
      <div className="ui stackable grid">
        <div className="thirteen wide column left floated">
          <div className="university">{i18n[props.language].university}</div>
          <div className="subject">{i18n[props.language].subject}</div>
        </div>
        <div className="three wide column right floated">
          <div className="year">2010-2015</div>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
