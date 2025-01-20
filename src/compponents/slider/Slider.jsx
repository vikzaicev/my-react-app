import foto1 from "../../../src/assets/img/image1Big.png"
import foto2 from "../../../src/assets/img/image2Big.png"
import foto3 from "../../../src/assets/img/image3Big.png"
import foto4 from "../../../src/assets/img/image4Big.png"
import foto5 from "../../../src/assets/img/image5Big.png"
import foto6 from "../../../src/assets/img/image6Big.png"

import "./Slider.css"




export const Slider = () => {
    const data = [foto1, foto2, foto3, foto4, foto5, foto6]

    return (
        <div className="slider">
            {data.map((slide, index) => (
                <div className="slide" key={index}>
                    <img src={slide} alt="foto" className="" />
                </div>

            ))}
        </div>
    )
}