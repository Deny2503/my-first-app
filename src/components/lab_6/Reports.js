export default function Reports({ trainers }) {
    if (trainers.length === 0) return <p>Немає даних для звітів</p>;

    const maxTrainer = trainers.reduce((a, b) =>
        b.specializations.length > a.specializations.length ? b : a
    );
    const minTrainer = trainers.reduce((a, b) =>
        b.specializations.length < a.specializations.length ? b : a
    );
    const avgCount = Math.round(
        trainers.reduce((sum, t) => sum + t.specializations.length, 0) / trainers.length
    );
    const avgTrainer = trainers.find(
        (t) => t.specializations.length === avgCount
    );

    return (
        <div className="reports">
            <p>🏆 Найбільше спец.: {maxTrainer.name} ({maxTrainer.specializations.length})</p>
            <p>📉 Найменше спец.: {minTrainer.name} ({minTrainer.specializations.length})</p>
            {avgTrainer && (
                <p>📊 Середнє значення: {avgTrainer.name} ({avgCount})</p>
            )}
        </div>
    );
}