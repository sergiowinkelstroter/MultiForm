import styled from "styled-components";

export const Container = styled.div`
  span {
    font-size: 15px;
    color: #b8b8d4;
  }

  h1 {
    margin-block: 8px;
    padding: 0;
    font-size: 26px;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin: 30px 0;
  }

  button {
    background-color: #25cd89;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 20px 40px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
  }

  .backButton {
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: #b8b8d4;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;
  span {
    font-size: 18px;
    color: #fff;
  }

  p {
    font-size: 20px;
    margin-bottom: 5px;
    color: #b8b8d4;
  }
`;
