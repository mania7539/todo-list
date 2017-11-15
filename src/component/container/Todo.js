import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todoList: [
                { name: 'Groceries', description: 'pick up groceries' },
                { name: 'Laundry', description: 'drop off laundry at dry cleaner' }
            ]
        }
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
        
                        <input className="form-control" type="text" placeholder="Name" /><br />
                        <input className="form-control" type="text" placeholder="Description" /><br />
                        <button>Add Todo</button>    
                    </div>
                </div>

            </div>

        );
    }
}

export default Todo;
