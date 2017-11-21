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
    switch (action.type) {
        case (constants.CREATE_TODO_ITEM):
            console.log("CREATE_TODO_ITEM");
            return state;
        
        default: 
            return state;

    }
};
