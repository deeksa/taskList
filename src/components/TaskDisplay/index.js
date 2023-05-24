import './index.css'

const TaskDisplay = props => {
  const {each} = props
  return (
    <li>
      <div className="container7">
        <p className="para">{each.inputTask}</p>
        <div className="container8">
          <p>{each.selectedTag}</p>
        </div>
      </div>
    </li>
  )
}
export default TaskDisplay
