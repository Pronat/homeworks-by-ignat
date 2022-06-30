import {UserType} from "../HW8";

type StateType = Array<UserType>

type ActionType = SortUpType | CheckType
type SortUpType = {
    type: 'sort'
    payload: {

    }
}
type CheckType = {
    type: 'check'
    payload: {

    }
}


export const homeWorkReducer = (state: StateType, action: ActionType): StateType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            // return state.sort((a, b) => a.name > b.name ? 1 : -1)
            return state
        }
        case 'check': {
            // need to fix
            return state.sort((a, b) => a.age > b.age ? 1 : -1)
        }
        default:
            throw new Error('Error: type')
    }
}