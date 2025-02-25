import { NavLink } from "react-router";
import "./Nav.css"

export function Nav() {
    return (
        <div className="nav">
            <ul>
                <NavLink className="NavLink" to="/gener" end>Слайдер</NavLink>
                <NavLink className="NavLink" to="/skan" end>Тема</NavLink>

            </ul>
        </div>
    )
}
