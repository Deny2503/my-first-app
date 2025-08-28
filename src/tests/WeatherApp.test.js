import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherApp from "../components/dz_8/WeatherApp";

global.fetch = jest.fn();

const mockWeatherData = {
    name: "Kyiv",
    sys: {
        country: "UA",
        sunrise: Math.floor(Date.now() / 1000) - 3600,
        sunset: Math.floor(Date.now() / 1000) + 3600,
    },
    main: {
        temp: 15,
        feels_like: 13,
    },
    weather: [{ description: "ясно" }],
};

describe("WeatherApp component", () => {
    beforeEach(() => {
        fetch.mockClear();
        localStorage.clear();
    });

    test("рендериться заголовок", () => {
        render(<WeatherApp />);
        expect(screen.getByText(/Прогноз погоды/i)).toBeInTheDocument();
    });

    test("відображає помилку, якщо fetch повертає 404", async () => {
        fetch.mockResolvedValueOnce({ ok: false });
        render(<WeatherApp />);

        fireEvent.change(screen.getByPlaceholderText("Город (напр. Kyiv)"), {
            target: { value: "UnknownCity" },
        });
        fireEvent.click(screen.getByText(/Найти/i));

        await waitFor(() => {
            expect(screen.getByText(/Місто не знайдено/i)).toBeInTheDocument();
        });
    });

    test("відображає погоду після успішного запиту", async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockWeatherData,
        });

        render(<WeatherApp />);
        fireEvent.change(screen.getByPlaceholderText("Город (напр. Kyiv)"), {
            target: { value: "Kyiv" },
        });
        fireEvent.click(screen.getByText(/Найти/i));

        expect(await screen.findByText(/Kyiv, UA/i)).toBeInTheDocument();
        expect(await screen.findByText(/Температура: 15 °C/i)).toBeInTheDocument();
        expect(await screen.findByText(/Погода: ясно/i)).toBeInTheDocument();
    });

    test("можна встановити улюблений город", () => {
        render(<WeatherApp />);
        const favInput = screen.getByPlaceholderText("Любимый город");

        fireEvent.change(favInput, { target: { value: "Lviv" } });
        fireEvent.click(screen.getByText(/Подставить любимый/i));

        const cityInput = screen.getByPlaceholderText("Город (напр. Kyiv)");
        expect(cityInput).toHaveValue("Lviv");
    });

    test("перемикач авто-теми працює", () => {
        render(<WeatherApp />);
        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).toBeChecked();
        fireEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
    });
});
