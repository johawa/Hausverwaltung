import { ADD_NUMBER } from './actionTypes';

export const addNumber = (value) => {
    return {
        type: ADD_NUMBER,
        value: value
    };
};
