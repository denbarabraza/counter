export type ErrorInType = {
    isErrorIn: boolean
}

const initialState: ErrorInType = {
    isErrorIn: false
}

export const errorInReducer = (state: ErrorInType = initialState, action: ActionsType): ErrorInType => {
    switch (action.type) {
        case 'SET_ERROR_IN': {
            return {
                ...state,
                isErrorIn: action.payload.errorIn
            }
        }
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setErrorInAC>

export const setErrorInAC=(errorIn:boolean)=>{
    return{
        type:'SET_ERROR_IN',
        payload:{
            errorIn
        }
    } as const
}