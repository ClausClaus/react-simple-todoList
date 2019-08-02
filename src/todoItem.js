import React from 'react'

class TodoItem extends React.Component {
    // 子组件要和父组件实现通信，需要调用父组件传递过来的方法
    handleDelete() {
        this.props.handleBtnDeleteClick(this.props.index)

    }
    render() {
        return (
            <li onClick={this.handleDelete.bind(this)}>
                {this.props.content}
            </li>
        )
    }
}
export default TodoItem
