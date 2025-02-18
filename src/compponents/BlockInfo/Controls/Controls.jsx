import "./Controls.css"

export function Controls({ direction, disabled, onClick }) {
    let cls = 'image'
    if (direction === "left") cls += " left";
    if (direction === "right") cls += " right";
    if (disabled) cls += " disabled";

    // const onClickHandler = (event) => {
    //     console.log("lo", event.target);
    // }

    return (
        <div className={cls} onClick={onClick}></div>
    )
}