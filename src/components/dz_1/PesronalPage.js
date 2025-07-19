
function PersonalPage() {
    const user = {
        name: "Deny2503",
        phone: "+38 (000) 000 - 00 - 00",
        email: "deny2503@email.com",
        city: "Киев",
        experience: "1 год учусь программировать",
        skills: ["React", "JavaScript", "HTML", "CSS"],
        photo: "https://fsx1.itstep.org/api/v1/files/AoJD1-Vq547DtNLDWjtBoSGYCEB2iO4y?r=face&h=250&f=webp"
    };

    return(
        <section>
            <h2>Task 2</h2>
            <img src={user.photo} alt={user.name} style={{ width: 120, borderRadius: "50%", marginBottom: 10 }} />
            <ul>
                <li><b>Имя: </b> {user.name}</li>
                <li><b>Телефон: </b> {user.phone}</li>
                <li><b>Имэил </b> {user.email}</li>
                <li><b>Город: </b> {user.city}</li>
                <li><b>Опыт: </b> {user.experience}</li>
                <li><b>Навыки: </b> {user.skills.join(" ,")}</li>
            </ul>
        </section>
    )

}

export default PersonalPage;