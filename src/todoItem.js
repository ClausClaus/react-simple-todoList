import React from 'react'

class TodoItem extends React.Component {
    render() {
        return <li>{this.props.content}</li>
    }
}
export default TodoItem
