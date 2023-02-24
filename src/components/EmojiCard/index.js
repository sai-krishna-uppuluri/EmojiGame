// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickEmoji} = props

  const {id, emojiUrl} = eachEmoji

  const onClickEmoji = () => {
    clickEmoji(id)
  }
  return (
    <li className="emoji-inner-con">
      <div className="emoji-card">
        <img
          src={emojiUrl}
          alt="emojiName"
          className="emoji-image"
          onClick={onClickEmoji}
        />
      </div>
    </li>
  )
}

export default EmojiCard
