import "./Input.css"
import { useState } from 'react'

export const Input = () => {
    const [data, setData] = useState({ name: "", password: "" })

    const onChangeName = (e) => {
        setData((curentData) => ({
            ...curentData,
            name: e.target.value

        }))
    }
    const onChangePassword = (e) => {
        setData((curentData) => ({
            ...curentData,
            password: e.target.value

        }))
    }

    return (
        <div className="form">
            <input type="text" className="input" onChange={onChangeName} />
            <input type="password" className="input" onChange={onChangePassword} />
            <p>Ваше имя {data.name}, пароль {data.password}</p>
        </div>
    )
}