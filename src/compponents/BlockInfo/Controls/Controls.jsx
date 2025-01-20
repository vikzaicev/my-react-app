import "./Controls.css"




export function Controls({ direction, disabled }) {
    let cls = 'image'
    if (direction === "left") cls += " left";
    if (direction === "right") cls += " right";
    if (disabled) cls += " disabled";
    console.log(cls);

    return (

        <div className={cls}></div>

    )
}