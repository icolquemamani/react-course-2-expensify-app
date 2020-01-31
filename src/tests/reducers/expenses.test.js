import expensesReducer from "../../store/reducers/expenses";
import moment from "moment";

import expenses from "../fixtures/expenses";
import {ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE} from "../../store/actions/expenses";

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: REMOVE_EXPENSE,
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual( [expenses[0], expenses[2]] );
});


test('should not remove expense if id not found', () => {
    const action = {
        type: REMOVE_EXPENSE,
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual( expenses );
});

test('should add new expense', () => {
    const expense = {
        description: 'Meat',
        amount: 100,
        note: '',
        createdAt: moment().valueOf(),
        id: '4'
    };
    const action = {
        type: ADD_EXPENSE,
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual( [...expenses, expense ] );
});


test('should edit an expense by id', () => {
    const amount = 200;
    const action = {
        type: EDIT_EXPENSE,
        id: expenses[0].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe( amount );
});

test('should not edit an expense if id not found', () => {
    const amount = 2000;
    const action = {
        type: EDIT_EXPENSE,
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual( expenses );
});
