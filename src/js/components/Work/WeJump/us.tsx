import { TechStack } from "../styled"
import * as React from "react"

const WJARImg = require("images/wjar.png")

export default {
  title: "We Jump",
    year: "2015/3-2015/6",
  position: "Front-End Engineer",
  description: (
  <div>
    <img src={WJARImg} />
    <div>
      The company provide a AR to make advertise APPs.<br />I’m
      responsible to create and maintain the official website.
    </div>
    <TechStack>Tech Stack: jQuery, JavaScript, CSS, HTML</TechStack>
    <a href="http://www.wj-ar.com" target="_blank">
      www.wj-ar.com
    </a>
  </div>
)
}
