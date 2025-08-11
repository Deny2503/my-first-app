import { useState } from "react";
import { initTrainers } from "./data";
import TrainerForm from "./TrainerForm";
import TrainerList from "./TrainerList";
import Reports from "./Reports";
import "./style.css";


export default function Lab_6() {
    const [trainers, setTrainers] = useState(initTrainers);
    const [editingTrainer, setEditingTrainer] = useState(null);

    const addOrUpdateTrainer = (trainer) => {
        setTrainers((prev) =>
            prev.some((t) => t.id === trainer.id)
                ? prev.map((t) => (t.id === trainer.id ? trainer : t))
                : [...prev, trainer]
        );
        setEditingTrainer(null);
    };

    const deleteTrainer = (id) => {
        setTrainers((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <div className="container">
            <h1>🏋️‍♂️ Фітнес-клуб — Тренери</h1>
            <TrainerForm
                onSave={addOrUpdateTrainer}
                editingTrainer={editingTrainer}
                onCancel={() => setEditingTrainer(null)}
            />
            <TrainerList
                trainers={trainers}
                onDelete={deleteTrainer}
                onEdit={(t) => setEditingTrainer(t)}
            />
            <Reports trainers={trainers} />
        </div>
    );
}