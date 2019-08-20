import * as React from "react"
import { Row, Col } from "antd"

import { Container } from "../styled"

const i18n: {
  [x: string]: { title: string; university: string; subject: string }
} = {
  us: {
    title: "Education",
    university: "National Sun-Yat-Sen University",
    subject: "Applied Mathematics"
  },
  ch: {
    title: "学历",
    university: "台湾国立中山大学",
    subject: "应用数学系"
  },
  tw: {
    title: "學歷",
    university: "台灣國立中山大學",
    subject: "應用數學系"
  }
}
export default ({ language }: { language: string }) => (
  <Container>
    <h2>{i18n[language].title}</h2>
    <Row align="middle" justify="center" type="flex">
      <Col xl={16} lg={16} md={16} sm={16} xs={24}>
        <div className="university">{i18n[language].university}</div>
        <div className="subject">{i18n[language].subject}</div>
      </Col>
      <Col xl={8} lg={8} md={8} sm={8} xs={24}>
        <div className="year">2010-2015</div>
      </Col>
    </Row>
  </Container>
)
