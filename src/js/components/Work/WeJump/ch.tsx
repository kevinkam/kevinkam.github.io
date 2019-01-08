import { TechStack } from "../styled"
import * as React from "react"

const WJARImg = require("images/wjar.png")

export default {
  title: "旺捷数位科技 (台湾)",
  year: "2015/3-2015/6",
  position: "前端工程师",
  description: (
    <div>
      <img src={WJARImg} />
      <div>
        该公司主要以AR来提供各种有趣的宣传及功能<br />主要负责该公司的官网制作
      </div>
      <TechStack>使用技术: jQuery, JavaScript, CSS, HTML</TechStack>
      <a href="http://www.wj-ar.com" target="_blank">
        www.wj-ar.com
      </a>
    </div>
  )
}
