import React from "react";

export default class OrderedList extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleDirectionChange = this.handleDirectionChange.bind(this)
        this.state = {
            list: [],
            listInput: "",
            direction: "down"
        }
    }
    handleKeyDown(e) {
        if (e.key === "Enter" && this.state.listInput.trim() !== "") {
            this.setState(state => ({
                list: [...state.list, state.listInput],
                listInput: ""
            }))
        }
    }

    handleInputChange(e) {
        const { value } = (e.target)
        this.setState(state => ({
            list: [...state.list],
            listInput: value
        }))
    }

    handleClear() {
        this.setState((state) => ({
            list: [],
            listInput: ""
        }))
    }

    handleDirectionChange() {
        console.log("hello")
        this.setState((state) => {
            if (state.direction === "up") {
                return { direction: "down" }
            } else {
                return { direction: "up" }
            }
        })
    }

    render() {
        let displayedList
        if (this.state.direction === "down") {
            displayedList = this.state.list.sort()
        }
        if (this.state.direction === "up") {
            displayedList = this.state.list.sort().reverse()
        }
        return (
            <>
                <input value={this.state.listInput} onChange={(e) => this.handleInputChange(e)} className="add-item" onKeyDown={(e) => this.handleKeyDown(e)} />
                <button className="sort-direction" onClick={this.handleDirectionChange} class="sort-direction">{this.state.direction === "down" ? "⬇️" : "⬆️"}</button>
                <button onClick={this.handleClear} className="clear-list">️🆑</button>
                <ul className="items-list">{displayedList.map(item => <li>{item}</li>)}</ul>
            </>
        );
    }
}