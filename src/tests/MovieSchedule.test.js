import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieSchedule from "../components/dz_6/MovieSchedule";
import { movies } from "../components/dz_6/movieData";

describe("MovieSchedule component", () => {
    test("рендерить усі фільми з розкладу", () => {
        render(<MovieSchedule movies={movies} />);
        movies.forEach((movie) => {
            expect(screen.getByText(movie.title)).toBeInTheDocument();
        });
    });

    test("відображає постери фільмів", () => {
        render(<MovieSchedule movies={movies} />);
        const posters = screen.getAllByRole("img");
        expect(posters).toHaveLength(movies.length);

        posters.forEach((poster, index) => {
            expect(poster).toHaveAttribute("src", movies[index].poster);
            expect(poster).toHaveAttribute("alt", movies[index].title);
        });
    });

    test("відображає описи кожного фільму", () => {
        render(<MovieSchedule movies={movies} />);
        movies.forEach((movie) => {
            expect(screen.getByText(movie.description)).toBeInTheDocument();
        });
    });

    test("правильно відображає сеанси для кожного фільму", () => {
        render(<MovieSchedule movies={movies} />);
        movies.forEach((movie) => {
            movie.sessions.forEach((session) => {
                expect(screen.getByText(session)).toBeInTheDocument();
            });
        });
    });

    test("рендериться правильна кількість карток фільмів", () => {
        render(<MovieSchedule movies={movies} />);
        const titles = screen.getAllByRole("heading", { level: 2 });
        expect(titles).toHaveLength(movies.length);
    });
});
