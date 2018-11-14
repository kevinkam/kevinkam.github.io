import { TechStack } from "../styled"
import * as React from "react"

const WJARImg = require("images/wjar.png")

export default {
  title: "旺捷數位科技",
  year: "2015/3-2015/6",
  position: "前端工程師",
  description: (
    <div>
      <img src={WJARImg} />
      <div>
        該公司主要以AR來提供各種有趣的宣傳及功能<br />主要負責該公司官網製作
      </div>
      <TechStack>使用技術: jQuery, JavaScript, CSS, HTML</TechStack>
      <a href="http://www.wj-ar.com" target="_blank">
        www.wj-ar.com
      </a>
    </div>
  )
}
