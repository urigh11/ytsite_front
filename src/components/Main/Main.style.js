import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    /* flex-direction: row; */
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    /* max-width: 80vw; */
  }
`;

export const MainText = styled.p`
  margin: 50px 25px;
  font-size: 22px;
  text-align: justify;

  @media screen and (min-width: 768px) {
    margin: 50px 40px;
  }
`;

export const Search = styled.div`
  margin: 10px auto;
  padding: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  width: 70vw;

  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`;

export const SearchBar = styled.input`
  font-size: 1em;
  color: white;
  margin: 10px auto;
  padding: 1rem 1rem 1rem 3.5rem;
  width: 70vw;
  background: #4e3272;
  border: none;
  border-radius: 3px;
  outline: none;

  ::placeholder {
    color: #ddd9e2;
  }

  &:hover {
    background: #543b75;
    transition: background 0.5s;
  }

  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`;

// Ads down here

export const AdMobile = styled.div`
  /* background: orange;
  border: 2px solid white;
  width: 320px;
  height: 100px;
  margin-bottom: 20px; */
  align-self: center;
  display: block;

  @media screen and (min-width: 768px) {
    /* width: 728px;
    height: 90px; */
    align-self: center;
    display: none;
    /* margin: 20px 0; */
  }
`;

export const AdDesktop = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    /* align-self: center; */
    display: flex;
    justify-content: space-evenly;
  }
`;
