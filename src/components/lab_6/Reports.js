export default function Reports({ trainers }) {
    if (trainers.length === 0) return <p>Немає даних для звітів</p>;

    const maxTrainer = trainers.reduce((a, b) =>
        b.special.length > a.special.length ? b : a
    );
    const minTrainer = trainers.reduce((a, b) =>
        b.special.length < a.special.length ? b : a
    );
    const avgCount = Math.round(
        trainers.reduce((sum, t) => sum + t.special.length, 0) / trainers.length
    );
    const avgTrainer = trainers.find(
        (t) => t.special.length === avgCount
    );

    return (
        <div className="reports">
            <p>🏆 Найбільше спец.: {maxTrainer.name} ({maxTrainer.special.length})</p>
            <p>📉 Найменше спец.: {minTrainer.name} ({minTrainer.special.length})</p>
            {avgTrainer && (
                <p>📊 Середнє значення: {avgTrainer.name} ({avgCount})</p>
            )}
        </div>
    );
}