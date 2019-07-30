import React from 'react'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            inputVal: ''
        }
    }
    handleInputChange(e) {
        this.setState({
            inputVal: e.target.value
        })
    }
    handleBtnAddClick() {
        let { inputVal } = this.state
        if (!inputVal.length) {
            return
        }
        this.setState({
            list: [...this.state.list, inputVal],
            inputVal: ''
        })
    }
    handleBtnDeleteClick(index) {
        let list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list
        })
    }
    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={this.state.inputVal}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    {/* 当按钮被点击的的时候，this指向的是TodoList这个组件类，但是当事件函数运行的时候，this会指向当前调用的对象，也就是button按钮
                        所以在绑定事件函数的时候，需要使用bind方法将this固定在TodoList组件类上
                    */}
                    <button onClick={this.handleBtnAddClick.bind(this)}>
                        add
                    </button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            <li
                                onClick={this.handleBtnDeleteClick.bind(
                                    this,
                                    index
                                )}
                                key={index}
                            >
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList
