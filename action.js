const ADD_USER = "ADD_USER";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";

/* create */
export function addUser(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}

/* update */
export function updateUser(user, id) {
    return {
        type: UPDATE_USER,
        payload: {
            user: user,
            id: id
        }
    }
}

/* delete */
export function deleteUser(id) {
    return {
        type: DELETE_USER,
        payload: id
    }
}