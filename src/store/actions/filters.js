// SET_TEXT_FILTER
export const SET_TEXT_FILTER = '[filters] SET_TEXT_FILTER';
export const SORT_BY_DATE    = '[filters] SORT_BY_DATE';
export const SET_START_DATE  = '[filters] SET_START_DATE';
export const SORT_BY_AMOUNT  = '[filters] SORT_BY_AMOUNT';
export const SET_END_DATE    = '[filters] SET_END_DATE';


export const setTextFilter = ( text = '' ) => ({
    type: SET_TEXT_FILTER,
    text
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: SORT_BY_AMOUNT,
});

// SORT_BY_DATE
export const sortByDate = () => ({
    type: SORT_BY_DATE,
});

// SET_START_DATE
export const setStartDate = ( startDate = undefined ) => ({
    type: SET_START_DATE,
    startDate
});

// SET_END_DATE
export const setEndDate = ( endDate = undefined ) => ({
    type: SET_END_DATE,
    endDate
});