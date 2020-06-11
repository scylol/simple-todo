import React from "react"
import TodoItem from './TodoItem';

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      todoItems: [],
    }
  }

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value })
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({ inputValue: "" })
    this.setState({
      todoItems: [...this.state.todoItems, this.state.inputValue],
    })
  }

  deleteItem = (index) => {
    let newItemList = this.state.todoItems;
    newItemList.splice(index, 1);
    this.setState({todoItems:newItemList})
}

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <form onSubmit={this.formSubmit}>
          <input
            value={this.state.inputValue}
            type="text"
            onChange={this.handleInputChange}
          />
          <input value="Submit" type="submit" />
        </form>

        {this.state.todoItems.length > 0
          ? this.state.todoItems.map((item, index) => {
              return <TodoItem item={item} index={index} deleteItem={this.deleteItem}></TodoItem>
            })
          : ""}
      </div>
    )
  }
}

export default Navigation
