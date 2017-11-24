import React, { Component } from 'react';
import { connect } from "react-redux";
import action from "../../action";

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            nextTodo: { name: '', description: '' },
            // todoList: []
        }
    }

    makeTheFirstLetterUppercase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    updateTodo(field, event) {
        // console.log("UPDATE TODO: " + field + " == " + event.target.value);
        let nextTodo = Object.assign({}, this.state.nextTodo);
        nextTodo[field] = this.makeTheFirstLetterUppercase(event.target.value);
        this.setState({
            nextTodo: nextTodo
        });

    }

    addTodo(event) {
        console.log("ADD TODO: " + JSON.stringify(this.state.nextTodo)); // use JSON.stringify to make the json into formatted string

        // let todoList = Object.assign([], this.state.todoList);
        // todoList.push(this.state.nextTodo);
        // this.setState({
        //     todoList: todoList,
        //     nextTodo: { name: '', description: '' } // use this line to clear the text which was typed in the input fields
        // });
        this.props.createTodoItem(this.state.nextTodo);
        
    }

    render() {
        // grab the todo from the reducer 'todo' and get property 'todos'
        const todoList = this.props.todo.todos;
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <h2>Todo List</h2>
                        <ol>
                            {
                                todoList.map((item, i) => {
                                    return <li key={i}>{item.name}</li>
                                })
                            }
                        </ol>

                        <input value={this.state.nextTodo.name} onChange={this.updateTodo.bind(this, "name")} className="form-control" type="text" placeholder="Name" /><br />
                        <input value={this.state.nextTodo.description} onChange={this.updateTodo.bind(this, "description")} className="form-control" type="text" placeholder="Description" /><br />
                        <button onClick={this.addTodo.bind(this)}>Add Todo</button>
                    </div>
                </div>

            </div>

        );
    }
}

// connection component to store with redux
const stateToProps = (state) => {
    return {
        // maps your custom state to props, so you need to query the reducer definition in your store
        todo: state.todo
    }
};

const dispatchToProps = (dispatch) => {
    return {
        createTodoItem: (todo) => dispatch(action.createTodoItem(todo))
    }
}

export default connect(stateToProps, dispatchToProps)(Todo);
