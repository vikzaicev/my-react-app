import foto1 from "../../../src/assets/img/image1Big.png"
import foto2 from "../../../src/assets/img/image2Big.png"
import foto3 from "../../../src/assets/img/image3Big.png"
import foto4 from "../../../src/assets/img/image4Big.png"
import foto5 from "../../../src/assets/img/image5Big.png"
import foto6 from "../../../src/assets/img/image6Big.png"
import { useState } from "react"
import "./Slider.css"
import { Controls } from "../BlockInfo/Controls/Controls"

export const Slider = () => {
    const data = [foto1, foto2, foto3, foto4, foto5, foto6]
    const [activId, setActivId] = useState(0)

    const activIdHandler = (e) => {
        setActivId(activId => activId = Number(e.target.id))
    }

    const prev = () => {
        setActivId(activId => {
            if (activId > 0) {
                return activId - 1
            }
            if (activId == 0) {
                return activId = data.length - 1
            }
            return activId
        })
    }
    const next = () => {
        setActivId(activId => {
            if (activId < data.length - 1) {
                return activId + 1
            }
            if (activId == data.length - 1) {
                return activId = 0
            }
            return activId
        })
    }

    return (
        <>
            <div className="vector">
                <Controls
                    direction="left"
                    onClick={prev}
                // disabled={activId == 0} 
                />
                <Controls
                    direction="right"
                    onClick={next}
                // disabled={activId == data.length - 1}
                />
            </div>
            <div className="slider">
                {data.map((slide, index) => (
                    <div className={`slide ${index == activId ? 'activ' : ''}`} key={index} id={index} onClick={activIdHandler}>
                        <img src={slide} alt="foto" className="" />
                    </div>

                ))}
            </div>
        </>
    )
}