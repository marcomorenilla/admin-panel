export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case 'login':
            console.log(action.user)
            return {
                isAuth: true,
                user: action.user
            };

        case 'logout':

            return {
                isAuth: false,
            };

        default:
            return state;
    }
}