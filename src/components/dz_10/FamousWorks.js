export default function FamousWorks({ works }) {
    return (
        <div className="card">
            <h2>Известные произведения</h2>
            <ul>
                {works.map((w, i) => <li key={i}>{w}</li>)}
            </ul>
            <img src="https://cdn.litres.ru/pub/c/cover/25101675.jpg" alt="Гамлет" />
            <img src="https://img.labirint.ru/images/comments_pic/1809/0_cf9a7c2d4eb6378717c2cd3bd5d43895_1519832701.jpg" alt="Отелло" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJXOu9i3XghCX2rzEvP9meWlG-6ih1d9dU6w&s" alt="Ромео и Джульетта" />
            <img src="https://www.book.store.bg/dcrimg/3059/makbet.jpg" alt="Макбет" />
        </div>
    );
}