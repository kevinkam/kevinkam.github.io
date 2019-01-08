import { TechStack } from "../styled"
import * as React from "react"

const HiinImg = require("images/hiinmusic.png")

export default {
  title: "Hiin Music (Taiwan)",
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
}
