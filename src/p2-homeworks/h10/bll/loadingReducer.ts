const initState = {
    loading: true
}
type  ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: ActionType): any => { // fix any
    switch (action.type) {
        case 'TRUE-LOADING': {
            return state
        }
        default: return state
    }
}

export const loadingAC = (): any => {} // fix any