import { Col, Row } from "antd"
import { TechStack } from "../styled"
import * as React from "react"
import NYDImg from "./images/nyd.png"

export default {
  title: "NYD IT Consultant (菲律賓)",
  year: "2015/7-2016/8",
  position: "前端工程師",
  description: (
    <Row>
      <Col xs={24} sm={24} md={14} lg={14}>
        <div>
          <p>
            主要為外包公司，並無自己特定的產品<br />
            主要負責產品為手機端網頁
          </p>
          <p>
            該產品主要為線上博弈，內容框架使用 React.js 開發。<br />
            負責的項目很多，包括投注頁面、用戶管理頁面、帳變頁面、充值提現頁面
            等等。
          </p>
        </div>
        <TechStack>
          使用技術: jQuery, JavaScript, CSS, HTML, ES6, React.js
        </TechStack>
        <div>目前該網站已停止運作。</div>
      </Col>
      <Col xs={24} sm={24} md={10} lg={10}>
        <img src={NYDImg} className="right" />
      </Col>
    </Row>
  )
}
