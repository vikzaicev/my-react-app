export const Btn = ({ onClick, children }) => {
    return (
        <button className="btn" onClick={onClick}>{children}</button>
    )
}