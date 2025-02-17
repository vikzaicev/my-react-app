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
            <input type="text" className="input" onChange={onChangeName} placeholder="Имя" />
            <input type="password" className="input" onChange={onChangePassword} placeholder="Параль" />
            <p>Ваше имя <span className="span">{data.name}</span>, пароль <span className="span">{data.password}</span></p>
        </div>
    )
}