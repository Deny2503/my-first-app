import { useEffect, useState, } from "react";
import "./style.css";

export default function WeatherForecast() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);

    useEffect(() => {
        const ctrl = new AbortController();
        const fetchWeather = async () => {
            try {
                setLoading(true);
                const res = await fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=42.6977&longitude=23.3219&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m",
                    { signal: ctrl.signal }
                );
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setWeather(data);
            } catch (err) {
                if (err.name !== "AbortError") setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchWeather();
        return () => ctrl.abort();
    }, []);

    if (loading) return <p className="loading">Загрузка...</p>;
    if (error) return <p className="error">{error}</p>;
    if (!weather || !weather.hourly) return <p className="error">Нет данных</p>;

    const grouped = {};
    weather.hourly.time.forEach((time, index) => {
        const [date, hour] = time.split("T");
        if (!grouped[date]) grouped[date] = [];
        grouped[date].push({
            time: hour,
            temp: weather.hourly.temperature_2m[index],
            humidity: weather.hourly.relative_humidity_2m[index],
            wind: weather.hourly.wind_speed_10m[index],
        });
    });

    const days = Object.keys(grouped);
    const currentDay = selectedDay || days[0];
    const currentData = grouped[currentDay];

    const getWeekDay = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("ru-UA", { weekday: "long" });
    };

    function getWeatherEmoji(temp, hour) {
        if (temp >= 25) return "☀️"; 
        if (temp >= 15 && temp < 25) return "🌤️";
        if (temp >= 5 && temp < 15) return "☁️";
        return "🌧️";
    }

    const minTemp = Math.min(...currentData.map((d) => d.temp));
    const maxTemp = Math.max(...currentData.map((d) => d.temp));

    const getTempClass = (temp) => {
        if (temp <= 0) return "temp-cold";
        if (temp <= 15) return "temp-cool";
        if (temp <= 25) return "temp-warm";
        return "temp-hot";
    };

    return (
        <div className=".weather-table-wrapper">
            <div className="weather-container">
                <h2>Прогноз погоды — София</h2>

                <div className="day-selector">
                    {days.map((day) => {
                        const dayData = grouped[day];
                        const min = Math.min(...dayData.map((d) => d.temp));
                        const max = Math.max(...dayData.map((d) => d.temp));
                        return (
                            <div
                                key={day}
                                className={`day-card ${day === currentDay ? "active" : ""}`}
                                onClick={() => setSelectedDay(day)}
                            >
                                <div className="day-name">{getWeekDay(day)}</div>
                                <div className="day-date">{day}</div>
                                <div className="day-temp">
                                    {min}°C / {max}°C
                                </div>
                            </div>
                        );
                    })}
                </div>

                <table className="weather-table">
                    <thead>
                        <tr>
                            <th>Время</th>
                            {currentData.map((d, i) => (
                                <th key={i}>{d.time}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Температура</td>
                            {currentData.map((d, i) => (
                                <td key={i} className={getTempClass(d.temp)}>
                                    {d.temp}°C
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td>Погода</td>
                            {currentData.map((d, i) => (
                                <td key={i}>{getWeatherEmoji(d.temp, d.time)}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Влажность</td>
                            {currentData.map((d, i) => (
                                <td key={i}>{d.humidity}%</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Ветер</td>
                            {currentData.map((d, i) => (
                                <td key={i}>{d.wind} м/с</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
                <p>
                    Минимальная температура: {minTemp}°C, Максимальная температура: {maxTemp}°C
                </p>
            </div>
        </div>
    );
}