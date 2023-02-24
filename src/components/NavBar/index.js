// Write your code here.
import './index.css'

const Navbar = props => {
  const {currentScore, topScore} = props

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji</h1>
      </div>
      <div className="score-container">
        <h2 className="score-nav">Score {currentScore}</h2>
        <h2 className="score-nav">Total Score {topScore}</h2>
      </div>
    </div>
  )
}

export default Navbar
