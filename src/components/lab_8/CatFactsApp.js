import { useState } from "react";
import "./style.css"

export default function CatFactsApp() {
    const [fact, setFact] = useState("");
    const [history, setHistory] = useState([]);
    const [bgColor, setBgColor] = useState("#ffffff");
    const [textColor, setTextColor] = useState("#000000");
    const [fontSize, setFontSize] = useState(16);

    const [yodaText, setYodaText] = useState("");
    const [yodaTranslated, setYodaTranslated] = useState("");
    const [yodaHistory, setYodaHistory] = useState([]);

    const fetchFact = async () => {
        if (fact) {
            setHistory([fact, ...history]);
        }
        try {
            const response = await fetch("https://catfact.ninja/fact");
            const data = await response.json();
            setFact(data.fact);
        } catch (error) {
            console.error("Ошибка при получении факта: ", error)
        }
    }

    const translateToYoda = async () => {
        if (!yodaText) return;

        if (yodaTranslated) {
            setYodaHistory([yodaTranslated, ...yodaHistory]);
        }

        try {
            const response = await fetch("https://api.funtranslations.com/translate/yoda.json", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `text=${encodeURIComponent(yodaText)}`
            });

            const data = await response.json();

            if (data.contents && data.contents.translated) {
                setYodaTranslated(data.contents.translated);
            } else if (data.error) {
                setYodaTranslated("Ошибка перевода: " + data.error.message);
            }
        } catch (error) {
            console.error("Ошибка при переводе: ", error);
            setYodaTranslated("Ошибка при переводе");
        }
    }

    const applyStyles = () => {
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
        document.body.style.fontSize = `${fontSize}px`;
    }

    return (
        <div className="app-container">
            <div className="fact-block">
                <h1>Факт про кота</h1>
                <p>{fact || "Нажмите кнопку, чтобы получить факт"}</p>
                <button onClick={fetchFact}>Получить новый факт</button>
            </div>

            <div className="settings-block">
                <h2>Настройки интерфейса</h2>

                <label>
                    Цвет фона:
                    <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
                </label>

                <label>
                    Цвет текста:
                    <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
                </label>

                <label>
                    Размер шрифта (px):
                    <input type="number" value={fontSize} onChange={(e) => setFontSize(e.target.value)} />
                </label>

                <button onClick={applyStyles}>Применить стили</button>
            </div>

            <div className="history-block">
                <h2>История фактов</h2>
                {history.length === 0 ? (
                    <p>Фактов еще нет</p>
                ) : (
                    <ul> {history.map((f, index) => (<p key={index}>{f}</p>))} </ul>
                )}
            </div>

            <div className="yoda-block">
                <h2>Переводчик на язык Йоды</h2>
                <textarea
                    placeholder="Введите текст для перевода"
                    value={yodaText}
                    onChange={(e) => setYodaText(e.target.value)}
                    rows={3}
                />
                <button onClick={translateToYoda}>Перевести</button>
                <p>{yodaTranslated}</p>
            </div>

            <div className="yoda-history-block">
                <h2>История переводов</h2>
                {yodaHistory.length === 0 ? (
                    <p>Переводов еще нет</p>
                ) : (
                    <ul>
                        {yodaHistory.map((t, index) => (<li key={index}>{t}</li>))}
                    </ul>
                )}
            </div>

        </div>
    )
}