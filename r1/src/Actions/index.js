import { ADD, ADD_ONE, REMOVE, REMOVE_ONE } from "../Constants/actions";

export function add1() {

    return {
        type: ADD_ONE
    }
}

export function remove1() {
    return {
        type: REMOVE_ONE
    }
}

export function add(payload) {
    return {
        type: ADD,
        payload
    }
}

export function remove(payload) {
    return {
        type: REMOVE,
        payload
        //sutrumpintas uzrasymas
    }
}