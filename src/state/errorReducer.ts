export type ErrorType = {
   isError:string
}

const initialState: ErrorType = {
    isError:''
}

export const errorReducer = (state: ErrorType = initialState, action: ActionsType): ErrorType => {
    switch (action.type) {
        case 'SET_ERROR': {
            return {...state, isError:action.payload.error}
        }
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setErrorAC>
export const setErrorAC=(error:string)=>{
    return{
        type:'SET_ERROR',
        payload:{
            error
        }
    }
}