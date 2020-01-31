import { createStore } from 'redux';

// Actions generators - functions that retrun action object

const incrementCount = ({ incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        // incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
        incrementBy
    }
};

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESEST',
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

// Reducers 
const countReducer = ( state = { count: 0 }, action ) => {

    switch (action.type ) {
        case 'INCREMENT' : {
            return {
                count: state.count + action.incrementBy
            };
        }            
        case 'DECREMENT' : {
            return {
                count: state.count - action.decrementBy
            };
        }            
        case 'RESEST' : return {
            count: 0
        };
        case 'SET' : return {
            count: action.count
        };
        default: return state;
    }
};

const store = createStore( countReducer );


const unsubscribe= store.subscribe(() => {
    console.log(store.getState());
});
// actions
store.dispatch({ type: 'INCREMENT', incrementBy: 5 });
store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ count: 100 }));

unsubscribe();


