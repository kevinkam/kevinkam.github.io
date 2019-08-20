import * as React from "react"
import { TechStack } from "../styled"
import AirStageImg from "./images/airstage.png"

export default {
  title: "Aistage 西灣人 (台灣)",
  year: "2011-2013",
  position: "網站工程師",
  description: (
    <div>
      <img src={AirStageImg} />
      <div>
        Airstage
        要讓大學生接觸的人際關係不再只佝限於自己的系所同學、社團朋友及家人親戚。<br />
        裡面主要功能包含
      </div>
      <ol>
        <li>活動牆：各種活動公告，包括分類及線上訂票</li>
        <li>微專欄：類似小型部落格，可以自己撰寫文章或閱讀其他人的文章</li>
        <li>海堤酒吧：聊天哈拉區</li>
        <li>傳紙條：每到12點系統會自動進行配對並可以與陌生人聊天</li>
      </ol>
      <TechStack>
        使用技術: PHP, jQuery, JavaScript, CSS, HTML, MySQL
      </TechStack>
      <div>目前該網站已停止運作。</div>
    </div>
  )
}
