import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlogList from "../components/dz_6/BlogList";
import { blogPosts } from "../components/dz_6/blogData";

describe("BlogList component", () => {
    test("рендерить усі пости", () => {
        render(<BlogList posts={blogPosts} />);
        blogPosts.forEach((post) => {
            expect(screen.getByText(post.title)).toBeInTheDocument();
        });
    });

    test("відображає дати у форматі uk-UA", () => {
        render(<BlogList posts={blogPosts} />);
        expect(screen.getByText(/01.08.2025/)).toBeInTheDocument();
        expect(screen.getByText(/15.07.2025/)).toBeInTheDocument();
        expect(screen.getByText(/30.06.2025/)).toBeInTheDocument();
    });

    test("відображає контент постів", () => {
        render(<BlogList posts={blogPosts} />);
        blogPosts.forEach((post) => {
            expect(screen.getByText(post.content)).toBeInTheDocument();
        });
    });

    test("відображає теги для кожного поста", () => {
        render(<BlogList posts={blogPosts} />);
        blogPosts.forEach((post) => {
            post.tags.forEach((tag) => {
                expect(screen.getByText(`#${tag}`)).toBeInTheDocument();
            });
        });
    });

    test("рендериться правильна кількість карток", () => {
        render(<BlogList posts={blogPosts} />);
        const titles = screen.getAllByRole("heading", { level: 2 });
        expect(titles).toHaveLength(blogPosts.length);
    });
});
