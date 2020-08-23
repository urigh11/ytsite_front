import styled from "styled-components";

export const VideoUnit = styled.div`
  display: flex;
  flex-direction: column;

  /* @media screen and (min-width: 768px) {
    flex-direction: row;
  } */
`;

export const VideoUnitTitle = styled.h1`
  font-size: 1em;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`;

export const VideoAndAds = styled.div`
  /* display: flex; */
`;

export const VideoContainer = styled.div`
  position: relative;

  ::after {
    padding-top: 56.25%;
    display: block;
    content: "";
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

// Ads below
export const AdVertical = styled.div`
  /* background: orange;
  border: 2px solid white;
  width: 320px;
  height: 100px;
  align-self: center; */
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    /* margin: 0 auto; */
    position: absolute;
    top: 250px;
    left: 150px;
    /* width: 728px;
    height: 90px;
    align-self: center;
    margin: 20px 0; */
  }
`;
