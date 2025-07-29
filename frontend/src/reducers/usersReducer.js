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
        case 'del':
            return state.filter((item)=> action.id != item.id)
        case 'update':
            return state.map(user=>{
                if(user.id == action.user.id){
                    return {
                        ...action.user,
                        password: user.password
                    }
                }
                return user;
            })
        default:
            return state;
    }
}