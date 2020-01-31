// Get visible expenses
import moment from "moment";

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter( (expense) => {
        // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const createdAtMoment = moment( expense.createdAt, 'x' );
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        //const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        // const textMatch = expense.description.toLowerCase().indexOf(text.toLowerCase()) >= 0;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort( ( a, b ) => {
        return a[sortBy] < b[sortBy] ? -1 : 1;
    });
};

export default getVisibleExpenses;