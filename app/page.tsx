"use client";

import styled from "styled-components";

import {useState} from"react";
import Link from "next/link";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 0

`

const StyledTitle = styled.h1 `
    color: #3e5cff;
    
`

const StyledText = styled.p `
    border: 1px dot-dash steelblue ;
    padding: .5%;
    font-size: calc(12px + 1vh);
    
`;

const StyledInput = styled.input `
    padding: 1%;
    margin: 2% 0;
    background-color: rgba(163,181,255,0.31);
    border: 1px solid rgba(163,181,255,0.31);
    border-radius: 15px;
    color: black;
    text-align: center;
`;

const StyledLink = styled(Link) `
    text-decoration: none;
    color: navajowhite;
    background-color: black;
    padding: .7%;
    border: 1px solid black;
    border-radius: 15px;
    margin-top: 2%;
    
    &:hover {
        border: 1px solid cornflowerblue;
        background-color: cornflowerblue;
        color: black;
    }
`;
export default function Home() {

  const [city, setCity] = useState("");

  return (
    <StyledDiv>
      <StyledTitle>Find the Weather in any City!</StyledTitle>
      <StyledText>Enter a city name below to get the current weather</StyledText>
      <StyledInput type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)}/>
      <StyledLink href={`/${city}`}>Get Weather</StyledLink>
    </StyledDiv>
  );
}
