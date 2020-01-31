import moment from "moment";
import {
    setEndDate,
    setStartDate,
    sortByAmount,
    sortByDate,
    setTextFilter,
    SET_END_DATE,
    SET_START_DATE,
    SET_TEXT_FILTER,
    SORT_BY_AMOUNT,
    SORT_BY_DATE
} from '../../store/actions/filters';

test('sholud generate set start date action object', ()=>{
    const startDate = moment(0);
    const action = setStartDate( startDate );
    expect(action).toEqual({
        type: SET_START_DATE,
        startDate
    });
});

test('sholud generate set end date action object', ()=>{
    const endDate = moment(0);
    const action = setEndDate( endDate );
    expect(action).toEqual({
        type: SET_END_DATE,
        endDate
    });
});


test('should set text filter action object with text value', () => {
    const  text = 'rent';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: SET_TEXT_FILTER,
        text
    });
});

test('should set text filter action object with default value ', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: SET_TEXT_FILTER,
        text: ''
    });
});

test('should set sort by amount action object ', () => {
    expect(sortByAmount()).toEqual({
        type: SORT_BY_AMOUNT
    });
});

test('should set sort by date action object ', () => {
    expect(sortByDate()).toEqual({
        type: SORT_BY_DATE
    });
});