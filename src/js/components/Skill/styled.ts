import styled from "styled-components"

export const SkillValueBar = styled.div`
  img {
    margin-top: -2px;
    margin-right: 0.7rem;
    width: 1rem;
  }
  @media print {
    .ant-progress-bg {
      -webkit-print-color-adjust: exact;
    }
  }
`
