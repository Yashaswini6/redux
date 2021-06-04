import { UserAPI } from "../api/UserAPI";

const UserReducer = (state =[], action) => {
    

    switch (action.type) {
        case "ADD_USER":
            console.log( 'new payload ', action.payload);
            UserAPI.create(action.payload).then(res => {
                alert("created user successfully");
                window.location.href = "/";
            }).catch(err => console.log(err.message)); 
        break;
    
        case "UPDATE_USER":
            console.log('update payload', action.payload);
            UserAPI.update(action.payload.id,action.payload.user)
                .then(res => {
                    alert("Updated successfully");
                    window.location.href = "/";
                }).catch(err => console.log(err.message));
        break;

        case "DELETE_USER":
            console.log('delete payload', action.payload);
                UserAPI.delete(action.payload)
                .then(res => {
                    alert("Deleted successfully");
                    window.location.href = "/";
                }).catch(err => console.log(err.message));
        break;

        default:
            return state;
    }
}

export default UserReducer;