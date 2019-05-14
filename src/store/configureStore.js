import { createStore,combineReducers } from 'redux';
import expensesReducer from '../reudcers/expenses';
import filtersReducer from '../reudcers/filters';

export default () => {
    const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

return store;
}