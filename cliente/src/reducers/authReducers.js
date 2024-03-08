// authReducer.js
import { types } from "../types/typesLogeado_logear";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.LOGIN:
            const { token, admin, supermercadoId, fotoUser} = action.payload;
            localStorage.setItem('token', token);
            localStorage.setItem('islogged', true);
            localStorage.setItem('admin', admin);
            localStorage.setItem('supermercadoId', supermercadoId);
            localStorage.setItem('fotoUser', fotoUser); 
            return {
                ...state,
                islogged: true,
                admin: admin,
                fotoUser,
                supermercadoId: supermercadoId,
            };

        case types.LOGOUT:
            localStorage.clear();
            return {
                islogged: false,
                admin: false,
                supermercadoId: false,
            }

        default:
            return state;
    }
};
