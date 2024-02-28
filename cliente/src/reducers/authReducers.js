// authReducer.js
import { types } from "../types/typesLogeado_logear";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.LOGIN:
            const { token, admin } = action.payload;
            localStorage.setItem('token', token);
            localStorage.setItem('islogged', true);
            localStorage.setItem('admin', admin);
            return {
                ...state,
                islogged: true,
                admin: admin,
            };

        case types.LOGOUT:
            localStorage.clear();
            return {
                islogged: false,
                admin: false,
            }

        default:
            return state;
    }
};
