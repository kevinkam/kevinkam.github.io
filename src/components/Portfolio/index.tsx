import * as React from "react"
import { Carousel, Divider } from "antd"
import { Wrapper } from "./styled"
import Samsonite1Img from "./images/samsonite-1.png"
import Samsonite2Img from "./images/samsonite-2.png"
import Samsonite3Img from "./images/samsonite-3.png"
import Samsonite4Img from "./images/samsonite-4.png"
import Samsonite5Img from "./images/samsonite-5.png"
import Samsonite6Img from "./images/samsonite-6.png"
import Samsonite7Img from "./images/samsonite-7.png"
import Samsonite8Img from "./images/samsonite-8.png"

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
