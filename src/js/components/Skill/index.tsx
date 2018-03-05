import * as React from "react"
import { Progress } from "antd"
import { Container } from "../styled"
import { SkillValueBar } from "./styled"
const HTMLIcon = require("css/devicon/icons/html5/html5-original.svg")
const CSSIcon = require("css/devicon/icons/css3/css3-original.svg")
const JSIcon = require("css/devicon/icons/javascript/javascript-original.svg")
const TypeScriptIcon = require("css/devicon/icons/typescript/typescript-original.svg")
const ReactIcon = require("css/devicon/icons/react/react-original.svg")
const JQueryIcon = require("css/devicon/icons/jquery/jquery-original.svg")
const AngularIcon = require("css/devicon/icons/angularjs/angularjs-original.svg")
const VueIcon = require("css/devicon/icons/vuejs/vuejs-original.svg")
const NodeIcon = require("css/devicon/icons/nodejs/nodejs-original.svg")

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
  },
  {
    skill: "Angular.js 2",
    val: 30,
    Icon: <img src={AngularIcon} />
  },
  {
    skill: "Vue.js",
    val: 30,
    Icon: <img src={VueIcon} />
  },
  {
    skill: "Node.js",
    val: 30,
    Icon: <img src={NodeIcon} />
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
