import moment from "moment";
import {
    filtersReducer
} from '../../store/reducers/filters';
import {
    SET_END_DATE, SET_START_DATE,
    SET_TEXT_FILTER,
    SORT_BY_AMOUNT,
    SORT_BY_DATE,

} from "../../store/actions/filters";

test('should setup default filter values', () => {
   const state = filtersReducer(undefined, { type: '@@INIT'});
   expect(state).toEqual({
       text: '',
       sortBy: 'createdAt',
       startDate: moment().startOf('month'),
       endDate: moment().endOf('month')
   });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: SORT_BY_AMOUNT });
    expect(state.sortBy).toEqual('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState, { type: SORT_BY_DATE });
    expect(state.sortBy).toEqual('createdAt');
});

test('should set text filter', () => {
    const text = 'my text'
    const state = filtersReducer(undefined, { type: SET_TEXT_FILTER, text });
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const startDate = moment(0)
    const state = filtersReducer(undefined, { type: SET_START_DATE, startDate });
    expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
    const endDate = moment(0);
    const state = filtersReducer(undefined, { type: SET_END_DATE, endDate });
    expect(state.endDate).toEqual(endDate);
});