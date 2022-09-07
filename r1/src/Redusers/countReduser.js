function countReduser (state, action) {

let stateCopy = state;

switch (action.type) {
    case 'add_one':
        stateCopy++;
        break;
    case 'remove_one':
        stateCopy--;
        break;
    case 'add_+':
        stateCopy += parseInt(action.payload);
        break;
    case 'remove_-':
        stateCopy -= parseInt(action.payload);
        break;
        default:
}

    return stateCopy;
}

export default countReduser;