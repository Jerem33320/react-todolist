import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(item) {
        // no event
        // pass the item to indexOf
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    // add item to deleteTodo.bind(this, item)
    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div className="top-space list-group-item" key={item}>
                    {item}
                    <button className="btn btn-outline-danger" onClick={this.deleteTodo.bind(this, item)}>X</button>
                </div>
            );
        });
    }

    render() {
        return(
            <div className="align-items-center">

                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="titre display-4">Ma TODO Liste</h1>
                        <p className="lead">Une liste simple où vous pouvez ajouter et supprimer vos items.</p>
                    </div>
                </div>

                <form className="form-row">
                    <input
                        value={this.state.userInput}
                        type="text"
                        placeholder="Renseigner un item"
                        onChange={this.onChange.bind(this)}
                        className="form-control mb-2"
                    />
                    <button
                        onClick={this.addTodo.bind(this)}
                        className="btn btn-primary btn-lg btn-block"
                    >
                        Ajouter
                    </button>
                </form>
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;

