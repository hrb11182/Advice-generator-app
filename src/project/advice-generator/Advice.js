import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./style.css";
import button from "./advice-generator-app-main/images/icon-dice.svg";
import dividerdesk from "./advice-generator-app-main/images/pattern-divider-desktop.svg";
import dividermob from "./advice-generator-app-main/images/pattern-divider-mobile.svg";
import axios from "axios";

const Advice = () => {
  const [advice, setAdvice] = useState("Advice Loading...");
  const [num, setNum] = useState("00");

  const handleClick = async () => {
    const res = await axios.get("https://api.adviceslip.com/advice");

    console.log(res);
    setNum(res.data.slip.id);
    setAdvice(res.data.slip.advice);
  };
  //Same thing using fetch.
  /*
  const handleClick = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data)

    setText(data.slip)
  }
*/
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <Wrapper>
      <div className="card">
        <p>
          <p className="ad">ADVICE</p>
          <p className="num">#{num}</p>
        </p>
        <h2>{advice}</h2>
        <div class="divider"></div>
      </div>
      <button onClick={handleClick}>
        <img src={button} alt="" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #fff;
  min-width: 90vw;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .card {
    background-color: hsl(217, 19%, 24%);
    min-height: 16em;
    width: 35em;
    border-radius: 12px;
  }
  p {
    color: hsl(150, 100%, 66%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    text-align: center;
    padding-bottom: 20px;
    padding: 0.5em;
  }
  button {
    background-color: hsl(150, 100%, 66%);
    border: 1px solid hsl(150, 100%, 66%);
    padding-top: 1em;
    padding-bottom: 0.9em;
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -2em;
    &:hover {
      box-shadow: 1px 1px 12px hsl(150, 100%, 66%);
    }
  }
  .divider {
    background: url(${dividerdesk}) no-repeat center;
    width: 450px;
    height: 50px;
    margin-top: -30px;
    margin-left: 45px;
    position: absolute;
  }
  .ad {
    margin-right: 0.3em;
    font-size: 0.7em;
    letter-spacing: 4px;
    font-weight: bold;
  }
  .num {
    font-size: 0.7em;
    letter-spacing: 4px;
    font-weight: bold;
  }
  .divider {
    padding-left: 20px;
  }
  @media screen and (max-width: 588px) {
    .divider {
      background: url(${dividermob}) no-repeat center;
      width: 295px;
      height: 50px;
      margin-top: -20px;
      margin-left: 2.8em;
      position: absolute;
    }
    .card {
      background-color: hsl(217, 19%, 24%);
      min-height: 20em;
      width: 25em;
      border-radius: 12px;
    }
    h2 {
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: 400px) {
    .divider {
      background: url(${dividermob}) no-repeat center;
      width: 295px;
      height: 50px;
      margin-top: -20px;
      margin-left: .1em;
      position: absolute;
    }
    .card {
      background-color: hsl(217, 19%, 24%);
      min-height: 20em;
      width: 20em;
      border-radius: 12px;
    }
    h2 {
      font-size: 1.5em;
    }
  }
`;
export default Advice;
