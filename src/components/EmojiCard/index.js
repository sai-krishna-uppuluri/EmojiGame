// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickEmoji} = props

  const {id, emojiUrl, emojiName} = eachEmoji

  const onClickEmoji = () => {
    clickEmoji(id)
  }
  return (
    <li className="emoji-inner-con">
      <button type="button" className="emoji-card">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="emoji-image"
          onClick={onClickEmoji}
        />
      </button>
    </li>
  )
}

export default EmojiCard
