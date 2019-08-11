import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    // 子组件要和父组件实现通信，需要调用父组件传递过来的方法
    handleDelete() {
        const { handleBtnDeleteClick, index } = this.props
        handleBtnDeleteClick(index)
    }
    render() {
        const { content } = this.props
        return (
            <li onClick={this.handleDelete}>
                {content}
            </li>
        )
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    handleDelete: PropTypes.func
}

TodoItem.defaultProps = {
    DefaultText: 'DefaultText'
}

export default TodoItem
