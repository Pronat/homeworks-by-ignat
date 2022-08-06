const initState = {
  isLoading: false
}
type  ActionType = {
    type: 'LOADING-TRUE-FALSE'
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: ActionType): any => { // fix any
    switch (action.type) {
        case 'LOADING-TRUE-FALSE': {
            return  {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): ActionType => {
    return {  type: 'LOADING-TRUE-FALSE', isLoading: isLoading}
} // fix any