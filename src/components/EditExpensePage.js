import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../store/actions/expenses';
import selectExpenses from "../store/selectors/expenses";

export class EditExpensePage extends React.Component {
    editExpense = ( expense ) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm
                    onSubmit = { this.editExpense }
                    expense = { this.props.expense }
                />
                <button onClick={ this.onRemove }>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = ( state, props ) => {
    console.log(props.match.params.id);
    return {
        expense: state.expenses.find(({ id }) => id === props.match.params.id)
    }
};

const mapDispatchToProps = ( dispatch, props ) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);