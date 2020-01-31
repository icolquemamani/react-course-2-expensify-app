

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch( addExpense({ description: 'Rent rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch( addExpense({ description: 'Meat', amount: 140, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense( expenseTwo.expense.id, { description:'Edit description', amount: 150 }));

// store.dispatch( setTextFilter('re') );
// store.dispatch( setTextFilter() );


// store.dispatch( sortByAmount() );
store.dispatch( sortByDate() );

// store.dispatch( setStartDate( -1125 ) );
// store.dispatch( setEndDate( 2000 ) );

const demoState = {
    expenses: [{
        id: 'pisadsfd',
        description: 'January Rent',
        note: 'This was final payment for that address',
        amount: 54500,
        createdAt: 0 
    }],
    filters: {
        text: 'rent',
        sortBy:  'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
