import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  background: #F7EDCC;
`;

const Image = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;

const Credits = styled.div`
  font-family: Fjalla One;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-align: right;
  color: #9E7A45;



  ${mediaQueries.mobile} {
    font-size: 8px;
  }
`;

export default function Landing(props) {
  return (
    <Container>
      <Image src={props.data.landing_image}></Image>
      <Credits>{props.data.landing_credits}</Credits>
    </Container>
  );
}
