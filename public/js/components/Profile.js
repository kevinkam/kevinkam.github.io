import React from 'react';

const i18n = {
  us:{
    subTitle: () => (
      <span>Hi,<br />I'm a Front-End Developer.</span>
    ),
    name: 'Kevin Kam',
    email: 'Hi, Kevin',
    location: 'Malaysia'
  },
  tw:{
    subTitle: () => (
      <span>哈囉,<br />我是專注於網頁技術的前端工程師</span>
    ),
    name: '甘忠禾',
    email: '哈囉, 忠禾',
    location: '馬來西亞'
  }
}
const Profile = (props) => (
  <div className="profile">
    <div className="ui stackable grid">
      <div className="three wide column">
        <img
          className="ui medium circular image"
          src="dist/images/profile.jpg"
        />
      </div>
      <div className="seven wide column">
        <span className="subTitle">{i18n[props.language].subTitle()}</span>
      </div>
      <div className="six wide column">
        <div>
          <span className="icon">
            <i className="user icon"></i>
          </span>
          <span className="description">{i18n[props.language].name}</span>
        </div>
        <div>
          <span className="icon">
            <i className="mail icon"></i>
          </span>
          <span className="description"><a href={"mailto:k040691@icloud.com?subject="+i18n[props.language].email}>k040691@icloud.com</a></span>
        </div>
        <div>
          <span className="icon">
            <i className="marker icon"></i>
          </span>
          <span className="description">{i18n[props.language].location}</span>
        </div>
      </div>
    </div>
    <div className="ui divider"></div>
  </div>
)

export default Profile
