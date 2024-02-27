import { types } from "../types/typesLogeado_logear";


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.LOGIN:
            const { token, user } = action.payload
            localStorage.setItem('token', token.token);
            // localStorage.setItem('supermercado', user.supermercadoId === null ? false : true);
            // localStorage.setItem('admin', user.admin);
            localStorage.setItem('islogged', true);
            return {
                ...action.payload,
                islogged: true,
                // admin: user.admin,
                // supermercado: user.supermercadoId !== null
            };

        case types.LOGOUT:
            localStorage.clear()
            return {
                islogged: false,
                islogged: false,
                // admin: false,
                // supermercado: false
            }

        default:
            return state;
    }

};