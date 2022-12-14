export type StateType = {
    start: number
    max: number
    count: number
}

const initialState: StateType = {
    start: 0,
    max: 4,
    count: 0
}

export const stateReducer = (state= initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'INC': {
            return {...state, count: state.count + 1}
        }
        case 'RES': {
            return {...state, count: state.start}
        }
        case 'CHANGE_STATE': {
            return {
                ...state,
                start: action.payload.start,
                max: action.payload.max,
                count: action.payload.start
            }
        }
        default:
            return state
    }
}

type ActionsType =
    ReturnType<typeof incHandlerAC>
    | ReturnType<typeof resetHandlerAC>
    | ReturnType<typeof changeStateAC>

export const incHandlerAC = () => {
    return {
        type: 'INC'
    } as const
}
export const resetHandlerAC = () => {
    return {
        type: 'RES'
    } as const
}
export const changeStateAC = (start:number,max:number) => {
    return {
        type: 'CHANGE_STATE',
        payload:{
            start,
            max
        }
    } as const
}