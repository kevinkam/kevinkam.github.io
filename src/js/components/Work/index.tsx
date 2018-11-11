import * as React from "react"
import { Row, Col, Divider } from "antd"

import { Container } from "../styled"
import { Work, TechStack } from "./styled"

const AirStageImg = require("images/airstage.png")
const HiinImg = require("images/hiinmusic.png")
const WJARImg = require("images/wjar.png")
const NYDImg = require("images/nyd.png")
const SAPPImg = require("images/sapp.png")
const OrionImg = require("images/orion.png")

const i18n: { [x: string]: { title: string } } = {
  us: { title: "Working Experience" },
  ch: { title: "工作经验" },
  tw: { title: "工作經驗" }
}
const Jobs: any = {
  us: [
    {
      title: "Aistage",
      year: "2011-2013",
      position: "Website Engineer",
      description: (
        <div>
          <img src={AirStageImg} />
          <div>
            The objective of Airstage is to connect the whole university, and
            not just limit to department, club and family, and here are the
            functions in the websites
          </div>
          <ol>
            <li>
              Event Wall: Any kind of events, including categorize and book
              ticket online.
            </li>
            <li>
              Mini Column: It’s more like a mini blog, you may write a new post
              to share with others or read others.
            </li>
            <li>Bar: It’s a chat forum.</li>
            <li>
              Papers: It will match a stranger with you to chat at 12am
              everyday.
            </li>
          </ol>
          <TechStack>
            Tech Stack: PHP, jQuery, JavaScript, CSS, HTML, MySQL
          </TechStack>
          <div>The website is currently shut down.</div>
        </div>
      )
    },
    {
      title: "Hiin Music",
      year: "2014/8-2014/12",
      position: "Website Engineer",
      description: (
        <div>
          <img src={HiinImg} />
          <div>
            Hiin Music is a music player website, it’s provide a search engine
            for situation suggest, although there are some website have music
            suggestion, but Hiin Music could search something like “I’m working
            in coffee shop now”, “candlelight dinner” or “missing family”, even
            is “a traveller walking in dessert” and etc. then it will suggest
            you the recommendation music for you.<br />
            The main function are:
          </div>
          <ol>
            <li>
              My Playlists: You can create a playlist to add your favorite songs
              , and share to other users.
            </li>
            <li>
              Music Suggestion: We use Jaccard Index Algorithm to use SQL to
              find a best suggestion for user.
            </li>
            <li>Music Search: We use Elastic Search to search.</li>
            <li>
              Youtube Video Streaming: We use Youtube API to control our music
              at the website.
            </li>
          </ol>
          <TechStack>
            Tech Stack: PHP, CodeIgniter, jQuery, JavaScript, CSS, HTML, MySQL,
            ElasticSearch
          </TechStack>
          <div>The website is currently shut down.</div>
        </div>
      )
    },
    {
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
    },
    {
      title: "NYD IT Consultant",
      year: "2015/7-2016/8",
      position: "Front-End Engineer",
      description: (
        <Row>
          <Col xs={24} sm={24} md={14} lg={14}>
            <p>
              Company is an out sourcing company, do not have a specific
              products.<br />
              I’m responsible for mobile website.
            </p>
            <p>
              This is a online gambling platform, it use React.js.<br />
              Including many functions like the gambling page, user panel and
              etc.
            </p>
            <TechStack>
              Tech Stack: jQuery, JavaScript, CSS, HTML, ES6, React.js
            </TechStack>
            <div>The website is currently shut down.</div>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10}>
            <img src={NYDImg} className="right" />
          </Col>
        </Row>
      )
    },
    {
      title: "IT Werks",
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
    },
    {
      title: "Orion Consultancy",
      year: "2017/3-2018/9",
      position: "Front-End Developer",
      description: (
        <Row>
          <Col xs={24} sm={24} md={14} lg={14}>
            <p>
              Company is an out sourcing company, do not have a specific
              products.<br />
              I’m responsible for mobile website, desktop website, company CMS
              system, chatroom(using websocket).
            </p>
            <p>
              This company use a lot of latest tech to build up the system, I
              have learn a lot of latest frontend tech from this company.
            </p>
            <TechStack>
              Tech Stack: JavaScript, TypeScript, CSS, HTML, ES6/7/8, React.js,
              Redux, React-Router, Webpack, WebSocket, DraftJS
            </TechStack>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10}>
            <img src={OrionImg} className="right" />
          </Col>
        </Row>
      )
    }
  ],
  ch: [
    {
      title: "Aistage 西湾人",
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
    },
    {
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
    },
    {
      title: "旺捷数位科技",
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
    },
    {
      title: "NYD IT Consultant",
      year: "2015/7-2016/8",
      position: "前端工程师",
      description: (
        <Row>
          <Col xs={24} sm={24} md={14} lg={14}>
            <div>
              <p>
                主要为外包公司，并无自己特定的产品<br />
                主要负责产品为手机端网页
              </p>
              <p>
                该产品主要为线上博弈，内容框架使用 React.js 开发。<br />
                负责的项目很多，包括投注页面、用户管理页面、帐变页面、充值提现页面
                等等等等。
              </p>
            </div>
            <TechStack>
              使用技术: jQuery, JavaScript, CSS, HTML, ES6, React.js
            </TechStack>
            <div>目前该网站已停止运作。</div>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10}>
            <img src={NYDImg} className="right" />
          </Col>
        </Row>
      )
    },
    {
      title: "IT Werks",
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
    },
    {
      title: "Orion Consultancy",
      year: "2017/3-2018/9",
      position: "前端工程师",
      description: (
        <Row>
          <Col xs={24} sm={24} md={14} lg={14}>
            <p>
              主要为外包公司，并无自己特定的产品<br />
              主要负责产品为手机端网页、桌面端网页、公司CMS系统、聊天室(使用websocket)
            </p>
            <p>
              该公司使用很多最新的技术来建构系统，在这家公司里学了很多最新的前端技术。
            </p>
            <TechStack>
              使用技术: JavaScript, TypeScript, CSS, HTML, ES6/7/8, React.js,
              Redux, React-Router, Webpack, WebSocket, DraftJS
            </TechStack>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10}>
            <img src={OrionImg} className="right" />
          </Col>
        </Row>
      )
    }
  ],
  tw: [
    {
      title: "Aistage 西灣人",
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
    },
    {
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
    },
    {
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
    },
    {
      title: "NYD IT Consultant",
      year: "2015/7-2016/8",
      position: "前端工程師",
      description: (
        <Row>
          <Col xs={24} sm={24} md={14} lg={14}>
            <div>
              <p>
                主要為外包公司，並無自己特定的產品<br />
                主要負責產品為手機端網頁
              </p>
              <p>
                該產品主要為線上博弈，內容框架使用 React.js 開發。<br />
                負責的項目很多，包括投注頁面、用戶管理頁面、帳變頁面、充值提現頁面
                等等。
              </p>
            </div>
            <TechStack>
              使用技術: jQuery, JavaScript, CSS, HTML, ES6, React.js
            </TechStack>
            <div>目前該網站已停止運作。</div>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10}>
            <img src={NYDImg} className="right" />
          </Col>
        </Row>
      )
    },
    {
      title: "IT Werks",
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
    },
    {
      title: "Orion Consultancy",
      year: "2017/3-2018/9",
      position: "前端工程師",
      description: (
        <Row>
          <Col xs={24} sm={24} md={14} lg={14}>
            <p>
              主要為外包公司，並無自己特定的產品<br />
              主要負責產品為手機端網頁、桌面端網頁、公司CMS系統、聊天室(使用websocket)
            </p>
            <p>
              該公司使用很多最新的技術來建構系統，在這家公司裡學了很多最新的前端技術。
            </p>
            <TechStack>
              使用技術: JavaScript, TypeScript, CSS, HTML, ES6/7/8, React.js,
              Redux, React-Router, Webpack, WebSocket, DraftJS
            </TechStack>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10}>
            <img src={OrionImg} className="right" />
          </Col>
        </Row>
      )
    }
  ]
}
const Job = (props: {
  last: boolean
  title: string
  position: string
  year: string
  description: JSX.Element
}) => {
  let columnWide = {
    left: 20,
    right: 4
  }
  if (props.year.length > 9) {
    columnWide = {
      left: 18,
      right: 6
    }
  }
  let pageBreak = props.last ? "" : "page-break"
  return (
    <Work className={`jobs ${pageBreak}`}>
      <Row>
        <Col xs={24} sm={columnWide.left}>
          <h3 className="company">{props.title}</h3>
          <h4 className="position">{props.position}</h4>
        </Col>
        <Col xs={24} sm={columnWide.right}>
          <div className="year">{props.year}</div>
        </Col>
      </Row>
      <div className="description">{props.description}</div>
      {!props.last && <Divider />}
    </Work>
  )
}
export default (props: { language: string }) => {
  const totalWork = Jobs[props.language].length - 1
  return (
    <Container>
      <h2 className="ui header">{i18n[props.language].title}</h2>
      <div className="content">
        {Jobs[props.language].map((job: any, index: number) => (
          <Job
            key={index}
            last={index === totalWork}
            title={job.title}
            year={job.year}
            position={job.position}
            description={job.description}
          />
        ))}
      </div>
    </Container>
  )
}
