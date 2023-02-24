/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import Navbar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    topScore: 0,
    isGameInProgress: true,
  }

  resetBtn = () => {
    this.setState({
      isGameInProgress: true,
      clickedEmojiList: [],
    })
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = emojisList.length === clickedEmojiList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojiList.length}
        resetBtn={this.resetBtn}
      />
    )
  }

  finishAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({
      topScore: newTopScore,
      isGameInProgress: false,
    })
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiPresent = clickedEmojiList.includes(id)

    if (isEmojiPresent) {
      this.finishAndSetTopScore(clickedEmojiList.length)
    } else {
      if (emojisList.length - 1 === clickedEmojiList.length) {
        this.finishAndSetTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  getEmojisList = () => {
    const getShuffledEmojis = this.getShuffledEmojisList()

    return (
      <ul className="emoji-con">
        {getShuffledEmojis.map(eachEmoji => (
          <EmojiCard
            eachEmoji={eachEmoji}
            key={eachEmoji.id}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojiList, topScore, isGameInProgress} = this.state
    return (
      <div className="app-container">
        <Navbar
          currentScore={clickedEmojiList.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? this.getEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
