import {UserType} from "../HW8";

type StateType = Array<UserType>

type ActionType = SortType | CheckType
type SortType = {
    type: 'sort'
    payload: string
}
type CheckType = {
    type: 'check'
    payload: string
}


export const homeWorkReducer = (state: StateType, action: ActionType): StateType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const newState = [...state]
            newState.sort((a, b) => a.name > b.name ? 1 : -1)
            return newState
        }
        case 'check': {
            // need to fix
            const newState = [...state]
            newState.sort((a, b) => a.age > b.age ? 1 : -1)
            return newState
        }
        default:
            throw new Error('Error: type')
    }
}