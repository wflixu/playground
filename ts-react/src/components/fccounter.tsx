import * as React from 'react';

interface Props {
  count: number;
  increment: (amount:number) => void;
  decrement:(amount:number)=>void;
}

export const FCCounter: React.FC<Props> = props => {
  const { count, increment ,decrement } = props;

  const handleIncrement = () => {
    increment(1);
  };
  const handleDecrement = () => {
    decrement(1);
  };

  return (
    <div>
      <button type="button" onClick={handleDecrement}>
        {`decrement`}
      </button>
      <span>
        {label}: {count}
      </span>
      <button type="button" onClick={handleIncrement}>
        {`Increment`}
      </button>
    </div>
  );
};