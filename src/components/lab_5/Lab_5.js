import React from "react";
import MultiplicationTable from "./MultiplicationTable";
import FirmInfo from "./FirmInfo";
import Faculty from "./Faculty";
import RestaurantMenu from "./RestaurantMenu";

const company = {
    name: "ТОВ DeltaSport",
    industry: "Sport Magazine",
    address: "м. Київ, вул. Лесі Українки, 24"
};

const employees = [
    { id: 1, name: "Іван Іванов", position: "Менеджер" },
    { id: 2, name: "Марія Марченко", position: "Конультант" },
    { id: 3, name: "Олег Коваленко", position: "Касір" }
];

const facultyData = {
    name: "Факультет інформатики",
    groups: [
        {
            id: 1,
            name: "П-31",
            students: [
                { id: 1, name: "Анна Ткаченко" },
                { id: 2, name: "Петро Руденко" }
            ]
        },
        {
            id: 2,
            name: "П-22",
            students: [
                { id: 3, name: "Олег Поліщук" }
            ]
        }
    ]
};

const menu = [
    { name: "Грецький салат", ingredients: ["помідори", "огірки", "бринза", "оливки", "олія"] },
    { name: "Олів’є", ingredients: ["картопля", "морква", "горошок", "ковбаса", "майонез"] },
    { name: "Котлета по-київськи", ingredients: ["курка", "масло", "сухарі", "яйце"] },
    { name: "Паста Карбонара", ingredients: ["паста", "бекон", "яйце", "сир", "вершки"] }
];

function Lab_5() {
    return (
        <React.Fragment>
            <hr></hr>
            <MultiplicationTable rows={10} cols={10} />
            <hr></hr>
            <FirmInfo company={company} employees={employees} />
            <hr></hr>
            <Faculty faculty={facultyData} />
            <hr></hr>
            <RestaurantMenu menu={menu} />
        </React.Fragment>
    )
}

export default Lab_5;