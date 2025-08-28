export default function OtherAttraction({ attractions }) {
    return (
        <div className="card">
            <h2>Другие памятки</h2>
            <ul>
                {attractions.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/%D0%9A%D0%B8%D1%94%D0%B2%D0%BE-%D0%9F%D0%B5%D1%87%D0%B5%D1%80%D1%81%D1%8C%D0%BA%D0%B0_%D0%BB%D0%B0%D0%B2%D1%80%D0%B0%2C_%D0%B2%D0%B8%D0%B4_%D0%B7_%D0%BC%D0%BE%D1%81%D1%82%D1%83_%D0%9F%D0%B0%D1%82%D0%BE%D0%BD%D0%B0.jpg/500px-%D0%9A%D0%B8%D1%94%D0%B2%D0%BE-%D0%9F%D0%B5%D1%87%D0%B5%D1%80%D1%81%D1%8C%D0%BA%D0%B0_%D0%BB%D0%B0%D0%B2%D1%80%D0%B0%2C_%D0%B2%D0%B8%D0%B4_%D0%B7_%D0%BC%D0%BE%D1%81%D1%82%D1%83_%D0%9F%D0%B0%D1%82%D0%BE%D0%BD%D0%B0.jpg" alt="Киево-Печерская лавра" />
            <img src="https://pohcdn.com/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Sophia-Cathedral_0.jpg" alt="Софийский собор" />
            <img src="https://pohcdn.com/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Maidan_1.jpg" alt="Площадь Независимости" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tXVy1cy4ZUfzVG6wlr6yLZEm5Hik8x2m3A&s" alt="Золотые ворота" />
        </div>
    );
}