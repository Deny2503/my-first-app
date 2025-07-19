import React, { useState, useEffect } from "react";

function getTimeOfDay(hour) {
    if (hour >= 6 && hour < 12) return "morning";
    if (hour >= 12 && hour < 18) return "day";
    return "evening";
}

const defaultBackgrounds = {
    morning: "#FFF8B7",
    day: "#CDEBFF",
    evening: "#111111",
};

const fontList = [
    "Arial", "Times New Roman", "Roboto", "Montserrat", "Verdana", "Georgia", "Comic Sans MS"
];

function ClockDate({
    showDate: initialShowDate = true,
    backgrounds: initialBackgrounds = defaultBackgrounds,
    fontFamily: initialFontFamily = "Arial",
    fontSize: initialFontSize = "2rem",
    fontColor: initialFontColor = "#333"
}) {
    const [time, setTime] = useState(new Date());
    const [backgrounds, setBackgrounds] = useState(initialBackgrounds);
    const [showDate, setShowDate] = useState(initialShowDate);
    const [fontFamily, setFontFamily] = useState(initialFontFamily);
    const [fontSize, setFontSize] = useState(initialFontSize);
    const [fontColor, setFontColor] = useState(initialFontColor);

    useEffect(() => {
        const t = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(t);
    }, []);

    const partOfDay = getTimeOfDay(time.getHours());
    const bgColor = backgrounds[partOfDay] || defaultBackgrounds[partOfDay];

    const clockStyle = {
        background: bgColor,
        color: fontColor,
        fontFamily,
        fontSize,
        borderRadius: "1rem",
        padding: "2rem",
        width: "fit-content",
        margin: "2rem auto",
        boxShadow: "0 6px 32px rgba(0,0,0,0.14)",
        textAlign: "center",
        transition: "background 0.3s",
    };

    const handleBgChange = (key, value) => {
        setBackgrounds((prev) => ({
            ...prev,
            [key]: value.trim() === "" ? defaultBackgrounds[key] : value
        }));
    };

    return (
        <div>
            <div style={clockStyle}>
                <div>
                    {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                </div>
                <div>
                    {showDate && (
                        <div style={{ fontSize: "1.1rem", opacity: 0.7, marginTop: 8 }}>
                            {time.toLocaleDateString()}
                        </div>
                    )}
                    <div style={{ marginTop: 10, fontSize: "1rem", opacity: 0.6 }}>
                        {
                            partOfDay === "morning" ? "Утро" :
                                partOfDay === "day" ? "День" : "Вечер / Ночь"
                        }
                    </div>
                    <div style={{
                        margin: "0 auto", padding: "1.5rem 2rem", borderRadius: "1rem",
                        maxWidth: 400, background: "#f6f7fa", boxShadow: "0 2px 12px #0001",
                    }}>
                        <h3 style={{ marginBottom: 8 }}>Настройки:</h3>
                        <div style={{ marginBottom: 10 }}>
                            <div style={{ fontWeight: 600 }}>Цвет фона:</div>
                            <label>
                                Утро:{" "}
                                <input type="color" value={backgrounds.morning}
                                    onChange={e => handleBgChange("morning", e.target.value)}
                                    style={{ marginRight: 10 }}>
                                </input>
                            </label>
                            <label>
                                День:{" "}
                                <input type="color" value={backgrounds.day}
                                    onChange={e => handleBgChange("day", e.target.value)}
                                    style={{ marginRight: 10 }}>
                                </input>
                            </label>
                            <label>
                                Вечер:{" "}
                                <input type="color" value={backgrounds.evening}
                                    onChange={e => handleBgChange("evening", e.target.value)}>
                                </input>
                            </label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                            <div style={{ fontWeight: 600 }}>Шрифт</div>
                            <select value={fontFamily} onChange={e => setFontFamily(e.target.value)}
                                style={{ padding: "0.2em", marginRight: 8 }}>
                                {fontList.map(f => (
                                    <option value={f} key={f}>{f}</option>
                                ))}
                            </select>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                            <div style={{ fontWeight: 600 }}>Размер Шрифта</div>
                            <input type="range" min={16} max={54} value={parseInt(fontSize)}
                                onChange={e => setFontSize(`${e.target.value}px`)}>
                            </input>
                            {parseInt(fontSize)} px
                        </div>
                        <div style={{ marginBottom: 12 }}>
                            <div style={{ fontWeight: 600 }}>Цвет шрифта</div>
                            <input type="color" value={fontColor}
                                onChange={e => setFontColor(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <div style={{ fontWeight: 600 }}>Показывать дату?</div>
                            <label>
                                <input type="radio" name="showDate" checked={showDate === true}
                                    onChange={() => setShowDate(true)}
                                    style={{ marginRight: 5 }}>
                                </input> Да
                            </label>
                            <label style={{ marginLeft: 16 }}>
                                <input type="radio" name="showDate" checked={showDate === false}
                                    onChange={() => setShowDate(false)}
                                    style={{ marginRight: 5 }}>
                                </input> Нет
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClockDate;