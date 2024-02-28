// AuthProvider.jsx
import React, { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducers.js";
import { types } from "../types/typesLogeado_logear";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        islogged: localStorage.getItem('islogged') === 'true',
        admin: localStorage.getItem('admin') === 'true',
    });
    
    const login = async (payload) => {
        dispatch({
            type: types.LOGIN,
            payload: {
                ...payload,
                admin: admin,
            }
        });

        localStorage.setItem('token', payload.token);
        localStorage.setItem('islogged', 'true');
        localStorage.setItem('admin', payload.admin);
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
