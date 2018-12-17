import { TechStack } from "../styled"
import * as React from "react"

const PartipostImg = require("images/partipost.png")
export default {
  title: "Partipost",
  year: "2018/9-Present",
  position: "Front-End Developer",
  description: (
    <div>
      <img src={PartipostImg} />
      <p>
        Partipost is an app which user can earn money from social media.
        <br />
        I’m responsible for brand CMS system.
      </p>
      <TechStack>
        Tech Stack: JavaScript, TypeScript, CSS, HTML, ES6/7/8, React.js, Redux,
        React-Router, Redux-Saga
      </TechStack>
    </div>
  )
}
