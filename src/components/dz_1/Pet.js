
function Pet() {
    const pet = {
        name: "Барни",
        type: "Собака",
        age: 3,
        breed: "Мальтипу",
        photo: "https://cdn.lifehacker.ru/wp-content/uploads/2025/01/2559674063_1737984425.jpg",
        description: "Игривый и добрый"
    }

    return (
        <section>
            <h2>Task 4</h2>
            <img src={pet.photo} alt={pet.name} style={{ width: 140, borderRadius: 12 }} />
            <ul>
                <li><b>Имя: </b> {pet.name}</li>
                <li><b>Вид: </b> {pet.type}</li>
                <li><b>Сколько лет: </b> {pet.age}</li>
                <li><b>Порода: </b> {pet.breed}</li>
                <li><b>Описание: </b> {pet.description}</li>
            </ul>
        </section>
    )
}

export default Pet;