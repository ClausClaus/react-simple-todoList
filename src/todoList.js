import React, { Component, Fragment } from 'react'
import TodoItem from './todoItem'

/**
 * this.setState是异步执行的，代码块中一起使用时会出现先setState执行的情况，this.setState的第二个参数是一个回调函数，在数据更新之后被调用
 */

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            inputVal: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnAddClick = this.handleBtnAddClick.bind(this)
        this.handleBtnDeleteClick = this.handleBtnDeleteClick.bind(this)
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
    getTodoItems() {
        return this.state.list.map((item, index) => {
            return (
                // 父组件通过属性的方式向子组件传递参数，子组件通过参数接收父组件传递的参数
                <TodoItem
                    handleBtnDeleteClick={this.handleBtnDeleteClick}
                    key={index}
                    content={item}
                    index={index}
                />
            )
        })
    }
    // 组件即将被挂载到页面的时候自动执行
    componentWillMount() {
        console.log('componentWillMount')
    }
    // 组件被更新之前，他会自动被执行
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
    }
    // 组件内容更新的时候都会执行
    render() {
        /**
         * react构建出的html代码需要在最外层包裹一个父元素，一般是一个<div></div>
         * 有时候使用flex布局的话对html代码结构有要求，则可以使用react提供的Fragment标签进行包裹
         * 在渲染到页面时会自动去掉，这样就不会影响到布局了
         */
        console.log('render')
        return (
            <Fragment>
                <div>
                    <input
                        type="text"
                        value={this.state.inputVal}
                        onChange={this.handleInputChange}
                    />
                    {/* 当按钮被点击的的时候，this指向的是TodoList这个组件类，但是当事件函数运行的时候，this会指向当前调用的对象，也就是button按钮
                        所以在绑定事件函数的时候，需要使用bind方法将this固定在TodoList组件类上
                    */}
                    <button className="btn" onClick={this.handleBtnAddClick}>
                        add
                    </button>
                </div>
                <ul>{this.getTodoItems()}</ul>
            </Fragment>
        )
    }
    // 组件被挂载到页面之后被执行
    componentDidMount() {
        console.log('componentDidMount')
    }
}

export default TodoList
