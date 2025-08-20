export default function BookSearch({ search, setSearch }) {
    return (
        <div className="search">
            <h3>Пошук</h3>
            <input placeholder="Назва" value={search.title} onChange={(e) => setSearch({ ...search, title: e.target.value })} />
            <input placeholder="Автор" value={search.author} onChange={(e) => setSearch({ ...search, author: e.target.value })} />
            <input placeholder="Жанр" value={search.genre} onChange={(e) => setSearch({ ...search, genre: e.target.value })} />
            <input placeholder="Сторінки" value={search.pages} onChange={(e) => setSearch({ ...search, pages: e.target.value })} />
        </div>
    );
}