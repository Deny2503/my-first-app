import { useEffect, useState } from "react";
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

    Object.keys(grouped).forEach((day) => {
        grouped[day] = grouped[day]
            .filter((d) => parseInt(d.time.split(":")[0]) % 3 === 0)
            .sort((a, b) => a.time.localeCompare(b.time));
    });

    const days = Object.keys(grouped);
    const currentDay = selectedDay || days[0];
    const currentData = grouped[currentDay];

    const sections = {
        "Ночь": currentData.filter((d) => +d.time.split(":")[0] >= 0 && +d.time.split(":")[0] < 6),
        "Утро": currentData.filter((d) => +d.time.split(":")[0] >= 6 && +d.time.split(":")[0] < 12),
        "День": currentData.filter((d) => +d.time.split(":")[0] >= 12 && +d.time.split(":")[0] < 18),
        "Вечер": currentData.filter((d) => +d.time.split(":")[0] >= 18 && +d.time.split(":")[0] < 24),
    };

    return (
        <div className="weather-container">
            <h2>Прогноз погоды</h2>
            <h2>София</h2>

            <div className="day-selector">
                {days.map((day) => (
                    <button
                        key={day}
                        className={day === currentDay ? "active" : ""}
                        onClick={() => setSelectedDay(day)}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {Object.entries(sections).map(([label, data]) => (
                data.length > 0 && (
                    <div key={label} className="section">
                        <h3>{label}</h3>
                        <table className="weather-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    {data.map((d, i) => (
                                        <th key={i}>{d.time}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Температура</td>
                                    {data.map((d, i) => (
                                        <td key={i}>
                                            {d.temp}°C
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>Влажность</td>
                                    {data.map((d, i) => (
                                        <td key={i}>{d.humidity}%</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>Ветер</td>
                                    {data.map((d, i) => (
                                        <td key={i}>{d.wind} м/с</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            ))}
        </div>
    );
}
