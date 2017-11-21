import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            nextTodo: { name: '', description: '' },
            todoList: [
                { name: 'Groceries', description: 'pick up groceries' },
                { name: 'Laundry', description: 'drop off laundry at dry cleaner' }
            ]
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
        let todoList = Object.assign([], this.state.todoList);
        todoList.push(this.state.nextTodo);
        this.setState({
            todoList: todoList,
            nextTodo: { name: '', description: '' } // use this line to clear the text which was typed in the input fields
        });

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <h2>Todo List</h2>
                        <ol>
                            {
                                this.state.todoList.map((item, i) => {
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

export default Todo;
