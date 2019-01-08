import { Col, Row } from "antd"
import { TechStack } from "../styled"
import * as React from "react"
const OrionImg = require("images/orion.png")
export default {
  title: "Orion Consultancy (新加坡)",
  year: "2017/3-2018/9",
  position: "前端工程師",
  description: (
    <Row>
      <Col xs={24} sm={24} md={14} lg={14}>
        <p>
          主要為外包公司，並無自己特定的產品<br />
          主要負責產品為手機端網頁、桌面端網頁、公司CMS系統、聊天室(使用websocket)
        </p>
        <p>
          該公司使用很多最新的技術來建構系統，在這家公司裡學了很多最新的前端技術。
        </p>
        <TechStack>
          使用技術: JavaScript, TypeScript, CSS, HTML, ES6/7/8, React.js,
          Redux, React-Router, Webpack, WebSocket, DraftJS
        </TechStack>
      </Col>
      <Col xs={24} sm={24} md={10} lg={10}>
        <img src={OrionImg} className="right" />
      </Col>
    </Row>
  )
}
