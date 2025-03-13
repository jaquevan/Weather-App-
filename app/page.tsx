"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5% 0;
    min-height: 80vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #e0e6ed 100%);
`;

const StyledTitle = styled.h1`
    color: #4a6cf7;
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledText = styled.p`
    background-color: rgba(74, 108, 247, 0.1);
    border-radius: 12px;
    padding: 1rem 1.5rem;
    font-size: calc(14px + 0.5vh);
    margin-bottom: 2rem;
    max-width: 600px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: #4a5568;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const StyledInput = styled.input`
    padding: 1rem 1.5rem;
    margin: 1rem 0 2rem;
    width: 300px;
    background-color: white;
    border: 1px solid rgba(74, 108, 247, 0.3);
    border-radius: 15px;
    color: #2d3748;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: #4a6cf7;
        box-shadow: 0 0 0 3px rgba(74, 108, 247, 0.2);
    }

    &::placeholder {
        color: #a0aec0;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    background: linear-gradient(to right, #4a6cf7, #6a98f0);
    padding: 0.8rem 2rem;
    border-radius: 30px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 10px rgba(74, 108, 247, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 7px 14px rgba(74, 108, 247, 0.4);
    }

    &:active {
        transform: translateY(1px);
    }
`;

export default function Home() {
    const [city, setCity] = useState("");

    return (
        <StyledDiv>
            <StyledTitle>Find the Weather in any City!</StyledTitle>
            <StyledText>Enter a city name below to get the current weather forecast</StyledText>
            <StyledInput
                type="text"
                value={city}
                placeholder="E.g., London, New York, Tokyo"
                onChange={(e) => setCity(e.target.value)}
            />
            <StyledLink href={`/${city}`}>Get Weather</StyledLink>
        </StyledDiv>
    );
}