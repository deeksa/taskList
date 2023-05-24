import './index.css'

const TagsDisplay = props => {
  const {each, onTapTagsDisplayButton} = props
  const onTapTagsDisplay = () => {
    onTapTagsDisplayButton(each)
  }
  return (
    <li>
      <button type="button" onClick={onTapTagsDisplay} className="button2">
        {each.displayText}
      </button>
    </li>
  )
}
export default TagsDisplay
