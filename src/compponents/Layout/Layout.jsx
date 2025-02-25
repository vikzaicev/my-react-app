import { BrowserRouter, Routes, Route } from "react-router";
import { BlockInfo } from "../BlockInfo/BlockInfo";
import { IsDark } from "../IsDark/IsDark";
import { Wrapper } from '../Wrapper/Wrapper'
import { Nav } from '../Nav/Nav'
import { Slider } from "../slider/Slider";



export const Layout = () => {
    return (
        <div className="layout">
            <Nav />
            <Routes>
                <Route path="" element={<BlockInfo />} />
                <Route path="/gener" element={<><BlockInfo /> <Slider /></>} />
                <Route path="/skan" element={<IsDark />} />

            </Routes>

        </div>
    )
}