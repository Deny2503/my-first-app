import { Routes, Route, Link } from "react-router-dom";
import "./artist.css";

function ArtistHome() {
    return (
        <div className="artist-container">
            <h2>🎨 Леонардо да Вінчі</h2>
            <p> Леонардо да Вінчі — італійський митець, винахідник, науковець та інженер, якого вважають одним із найвидатніших геніїв епохи Відродження. </p>
            <ul>
                <li><Link to="biography">📖 Біографія</Link></li>
                <li><Link to="famous">🖼 Відома картина</Link></li>
                <li><Link to="gallery">🏛 Зібрання картин</Link></li>
            </ul>
        </div>
    );
}

function Biography() {
    return (
        <div className="artist-page">
            <h3>📖 Біографія Леонардо да Вінчі</h3>
            <p>
                Леонардо народився 15 квітня 1452 року у містечку Вінчі біля Флоренції.
                Його життя та творчість назавжди змінили мистецтво і науку.
            </p>
            <div className="placeholder center-image">
                <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgAgPpQ3XkIvdohs4895lMgXWc2otUhvFp07duEkuDxrPzZ84uos0qsCyF1PnCS6MY6D7glQrO_smPV5zb9ip5gA"
                    alt="Портрет Леонардо да Вінчі"
                />
            </div>
        </div>
    );
}

function FamousPainting() {
    return (
        <div className="artist-page">
            <h3>🖼 Відома картина: «Мона Ліза»</h3>
            <p>
                «Мона Ліза» — найзагадковіший портрет у світі, написаний Леонардо близько 1503–1506 рр.
                Її посмішка і сьогодні інтригує мільйони людей.
            </p>
            <div className="placeholder center-image">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/250px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                    alt="Мона Ліза"
                />
            </div>
        </div>
    );
}


function Gallery() {
    return (
        <div className="artist-page">
            <h3>🏛 Зібрання картин Леонардо</h3>
            <p>Найвідоміші роботи митця:</p>

            <div className="gallery">
                <figure>
                    <img
                        src="https://karpaty.shop/sites/default/files/products/21/zamovyty_reprodukciyu_fresky_leonardo_da_vinchi_tayemna_vecherya.jpg"
                        alt="Таємна вечеря"
                    />
                    <figcaption>«Таємна вечеря»</figcaption>
                </figure>

                <figure>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Virgin_of_the_Rocks_%28Louvre%29.jpg"
                        alt="Діва в скелях"
                    />
                    <figcaption>«Діва в скелях»</figcaption>
                </figure>

                <figure>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Leonardo_da_Vinci_attributed_-_Madonna_Litta.jpg/1200px-Leonardo_da_Vinci_attributed_-_Madonna_Litta.jpg"
                        alt="Мадонна Літта"
                    />
                    <figcaption>«Мадонна Літта»</figcaption>
                </figure>

                <figure>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Leonardo_da_Vinci_-_Saint_John_the_Baptist_C2RMF_retouched.jpg/500px-Leonardo_da_Vinci_-_Saint_John_the_Baptist_C2RMF_retouched.jpg"
                        alt="Святий Іоанн Хреститель"
                    />
                    <figcaption>«Святий Іоанн Хреститель»</figcaption>
                </figure>
            </div>
        </div>
    );
}


export default function ArtistRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ArtistHome />} />
            <Route path="biography" element={<Biography />} />
            <Route path="famous" element={<FamousPainting />} />
            <Route path="gallery" element={<Gallery />} />
        </Routes>
    );
}
