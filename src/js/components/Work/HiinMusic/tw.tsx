import { TechStack } from "../styled"
import * as React from "react"

const HiinImg = require("images/hiinmusic.png")

export default {
  title: "海浪音樂網",
  year: "2014/8-2014/12",
  position: "網站工程師",
  description: (
    <div>
      <img src={HiinImg} />
      <div>
        Hiin
        Music海浪音樂網和其他網站最不同之處是情境推薦的搜尋引擎，雖然一般網站也有一些推薦的功能，但有別於其他以人工事先分類好的做法，這個網站能夠隨意輸入你正在做的事情或是你希望音樂帶來的感覺，像是「我在咖啡廳工作」、「燭光晚餐」或是「思念家人」、甚至是「旅人走在荒漠中」等等的詞，都可以推薦給你適合的歌曲。有的時候聽膩了不段重複播放的熱門歌曲，用另一種完全抽象的方式描述自己想聽的音樂情境，探索這個平台推薦給我的歌曲，就像一場奇妙的探險，反而能讓我驚喜不斷！<br />
        主要功能有
      </div>
      <ol>
        <li>
          我的歌單：能夠自己新增喜歡的歌曲並創立屬於自己的歌單，也能將自己的歌單分享給別人
        </li>
        <li>歌曲推薦：使用 Jaccard Index 演算法來處理sql進行推薦</li>
        <li>歌曲搜尋：使用 Elastic Search 進行搜尋</li>
        <li>
          Youtube 影片串接：使用 Youtube API 進行網頁上的所有歌曲播放動作
        </li>
      </ol>
      <TechStack>
        使用技術: PHP, CodeIgniter, jQuery, JavaScript, CSS, HTML, MySQL,
        ElasticSearch
      </TechStack>
      <div>目前該網站已停止運作。</div>
    </div>
  )
}
