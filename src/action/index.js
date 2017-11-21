import constants from "../constant";

export default {

    // This is an action creator to create a todo list item object
    createTodoItem(todo) {
        return {
            type: constants.CREATE_TODO_ITEM,
            data: todo
        }
    }

}