// AuthProvider.jsx
import React, { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducers.js";
import { types } from "../types/typesLogeado_logear";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        islogged: localStorage.getItem('islogged') === 'true',
        admin: localStorage.getItem('admin') === 'true',
        supermercadoId: localStorage.getItem('supermercadoId') === 'true',
        token: localStorage.getItem('token'),
        fotoUser: localStorage.getItem('fotoUser'),
    });
    
    const login = async (payload) => {
        dispatch({
            type: types.LOGIN,
            payload: {
                ...payload,
                token: payload.token, 
            }
        });

        localStorage.setItem('token', payload.token);
        localStorage.setItem('islogged', 'true');
        localStorage.setItem('admin', payload.admin);
        localStorage.setItem('supermercadoId', payload.supermercadoId);
        localStorage.setItem('fotoUser', payload.fotoUser);

    };

    const logout = () => {
        dispatch({
            type: types.LOGOUT,
        });

        localStorage.clear();
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
