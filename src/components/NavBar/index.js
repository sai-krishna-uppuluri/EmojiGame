// Write your code here.
import './index.css'

const Navbar = props => {
  const {currentScore, topScore, isGameInProgress} = props

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {isGameInProgress ?? (
        <div className="score-container">
          <p className="score-nav">Score: {currentScore}</p>
          <p className="score-nav">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default Navbar
