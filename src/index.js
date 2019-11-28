import '@/index.scss'
import '@/assets/css/reset.scss'
import 'lib-flexible'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as serviceWorker from '@/serviceWorker'
// import App from '@/view/App'

const PLAYERS = {
  X: '⚪️',
  O: '⚫️'
}

/**
 * @function 渲染棋盘格子
 * @author hutao
 * @param {object} props 入参
 **/
function Square (props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

/**
 * 棋盘
 * @class Board
 */
class Board extends React.Component {
  renderSquare (i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }
  render () {
    return (
      <div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

/**
 * 游戏容器
 * @class Game
 */
// class HistoryList extends React.Component {
//   constructor (props) {
//     super(props)
//   }
//   render () {
//     return (
//       <div className="game">
//         <div ></div>
//       </div>
//     )
//   }
// }

/**
 * 游戏容器
 * @class Game
 */
class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // history 用于保存历史记录
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true,
      stepNumber: 0
    }
  }

  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    const winner = calculateWinner(squares)
    if (winner || squares[i]) return // 已胜出或者当前棋盘已有值时，不做操作
    squares[i] = this.state.xIsNext ? PLAYERS.X : PLAYERS.O
    this.setState(
      {
        // history: [...history, { squares }],
        history: history.concat([
          {
            squares: squares
          }
        ]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length
      },
      () => {
        console.log(this.state.squares, this.state.xIsNext)
      }
    )
  }

  jumpTo (step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    })
  }

  resetGame () {
    console.log('reset game', this.state)
    this.setState({
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0
    })
  }

  render () {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status = winner
      ? `WINNER: ${winner}`
      : `NEXT PLAYER: ${this.state.xIsNext ? PLAYERS.X : PLAYERS.O}`

    return (
      <div className='game'>
        <div className='game-status'>{status}</div>
        <div className='game-board'>
          <Board
            squares={current.squares}
            onClick={i => {
              this.handleClick(i)
            }}
          />
        </div>
        <div className='game-info'>
          <div
            onClick={() => {
              this.resetGame()
            }}>
            RESET
          </div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

/**
 * @function 计算获胜玩家
 * @author hutao
 * @param {array} squares 当前的棋盘
 **/
function calculateWinner (squares) {
  const lines = [
    // 获胜的线路
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  let winner = null
  lines.forEach(item => {
    let [a, b, c] = item
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[a]
    }
  })
  return winner
}

ReactDOM.render(<Game />, document.getElementById('root'))

process.env.NODE_ENV === 'development'
  ? serviceWorker.unregister()
  : serviceWorker.register()
