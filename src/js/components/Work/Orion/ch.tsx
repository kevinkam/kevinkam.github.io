import { Col, Row } from "antd"
import { TechStack } from "../styled"
import * as React from "react"
const OrionImg = require("images/orion.png")
export default {
  title: "Orion Consultancy (新加坡)",
  year: "2017/3-2018/9",
  position: "前端工程师",
  description: (
    <Row>
      <Col xs={24} sm={24} md={14} lg={14}>
        <p>
          主要为外包公司，并无自己特定的产品<br />
          主要负责产品为手机端网页、桌面端网页、公司CMS系统、聊天室(使用websocket)
        </p>
        <p>
          该公司使用很多最新的技术来建构系统，在这家公司里学了很多最新的前端技术。
        </p>
        <TechStack>
          使用技术: JavaScript, TypeScript, CSS, HTML, ES6/7/8, React.js,
          Redux, React-Router, Webpack, WebSocket, DraftJS
        </TechStack>
      </Col>
      <Col xs={24} sm={24} md={10} lg={10}>
        <img src={OrionImg} className="right" />
      </Col>
    </Row>
  )
}
