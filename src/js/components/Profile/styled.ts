import styled from "styled-components"

export const Profile = styled.div`
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
`

export const ProfilePic = styled.img`
  max-width: 100%;
  width: 120.5px;
  height: 120.5px;
  margin: auto;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  @media (max-width: 575px) {
    width: 200px;
    height: auto;
  }
  @media print {
    width: 100px;
    height: auto;
  }
`
