import { useEffect, useState, useContext } from "react"
import { Navigate } from "react-router-dom"
import { FormRegisterTienda } from "../Formulario/formTienda.jsx"
import { AuthContext } from "../context/authProvider.jsx"
import { CustomFetch } from "../api/customFeth.js"
import { Footer } from "../Footer/footer.jsx"

export const RegisterTienda = () => {
    const { authState } = useContext(AuthContext)
    if (!authState.islogged) return (<Navigate to={"/"} />)

    const [province, setProvince] = useState([])

    useEffect(() => {
        (
            async () => {
                const data = await CustomFetch('http://localhost:3000/provincia', 'GET')
                setProvince(data)
            }
        )()
    }, [])
    return (
        <>
            <FormRegisterTienda
                province={province}
            />
            <Footer/>
        </>
    )

}