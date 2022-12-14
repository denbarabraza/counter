export type ToggleType = {
    isToggle: boolean
}

const initialState: ToggleType = {
    isToggle: false
}

export const toggleReducer = (state: ToggleType = initialState, action: ActionsType): ToggleType => {
    switch (action.type) {
        case 'SET_TOGGLE': {
            return {
                ...state,
                isToggle: action.payload.toggle
            }
        }
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof seToggleValueAC>

export const seToggleValueAC=(toggle:boolean)=>{
    return{
        type:'SET_TOGGLE',
        payload:{
            toggle
        }
    }
}