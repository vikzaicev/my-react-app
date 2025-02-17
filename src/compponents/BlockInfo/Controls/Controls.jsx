import "./Controls.css"




export function Controls({ direction, disabled }) {
    let cls = 'image'
    if (direction === "left") cls += " left";
    if (direction === "right") cls += " right";
    if (disabled) cls += " disabled";

    const onClickHandler = (event) => {
        console.log("lo", event.target);

    }

    return (

        <div className={cls} onClick={onClickHandler}></div>

    )
}