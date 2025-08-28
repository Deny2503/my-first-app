import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryInfo from "../components/dz_6/CountryInfo";
import { countries } from "../components/dz_6/cityData";

describe("CountryInfo component", () => {
    test("рендерить усі країни", () => {
        render(<CountryInfo data={countries} />);
        countries.forEach((country) => {
            expect(screen.getByText(country.name)).toBeInTheDocument();
        });
    });

    test("рендерить усі міста кожної країни", () => {
        render(<CountryInfo data={countries} />);
        countries.forEach((country) => {
            country.cities.forEach((city) => {
                expect(screen.getByText(city.name)).toBeInTheDocument();
            });
        });
    });

    test("відображає описи міст", () => {
        render(<CountryInfo data={countries} />);
        countries.forEach((country) => {
            country.cities.forEach((city) => {
                expect(screen.getByText(city.description)).toBeInTheDocument();
            });
        });
    });

    test("правильно відображає населення та площу міст", () => {
        render(<CountryInfo data={countries} />);

        countries.forEach((country) => {
            country.cities.forEach((city) => {
                const popElement = screen.getByText((content, element) => {
                    return element.tagName.toLowerCase() === "p" && element.textContent.includes(city.population.toLocaleString());
                });
                expect(popElement).toBeInTheDocument();

                const areaElement = screen.getByText((content, element) => {
                    return element.tagName.toLowerCase() === "p" && element.textContent.includes(`${city.area} км²`);
                });
                expect(areaElement).toBeInTheDocument();
            });
        });
    });


    test("усі міста мають герби (img з правильним alt)", () => {
        render(<CountryInfo data={countries} />);
        countries.forEach((country) => {
            country.cities.forEach((city) => {
                const emblem = screen.getByAltText(`Герб ${city.name}`);
                expect(emblem).toBeInTheDocument();
                expect(emblem).toHaveAttribute("src", city.coatOfArms);
            });
        });
    });

    test("рендериться правильна кількість карток країн", () => {
        render(<CountryInfo data={countries} />);
        const countryTitles = screen.getAllByRole("heading", { level: 2 });
        expect(countryTitles).toHaveLength(countries.length);
    });

    test("рендериться правильна кількість карток міст", () => {
        render(<CountryInfo data={countries} />);
        const cityTitles = screen.getAllByRole("heading", { level: 3 });
        const totalCities = countries.reduce((acc, c) => acc + c.cities.length, 0);
        expect(cityTitles).toHaveLength(totalCities);
    });
});