import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'
const defaultState = {
    inputVal: '123',
    list: ['123', '456']
}
// reducer只能接收state，但是不可以修改state
export default (state = defaultState, action) => {
    const newState = Object.assign({}, state)
    const { type } = action
    if (type === CHANGE_INPUT_VALUE) {
        newState.inputVal = action.value
        return newState
    } else if (type === ADD_TODO_ITEM) {
        newState.list.push(newState.inputVal)
        newState.inputVal = ''
        return newState
    } else if (type === DEL_TODO_ITEM) {
        const list = [...newState.list]
        list.splice(action.index, 1)
        newState.list = list
        return newState
    }
    return state
}
