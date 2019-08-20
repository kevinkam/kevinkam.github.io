import "react-app-polyfill/ie9"
import "react-app-polyfill/stable"
import "./style.css"

import * as React from "react"
import * as ReactDOM from "react-dom"

import { LocaleProvider, Divider, Layout } from "antd"

import enGB from "antd/lib/locale-provider/en_GB"
import zhCN from "antd/lib/locale-provider/zh_CN"
import zhTW from "antd/lib/locale-provider/zh_TW"

import Profile from "./components/Profile"

import Education from "./components/Education"
import Skill from "./components/Skill"
import Work from "./components/Work"
import Portfolio from "./components/Portfolio"
import Download from "./components/Download"

import * as serviceWorker from "./serviceWorker"

const languageSelector: {
  [x: string]: { title: string; antdLanguage: any }
} = {
  us: {
    title: "Resume",
    antdLanguage: enGB
  },
  ch: {
    title: "履历表",
    antdLanguage: zhCN
  },
  tw: {
    title: "履歷表",
    antdLanguage: zhTW
  }
}
class App extends React.PureComponent<
  any,
  { language: string; antdLanguage: any }
> {
  constructor(props: any) {
    super(props)
    this.state = {
      language: "us",
      antdLanguage: enGB
    }
  }
  changeLanguage = (language: string) => {
    document.title = languageSelector[language].title
    this.setState({
      language: language,
      antdLanguage: languageSelector[language].antdLanguage
    })
  }
  render() {
    return (
      <LocaleProvider locale={this.state.antdLanguage}>
        <Layout style={{ position: "relative" }}>
          <Layout.Content style={{ padding: "0 20px" }}>
            <Profile
              language={this.state.language}
              changeLanguage={this.changeLanguage}
            />
            <Divider />
            <Education language={this.state.language} />
            <Divider />
            <Skill language={this.state.language} />
            <Divider />
            <Work language={this.state.language} />
            <Divider />
            <Portfolio language={this.state.language} />
            {/*<Download language={this.state.language} />*/}
          </Layout.Content>
        </Layout>
      </LocaleProvider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"))
serviceWorker.register()
