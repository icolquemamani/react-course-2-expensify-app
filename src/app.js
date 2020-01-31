import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
//css
import './styles/base/_base.scss'; 
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from './store/actions/expenses';

const store = configureStore();


const expenseOne = store.dispatch( addExpense({ description: 'Rent rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch( addExpense({ description: 'Meat', amount: 140, createdAt: -1000 }));
const expenseThree = store.dispatch( addExpense({ description: 'Chocolate', amount: 160, createdAt: 15000 }));
console.log(store.getState());


const jsx = (
    <Provider store={ store }>
        <AppRouter/>
    </Provider>
);

ReactDOM.render( jsx, document.getElementById('app'));