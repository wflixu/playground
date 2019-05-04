import * as React from "react";
interface ICount {
    value: number;
    onIncrement: any;
    onDecrement: any
}

export default class Counter extends React.Component<ICount, {}>{
    constructor(props: ICount) {
        // tslint:disable-next-line:no-console
        console.log(props);
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }


    render() {
        return (
            <div className="container">
                <span>  Clicked: {this.props.value} times
        {' '}</span>

                <button className="btn btn-primary col-1" onClick={()=> this.props.onIncrement()}>
                    +
        </button>
                {' '}
                <button className="btn btn-primary col-1" onClick={()=>this.props.onDecrement()}>
                    -
        </button>
                {' '}
                <button className="btn btn-primary col-1" onClick={this.incrementIfOdd}>
                    Increment if odd
        </button>
                {' '}
                <button className="btn btn-primary col-1" onClick={this.incrementAsync}>
                    Increment async
        </button>
            </div>
        )
    }


}  