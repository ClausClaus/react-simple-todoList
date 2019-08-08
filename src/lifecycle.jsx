import React from 'react'

class TestComponentWillReceiveProps extends React.Component {
    // 这个生命周期函数是在父组件传递过来的props属性发生变化的时候才触发更新的
    /**
     * 触发条件：
     *  一个组件要从父组件接受参数
     *  如果这个组件第一次不存在于父组件中，那么不会执行
     *  如果这个组件在父组件加载时已经存在于父组件中，才会执行
     */
    componentWillReceiveProps() {
        console.log('------------------')
        console.log('父组件传过来的props :', this.props.text)
        console.log('componentWillReceiveProps')
    }
    render() {
        return <strong style={{ display: 'block' }}>{this.props.text}</strong>
    }
    componentWillUnmount() {
        console.log('child componentWillUnMount')
    }
}

class Lifecycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: 'react生命周期'
        }
        this.inputChange = this.inputChange.bind(this)
    }
    inputChange(e) {
        this.setState({
            inputVal: e.target.value
        })
    }
    // 组件即将被挂载到页面上时执行
    componentWillMount() {
        console.log('componentWillMount')
    }
    // 组件即将被更新的时候执行，返回一个布尔值，返回false的话组件将不会触发更新
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }
    // 组件即将被更新时执行，基于shouldComponentUpdate的返回结果来执行
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    // 组件内容发生变化时都会的时候都会执行
    render() {
        console.log('render')
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={this.state.inputVal}
                        onChange={this.inputChange}
                    />
                </div>
                <TestComponentWillReceiveProps text={this.state.inputVal} />
                <img src={require('./react-lifecycle.png')} alt="" />
            </div>
        )
    }
    // 组件更新完毕时执行
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    // 组件被挂载到页面上之后执行
    componentDidMount() {
        console.log('componentDidMount')
    }
    // 组件被从页面上删除的时候执行，可以用来解除事件绑定相关的操作
    componentWillUnmount() {
        console.log('componentWillUnMount')
    }
}
export default Lifecycle
