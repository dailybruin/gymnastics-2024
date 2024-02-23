import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  width: 1440px;
  height: 901px;
  position: relative;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  padding-right: 15px;
  color: #9E7A45;
  background-color: #F7EDCC;
  ${mediaQueries.mobile} {
    font-size: 8px;
  }
`;

export default function Landing(props) {
  return (
    <><Container>
      {/* <Image src={props.data.landing_image}></Image> */}

    </Container><Credits>{props.data.landing_credits}</Credits></>
    
  );
}
