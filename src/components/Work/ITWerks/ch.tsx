import { TechStack } from "../styled"
import * as React from "react"
import SAPPImg from "./images/sapp.png"

export default {
  title: "IT Werks (新加坡)",
  year: "2016/12-2017/2",
  position: "前端工程师",
  description: (
    <div>
      <img src={SAPPImg} />
      <div>
        主要为外包公司，并无自己特定的产品<br />
        主要负责各个网页的前端
      </div>
      <TechStack>使用技术: jQuery, JavaScript, CSS, HTML</TechStack>
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
