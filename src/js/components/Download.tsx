import * as React from "react"

const i18n: any = {
  us: {
    download: "dist/pdf/resume-us.pdf",
    text: "Download CV"
  },
  tw: {
    download: "dist/pdf/resume-tw.pdf",
    text: "下載履歷"
  }
}
const Download = (props: any) => (
  <a target="_blank" href={i18n[props.language].download}>
    {i18n[props.language].text}
  </a>
)

export default Download