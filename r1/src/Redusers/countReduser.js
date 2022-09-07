import { ADD_ONE, REMOVE, ADD, REMOVE_ONE } from "../Constants/actions";

function countReduser (state, action) {

let stateCopy = state;

console.log(action);

switch (action.type) {
    case ADD_ONE:
        stateCopy++;
        break;
    case REMOVE_ONE:
        stateCopy--;
        break;
    case ADD:
        stateCopy += parseInt(action.payload);
        break;
    case REMOVE:
        stateCopy -= parseInt(action.payload);
        break;
        default:
}

    return stateCopy;
}

export default countReduser;