import { Col, Row } from "antd"
import { TechStack } from "../styled"
import * as React from "react"

const NYDImg = require("images/nyd.png")
export default{
  title: "NYD IT Consultant (菲律宾)",
  year: "2015/7-2016/8",
  position: "前端工程师",
  description: (
    <Row>
      <Col xs={24} sm={24} md={14} lg={14}>
        <div>
          <p>
            主要为外包公司，并无自己特定的产品<br />
            主要负责产品为手机端网页
          </p>
          <p>
            该产品主要为线上博弈，内容框架使用 React.js 开发。<br />
            负责的项目很多，包括投注页面、用户管理页面、帐变页面、充值提现页面
            等等等等。
          </p>
        </div>
        <TechStack>
          使用技术: jQuery, JavaScript, CSS, HTML, ES6, React.js
        </TechStack>
        <div>目前该网站已停止运作。</div>
      </Col>
      <Col xs={24} sm={24} md={10} lg={10}>
        <img src={NYDImg} className="right" />
      </Col>
    </Row>
  )
}
