import "./IsDark.css"
import { useState } from "react"
import { Input } from "../Input/input"

export function IsDark() {
    const [isDark, setIsDark] = useState(true)
    const onClickHandler = () => {
        setIsDark(() => !isDark)
    }

    return (
        <div className={isDark ? 'dark' : 'light'}>
            <button className="btn" onClick={onClickHandler}>изменить тему</button>
            <Input />
        </div>
    )
}