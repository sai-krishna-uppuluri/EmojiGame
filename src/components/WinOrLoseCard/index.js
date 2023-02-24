// Write your code here.

import './index.css'

const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, resetBtn} = props

  const gameStatus = isWon ? 'You Won' : 'You Loose'
  const resultUrl = isWon ? winImage : loseImage

  const onClickReset = () => {
    resetBtn()
  }

  return (
    <div className="result-container">
      <div className="score-container">
        <h1> {gameStatus}</h1>
        <p>Best Score </p>
        <p className="score"> {score} / 12 </p>
        <button type="button" className="reset-btn" onClick={onClickReset}>
          play again
        </button>
      </div>
      <div className="result-image">
        <img src={resultUrl} alt="result" className="result-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
