import * as React from "react"

import { Affix, Select } from "antd"

const Option = Select.Option

interface TranslationProps {
  language: string
  changeLanguage: (param: any) => void
}

export default ({ language, changeLanguage }: TranslationProps) => (
  <Affix offsetTop={20} style={{ position: "absolute", right: 20, top: 20 }}>
    <Select onChange={changeLanguage} value={language} size="small">
      <Option value="us">English</Option>
      <Option value="ch">简体中文</Option>
      <Option value="tw">繁體中文</Option>
    </Select>
  </Affix>
)
