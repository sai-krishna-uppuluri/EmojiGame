// Write your code here.

import './index.css'

const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, resetBtn} = props

  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const imageUrl = isWon ? winImage : loseImage
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const onClickReset = () => {
    resetBtn()
  }

  return (
    <div className="result-container">
      <div className="score-container">
        <h1>{gameStatus}</h1>
        <p>{scoreLabel}</p>
        <p className="score"> {score}/12 </p>
        <button type="button" className="reset-btn" onClick={onClickReset}>
          Play Again
        </button>
      </div>
      <div className="result-image">
        <img src={imageUrl} alt="win or lose" className="result-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
