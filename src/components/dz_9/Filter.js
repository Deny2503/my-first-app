import React from "react";

class Filter extends React.Component {
    handleChange = (e) => {
        const selectedTags = Array.from(e.target.selectedOptions, (option) => option.value);
        this.props.onFilter(selectedTags);
    };

    render() {
        const { allTags } = this.props;
        return (
            <div className="filter">
                <label>Фільтрувати за тегом:</label>
                <select multiple onChange={this.handleChange}>
                    {allTags.map((tag, index) => (
                        <option key={index} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Filter;
