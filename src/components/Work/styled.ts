import styled from "styled-components"

export const Work = styled.div`
  position: relative;
  img {
    max-width: 100%;
    &.right {
      float: right;
      max-width: 80%;
    }
  }
  @media print {
    page-break-after: always;
    img.right {
      height: 500px;
      width: auto;
    }
  }
`

export const TechStack = styled.i`
  display: block;
  font-weight: 700;
`
