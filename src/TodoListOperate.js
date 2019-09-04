import React from 'react'
import { Input, Button } from 'antd'

class TodoListOperate extends React.Component {
    render() {
        return (
            <div style={{ marginTop: '10px' }}>
                <Input
                    value={this.props.inputVal}
                    onChange={this.props.handleInputChange}
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
                <Button onClick={this.props.handleBtnAddClick} type="primary">
                    add
                </Button>
            </div>
        )
    }
}

export default TodoListOperate
