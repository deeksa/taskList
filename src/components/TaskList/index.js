import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import TagsDisplay from '../TagsDisplay'
import TaskDisplay from '../TaskDisplay'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class TaskList extends Component {
  state = {
    inputTask: '',
    selectedTag: 'Health',
    addTaskList: [],
    preservedTaskList: [],
  }

  onChangeInput = e => {
    this.setState({
      inputTask: e.target.value,
    })
  }

  onChangeOption = e => {
    this.setState({
      selectedTag: e.target.value,
    })
  }

  onTapTagsDisplayButton = eachItem => {
    const {preservedTaskList} = this.state
    const filteredAddTaskList = preservedTaskList.filter(
      e => e.selectedTag === eachItem.optionId,
    )
    console.log(filteredAddTaskList)
    this.setState({addTaskList: filteredAddTaskList})
  }

  onTapAddButton = e => {
    e.preventDefault()
    const {inputTask, selectedTag} = this.state
    const eachItem = {
      id: uuidv4(),
      inputTask,
      selectedTag,
    }
    this.setState(prevState => ({
      addTaskList: [...prevState.addTaskList, eachItem],
      preservedTaskList: [...prevState.addTaskList, eachItem],
      inputTask: '',
      selectedTag: 'HEALTH',
    }))
  }

  render() {
    const {inputTask, selectedTag, addTaskList} = this.state
    return (
      <div className="container1">
        <div className="container2">
          <h1 className="heading1">Create a task!</h1>
          <form onSubmit={this.onTapAddButton}>
            <label className="para">
              Task
              <br />
              <input
                type="input"
                value={inputTask}
                placeholder="Enter the task here"
                onChange={this.onChangeInput}
              />
            </label>
            <br />
            <label className="para">
              Tags
              <br />
              <select onChange={this.onChangeOption} value={selectedTag}>
                {tagsList.map(e => (
                  <option value={e.optionId}>{e.displayText}</option>
                ))}
              </select>
            </label>
            <br />
            <button
              type="submit"
              className="button1"
              onClick={this.onTapAddButton}
            >
              Add Task
            </button>
          </form>
        </div>
        <div className="container3">
          <h1 className="para">Tags</h1>
          <ul className="list1">
            {tagsList.map(e => (
              <TagsDisplay
                each={e}
                key={e.optionId}
                onTapTagsDisplayButton={this.onTapTagsDisplayButton}
              />
            ))}
          </ul>
          <h1 className="para">Tasks</h1>
          {addTaskList.length === 0 ? (
            <p className="para">No Tasks Added Yet</p>
          ) : (
            <ul>
              {addTaskList.map(e => (
                <TaskDisplay each={e} key={e.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default TaskList
