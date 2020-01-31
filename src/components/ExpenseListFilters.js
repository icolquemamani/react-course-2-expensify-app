import React, { Component } from 'react';
import { connect } from  'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from "../store/actions/filters";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends Component {
    state = {
      calendarFocused: null,
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (focused) => {
        this.setState(()=>({ calendarFocused: focused}));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = ( e ) => {
        if (e.target.value === 'createdAt') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };

    render() {
        return (
            <div>
                <input type="text" value={ this.props.filters.text } onChange={ this.onTextChange }/>
                <select
                    value={ this.props.filters.sortBy }
                    onChange={ this.onSortChange }>
                    <option value="createdAt">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=> false }
                    endDateId="endDate"
                    startDateId="startDate"
                />
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = ( dispatch, props ) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
