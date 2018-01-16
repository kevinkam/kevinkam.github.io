import * as React from "react"

import { Row, Col, Icon } from "antd"

import Translation from "./Translation"
import { ProfilePic, Profile } from "./styled"
const ProfileImg = require("images/profile.jpg")

const i18n: any = {
  us: {
    subTitle: () => (
      <span>
        Hi,<br />I'm a Front-End Developer.
      </span>
    ),
    name: "Kevin Kam",
    email: "Hi, Kevin",
    location: "Malaysia"
  },
  ch: {
    subTitle: () => (
      <span>
        嗨,<br />我是专注于网页技术的前端工程师
      </span>
    ),
    name: "甘忠禾",
    email: "嗨, 忠禾",
    location: "马来西亚"
  },
  tw: {
    subTitle: () => (
      <span>
        嗨,<br />我是專注於網頁技術的前端工程師
      </span>
    ),
    name: "甘忠禾",
    email: "嗨, 忠禾",
    location: "馬來西亞"
  }
}
export default (props: any) => (
  <Profile>
    <Row align="middle" justify="center" type="flex">
      <Col xl={6} lg={6} md={6} sm={6} xs={24}>
        <ProfilePic src={ProfileImg} />
      </Col>
      <Col xl={9} lg={9} md={9} sm={9} xs={24}>
        <h4>{i18n[props.language].subTitle()}</h4>
      </Col>
      <Col xl={9} lg={9} md={9} sm={9} xs={24}>
        <div>
          <Icon type="user" />&nbsp;
          <span className="description">{i18n[props.language].name}</span>
        </div>
        <div>
          <Icon type="mail" />&nbsp;
          <span className="description">
            <a
              href={
                "mailto:k040691@icloud.com?subject=" +
                i18n[props.language].email
              }
            >
              k040691@icloud.com
            </a>
          </span>
        </div>
        <div>
          <Icon type="environment-o" />&nbsp;
          <span className="description">{i18n[props.language].location}</span>
        </div>
      </Col>
    </Row>
    <Translation
      language={props.language}
      changeLanguage={props.changeLanguage}
    />
  </Profile>
)
