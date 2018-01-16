import * as React from "react"
import { Container } from "../styled"

const i18n: { [x: string]: { self: Function } } = {
  us: {
    self: () => (
      <div>
        <p>Hi, I'm Kevin from Malaysia.</p>
        <p>
          I was learning website skill since 2010, before graduate from
          university I had learn some basic PHP, jQuery, and I was intend to
          become a PHP Developer, at the last semester in my university, I went
          to Taipei for intern, although I was applied “PHP Developer”, but
          actually the job was doing full stack, and after finished my intern I
          felt that Front-end is more interesting than Back-end, so I decided to
          become a Front-end Developer after graduated, and began to learn some
          modern JS skills such as Angular.js, Node.js, ES6 and etc.
        </p>
        <p>
          After that I worked in a Taipei's company, my main work was maintain
          the official website and there got limitation for learning new
          technologies, so I quit the job and went to Philippines.
        </p>
        <p>
          In here, I had learn many things like the OOP of JS, React.js, ES6,
          WebPack, but the company insisted to support IE8, so there are many
          modern skill cannot be use such as Angular.js 2, Vue.js, CSS3, HTML5
          and etc.
        </p>
        <p>
          I hope that I could find a job that no need to support older browser,
          and can make me learn more things!
        </p>
      </div>
    )
  },
  ch: {
    self: () => (
      <div>
        <p>哈罗，我是来自马来西亚的忠禾。</p>
        <p>
          从2010年开始就被学长启发开始学习如何编写网页，大学毕业前也学习了
          PHP、jQuery等的一些基础，大学毕业前也一直想着要往 PHP
          的方向发展，在大学最有一学期我到了台北实习，那时应征了 PHP
          开发工程师，名义上是 PHP
          开发工程师，但实际上是全端工程师，也因为这份工作让我觉得前端的事物比较有趣，所以在大学毕业后找的工作是前端性质的，也开始研究
          Angular.js, Node.js, ES6等等比较现代化的JS。
        </p>
        <p>
          毕业之后到台北工作，主要工作事维护该公司的形象官网，能学习的技术受限，后来被另一家位于菲律宾的公司招聘，而决定去试试。
        </p>
        <p>
          在这家公司学了很多，了解了
          JS的OOP、React.js、ES6、Webpack，但因为该公司的需求都必须要兼容
          IE8，所以很多新的技术不能使用像是 Angular.js 2、Vue.js、CSS3、HTML5
          等等。
        </p>
        <p>希望能找到让我更加发挥的工作，不再局限于旧的技术！</p>
      </div>
    )
  },
  tw: {
    self: () => (
      <div>
        <p>哈囉，我是來自馬來西亞的忠禾。</p>
        <p>
          從2010年開始就被學長啟發開始學習如何編寫網頁，大學畢業前也學習了
          PHP、jQuery等的一些基礎，大學畢業前也一直想著要往 PHP
          的方向發展，在大學最後一學期我到了台北實習，那時應徵了 PHP
          開發工程師，名義上是 PHP
          開發工程師，但實際上是全端工程師，也因為這份工作讓我覺得前端的事物比較有趣，所以在大學畢業後找的工作是前端性質的，也開始研究
          Angular.js, Node.js, ES6等等比較現代化的JS。
        </p>
        <p>
          畢業之後到台北工作，主要工作是維護該公司的形象官網，能學習的技術受限，於是在想要換個環境時就被目前這家在菲律賓的公司找上了。
        </p>
        <p>
          在這家公司學了很多，瞭解了
          JS的OOP、React.js、ES6、Webpack，但因為目前該公司的需求都必須要兼容
          IE8，所以很多新的技術不能使用像是 Angular.js 2、Vue.js、CSS3、HTML5
          等等。
        </p>
        <p>希望能找到讓我更加發揮的工作，不再侷限於舊的技術！</p>
      </div>
    )
  }
}
export default (props: { language: string }) => (
  <Container>{i18n[props.language].self()}</Container>
)
