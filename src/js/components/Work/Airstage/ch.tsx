import * as React from "react"
import { TechStack } from "../styled"
const AirStageImg = require("images/airstage.png")

export default {
  title: "Aistage 西湾人 (台湾)",
  year: "2011-2013",
  position: "网站工程师",
  description: (
    <div>
      <img src={AirStageImg} />
      <div>
        Airstage
        要让大学生接触的人际关系不再只局限于自己的系所同学、社团朋友及家人亲戚。<br />
        里面主要功能包含
      </div>
      <ol>
        <li>活动墙：各种活动公告，包括分类及线上订票</li>
        <li>微专栏：类似小型部落格，可以自己撰写文章或阅读其他人的文章</li>
        <li>海堤酒吧：聊天哈拉区</li>
        <li>传纸条：每到12点系统回自动进行配对并可以与陌生人聊天</li>
      </ol>
      <TechStack>
        使用技术: PHP, jQuery, JavaScript, CSS, HTML, MySQL
      </TechStack>
      <div>目前该网站已停止运作。</div>
    </div>
  )
}
