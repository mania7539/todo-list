/**
 * Organize the todo list with the reducer 
 */

import constants from '../constant';

var initialState = {
    todos: [
        { name: 'Groceries', description: 'pick up groceries' },
        { name: 'Laundry', description: 'drop off laundry at dry cleaner' },
        { name: 'Fantasy team', description: 'update fantasy teams' },
    ]
};

export default (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case (constants.CREATE_TODO_ITEM):
            console.log("CREATE_TODO_ITEM: " + JSON.stringify(action.data));
            let todos = Object.assign([], newState.todos);
            todos.push(action.data);
            newState['todos'] = todos;

            return newState;
        
        default: 
            return state;

    }
};
