import React from 'react';
import Board from './Board';
import cloneDeep from 'lodash/cloneDeep';


export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history:[
                {
                    squares:[Array(3).fill(null),Array(3).fill(null),Array(3).fill(null)],
                    cur: null,
                    pos:{row:null,col:null}
                }
            ],
            stepNum:0,
            xIsNext:true
        }
    }
    jumpTo(step){

        console.log(step)
        this.setState({
            stepNum:step,
            xIsNext:(step%2)===0
        })

        
    }

    handleClick(row,col) {
        
        const history = this.state.history.slice(0,this.state.stepNum+1);
        const current = history[history.length-1];
        
        
        const squares = cloneDeep(current.squares);
      

        if(this.calcWinner(squares)||squares[row][col]){
            return ;
        }
       
        
        squares[row][col] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history:history.concat([{
                squares:squares,
                cur: squares[row][col],
                pos:{row:row,col:col}
            }]),
            stepNum:history.length,
            xIsNext: !this.state.xIsNext
        })
    }

    
    calcWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (squares[Math.floor(a/3)][a%3] ===squares[Math.floor(b/3)][b%3] && squares[Math.floor(a/3)][a%3] ===squares[Math.floor(c/3)][c%3]) {
                return squares[Math.floor(a/3)][a%3];
            }
        }
        return null;
    }

    
    
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNum];
        const winner= this.calcWinner(current.squares);

        console.log(current)

        let status;
        if(winner){
            status = 'Winner:' + winner;
        }else{
            status =  'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        const moves = history.map((step,move)=>{
            
            const desc=move?
            'Go to move# '+move:
            'Go to game start';
            
            let {cur,pos} = step;
            return(
                <li key={move} className={this.state.stepNum===move?'active':''}>
                    <button  onClick={()=>this.jumpTo(move)}>{desc}</button><span>row:{pos.row}--col:{pos.col}--- do:{cur}</span>
                </li>
            )
        })

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares}
                       handleClick={(row,col)=>this.handleClick(row,col)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }
}