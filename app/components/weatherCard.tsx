import styled from "styled-components";
import { Weather } from "@/app/interfaces/weather";


const getConditionEmoji = (condition: string = "") => {
    const cond = condition.toLowerCase();

    if (cond.includes("cloud")) return "☁️";
    if (cond.includes("rain")) return "🌧️";
    if (cond.includes("snow")) return "❄️";
    if (cond.includes("storm") || cond.includes("thunder")) return "⛈️";
    if (cond.includes("fog") || cond.includes("mist")) return "🌫️";
    if (cond.includes("wind")) return "💨";
    if (cond.includes("sun") || cond.includes("clear")) return "☀️";

    return "🌤️";
};

const WeatherCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  width: 85%;
  height: 85%;
  border-radius: 15px;
  text-align: center;
  background: linear-gradient(to bottom right, #4a6cf7, #6a98f0);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: white;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 750px) {
    padding: 1.25rem;
  }
`;

const CardDate = styled.h2`
  margin-top: 0;
  margin-bottom: 12px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
`;

const WeatherEmoji = styled.div`
  font-size: 2.5rem;
  margin: 0.5rem 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Conditions = styled.h3`
  margin: 8px 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
`;

const Description = styled.h4`
  margin: 8px 0 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.95rem;
  opacity: 0.9;
  font-style: italic;
`;

const Temperature = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 12px;
  border-radius: 12px;
  margin-top: auto;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  backdrop-filter: blur(5px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
`;

export default function WeatherCard(props: Weather) {
    const conditionEmoji = getConditionEmoji(props.conditions);

    return (
        <WeatherCardWrapper className="weather-card">
            <CardDate>{props.datetime}</CardDate>
            <WeatherEmoji>{conditionEmoji}</WeatherEmoji>
            <Conditions>{props.conditions}</Conditions>
            <Description>{props.description}</Description>
            <Temperature>{props.tempmin}° - {props.tempmax}°</Temperature>
        </WeatherCardWrapper>
    );
}