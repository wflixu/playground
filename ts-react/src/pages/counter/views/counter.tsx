import * as React from 'react';
import {store} from '../../../store/store'
// import { connect } from 'react-redux';

import { FCCounter } from './fccounter';
import * as Actions  from '../actions';



// const mapStateToProps = (state: any) => ({
//     count: state.count,
// });

// const dispatchProps = {
//     increment,
//     // tslint:disable-next-line:object-literal-sort-keys
//     decrement
// };

// export const FCCounterConnected = connect(
//     mapStateToProps,
//     dispatchProps
//   )(FCCounter);




// tslint:disable-next-line:interface-over-type-literal
type State = {
    count: number;
};

export default class ClassCounter extends React.Component<{}, State> {
   constructor(props:{},state:State){
       super(props);
       this.state = this.getOwnState();
   }
   getOwnState= ()=>{
       return {
           count:store.getSate().count
       }
   }
   onChange(){
       this.setState(this.getOwnState());
   }
   componentDidMount(){
       store.subscribe(this.onChange);
   }
   componentWillUnmount(){
       store.unsubscribe(this.onChange)
   }
    increment = () => {
        store.dispatch(Actions.increment(1))
    };
    decrement = ()=>{
        store.dispathch(Actions.decrement(1))
    }

    render() {
        return (
            <FCCounter count={this.state.count} increment={this.increment} decrement={this.decrement} />
        );
    }
}