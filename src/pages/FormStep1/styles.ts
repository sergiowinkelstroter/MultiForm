import styled from "styled-components";

export const Container = styled.div`
  p {
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

  label {
    font-size: 15px;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 1px solid #25cd89;
      border-radius: 10px;
      color: #fff;
      outline: none;
      font-size: 15px;
      background-color: #02044a;
    }
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
`;
