import "./Wrapper.css"

export const Wrapper = (props) => {
    return (
        <div className="wrapper">{props.children}</div>
    )
}