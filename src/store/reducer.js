const defaultState = {
    inputVal: '123',
    list: ['123', '456']
}
// reducer只能接收state，但是不可以修改state
export default (state = defaultState, action) => {
    const newState = Object.assign({}, state)
    const { type } = action
    if (type === 'change_input_value') {
        newState.inputVal = action.value
        return newState
    } else if (type === 'add_todo_item') {
        newState.list.push(newState.inputVal)
        newState.inputVal = ''
        return newState
    } else if (type === 'del_todo_item') {
        const list = [...newState.list]
        list.splice(action.index, 1)
        newState.list = list
        return newState
    }
    return state
}
