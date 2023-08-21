import { combineReducers } from 'redux';

import contactsReducer from './contacts/slice';
import filterReducer from './filters/slice';

export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})