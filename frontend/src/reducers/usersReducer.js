export const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            /*
            const id = state.reduce((accum) => accum + 1, 1)
            const user = action.user
            user.id = id;
            */
            return [
                ...state,
                {
                    ...action.user,
                    id: state.reduce((accum)=>accum +1,1)
                }
            ]
        default:
            return state;
    }
}