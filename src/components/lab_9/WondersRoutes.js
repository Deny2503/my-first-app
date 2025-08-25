import { Routes, Route, Link } from "react-router-dom";
import "./wonders.css";

function WondersHome() {
    return (
        <div className="wonders-container">
            <h2>🏛 Сім чудес Стародавнього світу</h2>
            <p> Давні греки виділяли найвидатніші споруди античності — «чудеса світу». Вони були символами величі, краси та людської майстерності. </p>
            <ul>
                <li><Link to="pyramid">🗿 Піраміда Хеопса</Link> </li>
                <li><Link to="zeus">⚡ Статуя Зевса</Link> </li>
                <li><Link to="artemis">🏛 Храм Артеміди</Link> </li>
                <li><Link to="mausoleum">⚰️ Мавзолей у Галікарнасі</Link> </li>
                <li><Link to="colossus">🗽 Колос Родоський</Link> </li>
                <li><Link to="lighthouse">🌊 Олександрійський маяк</Link> </li>
                <li><Link to="gardens">🌿 Висячі сади Семіраміди</Link> </li>
            </ul>
        </div>
    );
}

function Pyramid() {
    return (
        <Content
            title="Піраміда Хеопса"
            text="Єдине чудо світу, яке збереглося до наших днів. Побудована у Єгипті близько 2560 р. до н.е. для фараона Хеопса."
            image="https://cdn.tripster.ru/photos/12d866a3-fdd5-4b7b-9c50-0ce3481d01ef.jpg"
        />
    );
}

function Zeus() {
    return (
        <Content
            title="Статуя Зевса"
            text="Величезна статуя верховного бога Зевса, створена скульптором Фідієм у храмі в Олімпії близько 435 р. до н.е."
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Le_Jupiter_Olympien_ou_l%27art_de_la_sculpture_antique.jpg/500px-Le_Jupiter_Olympien_ou_l%27art_de_la_sculpture_antique.jpg"
        />
    );
}

function Artemis() {
    return (
        <Content
            title="Храм Артеміди"
            text="Грандіозний храм в місті Ефес, присвячений богині Артеміді. Вважався одним із найбільших та найгарніших храмів античності."
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Temple_of_Artemis.jpg/500px-Temple_of_Artemis.jpg"
        />
    );
}

function Mausoleum() {
    return (
        <Content
            title="Мавзолей у Галікарнасі"
            text="Гробниця царя Мавсола, споруджена його дружиною Артемісією. Звідси походить слово «мавзолей»."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuc0hulaQ3zAem1nszmrACTkaAQn-zwGeTA&s"
        />
    );
}

function Colossus() {
    return (
        <Content
            title="Колос Родоський"
            text="Величезна бронзова статуя бога Сонця Геліоса заввишки понад 30 метрів, яка стояла в гавані острова Родос."
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Colosse_de_Rhodes_%28Barclay%29.jpg/330px-Colosse_de_Rhodes_%28Barclay%29.jpg"
        />
    );
}

function Lighthouse() {
    return (
        <Content
            title="Олександрійський маяк"
            text="Маяк на острові Фарос біля Олександрії. Висота споруди сягала понад 100 метрів, він був одним із найвищих будівель стародавнього світу."
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lighthouse_-_Thiersch.png/500px-Lighthouse_-_Thiersch.png"
        />
    );
}

function Gardens() {
    return (
        <Content
            title="Висячі сади Семіраміди"
            text="Легендарні сади у Вавилоні, створені за наказом царя Навуходоносора II для його дружини. Вважаються символом любові та величі."
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hanging_Gardens_of_Babylon.jpg/500px-Hanging_Gardens_of_Babylon.jpg"
        />
    );
}

function Content({ title, text, image }) {
    return (
        <div className="wonders-page">
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="image-container">
                <img src={image} alt={title} />
            </div>
        </div>
    );
}

export default function WondersRoutes() {
    return (
        <Routes>
            <Route path="/" element={<WondersHome />} />
            <Route path="pyramid" element={<Pyramid />} />
            <Route path="zeus" element={<Zeus />} />
            <Route path="artemis" element={<Artemis />} />
            <Route path="mausoleum" element={<Mausoleum />} />
            <Route path="colossus" element={<Colossus />} />
            <Route path="lighthouse" element={<Lighthouse />} />
            <Route path="gardens" element={<Gardens />} />
        </Routes>
    );
}
