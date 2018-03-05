import styled from "styled-components"

export const Container = styled.div`
  padding: 0 24px;
  @media print {
    page-break-after: ${({ pageBreak }: { pageBreak?: boolean }) =>
      pageBreak ? "always" : "avoid"};
  }
`
