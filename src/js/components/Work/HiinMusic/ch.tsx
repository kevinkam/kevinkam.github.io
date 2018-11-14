import { TechStack } from "../styled"
import * as React from "react"

const HiinImg = require("images/hiinmusic.png")

export default {
  title: "海浪音乐网",
  year: "2014/8-2014/12",
  position: "网站工程师",
  description: (
    <div>
      <img src={HiinImg} />
      <div>
        Hiin
        Music海浪音乐网和其他网站最不同之处是情境推荐的搜寻殷勤，虽然一般网站也有一些推荐的功能，但有别于其他以人工事先分类好的做法，这个网站能够随意输入你正在做的事情或是你希望音乐带来的感觉，像是「我在咖啡厅工作」、「烛光晚餐」或是「思念家人」、甚至是「旅人走在荒漠中」等等的词，都可以推荐给你是和的歌曲。有的时候听腻了不断重复播放的热门歌曲，用另一种完全抽象的方式描述自己想听的音乐情境，探索这个平台推荐给我的歌曲，就像一场奇妙的探险，反而能让我惊喜不断！<br />
        主要功能有
      </div>
      <ol>
        <li>
          我的歌单：能够自己新增喜欢的歌曲并创立属于自己的歌单，也能将自己的歌单分享给别人
        </li>
        <li>歌曲推荐：使用 Jaccard Index 演算法来处理sql进行推荐</li>
        <li>歌曲搜寻：使用 Elastic Search 进行搜寻</li>
        <li>
          Youtube 影片串接：使用 Youtube API 进行网页上的所有歌曲播放动作
        </li>
      </ol>
      <TechStack>
        使用技术: PHP, CodeIgniter, jQuery, JavaScript, CSS, HTML, MySQL,
        ElasticSearch
      </TechStack>
      <div>目前该网站已停止运作。</div>
    </div>
  )
}
