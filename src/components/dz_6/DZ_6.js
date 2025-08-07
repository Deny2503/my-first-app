import BlogList from "./BlogList";
import { blogPosts } from "./blogData";
import MovieSchedule from "./MovieSchedule";
import { movies } from "./movieData";
import CountryInfo from "./CountryInfo";
import { countries } from "./cityData";

function DZ_6() {
    return (
        <div>
            <div>
                <h1 style={{ textAlign: "center", margin: "20px 0" }}>🎥 Розклад кінотеатру</h1>
                <MovieSchedule movies={movies} />
            </div>
            <hr />
            <div>
                <h1 style={{ textAlign: "center", margin: "20px 0" }}>📝 Блог</h1>
                <BlogList posts={blogPosts} />
            </div>
            <hr />
            <div>
                <h1 style={{ textAlign: "center", margin: "20px" }}>🌍 Міста країн Європи</h1>
                <CountryInfo data={countries} />
            </div>
            <hr />
        </div>
    )
}

export default DZ_6;
