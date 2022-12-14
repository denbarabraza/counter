export type ValueType = {
    start: number
    max: number
}

const initialState: ValueType = {
    start: 0,
    max: 5
}

export const valueReducer = (state: ValueType = initialState, action: ActionsType): ValueType => {
    switch (action.type) {
        case "CHANGE_MAX_VALUE": {
            return {...state, max: action.payload.newMaxValue}
        }
        case "CHANGE_START_VALUE": {
            return {...state, start: action.payload.newStartValue}
        }
        default:
            return state
    }
}

type ActionsType =
    ReturnType<typeof onChangeMaxValueAC>
    | ReturnType<typeof onChangeStartValueAC>

export const onChangeMaxValueAC = (newMaxValue: number) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        payload: {
            newMaxValue
        }
    } as const
}
export const onChangeStartValueAC = (newStartValue: number) => {
    return {
        type: 'CHANGE_START_VALUE',
        payload: {
            newStartValue
        }
    } as const
}