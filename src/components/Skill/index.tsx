import * as React from "react"
import { Progress } from "antd"
import { Container } from "../styled"
import { SkillValueBar } from "./styled"
import HTMLIcon from "./images/html5/html5-original.svg"
import CSSIcon from "./images/css3/css3-original.svg"
import JSIcon from "./images/javascript/javascript-original.svg"
import TypeScriptIcon from "./images/typescript/typescript-original.svg"
import ReactIcon from "./images/react/react-original.svg"
import JQueryIcon from "./images/jquery/jquery-original.svg"

const i18n: { [x: string]: { title: string } } = {
  us: { title: "Skills" },
  ch: { title: "技能" },
  tw: { title: "技能" }
}
const skills: Array<{ skill: string; val: number; Icon?: any }> = [
  {
    skill: "HTML",
    val: 80,
    Icon: <img src={HTMLIcon} />
  },
  {
    skill: "CSS",
    val: 70,
    Icon: <img src={CSSIcon} />
  },
  {
    skill: "JavaScript",
    val: 80,
    Icon: <img src={JSIcon} />
  },
  { skill: "ES6", val: 70, Icon: <img src={JSIcon} /> },
  {
    skill: "TypeScript",
    val: 50,
    Icon: <img src={TypeScriptIcon} />
  },
  {
    skill: "React.js",
    val: 80,
    Icon: <img src={ReactIcon} />
  },
  {
    skill: "jQuery",
    val: 80,
    Icon: <img src={JQueryIcon} />
  }
]
const ValueBar = ({
  skill,
  val,
  Icon
}: {
  skill: string
  val: number
  Icon: string
}) => (
  <SkillValueBar>
    {Icon}
    {skill}
    <Progress percent={val} status="active" />
  </SkillValueBar>
)
export default ({ language }: { language: string }) => (
  <Container pageBreak>
    <h2>{i18n[language].title}</h2>
    {skills.map(({ skill, val, Icon }, i) => (
      <ValueBar key={i} skill={skill} val={val} Icon={Icon} />
    ))}
  </Container>
)
