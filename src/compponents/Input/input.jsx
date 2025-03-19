import { User } from "../../Class/Class"
import "./Input.css"
import { useState } from 'react'



const user = new User("Иван")






function orderWeight(strng) {

    let arr = strng.trim().split(' ')
    let res = []
    arr.map((numb) => {
        const elem = numb.split('').reduce((a, b) => Number(a) + Number(b), 0)
        if (elem > 0) {
            res.push({ elem, numb })
        }
    })
    console.log(res.sort((a, b) => a.elem - b.elem));


    const newRes = res.sort((a, b) => a.elem - b.elem).map((ob) => {
        return ob.numb
    })
    console.log(newRes.join(' '));

}
//orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")









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