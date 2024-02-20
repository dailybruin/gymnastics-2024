import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  background: #d9d9d9;
  border-bottom: #d9d9d9;
`;

const Image = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;

const Credits = styled.div`
  position: absolute;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #387854;
  bottom: -2em;
  right: 1em;
  text-transform: uppercase;

  ${mediaQueries.mobile} {
    font-size: 8px;
  }
`;

export default function Landing(props) {
  return (
    <Container>
      <Image src={props.image}></Image>
      <Credits>{props.credits}</Credits>
    </Container>
  );
}
