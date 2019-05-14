import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.dispatch(addExpense({description:"Water Bill",amount:4500}));
store.dispatch(addExpense({description:"Gas Bill"}));
store.dispatch(setTextFilter("water"));

setTimeout(()=>{
    store.dispatch(setTextFilter("bill"))
},3000);

const VisibleExpenses = getVisibleExpenses(store.getState().expenses,store.getState().filters);
console.log(VisibleExpenses);

const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));