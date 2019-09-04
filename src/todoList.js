import React, { Component, Fragment } from 'react'
import TodoItem from './todoItem'
import 'antd/dist/antd.css'
import store from './store'
import TodoListOperate from './TodoListOperate'
import {
    inputChangeAction,
    addItemAction,
    delItemAction
} from './store/actionCreators'
/**
 * this.setState是异步执行的，代码块中一起使用时会出现先setState执行的情况，this.setState的第二个参数是一个回调函数，在数据更新之后被调用
 */

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnAddClick = this.handleBtnAddClick.bind(this)
        this.handleBtnDeleteClick = this.handleBtnDeleteClick.bind(this)
        // 订阅store中数据发生变化时执行的函数
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange() {
        this.setState({ ...store.getState() })
    }
    handleInputChange(e) {
        const action = inputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleBtnAddClick() {
        let { inputVal } = this.state
        if (!inputVal.length) {
            return
        }
        const action = addItemAction()
        store.dispatch(action)
    }
    handleBtnDeleteClick(index) {
        let list = [...this.state.list]
        list.splice(index, 1)
        const action = delItemAction(index)
        store.dispatch(action)
    }
    getTodoItems() {
        return this.state.list.map((item, index) => {
            //  父组件通过属性的方式向子组件传递参数，子组件通过参数接收父组件传递的参数
            return (
                <TodoItem
                    handleBtnDeleteClick={this.handleBtnDeleteClick}
                    key={Math.random(index, 100)}
                    content={item}
                    index={index}
                />
            )
        })
    }
    // 组件内容更新的时候都会执行
    render() {
        /**
         * react构建出的html代码需要在最外层包裹一个父元素，一般是一个<div></div>
         * 有时候使用flex布局的话对html代码结构有要求，则可以使用react提供的Fragment标签进行包裹
         * 在渲染到页面时会自动去掉，这样就不会影响到布局了
         */
        const props = {
            inputVal: this.state.inputVal,
            handleBtnAddClick: this.handleBtnAddClick,
            handleInputChange: this.handleInputChange
        }
        return (
            <Fragment>
                <TodoListOperate {...props} />
                <ul>{this.getTodoItems()}</ul>
            </Fragment>
        )
    }
}

export default TodoList
