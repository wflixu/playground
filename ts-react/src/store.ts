import { createStore } from 'redux';
import counter from './reducers';

const initState:any = {
    count:0
}
export const store = createStore(counter,initState);

