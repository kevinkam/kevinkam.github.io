import * as React from "react"
import { Carousel, Divider } from "antd"
import { Wrapper } from "./styled"
const Samsonite1Img = require("images/samsonite-1.png")
const Samsonite2Img = require("images/samsonite-2.png")
const Samsonite3Img = require("images/samsonite-3.png")
const Samsonite4Img = require("images/samsonite-4.png")
const Samsonite5Img = require("images/samsonite-5.png")
const Samsonite6Img = require("images/samsonite-6.png")
const Samsonite7Img = require("images/samsonite-7.png")
const Samsonite8Img = require("images/samsonite-8.png")

const i18n: { [x: string]: { title: string } } = {
  us: { title: "Portfolio" },
  ch: { title: "作品集" },
  tw: { title: "作品集" }
}

export default ({ language }: { language: string }) => (
  <Wrapper>
    <h2>{i18n[language].title}</h2>
    <h3>Samsonite</h3>
    <Carousel autoplay>
      <img src={Samsonite1Img} />
      <img src={Samsonite2Img} />
      <img src={Samsonite3Img} />
      <img src={Samsonite4Img} />
      <img src={Samsonite5Img} />
      <img src={Samsonite6Img} />
      <img src={Samsonite7Img} />
      <img src={Samsonite8Img} />
    </Carousel>
    <Divider />
  </Wrapper>
)
