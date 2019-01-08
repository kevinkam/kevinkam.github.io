import { TechStack } from "../styled"
import * as React from "react"
const PartipostImg = require("images/partipost.png")
export default {
  title: "Partipost (新加坡)",
  year: "2018/9-2018/12",
  position: "前端工程師",
  description: (
    <div>
      <img src={PartipostImg} />
      <p>
        Partipost 是一款可以通過社群媒體來賺錢的應用程序。
        <br />
        主要負責產品為公司CMS系統
      </p>
      <TechStack>
        使用技術: JavaScript, TypeScript, CSS, HTML, ES6/7/8, React.js, Redux,
        React-Router, Redux-Saga
      </TechStack>
    </div>
  )
}
