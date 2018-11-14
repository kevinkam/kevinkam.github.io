import * as React from "react"
import { TechStack } from "../styled"
const AirStageImg = require("images/airstage.png")

export default {
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
}
