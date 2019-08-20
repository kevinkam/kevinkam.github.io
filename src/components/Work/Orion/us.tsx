import { Col, Row } from "antd"
import { TechStack } from "../styled"
import * as React from "react"
import OrionImg from "./images/orion.png"

export default {
  title: "Orion Consultancy (Singapore)",
  year: "2017/3-2018/9",
  position: "Front-End Developer",
  description: (
    <Row>
      <Col xs={24} sm={24} md={14} lg={14}>
        <p>
          Company is an out sourcing company, do not have a specific
          products.<br />
          I’m responsible for mobile website, desktop website, company CMS
          system, chatroom(using websocket).
        </p>
        <p>
          This company use a lot of latest tech to build up the system, I
          have learn a lot of latest frontend tech from this company.
        </p>
        <TechStack>
          Tech Stack: JavaScript, TypeScript, CSS, HTML, ES6/7/8, React.js,
          Redux, React-Router, Webpack, WebSocket, DraftJS
        </TechStack>
      </Col>
      <Col xs={24} sm={24} md={10} lg={10}>
        <img src={OrionImg} className="right" />
      </Col>
    </Row>
  )
}
