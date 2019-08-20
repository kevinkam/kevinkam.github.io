import { TechStack } from "../styled"
import * as React from "react"
import SAPPImg from "./images/sapp.png"

export default {
  title: "IT Werks (Singapore)",
  year: "2016/12-2017/2",
  position: "Front-End Developer",
  description: (
    <div>
      <img src={SAPPImg} />
      <div>
        Company is a full-service technology marketing company, do not have
        a specific products.<br />
        I’m responsible for frontend part.
      </div>
      <TechStack>Tech Stack: jQuery, JavaScript, CSS, HTML</TechStack>
      <a
        href="https://kevinitwerks.github.io/sapphire-windows"
        target="_blank"
      >
        kevinitwerks.github.io/sapphire-windows
      </a>
      <br />
      <a href="http://www.adaids.com.sg" target="_blank">
        www.adaids.com.sg
      </a>
    </div>
  )
}
