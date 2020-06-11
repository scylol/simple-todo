import React from "react"

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedOff: false,
    }
  }

  checkOff = () => {
    this.setState({ checkedOff: !this.state.checkedOff })
  }

  render() {
    const checkedOffStyle = {
      textDecoration: "line-through",
      cursor: "pointer",
      display: "inline",
      paddingRight: "32px",
    }
    return (
      <div style={{ padding: "16px" }}>
        <li
          style={
            this.state.checkedOff
              ? checkedOffStyle
              : { cursor: "pointer", paddingRight: "32px", display: "inline" }
          }
          onClick={this.checkOff}
        >
          {this.props.item}
        </li>
        <button onClick={this.props.deleteItem}>X</button>
      </div>
    )
  }
}

export default TodoItem
