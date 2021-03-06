import  { removeExpense, addExpense, editExpense, REMOVE_EXPENSE, EDIT_EXPENSE, ADD_EXPENSE } from "../../store/actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: REMOVE_EXPENSE,
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value' });
    expect(action).toEqual({
        type: EDIT_EXPENSE,
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    });
});
test('should setup add expense action object whth provides values', () =>{
    const expenseData = {
        amount: 109500,
        createdAt: 1000,
        description: 'Rent',
        note: 'This was last months rent'
    };
    const action = addExpense( expenseData );
    expect(action).toEqual({
        type: ADD_EXPENSE,
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object whth default values', () =>{
    const action = addExpense();
    expect(action).toEqual({
        type: ADD_EXPENSE,
        expense: {
            amount: 0,
            createdAt: 0,
            description: '',
            note: '',
            id: expect.any(String)
        }
    });
});