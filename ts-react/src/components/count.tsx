import * as React from "react";
import { connect } from 'react-redux';
import { increment, decrement } from './../actions'

interface IProps{
    count:number;
    increment():void;
    decrement():void;
}
const mapStateToProps = (state: { count: any; } /*, ownProps*/) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = { increment, decrement }


class Counter extends React.Component<IProps,{}>{
 
    render() {
        return (
            <div className="container">
                <span>  Clicked: {this.props.count} times</span>
                <button className="btn btn-primary col-1" onClick={() => this.props.increment()}>
                    +
        </button>

                <button className="btn btn-primary col-1" onClick={() => this.props.decrement()}>
                    -
        </button>

            </div>
        )
    }

}





export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

