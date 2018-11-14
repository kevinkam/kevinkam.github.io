import * as React from "react"
import { Row, Col, Divider } from "antd"
import * as Airstage from "./Airstage"
import * as HiinMusic from "./HiinMusic"
import * as WeJump from "./WeJump"
import * as NYD from "./NYD"
import * as ITWerks from "./ITWerks"
import * as Orion from "./Orion"

import { Container } from "../styled"
import { Work } from "./styled"

const i18n: { [x: string]: { title: string } } = {
  us: { title: "Working Experience" },
  ch: { title: "工作经验" },
  tw: { title: "工作經驗" }
}
const Jobs: any = {
  us: [
    Airstage.us,
    HiinMusic.us,
    WeJump.us,
    NYD.us,
    ITWerks.us,
    Orion.us
  ],
  ch: [
    Airstage.ch,
    HiinMusic.ch,
    WeJump.ch,
    NYD.ch,
    ITWerks.ch,
    Orion.ch
  ],
  tw: [
    Airstage.tw,
    HiinMusic.tw,
    WeJump.tw,
    NYD.tw,
    ITWerks.tw,
    Orion.tw
  ]
}
const Job = (props: {
  last: boolean
  title: string
  position: string
  year: string
  description: JSX.Element
}) => {
  let columnWide = {
    left: 20,
    right: 4
  }
  if (props.year.length > 9) {
    columnWide = {
      left: 18,
      right: 6
    }
  }
  let pageBreak = props.last ? "" : "page-break"
  return (
    <Work className={`jobs ${pageBreak}`}>
      <Row>
        <Col xs={24} sm={columnWide.left}>
          <h3 className="company">{props.title}</h3>
          <h4 className="position">{props.position}</h4>
        </Col>
        <Col xs={24} sm={columnWide.right}>
          <div className="year">{props.year}</div>
        </Col>
      </Row>
      <div className="description">{props.description}</div>
      {!props.last && <Divider />}
    </Work>
  )
}
export default (props: { language: string }) => {
  const totalWork = Jobs[props.language].length - 1
  return (
    <Container>
      <h2 className="ui header">{i18n[props.language].title}</h2>
      <div className="content">
        {Jobs[props.language].map((job: any, index: number) => (
          <Job
            key={index}
            last={index === totalWork}
            title={job.title}
            year={job.year}
            position={job.position}
            description={job.description}
          />
        ))}
      </div>
    </Container>
  )
}
