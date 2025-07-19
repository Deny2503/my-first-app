import restarauntData from "./RestarauntData";
import "./RestaurantInfo.css";

function RestaurantInfo() {
    const { name, address, rating, cuisine, image } = restarauntData;

    return (
        <section className="restaurant-section">
            <h2>Restaurant</h2>
            <img className="restaurant-image" src={image} alt={name} />
            <ul>
                <li><b>Адресс:</b> {address}</li>
                <li><b>Рейтинг:</b> {rating}</li>
                <li><b>Тип кухни:</b> {cuisine}</li>
            </ul>
        </section>
    )

}

export default RestaurantInfo;