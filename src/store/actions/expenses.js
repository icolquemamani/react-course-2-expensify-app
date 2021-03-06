import uuid from 'uuid';

export const ADD_EXPENSE = '[expenses] ADD_EXPENSE';
export const EDIT_EXPENSE = '[expenses] EDIT_EXPENSE';
export const REMOVE_EXPENSE = '[expenses] REMOVE_EXPENSE'; 

// ADD_EXPENSE
export const addExpense = ({description= '', note='', amount= 0, createdAt = 0} = {}) => ({
    type: ADD_EXPENSE,
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id = '' } = {}) => ({
    type: REMOVE_EXPENSE,
    id
});

// ADD_EXPENSE
export const editExpense = ( id, updates ) => ({
    type: EDIT_EXPENSE,
    id,
    updates
});