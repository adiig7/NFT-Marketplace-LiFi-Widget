import React, { useEffect, useState } from "react";
import styles from "../Loading.module.css";
import styled from "styled-components";
import { useRouter } from "next/router";

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 20rem;
  color: #6cffe4;
  letter-spacing: 5px;
  font-size: 16px ;
  
`;

const Screen = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: transparent;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Balls = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: white;
    margin: 0 6px 0 0;
    animation: oscillate 0.7s ease-in forwards infinite;
  }

  .one {
    animation-delay: 0.5s;
  }
  .two {
    animation-delay: 1s;
  }
  .three {
    animation-delay: 2s;
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default function Loading( props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("")

  React.useEffect(() => {
    setLoading(props._loading);
  }, [props._loading]);
 
  React.useEffect(() => {
    setMessage(props._message)
  }, [props._message]);
  return (
    <>
     <Screen>
      <Balls>
        <div className="ball one"></div>
        <div className="ball two"></div>
        <div className="ball three"></div>
      </Balls>
      <Message>
        <div>
          <h3>
          { message }
          </h3>
        </div>
      </Message>
    </Screen>
    </>
  );
}