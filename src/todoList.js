import React, { Component, Fragment } from 'react'
import TodoItem from './todoItem'
import 'antd/dist/antd.css'
import { Input, Button } from 'antd'
import store from './store'
import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DEL_TODO_ITEM
} from './store/actionTypes'

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
        console.log('store change')
        this.setState({ ...store.getState() })
    }
    handleInputChange(e) {
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        }
        store.dispatch(action)
    }
    handleBtnAddClick() {
        let { inputVal } = this.state
        if (!inputVal.length) {
            return
        }
        const action = {
            type: ADD_TODO_ITEM
        }
        store.dispatch(action)
    }
    handleBtnDeleteClick(index) {
        let list = [...this.state.list]
        list.splice(index, 1)
        const action = {
            type: DEL_TODO_ITEM,
            index
        }
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
        return (
            <Fragment>
                <div style={{ marginTop: '10px' }}>
                    <Input
                        value={this.state.inputVal}
                        onChange={this.handleInputChange}
                        placeholder="todo item input"
                        style={{
                            width: '300px',
                            marginRight: '10px',
                            marginLeft: '10px'
                        }}
                    />
                    {/* 当按钮被点击的的时候，this指向的是TodoList这个组件类，但是当事件函数运行的时候，this会指向当前调用的对象，也就是button按钮
                        所以在绑定事件函数的时候，需要使用bind方法将this固定在TodoList组件类上
                    */}
                    <Button onClick={this.handleBtnAddClick} type="primary">
                        add
                    </Button>
                </div>
                <ul>{this.getTodoItems()}</ul>
            </Fragment>
        )
    }
}

export default TodoList
