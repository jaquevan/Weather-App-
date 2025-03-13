"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "@/app/components/weatherCard";
import styled from "styled-components";
import { Weather } from "@/app/interfaces/weather";
import Link from "next/link";

const WeatherContentWrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    padding: 2rem 0;
    background: linear-gradient(135deg, #f5f7fa 0%, #e0e6ed 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    position: relative;
    margin-bottom: 2.5rem;
`;

const BackLink = styled(Link)`
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #4a6cf7;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
        color: #2a4cd7;
        transform: translateX(-3px);
    }

    @media screen and (max-width: 750px) {
        position: static;
        margin-bottom: 1rem;
    }
`;

const CityName = styled.h1`
    color: #4a6cf7;
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin: 0;

    &::first-letter {
        text-transform: uppercase;
    }

    @media screen and (max-width: 750px) {
        font-size: 2rem;
    }
`;

const WeatherIcon = styled.div`
    font-size: 2.2rem;
    margin: 0 0.8rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const WeatherCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 2rem;
    width: 90%;
    max-width: 1200px;
    padding: 2rem;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 750px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        padding: 1.5rem;
        gap: 1.5rem;
    }
`;

const LoadingOrError = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 90%;
    max-width: 600px;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    color: #4a5568;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;


function getWeatherIcon(days: Weather[] | undefined): string {
    if (!days || days.length === 0) return "🌤️";

    const conditions = days[0].conditions?.toLowerCase() || "";

    if (conditions.includes("cloud")) return "☁️";
    if (conditions.includes("rain")) return "🌧️";
    if (conditions.includes("snow")) return "❄️";
    if (conditions.includes("storm") || conditions.includes("thunder")) return "⛈️";
    if (conditions.includes("fog") || conditions.includes("mist")) return "🌫️";
    if (conditions.includes("wind")) return "💨";
    if (conditions.includes("sun") || conditions.includes("clear")) return "☀️";

    return "🌤️";
}

export default function CityPage() {
    const params = useParams();
    const city = params.city as string;

    const { data, error } = useSWR(`/api/getWeatherData?city=${city}`, (url) =>
        fetch(url).then((res) => res.json())
    );

    const weatherIcon = getWeatherIcon(data?.days);
    const days = data?.days || [];

    return (
        <WeatherContentWrapper>
            <HeaderContainer>
                <BackLink href="/">
                    ← Back to search
                </BackLink>
                <WeatherIcon>{weatherIcon}</WeatherIcon>
                <CityName>{city}</CityName>
            </HeaderContainer>

            {error ? (
                <LoadingOrError>Failed to load weather data. Please try again.</LoadingOrError>
            ) : !data ? (
                <LoadingOrError>Loading weather forecast...</LoadingOrError>
            ) : (
                <WeatherCardsContainer>
                    {days.map((weather: Weather, i: number) => (
                        <WeatherCard
                            key={i}
                            datetime={weather.datetime}
                            conditions={weather.conditions}
                            description={weather.description}
                            tempmin={weather.tempmin}
                            tempmax={weather.tempmax}
                        />
                    ))}
                </WeatherCardsContainer>
            )}
        </WeatherContentWrapper>
    );
}