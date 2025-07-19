import Clock from "./Clock.js"
import FavoriteMovie from "./FavoriteMovie";
import Pet from "./Pet";
import PersonalPage from "./PesronalPage";

function DZ_1() {
    return (
        <div style={{ maxWidth: 800, margin: "0 auto", fontFamily: "Arial" }}>
            <h1>Всі завдання</h1>
            <hr />
            <FavoriteMovie />
            <hr />
            <PersonalPage />
            <hr />
            <Clock />
            <hr />
            <Pet />
        </div>
    )
}

export default DZ_1;