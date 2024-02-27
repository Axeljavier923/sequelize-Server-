import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducers.js";
import { types } from "../types/typesLogeado_logear";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {
        islogged: (localStorage.getItem('islogged') == 'true') ? true : false,
        // admin: (localStorage.getItem('admin') == 'true') ? true : false,
        // supermercado: (localStorage.getItem('supermercado') == 'true') ? true : false,
    });


    const login = async (payload) => {
        dispatch({
            type: types.LOGIN,
            payload
        })
    }

    const logout = () => {
        dispatch({
            type: types.LOGOUT
        })
    }

    return (
        <AuthContext.Provider value={{
            authState, login, logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
