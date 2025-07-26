import Article from "./Article";

function DZ_5() {
    const articleData = {
        title: "Интерстеллар. Наука за кадром",
        author: "Кип Торн",
        text: "Увлекательное научное путешествие по мотивам фильма «Интерстеллар», написанное исполнительным продюсером и научным консультантом фильма. Кип Торн консультировал известного режиссера Кристофера Нолана по научным аспектам фильма «Интерстеллар». В своей книге он демонстрирует, что невероятные события, показанные в этой картине, и физические эффекты, никогда прежде не отображавшиеся визуально, основаны на подлинной современной науке.",
        date: "7 ноября 2014",
        image: "https://libris.to/media/jacket/39390051o.jpg"
    };

    return (
        <div style={{ padding: "40px" }}>
            <Article {...articleData}
                fontFamily="Georgia"
                fontSize="18px"
                color="#222"
                background="#e6f2ff"
                imagePosition="right"
                titleAlign="center"
            />
        </div>
    );
}

export default DZ_5;