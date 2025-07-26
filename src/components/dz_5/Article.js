import "./Article.css";

function Article({
    title,
    author,
    text,
    date,
    fontFamily = "Arial",
    fontSize = "16px",
    color = "#333",
    background = "#f9f9f9",
    image = null,
    imagePosition = "left",
    titleAlign = "center"
}) {
    const containerStyle = {
        display: "flex",
        flexDirection: imagePosition === "left" ? "row" : "row-reverse",
        alignItems: "flex-start",
        gap: "20px",
        background: background,
        padding: "20px",
        borderRadius: "12px",
        flexWrap: "wrap"
    };

    const contentStyle = {
        flex: "1",
        fontFamily,
        fontSize,
        color
    };

    const titleStyle = {
        textAlign: titleAlign,
        fontSize: "1.8em",
        marginBottom: "10px"
    };

    const imageStyle = {
        maxWidth: "300px",
        maxHeight: "auto",
        borderRadius: "8px",
        flexShrink: 0
    };

    return (
        <div style={containerStyle} className="article-container">
            {image && (<img src={image} alt="article visual" style={imageStyle} />)}
            <div style={contentStyle}>
                <h2 style={titleStyle}>{title}</h2>
                <p><strong>Автор:</strong> {author}</p>
                <p><strong>Дата:</strong> {date}</p>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Article;