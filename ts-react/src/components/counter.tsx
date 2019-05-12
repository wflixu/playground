import * as React from 'react';

interface Props {
    label: string;
    initCount: number
}
interface State {
    count: number
}

export class ClassCounterWithDefaultProps extends React.Component<Props, State>{
    static defaultProps = {
        initCount: 0,
    };
    readonly state: State = {
        count: this.props.initCount,
    };
    componentWillReceiveProps({ initCount }: Props) {
        if (initCount != null && initCount !== this.props.initCount) {
            this.setState({ count: initCount });
        }
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        const { handleIncrement } = this;
        const { label } = this.props;
        const { count } = this.state;

        return (
            <div>
                <span>
                    {label}: {count}
                </span>
                <button type="button" onClick={handleIncrement}>
                    {`Increment`}
                </button>
            </div>
        );
    }


}