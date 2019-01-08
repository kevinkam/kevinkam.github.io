import { Col, Row } from "antd"
import { TechStack } from "../styled"
import * as React from "react"
const PartipostImg = require("images/partipost.png")
export default {
  title: "Partipost (新加坡)",
  year: "2018/9-2018/12",
  position: "前端工程师",
  description: (
    <div>
      <img src={PartipostImg} />
      <p>
        Partipost 是一款可以通过社群媒体来赚钱的应用程序。
        <br />
        主要负责产品为公司的CMS系统
      </p>
      <TechStack>
        使用技术: JavaScript, TypeScript, CSS, HTML, ES6/7/8, React.js, Redux,
        React-Router, Redux-Saga
      </TechStack>
    </div>
  )
}
