import React from 'react';

const i18n = {
  us:{
    title: 'Work Experiences'
  },
  tw:{
    title:'工作經驗'
  }
}
const Jobs = {
  us: [
    {
      title: 'Aistage',
      year: '2011-2013',
      position: 'Website Engineer',
      description: () => (
        <div>
          <img className="ui fluid image" src="dist/images/airstage.png" />
          <div>The objective of Airstage is to connect the whole university, and not just limit to department, club and family, and here are the functions in the websites</div>
          <ol>
            <li>Event Wall: Any kind of events, including categorize and book ticket online.</li>
            <li>Mini Column: It’s more like a mini blog, you may write a new post to share with others or read others.</li>
            <li>Bar: It’s a chat forum.</li>
            <li>Papers: It will match a stranger with you to chat at 12am everyday.</li>
          </ol>
          <div>The website is currently shut down.</div>
        </div>
      )
    },
    {
      title: 'Hiin Music',
      year: '2014/8-2014/12',
      position: 'Website Engineer',
      description: () => (
        <div>
          <img className="ui fluid image" src="dist/images/hiinmusic.png" />
          <div>Hiin Music is a music player website, it’s provide a search engine for situation suggest, although there are some website have music suggestion, but Hiin Music could search something like “I’m working in coffee shop now”, “candlelight dinner” or “missing family”, even is “a traveller walking in dessert” and etc. then it will suggest you the recommendation music for you.<br />
          The main function are:</div>
          <ol>
            <li>My Playlists: You can create a playlist to add your favorite songs , and share to other users.</li>
            <li>Music Suggestion: We use Jaccard Index Algorithm to use SQL to find a best suggestion for user.</li>
            <li>Music Search: We use Elastic Search to search.</li>
            <li>Youtube Video Streaming: We use Youtube API to control our music at the website.</li>
          </ol>
          <div>The website is currently shut down.</div>
        </div>
      )
    },
    {
      title: 'We Jump',
      year: '2015/3-2015/6',
      position: 'Front-End Engineer',
      description: () => (
        <div>
          <img className="ui fluid image" src="dist/images/wjar.png" />
          <div>The company provide a AR to make advertise APPs.<br />I’m responsible to create and maintain the official website.</div>
          <a href="http://www.wj-ar.com" target="_blank">www.wj-ar.com</a>
        </div>
      )
    },
    {
      title: 'NYD IT Consultant',
      year: '2015/7-2016/8',
      position: 'Front-End Engineer',
      description: () => (
        <div className="ui stackable grid">
          <div className="nine wide column">
            <div>
              <p>
                Company is an out sourcing company, do not have a specific products.<br />
                I’m responsible for mobile website.
              </p>
              <p>
                This is a online gambling platform, it use React.js.<br />
                Including many functions like the gambling page, user panel and etc.
              </p>
            </div>
            <a href="http://m.royal866.com" target="_blank">m.royal866.com</a> (please open by mobile browser)
          </div>
          <div className="seven wide column">
            <img className="ui fluid image" src="dist/images/nyd.png" style={{textAlign:'right'}} />
          </div>
        </div>
      )
    },
    {
      title: 'IT Werks',
      year: '2016/12-Present',
      position: 'Front-End Developer',
      description: () => (
            <div>
              <img className="ui fluid image" src="dist/images/sapp.png" />
              <div>
                Company is a full-service technology marketing company, do not have a specific products.<br />
                I’m responsible for frontend part.
              </div>
              <a href="https://kevinitwerks.github.io/sapphire-windows" target="_blank">kevinitwerks.github.io/sapphire-windows</a><br />
              <a href="http://www.adaids.com.sg" target="_blank">www.adaids.com.sg</a><br />
              <a href="http://moviola.project-qc.com" target="_blank">moviola.project-qc.com</a>
            </div>
      )
    }
  ],
  tw: [
    {
      title: 'Aistage 西灣人',
      year: '2011-2013',
      position: '網站工程師',
      description: () => (
        <div>
          <img className="ui fluid image" src="dist/images/airstage.png" />
          <div>Airstage 要讓大學生接觸的人際關係不再只佝限於自己的系所同學、社團朋友及家人親戚。<br />
              裡面主要功能包含</div>
          <ol>
            <li>活動牆：各種活動公告，包括分類及線上訂票</li>
            <li>微專欄：類似小型部落格，可以自己撰寫文章或閱讀其他人的文章</li>
            <li>海堤酒吧：聊天哈拉區</li>
            <li>傳紙條：每到12點系統會自動進行配對餅可以與陌生人聊天</li>
          </ol>
          <div>目前該網站已停止運作。</div>
        </div>
      )
    },
    {
      title: '海浪音樂網',
      year: '2014/8-2014/12',
      position: '網站工程師',
      description: () => (
        <div>
          <img className="ui fluid image" src="dist/images/hiinmusic.png" />
          <div>Hiin Music海浪音樂網和其他網站最不同之處是情境推薦的搜尋引擎，雖然一般網站也有一些推薦的功能，但有別於其他以人工事先分類好的做法，這個網站能夠隨意輸入你正在做的事情或是你希望音樂帶來的感覺，像是「我在咖啡廳工作」、「燭光晚餐」或是「思念家人」、甚至是「旅人走在荒漠中」等等的詞，都可以推薦給你適合的歌曲。有的時候聽膩了不段重複播放的熱門歌曲，用另一種完全抽象的方式描述自己想聽的音樂情境，探索這個平台推薦給我的歌曲，就像一場奇妙的探險，反而能讓我驚喜不斷！<br />
              主要功能有
          </div>
          <ol>
            <li>我的歌單：能夠自己新增喜歡的歌曲並創立屬於自己的歌單，也能將自己的歌單分享給別人</li>
            <li>歌曲推薦：使用 Jaccard Index 演算法來處理sql進行推薦</li>
            <li>歌曲搜尋：使用 Elastic Search 進行搜尋</li>
            <li>Youtube 影片串接：使用 Youtube API 進行網頁上的所有歌曲播放動作</li>
          </ol>
          <div>目前該網站已停止運作。</div>
        </div>
      )
    },
    {
      title: '旺捷數位科技',
      year: '2015/3-2015/6',
      position: '前端工程師',
      description: () => (
        <div>
          <img className="ui fluid image" src="dist/images/wjar.png" />
          <div>該公司主要以AR來提供各種有趣的宣傳及功能<br />主要負責該公司官網製作</div>
          <a href="http://www.wj-ar.com" target="_blank">www.wj-ar.com</a>
        </div>
      )
    },
    {
      title: 'NYD IT Consultant',
      year: '2015/7-2016/8',
      position: '前端工程師',
      description: () => (
        <div className="ui stackable grid">
          <div className="nine wide column">
            <div>
              <p>
                主要為外包公司，並無自己特定的產品<br />
                主要負責產品為手機端網頁
              </p>
              <p>
                該產品主要為線上博弈，內容框架使用 React.js 開發。<br />
                負責的項目很多，包括投注頁面、用戶管理頁面、帳變頁面、充值提現頁面 等等。
              </p>
            </div>
            <a href="http://m.royal866.com" target="_blank">m.royal866.com</a> (請使用手機瀏覽器開啟)
          </div>
          <div className="seven wide column">
            <img className="ui fluid image" src="dist/images/nyd.png" style={{textAlign:'right'}} />
          </div>
        </div>
      )
    },
    {
      title: 'IT Werks',
      year: '2016/12-目前',
      position: '前端工程师',
      description: () => (
            <div>
              <img className="ui fluid image" src="dist/images/sapp.png" />
              <div>
                主要為科技外包公司，並無自己特定的產品<br />
                主要負責各個網頁的前端
              </div>
              <a href="https://kevinitwerks.github.io/sapphire-windows" target="_blank">kevinitwerks.github.io/sapphire-windows</a><br />
              <a href="http://www.adaids.com.sg" target="_blank">www.adaids.com.sg</a><br />
              <a href="http://moviola.project-qc.com" target="_blank">moviola.project-qc.com</a>
            </div>
      )
    }
  ]
}
const Job = (props) => {
  let columnWide = {
    left: 'thirteen',
    right: 'three'
  };
  if(props.year.length > 9){
    columnWide = {
      left: 'twelve',
      right: 'four'
    };
  }
  let pageBreak = props.last ? '' : 'page-break';
  return (
    <div className={`jobs ${pageBreak}`}>
      <div className="ui stackable grid">
        <div className={columnWide.left + " wide column left floated"}>
          <div className="company">{props.title}</div>
          <div className="position">{props.position}</div>
        </div>
        <div className={columnWide.right + " wide column right floated"}>
          <div className="year">{props.year}</div>
        </div>
      </div>
      <div className="description">
        {props.description()}
      </div>
      <div className="ui divider"></div>
    </div>
  );
};
const Work = (props) => {
  const totalWork = Jobs[props.language].length - 1;
  const works = Jobs[props.language].map((job, index) => {
    let last = false;
    if(index === totalWork) {
      last = true;
    }
    return (<Job last={last} title={job.title} year={job.year} position={job.position} description={job.description} />);
  });
  return (
    <div className="work">
      <h2 className="ui header">{i18n[props.language].title}</h2>
      <div className="content">
        {works}
      </div>
    </div>
  );
}

export default Work;
