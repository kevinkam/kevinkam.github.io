import { Col, Row } from "antd"
import { TechStack } from "../styled"
import * as React from "react"

const NYDImg = require("images/nyd.png")
export default {
  title: "NYD IT Consultant",
    year: "2015/7-2016/8",
  position: "Front-End Engineer",
  description: (
  <Row>
    <Col xs={24} sm={24} md={14} lg={14}>
      <p>
        Company is an out sourcing company, do not have a specific
        products.<br />
        I’m responsible for mobile website.
      </p>
      <p>
        This is a online gambling platform, it use React.js.<br />
        Including many functions like the gambling page, user panel and
        etc.
      </p>
      <TechStack>
        Tech Stack: jQuery, JavaScript, CSS, HTML, ES6, React.js
      </TechStack>
      <div>The website is currently shut down.</div>
    </Col>
    <Col xs={24} sm={24} md={10} lg={10}>
      <img src={NYDImg} className="right" />
    </Col>
  </Row>
)
}
