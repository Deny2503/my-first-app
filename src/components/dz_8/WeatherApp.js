import React, { useState, useEffect } from "react";
import "./style.css";

const API_KEY = "3ceb044d1b0e6c1a1b88ceb51d8f5f66";

export default function WeatherApp() {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [theme, setTheme] = useState("light");

    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem("settings");
        return saved
            ? JSON.parse(saved)
            : { color: "#000000", bg: "#ffffff", favoriteCity: "", autoTheme: true };
    });

    useEffect(() => {
        localStorage.setItem("settings", JSON.stringify(settings));
    }, [settings]);

    useEffect(() => {
        const root = document.documentElement;
        if (settings.autoTheme) {
            root.style.removeProperty("--app-bg");
            root.style.removeProperty("--app-color");
        } else {
            root.style.setProperty("--app-bg", settings.bg);
            root.style.setProperty("--app-color", settings.color);
        }
    }, [settings]);

    useEffect(() => {
        if (settings.favoriteCity && !city) setCity(settings.favoriteCity);
    }, []);

    const getWeather = async () => {
        if (!city.trim()) return;
        try {
            setError("");
            const query = country.trim() ? `${city.trim()},${country.trim()}` : city.trim();
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
                    query
                )}&appid=${API_KEY}&units=metric&lang=ua`
            );
            if (!response.ok) throw new Error("Місто не знайдено");
            const data = await response.json();
            setWeather(data);

            const now = Math.floor(Date.now() / 1000);
            setTheme(now > data.sys.sunrise && now < data.sys.sunset ? "light" : "dark");
        } catch (err) {
            setError(err.message || "Помилка запиту");
        }
    };

    useEffect(() => {
        if (!weather || !settings.autoTheme) return;
        const update = () => {
            const now = Math.floor(Date.now() / 1000);
            setTheme(now > weather.sys.sunrise && now < weather.sys.sunset ? "light" : "dark");
        };
        update();
        const id = setInterval(update, 60 * 1000);
        return () => clearInterval(id);
    }, [weather, settings.autoTheme]);

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString();
    };

    const isDaytime = () => {
        if (!weather) return true;
        const now = Math.floor(Date.now() / 1000);
        return now > weather.sys.sunrise && now < weather.sys.sunset;
    };

    const appClass = `app ${settings.autoTheme ? (theme === "light" ? "app--light" : "app--dark") : "app--custom"
        }`;

    return (
        <div className={appClass}>
            <div className="container">
                <h1 className="title">Прогноз погоды</h1>

                <div className="search">
                    <input className="input" type="text" placeholder="Город (напр. Kyiv)" value={city} onChange={(e) => setCity(e.target.value)} />
                    <input className="input input--country" type="text" placeholder="Код страны (UA, US, FR...)" value={country} onChange={(e) => setCountry(e.target.value)} />
                    <button onClick={getWeather} className="btn">
                        Найти
                    </button>
                </div>

                {error && <p className="error">{error}</p>}

                {weather && (
                    <div className="card">
                        <h2 className="card__title">
                            {weather.name}, {weather.sys.country}
                        </h2>
                        <p className="card__row">Температура: {weather.main.temp} °C</p>
                        <p className="card__row">Ощущается как: {weather.main.feels_like} °C</p>
                        <p className="card__row">Погода: {weather.weather[0].description}</p>
                        <p className="card__row">Восход: {formatTime(weather.sys.sunrise)}</p>
                        <p className="card__row">Закат: {formatTime(weather.sys.sunset)}</p>
                        <div className="icon">{isDaytime() ? "☀️" : "🌙"}</div>
                    </div>
                )}

                <div className="settings">
                    <h3 className="settings__title">Настройки пользователя</h3>

                    <label className="settings__check">
                        <input type="checkbox" checked={settings.autoTheme} onChange={(e) => setSettings((s) => ({ ...s, autoTheme: e.target.checked }))} />
                        <span>Авто-тема по времени суток</span>
                    </label>

                    {!settings.autoTheme && (
                        <div className="settings__grid">
                            <label className="settings__field">
                                <span>Цвет текста</span>
                                <input type="color" value={settings.color} onChange={(e) => setSettings((s) => ({ ...s, color: e.target.value }))} />
                            </label>
                            <label className="settings__field">
                                <span>Цвет фона</span>
                                <input type="color" value={settings.bg} onChange={(e) => setSettings((s) => ({ ...s, bg: e.target.value }))} />
                            </label>
                        </div>
                    )}

                    <div className="settings__actions">
                        <input className="input" type="text" placeholder="Любимый город" value={settings.favoriteCity} onChange={(e) => setSettings((s) => ({ ...s, favoriteCity: e.target.value }))} />
                        <button className="btn" onClick={() => settings.favoriteCity && setCity(settings.favoriteCity)}>
                            Подставить любимый
                        </button>
                        <button className="btn" onClick={() => city && setSettings((s) => ({ ...s, favoriteCity: city }))}>
                            Сделать текущий любимым
                        </button>
                        <button className="btn" onClick={getWeather}>
                            Показать погоду
                        </button>
                    </div>
                </div>

                <div className="hint">
                    Подсказка: укажите и код страны (например, "Paris, FR"), чтобы отличать города с одинаковым именем.
                </div>
            </div>
        </div>
    );
}
