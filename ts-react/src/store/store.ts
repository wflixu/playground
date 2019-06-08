import { createStore } from 'redux';
import counter from '../pages/counter/reducer';

const initState:any = {
    count:2
}
export const store = createStore(counter,initState);

