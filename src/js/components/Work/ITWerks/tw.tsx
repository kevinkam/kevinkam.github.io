import { TechStack } from "../styled"
import * as React from "react"

const SAPPImg = require("images/sapp.png")

export default {
  title: "IT Werks (新加坡)",
  year: "2016/12-2017/2",
  position: "前端工程师",
  description: (
    <div>
      <img src={SAPPImg} />
      <div>
        主要為科技外包公司，並無自己特定的產品<br />
        主要負責各個網頁的前端
      </div>
      <TechStack>使用技術: jQuery, JavaScript, CSS, HTML</TechStack>
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
