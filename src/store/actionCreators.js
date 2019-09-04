import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'

export const inputChangeAction = value => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const addItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const delItemAction = index => ({
    type: DEL_TODO_ITEM,
    index
})
