import styled from "styled-components";

export const Images = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  background: #ccc;
  margin: 0;
  li {
    border: solid 1px;
    margin: 20px;
    padding: 20px;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    &:hover {
      opacity: 1;
    }
    img {
      cursor: pointer;
      max-width: 200px;
      max-height: 200px;
    }
    p {
      max-width: 200px;
      align-self: bottom;
      margin-top: auto;
      padding-top: 20px;
    }
  }
`;