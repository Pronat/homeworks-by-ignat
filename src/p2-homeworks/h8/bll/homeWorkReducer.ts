import {UserType} from "../HW8";

type StateType = Array<UserType>

type ActionType = SortType | CheckType
type SortType = {
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
            return state
        }
        case 'check': {
            // need to fix
            return state
        }
        default: return state
    }
}