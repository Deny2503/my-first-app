import { useState } from "react";
import DishModal from "./DishModal";


function RestaurantMenu({ menu }) {
    const [selectedDish, setSelectedDish] = useState(null);

    return (
        <div className="menu-block">
            <h1 className="menu-title">Меню ресторану</h1>
            <ul className="dish-list">
                {menu.map(dish => (
                    <li key={dish.name} className="dish-item">
                        <button className="dish-name-btn" onClick={() => setSelectedDish(dish)}
                        >
                            {dish.name}
                        </button>
                    </li>
                ))}
            </ul>
            <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
        </div>
    );
}
export default RestaurantMenu;