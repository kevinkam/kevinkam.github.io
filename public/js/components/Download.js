import React from 'react'

const i18n = {
  us:{
    download: 'dist/images/resume-us.pdf',
    text: 'Download CV'
  },
  tw: {
    download: 'dist/images/resume-tw.pdf',
    text: '下載履歷'
  }
}
const Download = (props) => (
  <a href={i18n[props.language].download}>{i18n[props.language].text}</a>
);

export default Download;
