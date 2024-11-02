import styled from "styled-components";
import {Weather} from "@/app/interfaces/weather";

const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 3px solid deepskyblue;
    margin: 1% auto;
    width: 200px;
    border-radius: 10px;

    text-align: center;

    background-color: #b9c6ff;
    
    @media screen and (max-width: 750px){
        width: 165px;

    }
    
    p {
        font-family: monospace, "Arial Black", Arial, sans-serif;
        border: 1px solid mediumpurple;
        border-radius: 10px;
        text-align: center;
    }
    h2{
        margin-top: 0;
        padding: 0;
        margin-bottom: 3%;
        border: 2px dashed black;
        border-radius: 10px;
        color: steelblue;
        font-family: "Arial Black", Arial, sans-serif;
    }
    
    h3, h4 {
        padding: 0;
        color: rebeccapurple;
    }
`

export default function WeatherCard(props:Weather){
    return (
        <WeatherCardWrapper className="weather-card">
            <h2>{props.datetime}</h2>
            <h3>{props.conditions}</h3>
            <h4>{props.description}</h4>
            <p>{props.tempmin}° - {props.tempmax}°</p>
        </WeatherCardWrapper>
    )
}